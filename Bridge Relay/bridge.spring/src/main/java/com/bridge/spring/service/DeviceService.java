package com.bridge.spring.service;

import com.bridge.spring.entity.Device;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceService {

    public List<Device> findAll() {
        return List.of(
                new Device(1L, "Device A", "ACTIVE"),
                new Device(2L, "Device B", "INACTIVE"),
                new Device(3L, "Device C", "ACTIVE")
        );
    }
}