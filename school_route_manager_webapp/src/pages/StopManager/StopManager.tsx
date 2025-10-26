import { useMemo, useState, useEffect } from "react";
import {
    Paper,
    Group,
    Title,
    Text,
    Button,
    Input,
    ScrollArea,
    Stack,
    ActionIcon,
    Card,
    Modal,
    TextInput,
    Grid,
    Box,
    Loader,
} from "@mantine/core";
import {
    MagnifyingGlass,
    Plus,
    MapPin,
    Pencil,
    Trash,
} from "phosphor-react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix para os ícones padrão do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

import type { Stop } from "../../types/stop.types";
import { initialStops } from "../../mock/stop.mock";

// Componente para centralizar o mapa quando uma parada é selecionada
function MapViewController({ center }: { center: [number, number] | null }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, 15);
        }
    }, [center, map]);
    return null;
}

// Componente para capturar cliques no mapa
function MapClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
    useMapEvents({
        click: (e) => {
            onMapClick(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
}

const StopManager = () => {
    const [stops, setStops] = useState<Stop[]>(initialStops);
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(initialStops[1]?.id ?? null);

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [current, setCurrent] = useState<Stop | null>(null);

    const [form, setForm] = useState<Omit<Stop, "id">>({
        name: "",
        address: "",
        lat: -23.5505,
        lng: -46.6333,
    });

    const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
    const [searchingAddress, setSearchingAddress] = useState(false);

    const filtered = useMemo(
        () =>
            stops.filter(
                (s) =>
                    s.name.toLowerCase().includes(search.toLowerCase()) ||
                    s.address.toLowerCase().includes(search.toLowerCase())
            ),
        [stops, search]
    );

    function openAdd() {
        setForm({ name: "", address: "", lat: -23.5505, lng: -46.6333 });
        setAddOpen(true);
    }

    function openEdit(s: Stop) {
        setCurrent(s);
        setForm({ name: s.name, address: s.address, lat: s.lat, lng: s.lng });
        setEditOpen(true);
    }

    function openDelete(s: Stop) {
        setCurrent(s);
        setDeleteOpen(true);
    }

    function saveAdd() {
        const id = String(Date.now());
        const newStop = { id, ...form };
        setStops((prev) => [...prev, newStop]);
        setSelectedId(id);
        setMapCenter([form.lat, form.lng]);
        setAddOpen(false);
    }

    function saveEdit() {
        if (!current) return;
        setStops((prev) => prev.map((s) => (s.id === current.id ? { ...s, ...form } : s)));
        setMapCenter([form.lat, form.lng]);
        setEditOpen(false);
        setCurrent(null);
    }

    function confirmDelete() {
        if (!current) return;
        setStops((prev) => prev.filter((s) => s.id !== current.id));
        if (selectedId === current.id) setSelectedId(null);
        setDeleteOpen(false);
        setCurrent(null);
    }

    function handleMapClick(lat: number, lng: number) {
        if (addOpen || editOpen) {
            setForm((f) => ({ ...f, lat, lng }));
        }
    }

    function handleStopSelect(stopId: string) {
        setSelectedId(stopId);
        const stop = stops.find((s) => s.id === stopId);
        if (stop) {
            setMapCenter([stop.lat, stop.lng]);
        }
    }

    async function searchAddressCoordinates() {
        if (!form.address.trim()) {
            alert("Por favor, insira um endereço para buscar.");
            return;
        }

        setSearchingAddress(true);
        try {
            // Usar a API Nominatim do OpenStreetMap para geocodificação
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    form.address
                )}&limit=1`
            );
            const data = await response.json();

            if (data && data.length > 0) {
                const { lat, lon } = data[0];
                setForm((f) => ({ ...f, lat: parseFloat(lat), lng: parseFloat(lon) }));
                setMapCenter([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert("Endereço não encontrado. Tente ser mais específico.");
            }
        } catch (error) {
            console.error("Erro ao buscar coordenadas:", error);
            alert("Erro ao buscar o endereço. Tente novamente.");
        } finally {
            setSearchingAddress(false);
        }
    }

    return (
        <Paper shadow="md" radius={18} p={0} mih={560} style={{ overflow: "hidden" }}>
            <Group align="stretch" gap={0} wrap="nowrap">
                {/* Sidebar - Lista de Paradas */}
                <Stack w={360} p={16} style={{ borderRight: "1px solid #e9ecef" }} gap={12}>
                    <Stack gap={4}>
                        <Title order={2} size={24} fw={800}>
                            Gerenciamento de Paradas
                        </Title>
                        <Text c="dimmed" size="sm">
                            Adicione, edite e visualize as paradas.
                        </Text>
                    </Stack>

                    <Group>
                        <Input
                            leftSection={<MagnifyingGlass size={16} />}
                            placeholder="Buscar por nome ou endereço..."
                            value={search}
                            onChange={(e) => setSearch(e.currentTarget.value)}
                            radius={8}
                            style={{ flex: 1 }}
                        />
                        <Button leftSection={<Plus size={16} />} onClick={openAdd}>
                            Nova
                        </Button>
                    </Group>

                    <ScrollArea.Autosize mah={520} type="auto">
                        <Stack gap={8} pr={4}>
                            {filtered.map((s) => (
                                <Group
                                    key={s.id}
                                    p={12}
                                    gap={12}
                                    justify="space-between"
                                    style={{
                                        borderRadius: 12,
                                        border: "1px solid #edf2f7",
                                        background: selectedId === s.id ? "#eef4ff" : "#fff",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleStopSelect(s.id)}
                                >
                                    <Group gap={12} align="flex-start" style={{ flex: 1 }}>
                                        <Box mt={2}>
                                            <MapPin size={28} color="#2563eb" weight="duotone" />
                                        </Box>
                                        <Stack gap={2} style={{ flex: 1 }}>
                                            <Text fw={600}>{s.name}</Text>
                                            <Text size="sm" c="dimmed">
                                                {s.address}
                                            </Text>
                                        </Stack>
                                    </Group>
                                    <Group gap={6}>
                                        <ActionIcon variant="subtle" color="blue" onClick={(e) => { e.stopPropagation(); openEdit(s); }}>
                                            <Pencil size={18} />
                                        </ActionIcon>
                                        <ActionIcon variant="subtle" color="red" onClick={(e) => { e.stopPropagation(); openDelete(s); }}>
                                            <Trash size={18} />
                                        </ActionIcon>
                                    </Group>
                                </Group>
                            ))}
                            {filtered.length === 0 && (
                                <Text c="dimmed" ta="center" py={24}>
                                    Nenhuma parada encontrada
                                </Text>
                            )}
                        </Stack>
                    </ScrollArea.Autosize>
                </Stack>

                {/* Mapa Interativo com OpenStreetMap */}
                <Box style={{ position: "relative", flex: 1, minHeight: 560, zIndex: 1 }}>
                    <MapContainer
                        center={[-23.5505, -46.6333]}
                        zoom={13}
                        style={{ height: "100%", width: "100%", zIndex: 1 }}
                        zoomControl={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {/* Componente para centralizar o mapa */}
                        <MapViewController center={mapCenter} />
                        
                        {/* Componente para capturar cliques no mapa */}
                        <MapClickHandler onMapClick={handleMapClick} />
                        
                        {/* Marcadores para todas as paradas */}
                        {stops.map((stop) => (
                            <Marker
                                key={stop.id}
                                position={[stop.lat, stop.lng]}
                                eventHandlers={{
                                    click: () => handleStopSelect(stop.id),
                                }}
                            >
                                <Popup>
                                    <div>
                                        <Text fw={700} size="sm">{stop.name}</Text>
                                        <Text size="xs" c="dimmed">{stop.address}</Text>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                        
                        {/* Marcador temporário para nova parada/edição */}
                        {(addOpen || editOpen) && form.lat !== 0 && form.lng !== 0 && (
                            <Marker
                                position={[form.lat, form.lng]}
                                opacity={0.6}
                            >
                                <Popup>
                                    <Text size="xs" c="dimmed">Nova localização</Text>
                                </Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </Box>
            </Group>

            {/* Modal Adicionar */}
            <Modal
                opened={addOpen}
                onClose={() => setAddOpen(false)}
                title="Adicionar Nova Parada"
                centered
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        saveAdd();
                    }}
                >
                    <Stack gap={12}>
                        <Card withBorder p={12} radius="md" bg="var(--mantine-color-blue-0)">
                            <Group gap={8}>
                                <Text size="sm" fw={600} c="blue.8">
                                    Dica
                                </Text>
                                <Text size="sm" c="blue.8">
                                    Clique no mapa para definir a localização exata da parada.
                                </Text>
                            </Group>
                        </Card>
                        <TextInput
                            label="Nome da Parada"
                            placeholder="Ex: Parada da Praça"
                            value={form.name}
                            onChange={(e) => {
                                const nextValue = e.currentTarget.value;
                                setForm((f) => ({ ...f, name: nextValue }));
                            }}
                            required
                        />
                        <Stack gap={8}>
                            <TextInput
                                label="Endereço"
                                placeholder="Ex: Rua das Flores, 100, São Paulo"
                                value={form.address}
                                onChange={(e) => {
                                    const nextValue = e.currentTarget.value;
                                    setForm((f) => ({ ...f, address: nextValue }));
                                }}
                                required
                                rightSection={
                                    <ActionIcon
                                        variant="subtle"
                                        color="blue"
                                        onClick={searchAddressCoordinates}
                                        disabled={searchingAddress}
                                        aria-label="Buscar coordenadas"
                                    >
                                        {searchingAddress ? <Loader size="xs" /> : <MagnifyingGlass size={18} />}
                                    </ActionIcon>
                                }
                            />
                            <Text size="xs" c="dimmed">
                                Clique na lupa para buscar as coordenadas automaticamente
                            </Text>
                        </Stack>
                        <Grid gutter={12}>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="Latitude"
                                    value={String(form.lat)}
                                    readOnly
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="Longitude"
                                    value={String(form.lng)}
                                    readOnly
                                />
                            </Grid.Col>
                        </Grid>
                        <Group justify="end" mt={8}>
                            <Button variant="default" onClick={() => setAddOpen(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit">Salvar Parada</Button>
                        </Group>
                    </Stack>
                </form>
            </Modal>

            {/* Modal Editar */}
            <Modal opened={editOpen} onClose={() => setEditOpen(false)} title="Editar Parada" centered>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        saveEdit();
                    }}
                >
                    <Stack gap={12}>
                        <TextInput
                            label="Nome da Parada"
                            value={form.name}
                            onChange={(e) => {
                                const nextValue = e.currentTarget.value;
                                setForm((f) => ({ ...f, name: nextValue }));
                            }}
                            required
                        />
                        <Stack gap={8}>
                            <TextInput
                                label="Endereço"
                                placeholder="Ex: Rua das Flores, 100, São Paulo"
                                value={form.address}
                                onChange={(e) => {
                                    const nextValue = e.currentTarget.value;
                                    setForm((f) => ({ ...f, address: nextValue }));
                                }}
                                required
                                rightSection={
                                    <ActionIcon
                                        variant="subtle"
                                        color="blue"
                                        onClick={searchAddressCoordinates}
                                        disabled={searchingAddress}
                                        aria-label="Buscar coordenadas"
                                    >
                                        {searchingAddress ? <Loader size="xs" /> : <MagnifyingGlass size={18} />}
                                    </ActionIcon>
                                }
                            />
                            <Text size="xs" c="dimmed">
                                Clique na lupa para buscar as coordenadas automaticamente
                            </Text>
                        </Stack>
                        <Grid gutter={12}>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="Latitude"
                                    value={String(form.lat)}
                                    readOnly
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="Longitude"
                                    value={String(form.lng)}
                                    readOnly
                                />
                            </Grid.Col>
                        </Grid>
                        <Group justify="end" mt={8}>
                            <Button color="red" variant="light" onClick={() => { if (current) setDeleteOpen(true); }}>
                                Excluir
                            </Button>
                            <Button variant="default" onClick={() => setEditOpen(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit">Salvar</Button>
                        </Group>
                    </Stack>
                </form>
            </Modal>

            {/* Modal Excluir */}
            <Modal opened={deleteOpen} onClose={() => setDeleteOpen(false)} title="Confirmar Exclusão" centered>
                <Stack gap={12}>
                    <Text>
                        Você tem certeza de que deseja excluir a parada
                        {" "}
                        <Text span fw={700}>
                            “{current?.name}”
                        </Text>
                        ? Esta ação não pode ser desfeita.
                    </Text>
                    <Group justify="end">
                        <Button variant="default" onClick={() => setDeleteOpen(false)}>
                            Cancelar
                        </Button>
                        <Button color="red" onClick={confirmDelete}>
                            Excluir
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </Paper>
    );
};

export default StopManager;