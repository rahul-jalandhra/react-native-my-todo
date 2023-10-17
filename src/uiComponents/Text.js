
import React from 'react'
import { Platform, Text, } from 'react-native'

export const Heading = (props) => {
    const { children, marginTop = 0, marginBottom = 0,fontSize=32 } = props
    return (
        <Text style={{
            fontSize:fontSize ,
            color: "#000000",
            fontWeight: "600",
            marginTop: marginTop,
            marginBottom: marginBottom,
        }}>
            {children}
        </Text>
    )
};

export const SubHeading = (props) => {
    const { children, marginTop = 0, marginBottom = 0, textAlign = "left", fontWeight = '600',color="#000000" } = props
    return (
        <Text style={{
            fontSize: 20,
            color: color,
            fontWeight: fontWeight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            textAlign: textAlign,
        }}>
            {children}
        </Text>
    )
};

export const Description = (props) => {
    const { children, marginTop = 0, marginBottom = 0, textAlign = 'left', color = "#000000", fontWeight = "400", fontSize=12,letterSpacing=0,fontStyle='normal' } = props;
    return (
        <Text style={{
            fontSize: fontSize,
            color: color,
            fontWeight: fontWeight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            textAlign: textAlign,
            letterSpacing:letterSpacing,
            fontStyle:fontStyle
        }}>
            {children}
        </Text>
    )
};

export const Label = (props) => {
    const {
        children,
        fontWeight = "400",
        color = "#000000",
        marginTop = 0,
        marginBottom = 0,
        textAlign = 'left',
        textDecorationLine = 'none',
        lineHeight,
        opacity=1,
        fontStyle='normal'
    } = props;
    return (
        <Text style={{
            fontSize: 16,
            color: color,
            fontWeight: fontWeight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            textAlign: textAlign,
            lineHeight: lineHeight ? lineHeight : Platform.OS === "ios" ? 0 : 24,
            textDecorationLine: textDecorationLine,
            opacity:opacity,
            fontStyle:fontStyle
        }}>
            {children}
        </Text>
    )
};