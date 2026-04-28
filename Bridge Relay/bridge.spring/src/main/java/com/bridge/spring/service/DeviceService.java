package com.bridge.spring.service;

import com.bridge.spring.dto.DeviceRequest;
import com.bridge.spring.entity.Device;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class DeviceService {

    private final List<Device> devices = new ArrayList<>();
    private final AtomicLong sequence = new AtomicLong(1);

    public DeviceService() {
        devices.add(new Device(sequence.getAndIncrement(), "Device A", "ACTIVE"));
        devices.add(new Device(sequence.getAndIncrement(), "Device B", "INACTIVE"));
        devices.add(new Device(sequence.getAndIncrement(), "Device C", "ACTIVE"));
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
        Device device = new Device(sequence.getAndIncrement(), request.name(), request.status());
        devices.add(device);
        return device;
    }

    public Optional<Device> update(Long id, DeviceRequest request) {
        return findById(id).map(existing -> {
            existing.setName(request.name());
            existing.setStatus(request.status());
            return existing;
        });
    }

    public boolean delete(Long id) {
        return devices.removeIf(device -> device.getId().equals(id));
    }
}