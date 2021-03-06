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
 * ChargeJangbuPartnership
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class ChargeJangbuPartnership {
  public static final String SERIALIZED_NAME_JANGBU_ID = "jangbuId";
  @SerializedName(SERIALIZED_NAME_JANGBU_ID)
  private BigDecimal jangbuId;

  public static final String SERIALIZED_NAME_YEAR_MONTH = "yearMonth";
  @SerializedName(SERIALIZED_NAME_YEAR_MONTH)
  private BigDecimal yearMonth;

  public static final String SERIALIZED_NAME_APPLY_COUNT = "applyCount";
  @SerializedName(SERIALIZED_NAME_APPLY_COUNT)
  private BigDecimal applyCount;

  public static final String SERIALIZED_NAME_UNIT_PRICE = "unitPrice";
  @SerializedName(SERIALIZED_NAME_UNIT_PRICE)
  private BigDecimal unitPrice;

  public static final String SERIALIZED_NAME_SUPPLY_PRICE = "supplyPrice";
  @SerializedName(SERIALIZED_NAME_SUPPLY_PRICE)
  private BigDecimal supplyPrice;

  public static final String SERIALIZED_NAME_VAT_PRICE = "vatPrice";
  @SerializedName(SERIALIZED_NAME_VAT_PRICE)
  private BigDecimal vatPrice;


  public ChargeJangbuPartnership jangbuId(BigDecimal jangbuId) {
    
    this.jangbuId = jangbuId;
    return this;
  }

   /**
   * 장부사 순번
   * @return jangbuId
  **/
  @ApiModelProperty(required = true, value = "장부사 순번")

  public BigDecimal getJangbuId() {
    return jangbuId;
  }


  public void setJangbuId(BigDecimal jangbuId) {
    this.jangbuId = jangbuId;
  }


  public ChargeJangbuPartnership yearMonth(BigDecimal yearMonth) {
    
    this.yearMonth = yearMonth;
    return this;
  }

   /**
   * 정산연월
   * @return yearMonth
  **/
  @ApiModelProperty(required = true, value = "정산연월")

  public BigDecimal getYearMonth() {
    return yearMonth;
  }


  public void setYearMonth(BigDecimal yearMonth) {
    this.yearMonth = yearMonth;
  }


  public ChargeJangbuPartnership applyCount(BigDecimal applyCount) {
    
    this.applyCount = applyCount;
    return this;
  }

   /**
   * 계좌수
   * @return applyCount
  **/
  @ApiModelProperty(required = true, value = "계좌수")

  public BigDecimal getApplyCount() {
    return applyCount;
  }


  public void setApplyCount(BigDecimal applyCount) {
    this.applyCount = applyCount;
  }


  public ChargeJangbuPartnership unitPrice(BigDecimal unitPrice) {
    
    this.unitPrice = unitPrice;
    return this;
  }

   /**
   * 단가
   * @return unitPrice
  **/
  @ApiModelProperty(required = true, value = "단가")

  public BigDecimal getUnitPrice() {
    return unitPrice;
  }


  public void setUnitPrice(BigDecimal unitPrice) {
    this.unitPrice = unitPrice;
  }


  public ChargeJangbuPartnership supplyPrice(BigDecimal supplyPrice) {
    
    this.supplyPrice = supplyPrice;
    return this;
  }

   /**
   * 총 금액
   * @return supplyPrice
  **/
  @ApiModelProperty(required = true, value = "총 금액")

  public BigDecimal getSupplyPrice() {
    return supplyPrice;
  }


  public void setSupplyPrice(BigDecimal supplyPrice) {
    this.supplyPrice = supplyPrice;
  }


  public ChargeJangbuPartnership vatPrice(BigDecimal vatPrice) {
    
    this.vatPrice = vatPrice;
    return this;
  }

   /**
   * (부가세포함된) 총 금액
   * @return vatPrice
  **/
  @ApiModelProperty(required = true, value = "(부가세포함된) 총 금액")

  public BigDecimal getVatPrice() {
    return vatPrice;
  }


  public void setVatPrice(BigDecimal vatPrice) {
    this.vatPrice = vatPrice;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ChargeJangbuPartnership chargeJangbuPartnership = (ChargeJangbuPartnership) o;
    return Objects.equals(this.jangbuId, chargeJangbuPartnership.jangbuId) &&
        Objects.equals(this.yearMonth, chargeJangbuPartnership.yearMonth) &&
        Objects.equals(this.applyCount, chargeJangbuPartnership.applyCount) &&
        Objects.equals(this.unitPrice, chargeJangbuPartnership.unitPrice) &&
        Objects.equals(this.supplyPrice, chargeJangbuPartnership.supplyPrice) &&
        Objects.equals(this.vatPrice, chargeJangbuPartnership.vatPrice);
  }

  @Override
  public int hashCode() {
    return Objects.hash(jangbuId, yearMonth, applyCount, unitPrice, supplyPrice, vatPrice);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ChargeJangbuPartnership {\n");
    sb.append("    jangbuId: ").append(toIndentedString(jangbuId)).append("\n");
    sb.append("    yearMonth: ").append(toIndentedString(yearMonth)).append("\n");
    sb.append("    applyCount: ").append(toIndentedString(applyCount)).append("\n");
    sb.append("    unitPrice: ").append(toIndentedString(unitPrice)).append("\n");
    sb.append("    supplyPrice: ").append(toIndentedString(supplyPrice)).append("\n");
    sb.append("    vatPrice: ").append(toIndentedString(vatPrice)).append("\n");
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

