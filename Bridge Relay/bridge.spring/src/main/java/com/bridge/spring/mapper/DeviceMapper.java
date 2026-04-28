package com.bridge.spring.mapper;

import com.bridge.spring.dto.DeviceRequest;
import com.bridge.spring.dto.DeviceResponse;
import com.bridge.spring.entity.Device;

public class DeviceMapper {

    public static Device toEntity(DeviceRequest request, Long id) {
        return new Device(id, request.name(), request.status());
    }

    public static DeviceResponse toResponse(Device device) {
        return new DeviceResponse(
                device.getId(),
                device.getName(),
                device.getStatus()
        );
    }
}