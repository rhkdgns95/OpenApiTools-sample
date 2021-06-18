/*
 * 뱅크다K 웹앱 REST API
 * 뱅크다K 웹앱 REST API : 관리자, 장부사, 고객사
 *
 * The version of the OpenAPI document: 0.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets ServiceType
 */
@JsonAdapter(ServiceType.Adapter.class)
public enum ServiceType {
  
  _("경기형"),
  
  _("서울형"),
  
  W4C("w4c"),
  
  _("계좌통합"),
  
  _("음식배달"),
  
  EDI("EDI"),
  
  _("증빙앱"),
  
  _("대구형"),
  
  _("인천형");

  private String value;

  ServiceType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ServiceType fromValue(String value) {
    for (ServiceType b : ServiceType.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<ServiceType> {
    @Override
    public void write(final JsonWriter jsonWriter, final ServiceType enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public ServiceType read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return ServiceType.fromValue(value);
    }
  }
}
