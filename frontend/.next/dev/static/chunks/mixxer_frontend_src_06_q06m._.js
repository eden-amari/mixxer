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
                href: "/organizePlaylist/import",
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
function SubmitButton({ className, onClick, disabled, style, link }) {
    const classes = [
        "SubmitButton",
        className,
        style,
        link
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: classes,
                onClick: onClick,
                disabled: disabled,
                style: style,
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
            lineNumber: 39,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
        lineNumber: 37,
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
                        lineNumber: 68,
                        columnNumber: 5
                    }, this),
                    " ",
                    "Remember Me"
                ]
            }, void 0, true, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 67,
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
                lineNumber: 79,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
        lineNumber: 58,
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
"use client";
;
;
const Navbar = ({ className, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        style: style,
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
                        lineNumber: 16,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "li",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "li",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/account/signIn",
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 19,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "li",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "li",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/account/signUp",
                        children: "Sign Up"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                        lineNumber: 24,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
            lineNumber: 14,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
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
"[project]/mixxer/frontend/src/assets/images/donnaAlbumCover.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/donnaAlbumCover.032kuzsvz.tht.jpeg");}),
"[project]/mixxer/frontend/src/assets/images/donnaAlbumCover.jpeg.mjs { IMAGE => \"[project]/mixxer/frontend/src/assets/images/donnaAlbumCover.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$donnaAlbumCover$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/assets/images/donnaAlbumCover.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$donnaAlbumCover$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 640,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDCSwuLtzKJ4kCRh4034yozuyMe3FdM8Q4VlBEKiqlFzZ//2Q=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/assets/images/mxr.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/mxr.034~peexz5w-j.png");}),
"[project]/mixxer/frontend/src/assets/images/mxr.png.mjs { IMAGE => \"[project]/mixxer/frontend/src/assets/images/mxr.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$mxr$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/assets/images/mxr.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$mxr$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2000,
    height: 2000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAYElEQVR42o2OQQrAIAwEtc/x1qcJnn2VR58gklMhEMhPkrJQhF5aFwLLMCEJYScxxiOldJZSKgYdbAkARHTZE3SwJWBrjGG9d2+tuYgY2EtgZptzOiRVtZxz3T/x++RXbk+DTE6trIGzAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/app/account/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/mixxer/frontend/src/app/account/dashboard/page.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=mixxer_frontend_src_06_q06m._.js.map