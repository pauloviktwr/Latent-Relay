package com.bridge.spring.entity;

import java.util.HashMap;
import java.util.Map;

public class Device {
    private Long id;
    private String name;
    private Map<String, String> slotToAssetMap = new HashMap<>();

    public Device(Long id, String name) {
        this(id, name, new HashMap<>());
    }

    public Device(Long id, String name, Map<String, String> slotToAssetMap) {
        this.id = id;
        this.name = name;
        this.slotToAssetMap = slotToAssetMap == null ? new HashMap<>() : new HashMap<>(slotToAssetMap);
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Map<String, String> getSlotToAssetMap() {
        return new HashMap<>(slotToAssetMap);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSlotToAssetMap(Map<String, String> slotToAssetMap) {
        this.slotToAssetMap = slotToAssetMap == null ? new HashMap<>() : new HashMap<>(slotToAssetMap);
    }
}