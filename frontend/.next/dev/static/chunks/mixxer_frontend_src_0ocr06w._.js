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
"[project]/mixxer/frontend/src/assets/images/googleLogo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/googleLogo.01-yh3asegp23.png");}),
"[project]/mixxer/frontend/src/assets/images/googleLogo.png.mjs { IMAGE => \"[project]/mixxer/frontend/src/assets/images/googleLogo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$googleLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/assets/images/googleLogo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$googleLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 136,
    height: 138,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAf0lEQVR42m3PvQqBcRTA4ROxuQQLUcxmdqvB5FZcgtG9SIyU0ULJZLIZfISU563/9DI8dYZfnXMiIgp0mXPjwYo+RaLHnieHNF8YU8qCBS8m1GkxoEolC+4cqdFkxjqtWeaDNhtOfLjmVzToMOWd4p8jd+mTM8P482YWbhlR/gLLFiYr1ko6rgAAAABJRU5ErkJggg=="
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
"[project]/mixxer/frontend/src/assets/images/spotifyLogo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/spotifyLogo.13qjj_-_vz2_5.png");}),
"[project]/mixxer/frontend/src/assets/images/spotifyLogo.png.mjs { IMAGE => \"[project]/mixxer/frontend/src/assets/images/spotifyLogo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$spotifyLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/assets/images/spotifyLogo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$spotifyLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3001,
    height: 3000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAs0lEQVR42i2OrRGEMBCFlxw/hhlmaABDCxgUdwKDRVICCAwSDFUktYSjDa4QTj52MxFfxHvf7oaISDENY5nbY30mHTVhGF5ZliHPc6RpCqUUOL+cFMfxMY4jjDEOrTX2fUdd1yJa4udu2xbrumLbNizLgmmaMAwDeFjO0b+qKhfKpnmenVyWJfx/6FsUBbqug2ySyb7vEUWRCIcIb+bHSIAgCJAkCXwmHb2YD3PKOc/pS/UAoORO4ZFbJAgAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/app/account/signIn/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Standard Imports ------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
// Component Imports ------------------------------------------------------
// import HomeImportButton from "@/components/Buttons/Buttons";
// // import {LightModeButton, DarkModeButton} from "@/components/Buttons/Buttons";
// import {RightPanel} from "@/components/MainBlocks/Panels";
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$SongCard$2f$SongCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/SongCard/SongCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$googleLogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$googleLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/mixxer/frontend/src/assets/images/googleLogo.png.mjs { IMAGE => "[project]/mixxer/frontend/src/assets/images/googleLogo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$mxr$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$mxr$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/mixxer/frontend/src/assets/images/mxr.png.mjs { IMAGE => "[project]/mixxer/frontend/src/assets/images/mxr.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$spotifyLogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$spotifyLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/mixxer/frontend/src/assets/images/spotifyLogo.png.mjs { IMAGE => "[project]/mixxer/frontend/src/assets/images/spotifyLogo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "defaultDiv",
            style: {
                backgroundColor: "black"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "mxrLogo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$mxr$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$mxr$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "Mixxer logo",
                        title: "Mixxer Logo"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                        lineNumber: 40,
                        columnNumber: 41
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "BigPanel flexColumn",
                    style: {
                        position: "absolute",
                        border: "5px solid #99acff",
                        backgroundColor: "#2e2f33",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3vh",
                        padding: "5vh",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flexColumn",
                        style: {
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "-40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2",
                                style: {
                                    fontSize: "40px"
                                },
                                children: "Sign in with..."
                            }, void 0, false, {
                                fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flexRow",
                                style: {
                                    marginTop: "-20px",
                                    padding: "20px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "circularContainer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "smallIcon",
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$spotifyLogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$spotifyLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "black Spotify logo",
                                            title: "Spotify Logo",
                                            style: {
                                                width: "1.75vw",
                                                height: "1.75vw"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 48
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "circularContainer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "smallIcon ",
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$googleLogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$mixxer$2f$frontend$2f$src$2f$assets$2f$images$2f$googleLogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "black Google logo",
                                            title: "Google Logo",
                                            style: {
                                                width: "1.75vw",
                                                height: "1.75vw"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 48
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flexRow",
                                style: {
                                    marginBottom: "0vh"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                        style: {
                                            width: "5vw",
                                            height: "1px",
                                            border: "1px solid #9396a7",
                                            marginRight: "1vw"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "p",
                                        style: {
                                            color: "#9396a7",
                                            margin: "0%"
                                        },
                                        children: "Or Sign In With"
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                        style: {
                                            width: "5vw",
                                            height: "1px",
                                            border: "1px solid #9396a7",
                                            marginLeft: "1vw"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "userAndEmail",
                                        placeholder: "Username/Email Address",
                                        className: "loginSignupButton p"
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "password",
                                        placeholder: "Password",
                                        className: "loginSignupButton p"
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {}, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitButton"], {
                                        className: "loginSignupButton p",
                                        style: {
                                            backgroundColor: "#99acff",
                                            border: "5px solid #6b7bd0",
                                            marginBottom: "1vh"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/account/signUp",
                                className: "p",
                                style: {
                                    color: "#9396a7"
                                },
                                children: "Need to create an account?"
                            }, void 0, false, {
                                fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/app/account/signIn/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
} /* const lightModeColors = {
  headings: "#000000",
  bubbleBackground: "#2e2f33",
  bubbleText: "#ffffff",
  grayText: "#9396a7",
  boxBackground: "#ffffff",
  fullBackground: "#2e2f33",
  accent1: "#99acff",
  accent2: "#6b7bd0",

};

const darkModeColors = {
  headings: "#ffffff",
  bubbleBackground: "#ffffff",
  bubbleText: "#000000",
  grayText: "#9396a7",
  boxBackground: "#2e2f33",
  fullBackground: "#000000",
  accent1: "#99acff",
  accent2: "#6b7bd0",

}; */ 
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mixxer_frontend_src_0ocr06w._.js.map