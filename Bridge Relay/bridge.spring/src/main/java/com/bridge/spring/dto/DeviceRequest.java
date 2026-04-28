package com.bridge.spring.dto;

import jakarta.validation.constraints.NotBlank;

public record DeviceRequest(
        @NotBlank(message = "Name is required")
        String name,

        @NotBlank(message = "Status is required")
        String status
) {}