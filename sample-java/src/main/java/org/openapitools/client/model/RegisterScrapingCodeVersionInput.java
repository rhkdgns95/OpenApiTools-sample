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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * RegisterScrapingCodeVersionInput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class RegisterScrapingCodeVersionInput {
  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private String version;

  public static final String SERIALIZED_NAME_SERVICE_ID = "serviceId";
  @SerializedName(SERIALIZED_NAME_SERVICE_ID)
  private BigDecimal serviceId;

  public static final String SERIALIZED_NAME_SCRAPING_CODE = "scrapingCode";
  @SerializedName(SERIALIZED_NAME_SCRAPING_CODE)
  private String scrapingCode;

  public static final String SERIALIZED_NAME_PROVIDER_TYPE = "providerType";
  @SerializedName(SERIALIZED_NAME_PROVIDER_TYPE)
  private String providerType;


  public RegisterScrapingCodeVersionInput version(String version) {
    
    this.version = version;
    return this;
  }

   /**
   * 버전
   * @return version
  **/
  @ApiModelProperty(required = true, value = "버전")

  public String getVersion() {
    return version;
  }


  public void setVersion(String version) {
    this.version = version;
  }


  public RegisterScrapingCodeVersionInput serviceId(BigDecimal serviceId) {
    
    this.serviceId = serviceId;
    return this;
  }

   /**
   * 서비스 순번
   * @return serviceId
  **/
  @ApiModelProperty(required = true, value = "서비스 순번")

  public BigDecimal getServiceId() {
    return serviceId;
  }


  public void setServiceId(BigDecimal serviceId) {
    this.serviceId = serviceId;
  }


  public RegisterScrapingCodeVersionInput scrapingCode(String scrapingCode) {
    
    this.scrapingCode = scrapingCode;
    return this;
  }

   /**
   * 스크래핑 코드
   * @return scrapingCode
  **/
  @ApiModelProperty(required = true, value = "스크래핑 코드")

  public String getScrapingCode() {
    return scrapingCode;
  }


  public void setScrapingCode(String scrapingCode) {
    this.scrapingCode = scrapingCode;
  }


  public RegisterScrapingCodeVersionInput providerType(String providerType) {
    
    this.providerType = providerType;
    return this;
  }

   /**
   * 제공타입
   * @return providerType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "제공타입")

  public String getProviderType() {
    return providerType;
  }


  public void setProviderType(String providerType) {
    this.providerType = providerType;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RegisterScrapingCodeVersionInput registerScrapingCodeVersionInput = (RegisterScrapingCodeVersionInput) o;
    return Objects.equals(this.version, registerScrapingCodeVersionInput.version) &&
        Objects.equals(this.serviceId, registerScrapingCodeVersionInput.serviceId) &&
        Objects.equals(this.scrapingCode, registerScrapingCodeVersionInput.scrapingCode) &&
        Objects.equals(this.providerType, registerScrapingCodeVersionInput.providerType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(version, serviceId, scrapingCode, providerType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RegisterScrapingCodeVersionInput {\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    serviceId: ").append(toIndentedString(serviceId)).append("\n");
    sb.append("    scrapingCode: ").append(toIndentedString(scrapingCode)).append("\n");
    sb.append("    providerType: ").append(toIndentedString(providerType)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

