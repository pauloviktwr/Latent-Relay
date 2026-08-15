package com.bridge.spring.dto;

import java.util.Map;

public record DeviceCustomizationResponse(
        Long deviceId,
        Map<String, String> slotToAssetMap
) {
}
