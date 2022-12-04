var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 0;\n    line-height: 1;\n    font-size: 15px;\n    cursor: pointer;\n    font-weight: 700;\n    font-weight: bold;\n    border-radius: 3px;\n    display: inline-block;\n    padding: ", ";\n    color: ", ";\n    background-color: ", ";\n    opacity: ", ";\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n        border: solid 2px #1b116e;\n        padding: ", ";\n    }\n"], ["\n    border: 0;\n    line-height: 1;\n    font-size: 15px;\n    cursor: pointer;\n    font-weight: 700;\n    font-weight: bold;\n    border-radius: 3px;\n    display: inline-block;\n    padding: ", ";\n    color: ", ";\n    background-color: ", ";\n    opacity: ", ";\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n        border: solid 2px #1b116e;\n        padding: ", ";\n    }\n"])), function (props) { return props.size === "small" ? "7px 25px 8px" : (props.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"); }, function (props) { return props.primary ? "#1b116e" : "#ffffff"; }, function (props) { return props.primary ? "#6bedb5" : "#1b116e"; }, function (props) { return props.disabled ? 0.5 : 1; }, function (props) { return props.primary ? "#55bd90" : "#6bedb5"; }, function (props) { return props.size === "small" ? "5px 23px 6px" : (props.size === "medium" ? "7px 28px 9px" : "12px 28px 14px"); });
var Button = function (_a) {
    var size = _a.size, primary = _a.primary, disabled = _a.disabled, text = _a.text, onClick = _a.onClick, props = __rest(_a, ["size", "primary", "disabled", "text", "onClick"]);
    return (React.createElement(StyledButton, __assign({ type: "button", onClick: onClick, primary: primary, disabled: disabled, size: size }, props), text));
};
export default Button;
var templateObject_1;
