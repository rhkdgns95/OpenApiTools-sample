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
import org.openapitools.client.model.ChargeJangbuPaid;
import org.openapitools.client.model.ChargeJangbuPartnership;
import org.openapitools.client.model.ChargeJangbuStatus;
import org.openapitools.client.model.Jangbu;

/**
 * ChargeJangbu
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class ChargeJangbu {
  public static final String SERIALIZED_NAME_JANGBU_ID = "jangbuId";
  @SerializedName(SERIALIZED_NAME_JANGBU_ID)
  private BigDecimal jangbuId;

  public static final String SERIALIZED_NAME_YEAR_MONTH = "yearMonth";
  @SerializedName(SERIALIZED_NAME_YEAR_MONTH)
  private BigDecimal yearMonth;

  public static final String SERIALIZED_NAME_TOTAL_PRICE = "totalPrice";
  @SerializedName(SERIALIZED_NAME_TOTAL_PRICE)
  private BigDecimal totalPrice;

  public static final String SERIALIZED_NAME_DISCOUNT_PRICE = "discountPrice";
  @SerializedName(SERIALIZED_NAME_DISCOUNT_PRICE)
  private BigDecimal discountPrice;

  public static final String SERIALIZED_NAME_MIN_BILLING_PRICE = "minBillingPrice";
  @SerializedName(SERIALIZED_NAME_MIN_BILLING_PRICE)
  private BigDecimal minBillingPrice;

  public static final String SERIALIZED_NAME_BILLING_PRICE = "billingPrice";
  @SerializedName(SERIALIZED_NAME_BILLING_PRICE)
  private BigDecimal billingPrice;

  public static final String SERIALIZED_NAME_VAT_PRICE = "vatPrice";
  @SerializedName(SERIALIZED_NAME_VAT_PRICE)
  private BigDecimal vatPrice;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private ChargeJangbuStatus status;

  public static final String SERIALIZED_NAME_PAID = "paid";
  @SerializedName(SERIALIZED_NAME_PAID)
  private ChargeJangbuPaid paid;

  public static final String SERIALIZED_NAME_MEMO = "memo";
  @SerializedName(SERIALIZED_NAME_MEMO)
  private String memo;

  public static final String SERIALIZED_NAME_PAID_MEMO = "paidMemo";
  @SerializedName(SERIALIZED_NAME_PAID_MEMO)
  private String paidMemo;

  public static final String SERIALIZED_NAME_CHARGE_JANGBU_PARTNERSHIP = "chargeJangbuPartnership";
  @SerializedName(SERIALIZED_NAME_CHARGE_JANGBU_PARTNERSHIP)
  private ChargeJangbuPartnership chargeJangbuPartnership;

  public static final String SERIALIZED_NAME_JANGBU = "jangbu";
  @SerializedName(SERIALIZED_NAME_JANGBU)
  private Jangbu jangbu;


  public ChargeJangbu jangbuId(BigDecimal jangbuId) {
    
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


  public ChargeJangbu yearMonth(BigDecimal yearMonth) {
    
    this.yearMonth = yearMonth;
    return this;
  }

   /**
   * 해당연월
   * @return yearMonth
  **/
  @ApiModelProperty(required = true, value = "해당연월")

  public BigDecimal getYearMonth() {
    return yearMonth;
  }


  public void setYearMonth(BigDecimal yearMonth) {
    this.yearMonth = yearMonth;
  }


  public ChargeJangbu totalPrice(BigDecimal totalPrice) {
    
    this.totalPrice = totalPrice;
    return this;
  }

   /**
   * 정산합계금액
   * @return totalPrice
  **/
  @ApiModelProperty(required = true, value = "정산합계금액")

  public BigDecimal getTotalPrice() {
    return totalPrice;
  }


  public void setTotalPrice(BigDecimal totalPrice) {
    this.totalPrice = totalPrice;
  }


  public ChargeJangbu discountPrice(BigDecimal discountPrice) {
    
    this.discountPrice = discountPrice;
    return this;
  }

   /**
   * 할인된 금액
   * @return discountPrice
  **/
  @ApiModelProperty(required = true, value = "할인된 금액")

  public BigDecimal getDiscountPrice() {
    return discountPrice;
  }


  public void setDiscountPrice(BigDecimal discountPrice) {
    this.discountPrice = discountPrice;
  }


  public ChargeJangbu minBillingPrice(BigDecimal minBillingPrice) {
    
    this.minBillingPrice = minBillingPrice;
    return this;
  }

   /**
   * 최저이용금액
   * @return minBillingPrice
  **/
  @ApiModelProperty(required = true, value = "최저이용금액")

  public BigDecimal getMinBillingPrice() {
    return minBillingPrice;
  }


  public void setMinBillingPrice(BigDecimal minBillingPrice) {
    this.minBillingPrice = minBillingPrice;
  }


  public ChargeJangbu billingPrice(BigDecimal billingPrice) {
    
    this.billingPrice = billingPrice;
    return this;
  }

   /**
   * 청구금액
   * @return billingPrice
  **/
  @ApiModelProperty(required = true, value = "청구금액")

  public BigDecimal getBillingPrice() {
    return billingPrice;
  }


  public void setBillingPrice(BigDecimal billingPrice) {
    this.billingPrice = billingPrice;
  }


  public ChargeJangbu vatPrice(BigDecimal vatPrice) {
    
    this.vatPrice = vatPrice;
    return this;
  }

   /**
   * 부가세 포함금액
   * @return vatPrice
  **/
  @ApiModelProperty(required = true, value = "부가세 포함금액")

  public BigDecimal getVatPrice() {
    return vatPrice;
  }


  public void setVatPrice(BigDecimal vatPrice) {
    this.vatPrice = vatPrice;
  }


  public ChargeJangbu status(ChargeJangbuStatus status) {
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(required = true, value = "")

  public ChargeJangbuStatus getStatus() {
    return status;
  }


  public void setStatus(ChargeJangbuStatus status) {
    this.status = status;
  }


  public ChargeJangbu paid(ChargeJangbuPaid paid) {
    
    this.paid = paid;
    return this;
  }

   /**
   * Get paid
   * @return paid
  **/
  @ApiModelProperty(required = true, value = "")

  public ChargeJangbuPaid getPaid() {
    return paid;
  }


  public void setPaid(ChargeJangbuPaid paid) {
    this.paid = paid;
  }


  public ChargeJangbu memo(String memo) {
    
    this.memo = memo;
    return this;
  }

   /**
   * 메모 (합계산정이유 등)
   * @return memo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "메모 (합계산정이유 등)")

  public String getMemo() {
    return memo;
  }


  public void setMemo(String memo) {
    this.memo = memo;
  }


  public ChargeJangbu paidMemo(String paidMemo) {
    
    this.paidMemo = paidMemo;
    return this;
  }

   /**
   * 정산관련메모 (미납사유 등)
   * @return paidMemo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "정산관련메모 (미납사유 등)")

  public String getPaidMemo() {
    return paidMemo;
  }


  public void setPaidMemo(String paidMemo) {
    this.paidMemo = paidMemo;
  }


  public ChargeJangbu chargeJangbuPartnership(ChargeJangbuPartnership chargeJangbuPartnership) {
    
    this.chargeJangbuPartnership = chargeJangbuPartnership;
    return this;
  }

   /**
   * 계좌통합서비스
   * @return chargeJangbuPartnership
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "계좌통합서비스")

  public ChargeJangbuPartnership getChargeJangbuPartnership() {
    return chargeJangbuPartnership;
  }


  public void setChargeJangbuPartnership(ChargeJangbuPartnership chargeJangbuPartnership) {
    this.chargeJangbuPartnership = chargeJangbuPartnership;
  }


  public ChargeJangbu jangbu(Jangbu jangbu) {
    
    this.jangbu = jangbu;
    return this;
  }

   /**
   * 장부사
   * @return jangbu
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "장부사")

  public Jangbu getJangbu() {
    return jangbu;
  }


  public void setJangbu(Jangbu jangbu) {
    this.jangbu = jangbu;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ChargeJangbu chargeJangbu = (ChargeJangbu) o;
    return Objects.equals(this.jangbuId, chargeJangbu.jangbuId) &&
        Objects.equals(this.yearMonth, chargeJangbu.yearMonth) &&
        Objects.equals(this.totalPrice, chargeJangbu.totalPrice) &&
        Objects.equals(this.discountPrice, chargeJangbu.discountPrice) &&
        Objects.equals(this.minBillingPrice, chargeJangbu.minBillingPrice) &&
        Objects.equals(this.billingPrice, chargeJangbu.billingPrice) &&
        Objects.equals(this.vatPrice, chargeJangbu.vatPrice) &&
        Objects.equals(this.status, chargeJangbu.status) &&
        Objects.equals(this.paid, chargeJangbu.paid) &&
        Objects.equals(this.memo, chargeJangbu.memo) &&
        Objects.equals(this.paidMemo, chargeJangbu.paidMemo) &&
        Objects.equals(this.chargeJangbuPartnership, chargeJangbu.chargeJangbuPartnership) &&
        Objects.equals(this.jangbu, chargeJangbu.jangbu);
  }

  @Override
  public int hashCode() {
    return Objects.hash(jangbuId, yearMonth, totalPrice, discountPrice, minBillingPrice, billingPrice, vatPrice, status, paid, memo, paidMemo, chargeJangbuPartnership, jangbu);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ChargeJangbu {\n");
    sb.append("    jangbuId: ").append(toIndentedString(jangbuId)).append("\n");
    sb.append("    yearMonth: ").append(toIndentedString(yearMonth)).append("\n");
    sb.append("    totalPrice: ").append(toIndentedString(totalPrice)).append("\n");
    sb.append("    discountPrice: ").append(toIndentedString(discountPrice)).append("\n");
    sb.append("    minBillingPrice: ").append(toIndentedString(minBillingPrice)).append("\n");
    sb.append("    billingPrice: ").append(toIndentedString(billingPrice)).append("\n");
    sb.append("    vatPrice: ").append(toIndentedString(vatPrice)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    paid: ").append(toIndentedString(paid)).append("\n");
    sb.append("    memo: ").append(toIndentedString(memo)).append("\n");
    sb.append("    paidMemo: ").append(toIndentedString(paidMemo)).append("\n");
    sb.append("    chargeJangbuPartnership: ").append(toIndentedString(chargeJangbuPartnership)).append("\n");
    sb.append("    jangbu: ").append(toIndentedString(jangbu)).append("\n");
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

