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
import org.openapitools.client.model.WorkResultDetail;

/**
 * WorkResult
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class WorkResult {
  public static final String SERIALIZED_NAME_WORK_RESULT_DETAIL = "workResultDetail";
  @SerializedName(SERIALIZED_NAME_WORK_RESULT_DETAIL)
  private WorkResultDetail workResultDetail;


  public WorkResult workResultDetail(WorkResultDetail workResultDetail) {
    
    this.workResultDetail = workResultDetail;
    return this;
  }

   /**
   * 스크래핑 결과 상세정보
   * @return workResultDetail
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "스크래핑 결과 상세정보")

  public WorkResultDetail getWorkResultDetail() {
    return workResultDetail;
  }


  public void setWorkResultDetail(WorkResultDetail workResultDetail) {
    this.workResultDetail = workResultDetail;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WorkResult workResult = (WorkResult) o;
    return Objects.equals(this.workResultDetail, workResult.workResultDetail);
  }

  @Override
  public int hashCode() {
    return Objects.hash(workResultDetail);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WorkResult {\n");
    sb.append("    workResultDetail: ").append(toIndentedString(workResultDetail)).append("\n");
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

