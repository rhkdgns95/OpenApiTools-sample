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

/**
 * FindMemberOutput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class FindMemberOutput {
  public static final String SERIALIZED_NAME_LOGIN_ID = "loginId";
  @SerializedName(SERIALIZED_NAME_LOGIN_ID)
  private String loginId;

  public static final String SERIALIZED_NAME_RECOVERY_URL = "recoveryUrl";
  @SerializedName(SERIALIZED_NAME_RECOVERY_URL)
  private String recoveryUrl;


  public FindMemberOutput loginId(String loginId) {
    
    this.loginId = loginId;
    return this;
  }

   /**
   * 로그인 아이디
   * @return loginId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "로그인 아이디")

  public String getLoginId() {
    return loginId;
  }


  public void setLoginId(String loginId) {
    this.loginId = loginId;
  }


  public FindMemberOutput recoveryUrl(String recoveryUrl) {
    
    this.recoveryUrl = recoveryUrl;
    return this;
  }

   /**
   * 패스워드 초기화 url
   * @return recoveryUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "패스워드 초기화 url")

  public String getRecoveryUrl() {
    return recoveryUrl;
  }


  public void setRecoveryUrl(String recoveryUrl) {
    this.recoveryUrl = recoveryUrl;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FindMemberOutput findMemberOutput = (FindMemberOutput) o;
    return Objects.equals(this.loginId, findMemberOutput.loginId) &&
        Objects.equals(this.recoveryUrl, findMemberOutput.recoveryUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(loginId, recoveryUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FindMemberOutput {\n");
    sb.append("    loginId: ").append(toIndentedString(loginId)).append("\n");
    sb.append("    recoveryUrl: ").append(toIndentedString(recoveryUrl)).append("\n");
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

