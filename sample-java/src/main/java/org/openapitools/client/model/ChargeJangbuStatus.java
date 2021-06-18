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
 * Gets or Sets ChargeJangbuStatus
 */
@JsonAdapter(ChargeJangbuStatus.Adapter.class)
public enum ChargeJangbuStatus {
  
  READY("ready"),
  
  COMPLETE("complete");

  private String value;

  ChargeJangbuStatus(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ChargeJangbuStatus fromValue(String value) {
    for (ChargeJangbuStatus b : ChargeJangbuStatus.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<ChargeJangbuStatus> {
    @Override
    public void write(final JsonWriter jsonWriter, final ChargeJangbuStatus enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public ChargeJangbuStatus read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return ChargeJangbuStatus.fromValue(value);
    }
  }
}

