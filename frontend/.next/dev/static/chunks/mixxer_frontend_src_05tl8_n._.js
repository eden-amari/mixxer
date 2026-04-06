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
        lineNumber: 8,
        columnNumber: 5
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
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx [app-client] (ecmascript)");
;
;
let isDarkMode = false;
function HomeImportButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/importPlaylist",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "homeImportButton agrandir",
                    children: "Import Playlist"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = HomeImportButton;
const __TURBOPACK__default__export__ = HomeImportButton;
var _c;
__turbopack_context__.k.register(_c, "HomeImportButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
}),
"[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
const Navbar = ({ className })=>{
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
                        lineNumber: 13,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "li",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "li",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/account",
                        children: "Account"
                    }, void 0, false, {
                        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                        lineNumber: 17,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SongCard;
var _c;
__turbopack_context__.k.register(_c, "SongCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mixxer/frontend/src/app/account/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/Buttons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$ColorSliver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/Buttons/ColorSliver.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$SongCard$2f$SongCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mixxer/frontend/src/components/SongCard/SongCard.tsx [app-client] (ecmascript)");
'use client';
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
            className: "flex flex-col flex-1 font-sans",
            style: {
                backgroundColor: "white"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightModeButton"], {}, void 0, false, {
                            fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mixxer$2f$frontend$2f$src$2f$components$2f$Buttons$2f$Buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DarkModeButton"], {}, void 0, false, {
                            fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row"
                        }, void 0, false, {
                            fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                            lineNumber: 48,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mixxer/frontend/src/app/account/page.tsx",
        lineNumber: 37,
        columnNumber: 5
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

//# sourceMappingURL=mixxer_frontend_src_05tl8_n._.js.map