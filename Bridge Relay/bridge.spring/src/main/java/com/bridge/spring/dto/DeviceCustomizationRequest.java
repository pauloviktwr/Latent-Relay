package com.bridge.spring.dto;

import jakarta.validation.constraints.NotBlank;

import java.util.Map;

public record DeviceCustomizationRequest(
        @NotBlank(message = "baseModel é obrigatório")
        String baseModel,

        Map<String, String> slotToAssetMap
) {
}
