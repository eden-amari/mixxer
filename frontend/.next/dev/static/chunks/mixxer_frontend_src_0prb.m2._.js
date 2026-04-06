(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorSliver",
    ()=>ColorSliver,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ColorSliver({ className }) {
    const classes = [
        "colorSliver",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = ColorSliver;
const __TURBOPACK__default__export__ = ColorSliver;
var _c;
__turbopack_context__.k.register(_c, "ColorSliver");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox,
    "SubmitButton",
    ()=>SubmitButton,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HomeImportButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 7,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/importPlaylist",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "homeImportButton agrandir",
                    children: "Import Playlist"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                    lineNumber: 9,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 8,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, this);
}
_c = HomeImportButton;
const __TURBOPACK__default__export__ = HomeImportButton;
function SubmitButton({ className, onClick, disabled, style }) {
    const classes = [
        "SubmitButton",
        className,
        style
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/importPlaylist",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: classes,
                onClick: onClick,
                disabled: disabled,
                style: style,
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
            lineNumber: 37,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, this);
}
_c1 = SubmitButton;
function Checkbox() {
    _s();
    const [checked, setchecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            justifyContent: "space-between",
            display: "flex",
            width: "22vw",
            marginBottom: ".5vh",
            marginTop: "1vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "p",
                style: {
                    color: "#9396a7"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        style: {
                            marginLeft: "10px"
                        },
                        type: "checkbox",
                        checked: checked,
                        onChange: (e)=>{
                            setchecked(e.target.checked);
                        }
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                        lineNumber: 66,
                        columnNumber: 5
                    }, this),
                    " ",
                    "Remember Me"
                ]
            }, void 0, true, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 65,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/account/forgotPassword",
                className: "forgotPassword p",
                style: {
                    color: "#9396a7"
                },
                children: "Forgot Password?"
            }, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 77,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this);
} // ---------------------------------------
 // type SubmitButtonProps = {
 //   className?: string;
 //   onClick?: () => void;
 //   disabled?: boolean;
 //   style?: React.CSSProperties;
 // };
 // export function SubmitButton({ className, onClick, disabled, style}: SubmitButtonProps) {
 //   const classes = ["SubmitButton", className, style].filter(Boolean).join(" ");
 //   return (
 //     <div>
 //       {/* <ColorSliver/> */}
 //       <a href="/importPlaylist">
 //         <button className={classes} onClick={onClick} disabled={disabled} style={style}>
 //           <p className="p">Submit</p>
 //         </button>
 //       </a>
 //     </div>
 //   );
 // }
 // ---------------------------------------
 // type LoginSignupProps = {
 //     className?: string;
 //   };
 // ------------------------
 // export function DarkModeButton() {
 //   return (
 //     <div>
 //       <button className="darkModeButton agrandir" onClick={() => { isDarkMode = true; change2DarkMode(); }}>Dark Mode</button>
 //     </div>
 //   );
 // }
 // export function change2DarkMode() {
 //   document.documentElement.style.setProperty('--headings', darkModeColors.headings);
 //   document.documentElement.style.setProperty('--bubbleBackground', darkModeColors.bubbleBackground);
 //   document.documentElement.style.setProperty('--bubbleText', darkModeColors.bubbleText);
 //   document.documentElement.style.setProperty('--grayText', darkModeColors.grayText);
 //   document.documentElement.style.setProperty('--boxBackground', darkModeColors.boxBackground);
 //   document.documentElement.style.setProperty('--fullBackground', darkModeColors.fullBackground);
 //   document.documentElement.style.setProperty('--accent1', darkModeColors.accent1);
 //   document.documentElement.style.setProperty('--accent2', darkModeColors.accent2);
 // }
 // export function LightModeButton() {
 //   return (
 //     <button className="lightModeButton agrandir" onClick={() => change2LightMode()}>Light Mode</button>
 //   );
 // }
 // export function change2LightMode() {
 //   document.documentElement.style.setProperty('--headings', lightModeColors.headings);
 //   document.documentElement.style.setProperty('--bubbleBackground', lightModeColors.bubbleBackground);
 //   document.documentElement.style.setProperty('--bubbleText', lightModeColors.bubbleText);
 //   document.documentElement.style.setProperty('--grayText', lightModeColors.grayText);
 //   document.documentElement.style.setProperty('--boxBackground', lightModeColors.boxBackground);
 //   document.documentElement.style.setProperty('--fullBackground', lightModeColors.fullBackground);
 //   document.documentElement.style.setProperty('--accent1', lightModeColors.accent1);
 //   document.documentElement.style.setProperty('--accent2', lightModeColors.accent2);
 // }
 // const lightModeColors = {
 //   headings: "#000000",
 //   bubbleBackground: "#2e2f33",
 //   bubbleText: "#ffffff",
 //   grayText: "#9396a7",
 //   boxBackground: "#ffffff",
 //   fullBackground: "#2e2f33",
 //   accent1: "#99acff",
 //   accent2: "#6b7bd0",
 // };
 // const darkModeColors = {
 //   headings: "#ffffff",
 //   bubbleBackground: "#ffffff",
 //   bubbleText: "#000000",
 //   grayText: "#9396a7",
 //   boxBackground: "#2e2f33",
 //   fullBackground: "#000000",
 //   accent1: "#99acff",
 //   accent2: "#6b7bd0",
 // };
 // export function colorChange() {
 //   function handleClick() {
 //     alert('You clicked me! Changing color now.');
 //   }
 //   if (isDarkMode) {
 //     change2LightMode();
 //   } else {
 //     change2DarkMode();
 //   }
 //   isDarkMode = !isDarkMode;
 // }
 // export function ThemeToggle({ themeSwitch = f => f }) {
 //   return (
 //     <button
 //       className="themeToggle"
 //       type="button"
 //       onClick={themeSwitch}
 //       aria-label="change theme color"
 //     />
 //   )
 // }
_s(Checkbox, "H6r272ULqhwJqCjO226ka/SmIbE=");
_c2 = Checkbox;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HomeImportButton");
__turbopack_context__.k.register(_c1, "SubmitButton");
__turbopack_context__.k.register(_c2, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/components/MainBlocks/Panels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BigPanel",
    ()=>BigPanel,
    "LeftPanel",
    ()=>LeftPanel,
    "RightPanel",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function LeftPanel({ className, children }) {
    const classes = [
        "leftPanel",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            display: "flex",
            flexDirection: "column"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/MainBlocks/Panels.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
_c = LeftPanel;
function RightPanel({ className, children }) {
    const classes = [
        "rightPanel",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            display: "flex",
            flexDirection: "column"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/MainBlocks/Panels.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
}
_c1 = RightPanel;
function BigPanel({ className, children }) {
    const classes = [
        "bigPanel",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            display: "flex",
            flexDirection: "column"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/MainBlocks/Panels.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}
_c2 = BigPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LeftPanel");
__turbopack_context__.k.register(_c1, "RightPanel");
__turbopack_context__.k.register(_c2, "BigPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Navbar = ({ className })=>{
    _s();
    const [isDropdownVisible, setDropdownVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = ()=>{
        setDropdownVisible(true);
    };
    const handleMouseLeave = ()=>{
        setDropdownVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "nav-links",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "li",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/popNow",
                        children: "Popular Now"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                        lineNumber: 22,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "li",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 24,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "li",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/account/signIn",
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "li",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 28,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "li",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/account/signUp",
                        children: "Sign Up"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                        lineNumber: 30,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 29,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
            lineNumber: 20,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "tug96AVizmuSo8z3ZEuMhiPVNb4=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // export const DropdownMenu = () => {
 //   return (
 //     <div className="dropdown-menu">
 //       <ul className='ddul'>
 //         <li className='ddli'>Sign In</li>
 //         <li className='ddli'>Sign Up</li>
 //       </ul>
 //     </div>
 //   );
 // };
}),
"[project]/mixxer/frontend/src/components/SongCard/SongCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SongCard",
    ()=>SongCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function SongCard({ className, children }) {
    const classes = [
        "songCard",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            display: "flex",
            flexDirection: "column"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/SongCard/SongCard.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
_c = SongCard;
var _c;
__turbopack_context__.k.register(_c, "SongCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/app/importPlaylist/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Standard Imports ------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
// Component Imports ------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$MainBlocks$2f$Panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/MainBlocks/Panels.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$SongCard$2f$SongCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/SongCard/SongCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                lineNumber: 28,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "defaultDiv",
                style: {
                    backgroundColor: "#2e2f33"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flexRow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$MainBlocks$2f$Panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftPanel"], {
                            className: "importLeftPanel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "h1",
                                    children: "Import..."
                                }, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "h3",
                                    children: "Organize. Share. Enjoy."
                                }, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                    className: "hr"
                                }, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "welcomeText",
                                    children: "Enhance your listening experience by organizing your playlist--sort by BPM, mood, and genre to create seamless transitions."
                                }, void 0, false, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "buttonHolder",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSliver"], {
                                            className: "donnaColorSliver"
                                        }, void 0, false, {
                                            fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                            lineNumber: 31,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$MainBlocks$2f$Panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftPanel"], {
                            className: "leftDonnaSmall"
                        }, void 0, false, {
                            fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                            lineNumber: 51,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                    lineNumber: 30,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
                lineNumber: 29,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mixxer/frontend/src/app/importPlaylist/page.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mixxer_frontend_src_0prb.m2._.js.map