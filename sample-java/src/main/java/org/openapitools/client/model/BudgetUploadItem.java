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
 * BudgetUploadItem
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-18T15:11:40.792001100+09:00[Asia/Seoul]")
public class BudgetUploadItem {
  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_N_A_M_E = "ESTI_OUT_NAME";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_N_A_M_E)
  private String ESTI_OUT_NAME;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_M_O_N_E_Y = "ESTI_OUT_MONEY";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_M_O_N_E_Y)
  private String ESTI_OUT_MONEY;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M1 = "ESTI_OUT_BASICNUM1";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M1)
  private String ESTI_OUT_BASICNUM1;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T1 = "ESTI_OUT_BASICTEXT1";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T1)
  private String ESTI_OUT_BASICTEXT1;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M2 = "ESTI_OUT_BASICNUM2";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M2)
  private String ESTI_OUT_BASICNUM2;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T2 = "ESTI_OUT_BASICTEXT2";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T2)
  private String ESTI_OUT_BASICTEXT2;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M3 = "ESTI_OUT_BASICNUM3";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M3)
  private String ESTI_OUT_BASICNUM3;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T3 = "ESTI_OUT_BASICTEXT3";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T3)
  private String ESTI_OUT_BASICTEXT3;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M4 = "ESTI_OUT_BASICNUM4";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M4)
  private String ESTI_OUT_BASICNUM4;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T4 = "ESTI_OUT_BASICTEXT4";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T4)
  private String ESTI_OUT_BASICTEXT4;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M5 = "ESTI_OUT_BASICNUM5";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M5)
  private String ESTI_OUT_BASICNUM5;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T5 = "ESTI_OUT_BASICTEXT5";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T5)
  private String ESTI_OUT_BASICTEXT5;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M6 = "ESTI_OUT_BASICNUM6";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M6)
  private String ESTI_OUT_BASICNUM6;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T6 = "ESTI_OUT_BASICTEXT6";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T6)
  private String ESTI_OUT_BASICTEXT6;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M7 = "ESTI_OUT_BASICNUM7";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M7)
  private String ESTI_OUT_BASICNUM7;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T7 = "ESTI_OUT_BASICTEXT7";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T7)
  private String ESTI_OUT_BASICTEXT7;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M8 = "ESTI_OUT_BASICNUM8";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M8)
  private String ESTI_OUT_BASICNUM8;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T8 = "ESTI_OUT_BASICTEXT8";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T8)
  private String ESTI_OUT_BASICTEXT8;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M9 = "ESTI_OUT_BASICNUM9";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_N_U_M9)
  private String ESTI_OUT_BASICNUM9;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T9 = "ESTI_OUT_BASICTEXT9";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_B_A_S_I_C_T_E_X_T9)
  private String ESTI_OUT_BASICTEXT9;

  public static final String SERIALIZED_NAME_E_S_T_I_O_U_T_T_O_T_M_O_N_E_Y = "ESTI_OUT_TOTMONEY";
  @SerializedName(SERIALIZED_NAME_E_S_T_I_O_U_T_T_O_T_M_O_N_E_Y)
  private BigDecimal ESTI_OUT_TOTMONEY;


  public BudgetUploadItem ESTI_OUT_NAME(String ESTI_OUT_NAME) {
    
    this.ESTI_OUT_NAME = ESTI_OUT_NAME;
    return this;
  }

   /**
   * 산출기초명
   * @return ESTI_OUT_NAME
  **/
  @ApiModelProperty(required = true, value = "산출기초명")

  public String getESTIOUTNAME() {
    return ESTI_OUT_NAME;
  }


  public void setESTIOUTNAME(String ESTI_OUT_NAME) {
    this.ESTI_OUT_NAME = ESTI_OUT_NAME;
  }


  public BudgetUploadItem ESTI_OUT_MONEY(String ESTI_OUT_MONEY) {
    
    this.ESTI_OUT_MONEY = ESTI_OUT_MONEY;
    return this;
  }

   /**
   * 단가
   * @return ESTI_OUT_MONEY
  **/
  @ApiModelProperty(required = true, value = "단가")

  public String getESTIOUTMONEY() {
    return ESTI_OUT_MONEY;
  }


  public void setESTIOUTMONEY(String ESTI_OUT_MONEY) {
    this.ESTI_OUT_MONEY = ESTI_OUT_MONEY;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM1(String ESTI_OUT_BASICNUM1) {
    
    this.ESTI_OUT_BASICNUM1 = ESTI_OUT_BASICNUM1;
    return this;
  }

   /**
   * 수량1 (없을시 생략)
   * @return ESTI_OUT_BASICNUM1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량1 (없을시 생략)")

  public String getESTIOUTBASICNUM1() {
    return ESTI_OUT_BASICNUM1;
  }


  public void setESTIOUTBASICNUM1(String ESTI_OUT_BASICNUM1) {
    this.ESTI_OUT_BASICNUM1 = ESTI_OUT_BASICNUM1;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT1(String ESTI_OUT_BASICTEXT1) {
    
    this.ESTI_OUT_BASICTEXT1 = ESTI_OUT_BASICTEXT1;
    return this;
  }

   /**
   * 단위1 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위1 (없을시 생략)")

  public String getESTIOUTBASICTEXT1() {
    return ESTI_OUT_BASICTEXT1;
  }


  public void setESTIOUTBASICTEXT1(String ESTI_OUT_BASICTEXT1) {
    this.ESTI_OUT_BASICTEXT1 = ESTI_OUT_BASICTEXT1;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM2(String ESTI_OUT_BASICNUM2) {
    
    this.ESTI_OUT_BASICNUM2 = ESTI_OUT_BASICNUM2;
    return this;
  }

   /**
   * 수량2 (없을시 생략)
   * @return ESTI_OUT_BASICNUM2
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량2 (없을시 생략)")

  public String getESTIOUTBASICNUM2() {
    return ESTI_OUT_BASICNUM2;
  }


  public void setESTIOUTBASICNUM2(String ESTI_OUT_BASICNUM2) {
    this.ESTI_OUT_BASICNUM2 = ESTI_OUT_BASICNUM2;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT2(String ESTI_OUT_BASICTEXT2) {
    
    this.ESTI_OUT_BASICTEXT2 = ESTI_OUT_BASICTEXT2;
    return this;
  }

   /**
   * 단위2 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT2
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위2 (없을시 생략)")

  public String getESTIOUTBASICTEXT2() {
    return ESTI_OUT_BASICTEXT2;
  }


  public void setESTIOUTBASICTEXT2(String ESTI_OUT_BASICTEXT2) {
    this.ESTI_OUT_BASICTEXT2 = ESTI_OUT_BASICTEXT2;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM3(String ESTI_OUT_BASICNUM3) {
    
    this.ESTI_OUT_BASICNUM3 = ESTI_OUT_BASICNUM3;
    return this;
  }

   /**
   * 수량3 (없을시 생략)
   * @return ESTI_OUT_BASICNUM3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량3 (없을시 생략)")

  public String getESTIOUTBASICNUM3() {
    return ESTI_OUT_BASICNUM3;
  }


  public void setESTIOUTBASICNUM3(String ESTI_OUT_BASICNUM3) {
    this.ESTI_OUT_BASICNUM3 = ESTI_OUT_BASICNUM3;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT3(String ESTI_OUT_BASICTEXT3) {
    
    this.ESTI_OUT_BASICTEXT3 = ESTI_OUT_BASICTEXT3;
    return this;
  }

   /**
   * 단위3 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위3 (없을시 생략)")

  public String getESTIOUTBASICTEXT3() {
    return ESTI_OUT_BASICTEXT3;
  }


  public void setESTIOUTBASICTEXT3(String ESTI_OUT_BASICTEXT3) {
    this.ESTI_OUT_BASICTEXT3 = ESTI_OUT_BASICTEXT3;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM4(String ESTI_OUT_BASICNUM4) {
    
    this.ESTI_OUT_BASICNUM4 = ESTI_OUT_BASICNUM4;
    return this;
  }

   /**
   * 수량4 (없을시 생략)
   * @return ESTI_OUT_BASICNUM4
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량4 (없을시 생략)")

  public String getESTIOUTBASICNUM4() {
    return ESTI_OUT_BASICNUM4;
  }


  public void setESTIOUTBASICNUM4(String ESTI_OUT_BASICNUM4) {
    this.ESTI_OUT_BASICNUM4 = ESTI_OUT_BASICNUM4;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT4(String ESTI_OUT_BASICTEXT4) {
    
    this.ESTI_OUT_BASICTEXT4 = ESTI_OUT_BASICTEXT4;
    return this;
  }

   /**
   * 단위4 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT4
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위4 (없을시 생략)")

  public String getESTIOUTBASICTEXT4() {
    return ESTI_OUT_BASICTEXT4;
  }


  public void setESTIOUTBASICTEXT4(String ESTI_OUT_BASICTEXT4) {
    this.ESTI_OUT_BASICTEXT4 = ESTI_OUT_BASICTEXT4;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM5(String ESTI_OUT_BASICNUM5) {
    
    this.ESTI_OUT_BASICNUM5 = ESTI_OUT_BASICNUM5;
    return this;
  }

   /**
   * 수량5 (없을시 생략)
   * @return ESTI_OUT_BASICNUM5
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량5 (없을시 생략)")

  public String getESTIOUTBASICNUM5() {
    return ESTI_OUT_BASICNUM5;
  }


  public void setESTIOUTBASICNUM5(String ESTI_OUT_BASICNUM5) {
    this.ESTI_OUT_BASICNUM5 = ESTI_OUT_BASICNUM5;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT5(String ESTI_OUT_BASICTEXT5) {
    
    this.ESTI_OUT_BASICTEXT5 = ESTI_OUT_BASICTEXT5;
    return this;
  }

   /**
   * 단위5 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT5
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위5 (없을시 생략)")

  public String getESTIOUTBASICTEXT5() {
    return ESTI_OUT_BASICTEXT5;
  }


  public void setESTIOUTBASICTEXT5(String ESTI_OUT_BASICTEXT5) {
    this.ESTI_OUT_BASICTEXT5 = ESTI_OUT_BASICTEXT5;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM6(String ESTI_OUT_BASICNUM6) {
    
    this.ESTI_OUT_BASICNUM6 = ESTI_OUT_BASICNUM6;
    return this;
  }

   /**
   * 수량6 (없을시 생략)
   * @return ESTI_OUT_BASICNUM6
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량6 (없을시 생략)")

  public String getESTIOUTBASICNUM6() {
    return ESTI_OUT_BASICNUM6;
  }


  public void setESTIOUTBASICNUM6(String ESTI_OUT_BASICNUM6) {
    this.ESTI_OUT_BASICNUM6 = ESTI_OUT_BASICNUM6;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT6(String ESTI_OUT_BASICTEXT6) {
    
    this.ESTI_OUT_BASICTEXT6 = ESTI_OUT_BASICTEXT6;
    return this;
  }

   /**
   * 단위6 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT6
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위6 (없을시 생략)")

  public String getESTIOUTBASICTEXT6() {
    return ESTI_OUT_BASICTEXT6;
  }


  public void setESTIOUTBASICTEXT6(String ESTI_OUT_BASICTEXT6) {
    this.ESTI_OUT_BASICTEXT6 = ESTI_OUT_BASICTEXT6;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM7(String ESTI_OUT_BASICNUM7) {
    
    this.ESTI_OUT_BASICNUM7 = ESTI_OUT_BASICNUM7;
    return this;
  }

   /**
   * 수량7 (없을시 생략)
   * @return ESTI_OUT_BASICNUM7
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량7 (없을시 생략)")

  public String getESTIOUTBASICNUM7() {
    return ESTI_OUT_BASICNUM7;
  }


  public void setESTIOUTBASICNUM7(String ESTI_OUT_BASICNUM7) {
    this.ESTI_OUT_BASICNUM7 = ESTI_OUT_BASICNUM7;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT7(String ESTI_OUT_BASICTEXT7) {
    
    this.ESTI_OUT_BASICTEXT7 = ESTI_OUT_BASICTEXT7;
    return this;
  }

   /**
   * 단위7 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT7
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위7 (없을시 생략)")

  public String getESTIOUTBASICTEXT7() {
    return ESTI_OUT_BASICTEXT7;
  }


  public void setESTIOUTBASICTEXT7(String ESTI_OUT_BASICTEXT7) {
    this.ESTI_OUT_BASICTEXT7 = ESTI_OUT_BASICTEXT7;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM8(String ESTI_OUT_BASICNUM8) {
    
    this.ESTI_OUT_BASICNUM8 = ESTI_OUT_BASICNUM8;
    return this;
  }

   /**
   * 수량8 (없을시 생략)
   * @return ESTI_OUT_BASICNUM8
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량8 (없을시 생략)")

  public String getESTIOUTBASICNUM8() {
    return ESTI_OUT_BASICNUM8;
  }


  public void setESTIOUTBASICNUM8(String ESTI_OUT_BASICNUM8) {
    this.ESTI_OUT_BASICNUM8 = ESTI_OUT_BASICNUM8;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT8(String ESTI_OUT_BASICTEXT8) {
    
    this.ESTI_OUT_BASICTEXT8 = ESTI_OUT_BASICTEXT8;
    return this;
  }

   /**
   * 단위9 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT8
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위9 (없을시 생략)")

  public String getESTIOUTBASICTEXT8() {
    return ESTI_OUT_BASICTEXT8;
  }


  public void setESTIOUTBASICTEXT8(String ESTI_OUT_BASICTEXT8) {
    this.ESTI_OUT_BASICTEXT8 = ESTI_OUT_BASICTEXT8;
  }


  public BudgetUploadItem ESTI_OUT_BASICNUM9(String ESTI_OUT_BASICNUM9) {
    
    this.ESTI_OUT_BASICNUM9 = ESTI_OUT_BASICNUM9;
    return this;
  }

   /**
   * 수량9 (없을시 생략)
   * @return ESTI_OUT_BASICNUM9
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "수량9 (없을시 생략)")

  public String getESTIOUTBASICNUM9() {
    return ESTI_OUT_BASICNUM9;
  }


  public void setESTIOUTBASICNUM9(String ESTI_OUT_BASICNUM9) {
    this.ESTI_OUT_BASICNUM9 = ESTI_OUT_BASICNUM9;
  }


  public BudgetUploadItem ESTI_OUT_BASICTEXT9(String ESTI_OUT_BASICTEXT9) {
    
    this.ESTI_OUT_BASICTEXT9 = ESTI_OUT_BASICTEXT9;
    return this;
  }

   /**
   * 단위9 (없을시 생략)
   * @return ESTI_OUT_BASICTEXT9
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "단위9 (없을시 생략)")

  public String getESTIOUTBASICTEXT9() {
    return ESTI_OUT_BASICTEXT9;
  }


  public void setESTIOUTBASICTEXT9(String ESTI_OUT_BASICTEXT9) {
    this.ESTI_OUT_BASICTEXT9 = ESTI_OUT_BASICTEXT9;
  }


  public BudgetUploadItem ESTI_OUT_TOTMONEY(BigDecimal ESTI_OUT_TOTMONEY) {
    
    this.ESTI_OUT_TOTMONEY = ESTI_OUT_TOTMONEY;
    return this;
  }

   /**
   * 합계(산출액)
   * @return ESTI_OUT_TOTMONEY
  **/
  @ApiModelProperty(required = true, value = "합계(산출액)")

  public BigDecimal getESTIOUTTOTMONEY() {
    return ESTI_OUT_TOTMONEY;
  }


  public void setESTIOUTTOTMONEY(BigDecimal ESTI_OUT_TOTMONEY) {
    this.ESTI_OUT_TOTMONEY = ESTI_OUT_TOTMONEY;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BudgetUploadItem budgetUploadItem = (BudgetUploadItem) o;
    return Objects.equals(this.ESTI_OUT_NAME, budgetUploadItem.ESTI_OUT_NAME) &&
        Objects.equals(this.ESTI_OUT_MONEY, budgetUploadItem.ESTI_OUT_MONEY) &&
        Objects.equals(this.ESTI_OUT_BASICNUM1, budgetUploadItem.ESTI_OUT_BASICNUM1) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT1, budgetUploadItem.ESTI_OUT_BASICTEXT1) &&
        Objects.equals(this.ESTI_OUT_BASICNUM2, budgetUploadItem.ESTI_OUT_BASICNUM2) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT2, budgetUploadItem.ESTI_OUT_BASICTEXT2) &&
        Objects.equals(this.ESTI_OUT_BASICNUM3, budgetUploadItem.ESTI_OUT_BASICNUM3) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT3, budgetUploadItem.ESTI_OUT_BASICTEXT3) &&
        Objects.equals(this.ESTI_OUT_BASICNUM4, budgetUploadItem.ESTI_OUT_BASICNUM4) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT4, budgetUploadItem.ESTI_OUT_BASICTEXT4) &&
        Objects.equals(this.ESTI_OUT_BASICNUM5, budgetUploadItem.ESTI_OUT_BASICNUM5) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT5, budgetUploadItem.ESTI_OUT_BASICTEXT5) &&
        Objects.equals(this.ESTI_OUT_BASICNUM6, budgetUploadItem.ESTI_OUT_BASICNUM6) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT6, budgetUploadItem.ESTI_OUT_BASICTEXT6) &&
        Objects.equals(this.ESTI_OUT_BASICNUM7, budgetUploadItem.ESTI_OUT_BASICNUM7) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT7, budgetUploadItem.ESTI_OUT_BASICTEXT7) &&
        Objects.equals(this.ESTI_OUT_BASICNUM8, budgetUploadItem.ESTI_OUT_BASICNUM8) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT8, budgetUploadItem.ESTI_OUT_BASICTEXT8) &&
        Objects.equals(this.ESTI_OUT_BASICNUM9, budgetUploadItem.ESTI_OUT_BASICNUM9) &&
        Objects.equals(this.ESTI_OUT_BASICTEXT9, budgetUploadItem.ESTI_OUT_BASICTEXT9) &&
        Objects.equals(this.ESTI_OUT_TOTMONEY, budgetUploadItem.ESTI_OUT_TOTMONEY);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ESTI_OUT_NAME, ESTI_OUT_MONEY, ESTI_OUT_BASICNUM1, ESTI_OUT_BASICTEXT1, ESTI_OUT_BASICNUM2, ESTI_OUT_BASICTEXT2, ESTI_OUT_BASICNUM3, ESTI_OUT_BASICTEXT3, ESTI_OUT_BASICNUM4, ESTI_OUT_BASICTEXT4, ESTI_OUT_BASICNUM5, ESTI_OUT_BASICTEXT5, ESTI_OUT_BASICNUM6, ESTI_OUT_BASICTEXT6, ESTI_OUT_BASICNUM7, ESTI_OUT_BASICTEXT7, ESTI_OUT_BASICNUM8, ESTI_OUT_BASICTEXT8, ESTI_OUT_BASICNUM9, ESTI_OUT_BASICTEXT9, ESTI_OUT_TOTMONEY);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BudgetUploadItem {\n");
    sb.append("    ESTI_OUT_NAME: ").append(toIndentedString(ESTI_OUT_NAME)).append("\n");
    sb.append("    ESTI_OUT_MONEY: ").append(toIndentedString(ESTI_OUT_MONEY)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM1: ").append(toIndentedString(ESTI_OUT_BASICNUM1)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT1: ").append(toIndentedString(ESTI_OUT_BASICTEXT1)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM2: ").append(toIndentedString(ESTI_OUT_BASICNUM2)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT2: ").append(toIndentedString(ESTI_OUT_BASICTEXT2)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM3: ").append(toIndentedString(ESTI_OUT_BASICNUM3)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT3: ").append(toIndentedString(ESTI_OUT_BASICTEXT3)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM4: ").append(toIndentedString(ESTI_OUT_BASICNUM4)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT4: ").append(toIndentedString(ESTI_OUT_BASICTEXT4)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM5: ").append(toIndentedString(ESTI_OUT_BASICNUM5)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT5: ").append(toIndentedString(ESTI_OUT_BASICTEXT5)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM6: ").append(toIndentedString(ESTI_OUT_BASICNUM6)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT6: ").append(toIndentedString(ESTI_OUT_BASICTEXT6)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM7: ").append(toIndentedString(ESTI_OUT_BASICNUM7)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT7: ").append(toIndentedString(ESTI_OUT_BASICTEXT7)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM8: ").append(toIndentedString(ESTI_OUT_BASICNUM8)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT8: ").append(toIndentedString(ESTI_OUT_BASICTEXT8)).append("\n");
    sb.append("    ESTI_OUT_BASICNUM9: ").append(toIndentedString(ESTI_OUT_BASICNUM9)).append("\n");
    sb.append("    ESTI_OUT_BASICTEXT9: ").append(toIndentedString(ESTI_OUT_BASICTEXT9)).append("\n");
    sb.append("    ESTI_OUT_TOTMONEY: ").append(toIndentedString(ESTI_OUT_TOTMONEY)).append("\n");
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

