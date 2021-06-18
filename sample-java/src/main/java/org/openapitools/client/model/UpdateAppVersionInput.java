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
import org.openapitools.client.model.OsType;
import org.openapitools.client.model.UpdateAppVersionInputInfo;

/**
 * UpdateAppVersionInput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class UpdateAppVersionInput {
  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private String version;

  public static final String SERIALIZED_NAME_OS_TYPE = "osType";
  @SerializedName(SERIALIZED_NAME_OS_TYPE)
  private OsType osType;

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  private String url;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_INFO = "info";
  @SerializedName(SERIALIZED_NAME_INFO)
  private UpdateAppVersionInputInfo info;


  public UpdateAppVersionInput version(String version) {
    
    this.version = version;
    return this;
  }

   /**
   * 버전명
   * @return version
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "버전명")

  public String getVersion() {
    return version;
  }


  public void setVersion(String version) {
    this.version = version;
  }


  public UpdateAppVersionInput osType(OsType osType) {
    
    this.osType = osType;
    return this;
  }

   /**
   * Get osType
   * @return osType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OsType getOsType() {
    return osType;
  }


  public void setOsType(OsType osType) {
    this.osType = osType;
  }


  public UpdateAppVersionInput url(String url) {
    
    this.url = url;
    return this;
  }

   /**
   * url
   * @return url
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "url")

  public String getUrl() {
    return url;
  }


  public void setUrl(String url) {
    this.url = url;
  }


  public UpdateAppVersionInput description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * 내용
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "내용")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public UpdateAppVersionInput info(UpdateAppVersionInputInfo info) {
    
    this.info = info;
    return this;
  }

   /**
   * 상세정보
   * @return info
  **/
  @ApiModelProperty(required = true, value = "상세정보")

  public UpdateAppVersionInputInfo getInfo() {
    return info;
  }


  public void setInfo(UpdateAppVersionInputInfo info) {
    this.info = info;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateAppVersionInput updateAppVersionInput = (UpdateAppVersionInput) o;
    return Objects.equals(this.version, updateAppVersionInput.version) &&
        Objects.equals(this.osType, updateAppVersionInput.osType) &&
        Objects.equals(this.url, updateAppVersionInput.url) &&
        Objects.equals(this.description, updateAppVersionInput.description) &&
        Objects.equals(this.info, updateAppVersionInput.info);
  }

  @Override
  public int hashCode() {
    return Objects.hash(version, osType, url, description, info);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateAppVersionInput {\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    osType: ").append(toIndentedString(osType)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    info: ").append(toIndentedString(info)).append("\n");
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

