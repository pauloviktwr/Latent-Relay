package com.bridge.spring.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.bridge.spring.dto.DeviceCustomizationRequest;
import com.bridge.spring.dto.DeviceCustomizationResponse;
import com.bridge.spring.dto.DeviceRequest;
import com.bridge.spring.entity.Device;

@Service
public class DeviceService {

    private final List<Device> devices = new ArrayList<>();
    private final AtomicLong sequence = new AtomicLong(1);

    public DeviceService() {
        devices.add(new Device(sequence.getAndIncrement(), "SPRING API SERVICE TEST"));
        devices.add(new Device(sequence.getAndIncrement(), "SPRING API SERVICE TEST"));
        devices.add(new Device(sequence.getAndIncrement(), "SPRING API SERVICE TEST"));
    }

    public List<Device> findAll() {
        return devices;
    }

    public Optional<Device> findById(Long id) {
        return devices.stream()
                .filter(device -> device.getId().equals(id))
                .findFirst();
    }

    public Device create(DeviceRequest request) {
        Device device = new Device(sequence.getAndIncrement(), request.name());
        devices.add(device);
        return device;
    }

    public Optional<Device> update(Long id, DeviceRequest request) {
        return findById(id).map(existing -> {
            existing.setName(request.name());
            return existing;
        });
    }

    public Optional<DeviceCustomizationResponse> customizeDevice(Long id, DeviceCustomizationRequest request) {
        return findById(id).map(device -> {
            Map<String, String> slotMap = request.slotToAssetMap() == null ? Map.of() : request.slotToAssetMap();
            device.setSlotToAssetMap(slotMap);

            return new DeviceCustomizationResponse(
                    device.getId(),
                    device.getSlotToAssetMap()
            );
        });
    }

    public boolean delete(Long id) {
        return devices.removeIf(device -> device.getId().equals(id));
    }
}