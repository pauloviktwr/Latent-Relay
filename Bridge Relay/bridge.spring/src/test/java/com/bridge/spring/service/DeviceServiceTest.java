package com.bridge.spring.service;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

import com.bridge.spring.dto.DeviceCustomizationRequest;
import com.bridge.spring.dto.DeviceCustomizationResponse;
import com.bridge.spring.dto.DeviceRequest;

class DeviceServiceTest {

    @Test
    void shouldCustomizeDeviceUsingExistingDeviceModel() {
        DeviceService service = new DeviceService();

        DeviceRequest request = new DeviceRequest("Camera Alpha");
        var created = service.create(request);

        DeviceCustomizationRequest customizationRequest = new DeviceCustomizationRequest(
                "CAMERA_BASE",
                Map.of("TOP", "lens_thermal", "SIDE", "sensor_ir")
        );

        DeviceCustomizationResponse response = service.customizeDevice(created.getId(), customizationRequest)
                .orElseThrow();

        assertThat(response.deviceId()).isEqualTo(created.getId());
        assertThat(response.slotToAssetMap()).containsEntry("TOP", "lens_thermal");
    }
}
