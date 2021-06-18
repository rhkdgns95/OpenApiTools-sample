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
import org.openapitools.client.model.ApiLogDetail;
import org.openapitools.client.model.InOutFlag;
import org.openapitools.client.model.User;

/**
 * ApiLog
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class ApiLog {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private BigDecimal id;

  public static final String SERIALIZED_NAME_USER_ID = "userId";
  @SerializedName(SERIALIZED_NAME_USER_ID)
  private BigDecimal userId;

  public static final String SERIALIZED_NAME_USER_LEVEL = "userLevel";
  @SerializedName(SERIALIZED_NAME_USER_LEVEL)
  private BigDecimal userLevel;

  public static final String SERIALIZED_NAME_INOUT = "inout";
  @SerializedName(SERIALIZED_NAME_INOUT)
  private InOutFlag inout;

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  private String url;

  public static final String SERIALIZED_NAME_IP = "ip";
  @SerializedName(SERIALIZED_NAME_IP)
  private String ip;

  public static final String SERIALIZED_NAME_RESULT_CODE = "resultCode";
  @SerializedName(SERIALIZED_NAME_RESULT_CODE)
  private String resultCode;

  public static final String SERIALIZED_NAME_CREATED_AT = "createdAt";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_DETAIL = "detail";
  @SerializedName(SERIALIZED_NAME_DETAIL)
  private ApiLogDetail detail;

  public static final String SERIALIZED_NAME_USER = "user";
  @SerializedName(SERIALIZED_NAME_USER)
  private User user;


  public ApiLog id(BigDecimal id) {
    
    this.id = id;
    return this;
  }

   /**
   * api로그 번호
   * @return id
  **/
  @ApiModelProperty(required = true, value = "api로그 번호")

  public BigDecimal getId() {
    return id;
  }


  public void setId(BigDecimal id) {
    this.id = id;
  }


  public ApiLog userId(BigDecimal userId) {
    
    this.userId = userId;
    return this;
  }

   /**
   * 회원번호
   * @return userId
  **/
  @ApiModelProperty(required = true, value = "회원번호")

  public BigDecimal getUserId() {
    return userId;
  }


  public void setUserId(BigDecimal userId) {
    this.userId = userId;
  }


  public ApiLog userLevel(BigDecimal userLevel) {
    
    this.userLevel = userLevel;
    return this;
  }

   /**
   * 회원레벨
   * @return userLevel
  **/
  @ApiModelProperty(required = true, value = "회원레벨")

  public BigDecimal getUserLevel() {
    return userLevel;
  }


  public void setUserLevel(BigDecimal userLevel) {
    this.userLevel = userLevel;
  }


  public ApiLog inout(InOutFlag inout) {
    
    this.inout = inout;
    return this;
  }

   /**
   * Get inout
   * @return inout
  **/
  @ApiModelProperty(required = true, value = "")

  public InOutFlag getInout() {
    return inout;
  }


  public void setInout(InOutFlag inout) {
    this.inout = inout;
  }


  public ApiLog url(String url) {
    
    this.url = url;
    return this;
  }

   /**
   * 요청 url
   * @return url
  **/
  @ApiModelProperty(required = true, value = "요청 url")

  public String getUrl() {
    return url;
  }


  public void setUrl(String url) {
    this.url = url;
  }


  public ApiLog ip(String ip) {
    
    this.ip = ip;
    return this;
  }

   /**
   * ip
   * @return ip
  **/
  @ApiModelProperty(required = true, value = "ip")

  public String getIp() {
    return ip;
  }


  public void setIp(String ip) {
    this.ip = ip;
  }


  public ApiLog resultCode(String resultCode) {
    
    this.resultCode = resultCode;
    return this;
  }

   /**
   * 결과 코드
   * @return resultCode
  **/
  @ApiModelProperty(required = true, value = "결과 코드")

  public String getResultCode() {
    return resultCode;
  }


  public void setResultCode(String resultCode) {
    this.resultCode = resultCode;
  }


  public ApiLog createdAt(String createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * 생성일
   * @return createdAt
  **/
  @ApiModelProperty(required = true, value = "생성일")

  public String getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public ApiLog detail(ApiLogDetail detail) {
    
    this.detail = detail;
    return this;
  }

   /**
   * api 로그 상세
   * @return detail
  **/
  @ApiModelProperty(required = true, value = "api 로그 상세")

  public ApiLogDetail getDetail() {
    return detail;
  }


  public void setDetail(ApiLogDetail detail) {
    this.detail = detail;
  }


  public ApiLog user(User user) {
    
    this.user = user;
    return this;
  }

   /**
   * 회원 정보
   * @return user
  **/
  @ApiModelProperty(required = true, value = "회원 정보")

  public User getUser() {
    return user;
  }


  public void setUser(User user) {
    this.user = user;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApiLog apiLog = (ApiLog) o;
    return Objects.equals(this.id, apiLog.id) &&
        Objects.equals(this.userId, apiLog.userId) &&
        Objects.equals(this.userLevel, apiLog.userLevel) &&
        Objects.equals(this.inout, apiLog.inout) &&
        Objects.equals(this.url, apiLog.url) &&
        Objects.equals(this.ip, apiLog.ip) &&
        Objects.equals(this.resultCode, apiLog.resultCode) &&
        Objects.equals(this.createdAt, apiLog.createdAt) &&
        Objects.equals(this.detail, apiLog.detail) &&
        Objects.equals(this.user, apiLog.user);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, userId, userLevel, inout, url, ip, resultCode, createdAt, detail, user);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApiLog {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    userLevel: ").append(toIndentedString(userLevel)).append("\n");
    sb.append("    inout: ").append(toIndentedString(inout)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    ip: ").append(toIndentedString(ip)).append("\n");
    sb.append("    resultCode: ").append(toIndentedString(resultCode)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    detail: ").append(toIndentedString(detail)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
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

