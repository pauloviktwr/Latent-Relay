package com.bridge.spring.dto;

public record DeviceResponse(
        Long id,
        String name,
        String status
) {}