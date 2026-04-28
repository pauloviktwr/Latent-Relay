package com.bridge.spring.controller;

import com.bridge.spring.dto.DeviceRequest;
import com.bridge.spring.dto.DeviceResponse;
import com.bridge.spring.entity.Device;
import com.bridge.spring.mapper.DeviceMapper;
import com.bridge.spring.service.DeviceService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/devices")
public class DeviceController {

    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping
    public List<DeviceResponse> findAll() {
        return deviceService.findAll()
                .stream()
                .map(DeviceMapper::toResponse)
                .toList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DeviceResponse> findById(@PathVariable Long id) {
        return deviceService.findById(id)
                .map(device -> ResponseEntity.ok(DeviceMapper.toResponse(device)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<DeviceResponse> create(@Valid @RequestBody DeviceRequest request) {
        Device created = deviceService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(DeviceMapper.toResponse(created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DeviceResponse> update(
            @PathVariable Long id,
            @Valid @RequestBody DeviceRequest request
    ) {
        return deviceService.update(id, request)
                .map(device -> ResponseEntity.ok(DeviceMapper.toResponse(device)))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean deleted = deviceService.delete(id);
        return deleted
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}