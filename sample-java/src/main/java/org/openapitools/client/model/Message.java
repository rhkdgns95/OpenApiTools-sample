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
import org.openapitools.client.model.CommonInfo;

/**
 * Message
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class Message {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private BigDecimal id;

  public static final String SERIALIZED_NAME_SUBJECT = "subject";
  @SerializedName(SERIALIZED_NAME_SUBJECT)
  private String subject;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_INFO = "info";
  @SerializedName(SERIALIZED_NAME_INFO)
  private CommonInfo info;

  public static final String SERIALIZED_NAME_RECEIVED_AT = "receivedAt";
  @SerializedName(SERIALIZED_NAME_RECEIVED_AT)
  private Object receivedAt;

  public static final String SERIALIZED_NAME_VIEWED_AT = "viewedAt";
  @SerializedName(SERIALIZED_NAME_VIEWED_AT)
  private Object viewedAt;


  public Message id(BigDecimal id) {
    
    this.id = id;
    return this;
  }

   /**
   * 메시지아이디
   * @return id
  **/
  @ApiModelProperty(required = true, value = "메시지아이디")

  public BigDecimal getId() {
    return id;
  }


  public void setId(BigDecimal id) {
    this.id = id;
  }


  public Message subject(String subject) {
    
    this.subject = subject;
    return this;
  }

   /**
   * 제목
   * @return subject
  **/
  @ApiModelProperty(required = true, value = "제목")

  public String getSubject() {
    return subject;
  }


  public void setSubject(String subject) {
    this.subject = subject;
  }


  public Message content(String content) {
    
    this.content = content;
    return this;
  }

   /**
   * 내용
   * @return content
  **/
  @ApiModelProperty(required = true, value = "내용")

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public Message info(CommonInfo info) {
    
    this.info = info;
    return this;
  }

   /**
   * 상세정보
   * @return info
  **/
  @ApiModelProperty(required = true, value = "상세정보")

  public CommonInfo getInfo() {
    return info;
  }


  public void setInfo(CommonInfo info) {
    this.info = info;
  }


  public Message receivedAt(Object receivedAt) {
    
    this.receivedAt = receivedAt;
    return this;
  }

   /**
   * 수신일
   * @return receivedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수신일")

  public Object getReceivedAt() {
    return receivedAt;
  }


  public void setReceivedAt(Object receivedAt) {
    this.receivedAt = receivedAt;
  }


  public Message viewedAt(Object viewedAt) {
    
    this.viewedAt = viewedAt;
    return this;
  }

   /**
   * 조회일
   * @return viewedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "조회일")

  public Object getViewedAt() {
    return viewedAt;
  }


  public void setViewedAt(Object viewedAt) {
    this.viewedAt = viewedAt;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Message message = (Message) o;
    return Objects.equals(this.id, message.id) &&
        Objects.equals(this.subject, message.subject) &&
        Objects.equals(this.content, message.content) &&
        Objects.equals(this.info, message.info) &&
        Objects.equals(this.receivedAt, message.receivedAt) &&
        Objects.equals(this.viewedAt, message.viewedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, subject, content, info, receivedAt, viewedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Message {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    subject: ").append(toIndentedString(subject)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    info: ").append(toIndentedString(info)).append("\n");
    sb.append("    receivedAt: ").append(toIndentedString(receivedAt)).append("\n");
    sb.append("    viewedAt: ").append(toIndentedString(viewedAt)).append("\n");
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

