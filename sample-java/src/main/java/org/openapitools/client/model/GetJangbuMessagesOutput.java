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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.Message;
import org.openapitools.client.model.PagingLinks;
import org.openapitools.client.model.PagingMeta;

/**
 * GetJangbuMessagesOutput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class GetJangbuMessagesOutput {
  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<Message> items = new ArrayList<Message>();

  public static final String SERIALIZED_NAME_META = "meta";
  @SerializedName(SERIALIZED_NAME_META)
  private PagingMeta meta;

  public static final String SERIALIZED_NAME_LINKS = "links";
  @SerializedName(SERIALIZED_NAME_LINKS)
  private PagingLinks links;


   /**
   * 메시지 목록
   * @return items
  **/
  @ApiModelProperty(required = true, value = "메시지 목록")

  public List<Message> getItems() {
    return items;
  }




   /**
   * 페이징 메타정보
   * @return meta
  **/
  @ApiModelProperty(required = true, value = "페이징 메타정보")

  public PagingMeta getMeta() {
    return meta;
  }




   /**
   * 페이징 링크정보
   * @return links
  **/
  @ApiModelProperty(required = true, value = "페이징 링크정보")

  public PagingLinks getLinks() {
    return links;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetJangbuMessagesOutput getJangbuMessagesOutput = (GetJangbuMessagesOutput) o;
    return Objects.equals(this.items, getJangbuMessagesOutput.items) &&
        Objects.equals(this.meta, getJangbuMessagesOutput.meta) &&
        Objects.equals(this.links, getJangbuMessagesOutput.links);
  }

  @Override
  public int hashCode() {
    return Objects.hash(items, meta, links);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetJangbuMessagesOutput {\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
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

