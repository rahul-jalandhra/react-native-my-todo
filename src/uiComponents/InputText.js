import React from 'react'
import { Dimensions, PixelRatio, StyleSheet, TextInput } from 'react-native'

function InputText(props) {
  const {
    style,
    value,
    onFocus,
    onBlur,
    onChangeText,
    editable,
    maxLength,
    multiline,
    inputMode,
    keyboardType,
    secureTextEntry,
    placeholder,
    textAlign,
    error,
    selectTextOnFocus=false,
    autoFocus,
    autoCapitalize,
    fontSize= 16,
    fontWeight='400',
    color="#000000"
  } = props;
  return (
    <TextInput
      style={[
        [styles.input, {
          fontSize:fontSize,
          color:color,
          fontWeight:fontWeight,
          textAlign: textAlign || 'left',
          borderColor: !error ? "#f5f5f5" : "#F7CDCD",
          backgroundColor: !error ? "#ffffff" : "#FFF3F3",
          ...style
        }],

      ]}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
      editable={editable}
      maxLength={maxLength}
      multiline={multiline}
      inputMode={inputMode}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={"#5A5A5A"}
      selectTextOnFocus={selectTextOnFocus}
      autoFocus={autoFocus}
      autoCapitalize={autoCapitalize}

    />
  )
}

export default InputText;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    color: "#5A5A5A",
    paddingVertical:Dimensions.get('screen').height/65,
    paddingHorizontal: 10,
    fontWeight: '400',
    borderRadius: 15,
    marginVertical: 12,
  }
})