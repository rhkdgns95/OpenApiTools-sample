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
 * UpdateMemberInput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class UpdateMemberInput {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_PASSWORD = "password";
  @SerializedName(SERIALIZED_NAME_PASSWORD)
  private String password;

  public static final String SERIALIZED_NAME_EMAIL = "email";
  @SerializedName(SERIALIZED_NAME_EMAIL)
  private String email;

  public static final String SERIALIZED_NAME_PHONE = "phone";
  @SerializedName(SERIALIZED_NAME_PHONE)
  private String phone;

  public static final String SERIALIZED_NAME_ACTIVE = "active";
  @SerializedName(SERIALIZED_NAME_ACTIVE)
  private Boolean active;


  public UpdateMemberInput name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * 회원명
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "회원명")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public UpdateMemberInput password(String password) {
    
    this.password = password;
    return this;
  }

   /**
   * 패스워드
   * @return password
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "패스워드")

  public String getPassword() {
    return password;
  }


  public void setPassword(String password) {
    this.password = password;
  }


  public UpdateMemberInput email(String email) {
    
    this.email = email;
    return this;
  }

   /**
   * 이메일
   * @return email
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "이메일")

  public String getEmail() {
    return email;
  }


  public void setEmail(String email) {
    this.email = email;
  }


  public UpdateMemberInput phone(String phone) {
    
    this.phone = phone;
    return this;
  }

   /**
   * 휴대폰 (숫자만 입력)
   * @return phone
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "휴대폰 (숫자만 입력)")

  public String getPhone() {
    return phone;
  }


  public void setPhone(String phone) {
    this.phone = phone;
  }


  public UpdateMemberInput active(Boolean active) {
    
    this.active = active;
    return this;
  }

   /**
   * 이용여부
   * @return active
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "이용여부")

  public Boolean getActive() {
    return active;
  }


  public void setActive(Boolean active) {
    this.active = active;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateMemberInput updateMemberInput = (UpdateMemberInput) o;
    return Objects.equals(this.name, updateMemberInput.name) &&
        Objects.equals(this.password, updateMemberInput.password) &&
        Objects.equals(this.email, updateMemberInput.email) &&
        Objects.equals(this.phone, updateMemberInput.phone) &&
        Objects.equals(this.active, updateMemberInput.active);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, password, email, phone, active);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateMemberInput {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
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

