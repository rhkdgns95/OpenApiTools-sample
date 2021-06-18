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
 * UpdateServiceInput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class UpdateServiceInput {
  /**
   * 서비스 카테고리
   */
  @JsonAdapter(CategoryEnum.Adapter.class)
  public enum CategoryEnum {
    _("회계업로드"),
    
    _("계좌통합"),
    
    _("음식배달"),
    
    EDI("EDI");

    private String value;

    CategoryEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static CategoryEnum fromValue(String value) {
      for (CategoryEnum b : CategoryEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<CategoryEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final CategoryEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public CategoryEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return CategoryEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_CATEGORY = "category";
  @SerializedName(SERIALIZED_NAME_CATEGORY)
  private CategoryEnum category;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_LAUNCHED_AT = "launchedAt";
  @SerializedName(SERIALIZED_NAME_LAUNCHED_AT)
  private String launchedAt;


  public UpdateServiceInput category(CategoryEnum category) {
    
    this.category = category;
    return this;
  }

   /**
   * 서비스 카테고리
   * @return category
  **/
  @ApiModelProperty(example = "계좌통합", required = true, value = "서비스 카테고리")

  public CategoryEnum getCategory() {
    return category;
  }


  public void setCategory(CategoryEnum category) {
    this.category = category;
  }


  public UpdateServiceInput name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * 서비스 이름
   * @return name
  **/
  @ApiModelProperty(example = "경기형", required = true, value = "서비스 이름")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public UpdateServiceInput launchedAt(String launchedAt) {
    
    this.launchedAt = launchedAt;
    return this;
  }

   /**
   * 서비스 런칭일자 (YYYYMMDD)
   * @return launchedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20210429", value = "서비스 런칭일자 (YYYYMMDD)")

  public String getLaunchedAt() {
    return launchedAt;
  }


  public void setLaunchedAt(String launchedAt) {
    this.launchedAt = launchedAt;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateServiceInput updateServiceInput = (UpdateServiceInput) o;
    return Objects.equals(this.category, updateServiceInput.category) &&
        Objects.equals(this.name, updateServiceInput.name) &&
        Objects.equals(this.launchedAt, updateServiceInput.launchedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, name, launchedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateServiceInput {\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    launchedAt: ").append(toIndentedString(launchedAt)).append("\n");
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

