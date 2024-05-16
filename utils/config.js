/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r =
      c < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc,
    d
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    r = Reflect.decorate(decorators, target, key, desc)
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i]))
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
  return c > 3 && r && Object.defineProperty(target, key, r), r
}

typeof SuppressedError === 'function'
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message)
      return (
        (e.name = 'SuppressedError'),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      )
    }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = (t) => (e, o) => {
  void 0 !== o
    ? o.addInitializer(() => {
        customElements.define(t, e)
      })
    : customElements.define(t, e)
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis,
  e$8 =
    t$2.ShadowRoot &&
    (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  s$3 = Symbol(),
  o$7 = new WeakMap()
let n$7 = class n {
  constructor(t, e, o) {
    if (((this._$cssResult$ = !0), o !== s$3))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      )
    ;(this.cssText = t), (this.t = e)
  }
  get styleSheet() {
    let t = this.o
    const s = this.t
    if (e$8 && void 0 === t) {
      const e = void 0 !== s && 1 === s.length
      e && (t = o$7.get(s)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          e && o$7.set(s, t))
    }
    return t
  }
  toString() {
    return this.cssText
  }
}
const r$7 = (t) => new n$7('string' == typeof t ? t : t + '', void 0, s$3),
  i$4 = (t, ...e) => {
    const o =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, s, o) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText
                if ('number' == typeof t) return t
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                )
              })(s) +
              t[o + 1],
            t[0]
          )
    return new n$7(o, t, s$3)
  },
  S$1 = (s, o) => {
    if (e$8)
      s.adoptedStyleSheets = o.map((t) =>
        t instanceof CSSStyleSheet ? t : t.styleSheet
      )
    else
      for (const e of o) {
        const o = document.createElement('style'),
          n = t$2.litNonce
        void 0 !== n && o.setAttribute('nonce', n),
          (o.textContent = e.cssText),
          s.appendChild(o)
      }
  },
  c$2 = e$8
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = ''
              for (const s of t.cssRules) e += s.cssText
              return r$7(e)
            })(t)
          : t

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const {
    is: i$3,
    defineProperty: e$7,
    getOwnPropertyDescriptor: r$6,
    getOwnPropertyNames: h$1,
    getOwnPropertySymbols: o$6,
    getPrototypeOf: n$6
  } = Object,
  a$2 = globalThis,
  c$1 = a$2.trustedTypes,
  l$3 = c$1 ? c$1.emptyScript : '',
  p$1 = a$2.reactiveElementPolyfillSupport,
  d$1 = (t, s) => t,
  u$2 = {
    toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? l$3 : null
          break
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t)
      }
      return t
    },
    fromAttribute(t, s) {
      let i = t
      switch (s) {
        case Boolean:
          i = null !== t
          break
        case Number:
          i = null === t ? null : Number(t)
          break
        case Object:
        case Array:
          try {
            i = JSON.parse(t)
          } catch (t) {
            i = null
          }
      }
      return i
    }
  },
  f$2 = (t, s) => !i$3(t, s),
  y$1 = {
    attribute: !0,
    type: String,
    converter: u$2,
    reflect: !1,
    hasChanged: f$2
  }
;(Symbol.metadata ??= Symbol('metadata')),
  (a$2.litPropertyMetadata ??= new WeakMap())
class b extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t)
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()]
  }
  static createProperty(t, s = y$1) {
    if (
      (s.state && (s.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, s),
      !s.noAccessor)
    ) {
      const i = Symbol(),
        r = this.getPropertyDescriptor(t, i, s)
      void 0 !== r && e$7(this.prototype, t, r)
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const { get: e, set: h } = r$6(this.prototype, t) ?? {
      get() {
        return this[s]
      },
      set(t) {
        this[s] = t
      }
    }
    return {
      get() {
        return e?.call(this)
      },
      set(s) {
        const r = e?.call(this)
        h.call(this, s), this.requestUpdate(t, r, i)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? y$1
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1('elementProperties'))) return
    const t = n$6(this)
    t.finalize(),
      void 0 !== t.l && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties))
  }
  static finalize() {
    if (this.hasOwnProperty(d$1('finalized'))) return
    if (
      ((this.finalized = !0),
      this._$Ei(),
      this.hasOwnProperty(d$1('properties')))
    ) {
      const t = this.properties,
        s = [...h$1(t), ...o$6(t)]
      for (const i of s) this.createProperty(i, t[i])
    }
    const t = this[Symbol.metadata]
    if (null !== t) {
      const s = litPropertyMetadata.get(t)
      if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i)
    }
    this._$Eh = new Map()
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s)
      void 0 !== i && this._$Eh.set(i, t)
    }
    this.elementStyles = this.finalizeStyles(this.styles)
  }
  static finalizeStyles(s) {
    const i = []
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse())
      for (const s of e) i.unshift(c$2(s))
    } else void 0 !== s && i.push(c$2(s))
    return i
  }
  static _$Eu(t, s) {
    const i = s.attribute
    return !1 === i
      ? void 0
      : 'string' == typeof i
      ? i
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev()
  }
  _$Ev() {
    ;(this._$ES = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t) => t(this))
  }
  addController(t) {
    ;(this._$EO ??= new Set()).add(t),
      void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.()
  }
  removeController(t) {
    this._$EO?.delete(t)
  }
  _$E_() {
    const t = new Map(),
      s = this.constructor.elementProperties
    for (const i of s.keys())
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i])
    t.size > 0 && (this._$Ep = t)
  }
  createRenderRoot() {
    const t =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions)
    return S$1(t, this.constructor.elementStyles), t
  }
  connectedCallback() {
    ;(this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(!0),
      this._$EO?.forEach((t) => t.hostConnected?.())
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.())
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i)
  }
  _$EC(t, s) {
    const i = this.constructor.elementProperties.get(t),
      e = this.constructor._$Eu(t, i)
    if (void 0 !== e && !0 === i.reflect) {
      const r = (
        void 0 !== i.converter?.toAttribute ? i.converter : u$2
      ).toAttribute(s, i.type)
      ;(this._$Em = t),
        null == r ? this.removeAttribute(e) : this.setAttribute(e, r),
        (this._$Em = null)
    }
  }
  _$AK(t, s) {
    const i = this.constructor,
      e = i._$Eh.get(t)
    if (void 0 !== e && this._$Em !== e) {
      const t = i.getPropertyOptions(e),
        r =
          'function' == typeof t.converter
            ? { fromAttribute: t.converter }
            : void 0 !== t.converter?.fromAttribute
            ? t.converter
            : u$2
      ;(this._$Em = e),
        (this[e] = r.fromAttribute(s, t.type)),
        (this._$Em = null)
    }
  }
  requestUpdate(t, s, i) {
    if (void 0 !== t) {
      if (
        ((i ??= this.constructor.getPropertyOptions(t)),
        !(i.hasChanged ?? f$2)(this[t], s))
      )
        return
      this.P(t, s, i)
    }
    !1 === this.isUpdatePending && (this._$ES = this._$ET())
  }
  P(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s),
      !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t)
  }
  async _$ET() {
    this.isUpdatePending = !0
    try {
      await this._$ES
    } catch (t) {
      Promise.reject(t)
    }
    const t = this.scheduleUpdate()
    return null != t && (await t), !this.isUpdatePending
  }
  scheduleUpdate() {
    return this.performUpdate()
  }
  performUpdate() {
    if (!this.isUpdatePending) return
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
        for (const [t, s] of this._$Ep) this[t] = s
        this._$Ep = void 0
      }
      const t = this.constructor.elementProperties
      if (t.size > 0)
        for (const [s, i] of t)
          !0 !== i.wrapped ||
            this._$AL.has(s) ||
            void 0 === this[s] ||
            this.P(s, this[s], i)
    }
    let t = !1
    const s = this._$AL
    try {
      ;(t = this.shouldUpdate(s)),
        t
          ? (this.willUpdate(s),
            this._$EO?.forEach((t) => t.hostUpdate?.()),
            this.update(s))
          : this._$EU()
    } catch (s) {
      throw ((t = !1), this._$EU(), s)
    }
    t && this._$AE(s)
  }
  willUpdate(t) {}
  _$AE(t) {
    this._$EO?.forEach((t) => t.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t)
  }
  _$EU() {
    ;(this._$AL = new Map()), (this.isUpdatePending = !1)
  }
  get updateComplete() {
    return this.getUpdateComplete()
  }
  getUpdateComplete() {
    return this._$ES
  }
  shouldUpdate(t) {
    return !0
  }
  update(t) {
    ;(this._$Ej &&= this._$Ej.forEach((t) => this._$EC(t, this[t]))),
      this._$EU()
  }
  updated(t) {}
  firstUpdated(t) {}
}
;(b.elementStyles = []),
  (b.shadowRootOptions = { mode: 'open' }),
  (b[d$1('elementProperties')] = new Map()),
  (b[d$1('finalized')] = new Map()),
  p$1?.({ ReactiveElement: b }),
  (a$2.reactiveElementVersions ??= []).push('2.0.4')

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o$5 = {
    attribute: !0,
    type: String,
    converter: u$2,
    reflect: !1,
    hasChanged: f$2
  },
  r$5 = (t = o$5, e, r) => {
    const { kind: n, metadata: i } = r
    let s = globalThis.litPropertyMetadata.get(i)
    if (
      (void 0 === s && globalThis.litPropertyMetadata.set(i, (s = new Map())),
      s.set(r.name, t),
      'accessor' === n)
    ) {
      const { name: o } = r
      return {
        set(r) {
          const n = e.get.call(this)
          e.set.call(this, r), this.requestUpdate(o, n, t)
        },
        init(e) {
          return void 0 !== e && this.P(o, void 0, t), e
        }
      }
    }
    if ('setter' === n) {
      const { name: o } = r
      return function (r) {
        const n = this[o]
        e.call(this, r), this.requestUpdate(o, n, t)
      }
    }
    throw Error('Unsupported decorator location: ' + n)
  }
function n$5(t) {
  return (e, o) =>
    'object' == typeof o
      ? r$5(t, e, o)
      : ((t, e, o) => {
          const r = e.hasOwnProperty(o)
          return (
            e.constructor.createProperty(o, r ? { ...t, wrapped: !0 } : t),
            r ? Object.getOwnPropertyDescriptor(e, o) : void 0
          )
        })(t, e, o)
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function r$4(r) {
  return n$5({ ...r, state: !0, attribute: !1 })
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$6 = (e, t, c) => (
  (c.configurable = !0),
  (c.enumerable = !0),
  Reflect.decorate && 'object' != typeof t && Object.defineProperty(e, t, c),
  c
)

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e$5(e, r) {
  return (n, s, i) => {
    const o = (t) => t.renderRoot?.querySelector(e) ?? null
    return e$6(n, s, {
      get() {
        return o(this)
      }
    })
  }
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e$4
function r$3(r) {
  return (n, o) =>
    e$6(n, o, {
      get() {
        return (
          this.renderRoot ?? (e$4 ??= document.createDocumentFragment())
        ).querySelectorAll(r)
      }
    })
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r$2(r) {
  return (n, e) =>
    e$6(n, e, {
      async get() {
        return (
          await this.updateComplete, this.renderRoot?.querySelector(r) ?? null
        )
      }
    })
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o$4(o) {
  return (e, n) => {
    const { slot: r, selector: s } = o ?? {},
      c = 'slot' + (r ? `[name=${r}]` : ':not([name])')
    return e$6(e, n, {
      get() {
        const t = this.renderRoot?.querySelector(c),
          e = t?.assignedElements(o) ?? []
        return void 0 === s ? e : e.filter((t) => t.matches(s))
      }
    })
  }
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function n$4(n) {
  return (o, r) => {
    const { slot: e } = n ?? {},
      s = 'slot' + (e ? `[name=${e}]` : ':not([name])')
    return e$6(o, r, {
      get() {
        const t = this.renderRoot?.querySelector(s)
        return t?.assignedNodes(n) ?? []
      }
    })
  }
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis,
  i$2 = t$1.trustedTypes,
  s$2 = i$2 ? i$2.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
  e$3 = '$lit$',
  h = `lit$${Math.random().toFixed(9).slice(2)}$`,
  o$3 = '?' + h,
  n$3 = `<${o$3}>`,
  r$1 = document,
  l$2 = () => r$1.createComment(''),
  c = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  a$1 = Array.isArray,
  u$1 = (t) => a$1(t) || 'function' == typeof t?.[Symbol.iterator],
  d = '[ \t\n\f\r]',
  f$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v = /-->/g,
  _ = />/g,
  m$1 = RegExp(
    `>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  p = /'/g,
  g = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  y =
    (t) =>
    (i, ...s) => ({ _$litType$: t, strings: i, values: s }),
  x = y(1),
  w = Symbol.for('lit-noChange'),
  T = Symbol.for('lit-nothing'),
  A = new WeakMap(),
  E = r$1.createTreeWalker(r$1, 129)
function C(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
    throw Error('invalid template strings array')
  return void 0 !== s$2 ? s$2.createHTML(i) : i
}
const P = (t, i) => {
  const s = t.length - 1,
    o = []
  let r,
    l = 2 === i ? '<svg>' : '',
    c = f$1
  for (let i = 0; i < s; i++) {
    const s = t[i]
    let a,
      u,
      d = -1,
      y = 0
    for (; y < s.length && ((c.lastIndex = y), (u = c.exec(s)), null !== u); )
      (y = c.lastIndex),
        c === f$1
          ? '!--' === u[1]
            ? (c = v)
            : void 0 !== u[1]
            ? (c = _)
            : void 0 !== u[2]
            ? ($.test(u[2]) && (r = RegExp('</' + u[2], 'g')), (c = m$1))
            : void 0 !== u[3] && (c = m$1)
          : c === m$1
          ? '>' === u[0]
            ? ((c = r ?? f$1), (d = -1))
            : void 0 === u[1]
            ? (d = -2)
            : ((d = c.lastIndex - u[2].length),
              (a = u[1]),
              (c = void 0 === u[3] ? m$1 : '"' === u[3] ? g : p))
          : c === g || c === p
          ? (c = m$1)
          : c === v || c === _
          ? (c = f$1)
          : ((c = m$1), (r = void 0))
    const x = c === m$1 && t[i + 1].startsWith('/>') ? ' ' : ''
    l +=
      c === f$1
        ? s + n$3
        : d >= 0
        ? (o.push(a), s.slice(0, d) + e$3 + s.slice(d) + h + x)
        : s + h + (-2 === d ? i : x)
  }
  return [C(t, l + (t[s] || '<?>') + (2 === i ? '</svg>' : '')), o]
}
class V {
  constructor({ strings: t, _$litType$: s }, n) {
    let r
    this.parts = []
    let c = 0,
      a = 0
    const u = t.length - 1,
      d = this.parts,
      [f, v] = P(t, s)
    if (
      ((this.el = V.createElement(f, n)),
      (E.currentNode = this.el.content),
      2 === s)
    ) {
      const t = this.el.content.firstChild
      t.replaceWith(...t.childNodes)
    }
    for (; null !== (r = E.nextNode()) && d.length < u; ) {
      if (1 === r.nodeType) {
        if (r.hasAttributes())
          for (const t of r.getAttributeNames())
            if (t.endsWith(e$3)) {
              const i = v[a++],
                s = r.getAttribute(t).split(h),
                e = /([.?@])?(.*)/.exec(i)
              d.push({
                type: 1,
                index: c,
                name: e[2],
                strings: s,
                ctor: '.' === e[1] ? k : '?' === e[1] ? H : '@' === e[1] ? I : R
              }),
                r.removeAttribute(t)
            } else
              t.startsWith(h) &&
                (d.push({ type: 6, index: c }), r.removeAttribute(t))
        if ($.test(r.tagName)) {
          const t = r.textContent.split(h),
            s = t.length - 1
          if (s > 0) {
            r.textContent = i$2 ? i$2.emptyScript : ''
            for (let i = 0; i < s; i++)
              r.append(t[i], l$2()),
                E.nextNode(),
                d.push({ type: 2, index: ++c })
            r.append(t[s], l$2())
          }
        }
      } else if (8 === r.nodeType)
        if (r.data === o$3) d.push({ type: 2, index: c })
        else {
          let t = -1
          for (; -1 !== (t = r.data.indexOf(h, t + 1)); )
            d.push({ type: 7, index: c }), (t += h.length - 1)
        }
      c++
    }
  }
  static createElement(t, i) {
    const s = r$1.createElement('template')
    return (s.innerHTML = t), s
  }
}
function N(t, i, s = t, e) {
  if (i === w) return i
  let h = void 0 !== e ? s._$Co?.[e] : s._$Cl
  const o = c(i) ? void 0 : i._$litDirective$
  return (
    h?.constructor !== o &&
      (h?._$AO?.(!1),
      void 0 === o ? (h = void 0) : ((h = new o(t)), h._$AT(t, s, e)),
      void 0 !== e ? ((s._$Co ??= [])[e] = h) : (s._$Cl = h)),
    void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)),
    i
  )
}
class S {
  constructor(t, i) {
    ;(this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i)
  }
  get parentNode() {
    return this._$AM.parentNode
  }
  get _$AU() {
    return this._$AM._$AU
  }
  u(t) {
    const {
        el: { content: i },
        parts: s
      } = this._$AD,
      e = (t?.creationScope ?? r$1).importNode(i, !0)
    E.currentNode = e
    let h = E.nextNode(),
      o = 0,
      n = 0,
      l = s[0]
    for (; void 0 !== l; ) {
      if (o === l.index) {
        let i
        2 === l.type
          ? (i = new M(h, h.nextSibling, this, t))
          : 1 === l.type
          ? (i = new l.ctor(h, l.name, l.strings, this, t))
          : 6 === l.type && (i = new L(h, this, t)),
          this._$AV.push(i),
          (l = s[++n])
      }
      o !== l?.index && ((h = E.nextNode()), o++)
    }
    return (E.currentNode = r$1), e
  }
  p(t) {
    let i = 0
    for (const s of this._$AV)
      void 0 !== s &&
        (void 0 !== s.strings
          ? (s._$AI(t, s, i), (i += s.strings.length - 2))
          : s._$AI(t[i])),
        i++
  }
}
class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv
  }
  constructor(t, i, s, e) {
    ;(this.type = 2),
      (this._$AH = T),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = i),
      (this._$AM = s),
      (this.options = e),
      (this._$Cv = e?.isConnected ?? !0)
  }
  get parentNode() {
    let t = this._$AA.parentNode
    const i = this._$AM
    return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t
  }
  get startNode() {
    return this._$AA
  }
  get endNode() {
    return this._$AB
  }
  _$AI(t, i = this) {
    ;(t = N(this, t, i)),
      c(t)
        ? t === T || null == t || '' === t
          ? (this._$AH !== T && this._$AR(), (this._$AH = T))
          : t !== this._$AH && t !== w && this._(t)
        : void 0 !== t._$litType$
        ? this.$(t)
        : void 0 !== t.nodeType
        ? this.T(t)
        : u$1(t)
        ? this.k(t)
        : this._(t)
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB)
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.S(t)))
  }
  _(t) {
    this._$AH !== T && c(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(r$1.createTextNode(t)),
      (this._$AH = t)
  }
  $(t) {
    const { values: i, _$litType$: s } = t,
      e =
        'number' == typeof s
          ? this._$AC(t)
          : (void 0 === s.el &&
              (s.el = V.createElement(C(s.h, s.h[0]), this.options)),
            s)
    if (this._$AH?._$AD === e) this._$AH.p(i)
    else {
      const t = new S(e, this),
        s = t.u(this.options)
      t.p(i), this.T(s), (this._$AH = t)
    }
  }
  _$AC(t) {
    let i = A.get(t.strings)
    return void 0 === i && A.set(t.strings, (i = new V(t))), i
  }
  k(t) {
    a$1(this._$AH) || ((this._$AH = []), this._$AR())
    const i = this._$AH
    let s,
      e = 0
    for (const h of t)
      e === i.length
        ? i.push((s = new M(this.S(l$2()), this.S(l$2()), this, this.options)))
        : (s = i[e]),
        s._$AI(h),
        e++
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e))
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t && t !== this._$AB; ) {
      const i = t.nextSibling
      t.remove(), (t = i)
    }
  }
  setConnected(t) {
    void 0 === this._$AM && ((this._$Cv = t), this._$AP?.(t))
  }
}
class R {
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  constructor(t, i, s, e, h) {
    ;(this.type = 1),
      (this._$AH = T),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = i),
      (this._$AM = e),
      (this.options = h),
      s.length > 2 || '' !== s[0] || '' !== s[1]
        ? ((this._$AH = Array(s.length - 1).fill(new String())),
          (this.strings = s))
        : (this._$AH = T)
  }
  _$AI(t, i = this, s, e) {
    const h = this.strings
    let o = !1
    if (void 0 === h)
      (t = N(this, t, i, 0)),
        (o = !c(t) || (t !== this._$AH && t !== w)),
        o && (this._$AH = t)
    else {
      const e = t
      let n, r
      for (t = h[0], n = 0; n < h.length - 1; n++)
        (r = N(this, e[s + n], i, n)),
          r === w && (r = this._$AH[n]),
          (o ||= !c(r) || r !== this._$AH[n]),
          r === T ? (t = T) : t !== T && (t += (r ?? '') + h[n + 1]),
          (this._$AH[n] = r)
    }
    o && !e && this.j(t)
  }
  j(t) {
    t === T
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? '')
  }
}
class k extends R {
  constructor() {
    super(...arguments), (this.type = 3)
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t
  }
}
class H extends R {
  constructor() {
    super(...arguments), (this.type = 4)
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T)
  }
}
class I extends R {
  constructor(t, i, s, e, h) {
    super(t, i, s, e, h), (this.type = 5)
  }
  _$AI(t, i = this) {
    if ((t = N(this, t, i, 0) ?? T) === w) return
    const s = this._$AH,
      e =
        (t === T && s !== T) ||
        t.capture !== s.capture ||
        t.once !== s.once ||
        t.passive !== s.passive,
      h = t !== T && (s === T || e)
    e && this.element.removeEventListener(this.name, this, s),
      h && this.element.addEventListener(this.name, this, t),
      (this._$AH = t)
  }
  handleEvent(t) {
    'function' == typeof this._$AH
      ? this._$AH.call(this.options?.host ?? this.element, t)
      : this._$AH.handleEvent(t)
  }
}
class L {
  constructor(t, i, s) {
    ;(this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = i),
      (this.options = s)
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(t) {
    N(this, t)
  }
}
const Z = t$1.litHtmlPolyfillSupport
Z?.(V, M), (t$1.litHtmlVersions ??= []).push('3.1.3')
const j = (t, i, s) => {
  const e = s?.renderBefore ?? i
  let h = e._$litPart$
  if (void 0 === h) {
    const t = s?.renderBefore ?? null
    e._$litPart$ = h = new M(i.insertBefore(l$2(), t), t, void 0, s ?? {})
  }
  return h._$AI(t), h
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let s$1 = class s extends b {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0)
  }
  createRenderRoot() {
    const t = super.createRenderRoot()
    return (this.renderOptions.renderBefore ??= t.firstChild), t
  }
  update(t) {
    const i = this.render()
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = j(i, this.renderRoot, this.renderOptions))
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0)
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1)
  }
  render() {
    return w
  }
}
;(s$1._$litElement$ = !0),
  (s$1['finalized'] = !0),
  globalThis.litElementHydrateSupport?.({ LitElement: s$1 })
const r = globalThis.litElementPolyfillSupport
r?.({ LitElement: s$1 })
;(globalThis.litElementVersions ??= []).push('4.0.5')

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2 = !1

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends s$1 {
  connectedCallback() {
    super.connectedCallback()
    // Needed for VoiceOver, which will create a "group" if the element is a
    // sibling to other content.
    this.setAttribute('aria-hidden', 'true')
  }
  render() {
    return x`<span class="shadow"></span>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./elevation/internal/elevation-styles.css.
const styles$V = i$4`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 *
 * @final
 * @suppress {visibility}
 */
let MdElevation = class MdElevation extends Elevation {}
MdElevation.styles = [styles$V]
MdElevation = __decorate([t$3('md-elevation')], MdElevation)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
const ATTACHABLE_CONTROLLER = Symbol('attachableController')
let FOR_ATTRIBUTE_OBSERVER
{
  /**
   * A global `MutationObserver` that reacts to `for` attribute changes on
   * `Attachable` elements. If the `for` attribute changes, the controller will
   * re-attach to the new referenced element.
   */
  FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
    for (const record of records) {
      // When a control's `for` attribute changes, inform its
      // `AttachableController` to update to a new control.
      record.target[ATTACHABLE_CONTROLLER]?.hostConnected()
    }
  })
}
/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
class AttachableController {
  get htmlFor() {
    return this.host.getAttribute('for')
  }
  set htmlFor(htmlFor) {
    if (htmlFor === null) {
      this.host.removeAttribute('for')
    } else {
      this.host.setAttribute('for', htmlFor)
    }
  }
  get control() {
    if (this.host.hasAttribute('for')) {
      if (!this.htmlFor || !this.host.isConnected) {
        return null
      }
      return this.host.getRootNode().querySelector(`#${this.htmlFor}`)
    }
    return this.currentControl || this.host.parentElement
  }
  set control(control) {
    if (control) {
      this.attach(control)
    } else {
      this.detach()
    }
  }
  /**
   * Creates a new controller for an `Attachable` element.
   *
   * @param host The `Attachable` element.
   * @param onControlChange A callback with two parameters for the previous and
   *     next control. An `Attachable` element may perform setup or teardown
   *     logic whenever the control changes.
   */
  constructor(host, onControlChange) {
    this.host = host
    this.onControlChange = onControlChange
    this.currentControl = null
    host.addController(this)
    host[ATTACHABLE_CONTROLLER] = this
    FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] })
  }
  attach(control) {
    if (control === this.currentControl) {
      return
    }
    this.setCurrentControl(control)
    // When imperatively attaching, remove the `for` attribute so
    // that the attached control is used instead of a referenced one.
    this.host.removeAttribute('for')
  }
  detach() {
    this.setCurrentControl(null)
    // When imperatively detaching, add an empty `for=""` attribute. This will
    // ensure the control is `null` rather than the `parentElement`.
    this.host.setAttribute('for', '')
  }
  /** @private */
  hostConnected() {
    this.setCurrentControl(this.control)
  }
  /** @private */
  hostDisconnected() {
    this.setCurrentControl(null)
  }
  setCurrentControl(control) {
    this.onControlChange(this.currentControl, control)
    this.currentControl = control
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Events that the focus ring listens to.
 */
const EVENTS$1 = ['focusin', 'focusout', 'pointerdown']
/**
 * A focus ring component.
 *
 * @fires visibility-changed {Event} Fired whenever `visible` changes.
 */
class FocusRing extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Makes the focus ring visible.
     */
    this.visible = false
    /**
     * Makes the focus ring animate inwards instead of outwards.
     */
    this.inward = false
    this.attachableController = new AttachableController(
      this,
      this.onControlChange.bind(this)
    )
  }
  get htmlFor() {
    return this.attachableController.htmlFor
  }
  set htmlFor(htmlFor) {
    this.attachableController.htmlFor = htmlFor
  }
  get control() {
    return this.attachableController.control
  }
  set control(control) {
    this.attachableController.control = control
  }
  attach(control) {
    this.attachableController.attach(control)
  }
  detach() {
    this.attachableController.detach()
  }
  connectedCallback() {
    super.connectedCallback()
    // Needed for VoiceOver, which will create a "group" if the element is a
    // sibling to other content.
    this.setAttribute('aria-hidden', 'true')
  }
  /** @private */
  handleEvent(event) {
    if (event[HANDLED_BY_FOCUS_RING]) {
      // This ensures the focus ring does not activate when multiple focus rings
      // are used within a single component.
      return
    }
    switch (event.type) {
      default:
        return
      case 'focusin':
        this.visible = this.control?.matches(':focus-visible') ?? false
        break
      case 'focusout':
      case 'pointerdown':
        this.visible = false
        break
    }
    event[HANDLED_BY_FOCUS_RING] = true
  }
  onControlChange(prev, next) {
    for (const event of EVENTS$1) {
      prev?.removeEventListener(event, this)
      next?.addEventListener(event, this)
    }
  }
  update(changed) {
    if (changed.has('visible')) {
      // This logic can be removed once the `:has` selector has been introduced
      // to Firefox. This is necessary to allow correct submenu styles.
      this.dispatchEvent(new Event('visibility-changed'))
    }
    super.update(changed)
  }
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  FocusRing.prototype,
  'visible',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  FocusRing.prototype,
  'inward',
  void 0
)
const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing')

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./focus/internal/focus-ring-styles.css.
const styles$U = i$4`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFocusRing = class MdFocusRing extends FocusRing {}
MdFocusRing.styles = [styles$U]
MdFocusRing = __decorate([t$3('md-focus-ring')], MdFocusRing)

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
  },
  e$2 =
    (t) =>
    (...e) => ({ _$litDirective$: t, values: e })
let i$1 = class i {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU
  }
  _$AT(t, e, i) {
    ;(this._$Ct = t), (this._$AM = e), (this._$Ci = i)
  }
  _$AS(t, e) {
    return this.update(t, e)
  }
  update(t, e) {
    return this.render(...e)
  }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e$1 = e$2(
  class extends i$1 {
    constructor(t$1) {
      if (
        (super(t$1),
        t$1.type !== t.ATTRIBUTE ||
          'class' !== t$1.name ||
          t$1.strings?.length > 2)
      )
        throw Error(
          '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
        )
    }
    render(t) {
      return (
        ' ' +
        Object.keys(t)
          .filter((s) => t[s])
          .join(' ') +
        ' '
      )
    }
    update(s, [i]) {
      if (void 0 === this.st) {
        ;(this.st = new Set()),
          void 0 !== s.strings &&
            (this.nt = new Set(
              s.strings
                .join(' ')
                .split(/\s/)
                .filter((t) => '' !== t)
            ))
        for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t)
        return this.render(i)
      }
      const r = s.element.classList
      for (const t of this.st) t in i || (r.remove(t), this.st.delete(t))
      for (const t in i) {
        const s = !!i[t]
        s === this.st.has(t) ||
          this.nt?.has(t) ||
          (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)))
      }
      return w
    }
  }
)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
 *
 * TODO(b/241113345): replace with tokens
 */
const EASING = {
  STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
  STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
  STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
  EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
  EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
  EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)'
}
/**
 * Creates an `AnimationSignal` that can be used to cancel a previous task.
 *
 * @example
 * class MyClass {
 *   private labelAnimationSignal = createAnimationSignal();
 *
 *   private async animateLabel() {
 *     // Start of the task. Previous tasks will be canceled.
 *     const signal = this.labelAnimationSignal.start();
 *
 *     // Do async work...
 *     if (signal.aborted) {
 *       // Use AbortSignal to check if a request was made to abort after some
 *       // asynchronous work.
 *       return;
 *     }
 *
 *     const animation = this.animate(...);
 *     // Add event listeners to be notified when the task should be canceled.
 *     signal.addEventListener('abort', () => {
 *       animation.cancel();
 *     });
 *
 *     animation.addEventListener('finish', () => {
 *       // Tell the signal that the current task is finished.
 *       this.labelAnimationSignal.finish();
 *     });
 *   }
 * }
 *
 * @return An `AnimationSignal`.
 */
function createAnimationSignal() {
  // The current animation's AbortController
  let animationAbortController = null
  return {
    start() {
      // Tell the previous animation to cancel.
      animationAbortController?.abort()
      // Set up a new AbortController for the current animation.
      animationAbortController = new AbortController()
      // Provide the AbortSignal so that the caller can check aborted status
      // and add listeners.
      return animationAbortController.signal
    },
    finish() {
      animationAbortController = null
    }
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450
const MINIMUM_PRESS_MS = 225
const INITIAL_ORIGIN_SCALE = 0.2
const PADDING = 10
const SOFT_EDGE_MINIMUM_SIZE = 75
const SOFT_EDGE_CONTAINER_RATIO = 0.35
const PRESS_PSEUDO = '::after'
const ANIMATION_FILL = 'forwards'
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State
;(function (State) {
  /**
   * Initial state of the control, no touch in progress.
   *
   * Transitions:
   *   - on touch down: transition to `TOUCH_DELAY`.
   *   - on mouse down: transition to `WAITING_FOR_CLICK`.
   */
  State[(State['INACTIVE'] = 0)] = 'INACTIVE'
  /**
   * Touch down has been received, waiting to determine if it's a swipe or
   * scroll.
   *
   * Transitions:
   *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
   *   - on cancel: transition to `INACTIVE`.
   *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
   */
  State[(State['TOUCH_DELAY'] = 1)] = 'TOUCH_DELAY'
  /**
   * A touch has been deemed to be a press
   *
   * Transitions:
   *  - on up: transition to `WAITING_FOR_CLICK`.
   */
  State[(State['HOLDING'] = 2)] = 'HOLDING'
  /**
   * The user touch has finished, transition into rest state.
   *
   * Transitions:
   *   - on click end press; transition to `INACTIVE`.
   */
  State[(State['WAITING_FOR_CLICK'] = 3)] = 'WAITING_FOR_CLICK'
})(State || (State = {}))
/**
 * Events that the ripple listens to.
 */
const EVENTS = [
  'click',
  'contextmenu',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointerup'
]
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150
/**
 * Used to detect if HCM is active. Events do not process during HCM when the
 * ripple is not displayed.
 */
const FORCED_COLORS = window.matchMedia('(forced-colors: active)')
/**
 * A ripple component.
 */
class Ripple extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Disables the ripple.
     */
    this.disabled = false
    this.hovered = false
    this.pressed = false
    this.rippleSize = ''
    this.rippleScale = ''
    this.initialSize = 0
    this.state = State.INACTIVE
    this.checkBoundsAfterContextMenu = false
    this.attachableController = new AttachableController(
      this,
      this.onControlChange.bind(this)
    )
  }
  get htmlFor() {
    return this.attachableController.htmlFor
  }
  set htmlFor(htmlFor) {
    this.attachableController.htmlFor = htmlFor
  }
  get control() {
    return this.attachableController.control
  }
  set control(control) {
    this.attachableController.control = control
  }
  attach(control) {
    this.attachableController.attach(control)
  }
  detach() {
    this.attachableController.detach()
  }
  connectedCallback() {
    super.connectedCallback()
    // Needed for VoiceOver, which will create a "group" if the element is a
    // sibling to other content.
    this.setAttribute('aria-hidden', 'true')
  }
  render() {
    const classes = {
      hovered: this.hovered,
      pressed: this.pressed
    }
    return x`<div class="surface ${e$1(classes)}"></div>`
  }
  update(changedProps) {
    if (changedProps.has('disabled') && this.disabled) {
      this.hovered = false
      this.pressed = false
    }
    super.update(changedProps)
  }
  /**
   * TODO(b/269799771): make private
   * @private only public for slider
   */
  handlePointerenter(event) {
    if (!this.shouldReactToEvent(event)) {
      return
    }
    this.hovered = true
  }
  /**
   * TODO(b/269799771): make private
   * @private only public for slider
   */
  handlePointerleave(event) {
    if (!this.shouldReactToEvent(event)) {
      return
    }
    this.hovered = false
    // release a held mouse or pen press that moves outside the element
    if (this.state !== State.INACTIVE) {
      this.endPressAnimation()
    }
  }
  handlePointerup(event) {
    if (!this.shouldReactToEvent(event)) {
      return
    }
    if (this.state === State.HOLDING) {
      this.state = State.WAITING_FOR_CLICK
      return
    }
    if (this.state === State.TOUCH_DELAY) {
      this.state = State.WAITING_FOR_CLICK
      this.startPressAnimation(this.rippleStartEvent)
      return
    }
  }
  async handlePointerdown(event) {
    if (!this.shouldReactToEvent(event)) {
      return
    }
    this.rippleStartEvent = event
    if (!this.isTouch(event)) {
      this.state = State.WAITING_FOR_CLICK
      this.startPressAnimation(event)
      return
    }
    // after a longpress contextmenu event, an extra `pointerdown` can be
    // dispatched to the pressed element. Check that the down is within
    // bounds of the element in this case.
    if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
      return
    }
    this.checkBoundsAfterContextMenu = false
    // Wait for a hold after touch delay
    this.state = State.TOUCH_DELAY
    await new Promise((resolve) => {
      setTimeout(resolve, TOUCH_DELAY_MS)
    })
    if (this.state !== State.TOUCH_DELAY) {
      return
    }
    this.state = State.HOLDING
    this.startPressAnimation(event)
  }
  handleClick() {
    // Click is a MouseEvent in Firefox and Safari, so we cannot use
    // `shouldReactToEvent`
    if (this.disabled) {
      return
    }
    if (this.state === State.WAITING_FOR_CLICK) {
      this.endPressAnimation()
      return
    }
    if (this.state === State.INACTIVE) {
      // keyboard synthesized click event
      this.startPressAnimation()
      this.endPressAnimation()
    }
  }
  handlePointercancel(event) {
    if (!this.shouldReactToEvent(event)) {
      return
    }
    this.endPressAnimation()
  }
  handleContextmenu() {
    if (this.disabled) {
      return
    }
    this.checkBoundsAfterContextMenu = true
    this.endPressAnimation()
  }
  determineRippleSize() {
    const { height, width } = this.getBoundingClientRect()
    const maxDim = Math.max(height, width)
    const softEdgeSize = Math.max(
      SOFT_EDGE_CONTAINER_RATIO * maxDim,
      SOFT_EDGE_MINIMUM_SIZE
    )
    const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE)
    const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
    const maxRadius = hypotenuse + PADDING
    this.initialSize = initialSize
    this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`
    this.rippleSize = `${initialSize}px`
  }
  getNormalizedPointerEventCoords(pointerEvent) {
    const { scrollX, scrollY } = window
    const { left, top } = this.getBoundingClientRect()
    const documentX = scrollX + left
    const documentY = scrollY + top
    const { pageX, pageY } = pointerEvent
    return { x: pageX - documentX, y: pageY - documentY }
  }
  getTranslationCoordinates(positionEvent) {
    const { height, width } = this.getBoundingClientRect()
    // end in the center
    const endPoint = {
      x: (width - this.initialSize) / 2,
      y: (height - this.initialSize) / 2
    }
    let startPoint
    if (positionEvent instanceof PointerEvent) {
      startPoint = this.getNormalizedPointerEventCoords(positionEvent)
    } else {
      startPoint = {
        x: width / 2,
        y: height / 2
      }
    }
    // center around start point
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    }
    return { startPoint, endPoint }
  }
  startPressAnimation(positionEvent) {
    if (!this.mdRoot) {
      return
    }
    this.pressed = true
    this.growAnimation?.cancel()
    this.determineRippleSize()
    const { startPoint, endPoint } =
      this.getTranslationCoordinates(positionEvent)
    const translateStart = `${startPoint.x}px, ${startPoint.y}px`
    const translateEnd = `${endPoint.x}px, ${endPoint.y}px`
    this.growAnimation = this.mdRoot.animate(
      {
        top: [0, 0],
        left: [0, 0],
        height: [this.rippleSize, this.rippleSize],
        width: [this.rippleSize, this.rippleSize],
        transform: [
          `translate(${translateStart}) scale(1)`,
          `translate(${translateEnd}) scale(${this.rippleScale})`
        ]
      },
      {
        pseudoElement: PRESS_PSEUDO,
        duration: PRESS_GROW_MS,
        easing: EASING.STANDARD,
        fill: ANIMATION_FILL
      }
    )
  }
  async endPressAnimation() {
    this.rippleStartEvent = undefined
    this.state = State.INACTIVE
    const animation = this.growAnimation
    let pressAnimationPlayState = Infinity
    if (typeof animation?.currentTime === 'number') {
      pressAnimationPlayState = animation.currentTime
    } else if (animation?.currentTime) {
      pressAnimationPlayState = animation.currentTime.to('ms').value
    }
    if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
      this.pressed = false
      return
    }
    await new Promise((resolve) => {
      setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState)
    })
    if (this.growAnimation !== animation) {
      // A new press animation was started. The old animation was canceled and
      // should not finish the pressed state.
      return
    }
    this.pressed = false
  }
  /**
   * Returns `true` if
   *  - the ripple element is enabled
   *  - the pointer is primary for the input type
   *  - the pointer is the pointer that started the interaction, or will start
   * the interaction
   *  - the pointer is a touch, or the pointer state has the primary button
   * held, or the pointer is hovering
   */
  shouldReactToEvent(event) {
    if (this.disabled || !event.isPrimary) {
      return false
    }
    if (
      this.rippleStartEvent &&
      this.rippleStartEvent.pointerId !== event.pointerId
    ) {
      return false
    }
    if (event.type === 'pointerenter' || event.type === 'pointerleave') {
      return !this.isTouch(event)
    }
    const isPrimaryButton = event.buttons === 1
    return this.isTouch(event) || isPrimaryButton
  }
  /**
   * Check if the event is within the bounds of the element.
   *
   * This is only needed for the "stuck" contextmenu longpress on Chrome.
   */
  inBounds({ x, y }) {
    const { top, left, bottom, right } = this.getBoundingClientRect()
    return x >= left && x <= right && y >= top && y <= bottom
  }
  isTouch({ pointerType }) {
    return pointerType === 'touch'
  }
  /** @private */
  async handleEvent(event) {
    if (FORCED_COLORS?.matches) {
      // Skip event logic since the ripple is `display: none`.
      return
    }
    switch (event.type) {
      case 'click':
        this.handleClick()
        break
      case 'contextmenu':
        this.handleContextmenu()
        break
      case 'pointercancel':
        this.handlePointercancel(event)
        break
      case 'pointerdown':
        await this.handlePointerdown(event)
        break
      case 'pointerenter':
        this.handlePointerenter(event)
        break
      case 'pointerleave':
        this.handlePointerleave(event)
        break
      case 'pointerup':
        this.handlePointerup(event)
        break
    }
  }
  onControlChange(prev, next) {
    for (const event of EVENTS) {
      prev?.removeEventListener(event, this)
      next?.addEventListener(event, this)
    }
  }
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Ripple.prototype,
  'disabled',
  void 0
)
__decorate([r$4()], Ripple.prototype, 'hovered', void 0)
__decorate([r$4()], Ripple.prototype, 'pressed', void 0)
__decorate([e$5('.surface')], Ripple.prototype, 'mdRoot', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./ripple/internal/ripple-styles.css.
const styles$T = i$4`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * @description A state layer is a semi-transparent covering on an element that
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
let MdRipple = class MdRipple extends Ripple {}
MdRipple.styles = [styles$T]
MdRipple = __decorate([t$3('md-ripple')], MdRipple)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Accessibility Object Model reflective aria properties.
 */
const ARIA_PROPERTIES = [
  'ariaAtomic',
  'ariaAutoComplete',
  'ariaBusy',
  'ariaChecked',
  'ariaColCount',
  'ariaColIndex',
  'ariaColSpan',
  'ariaCurrent',
  'ariaDisabled',
  'ariaExpanded',
  'ariaHasPopup',
  'ariaHidden',
  'ariaInvalid',
  'ariaKeyShortcuts',
  'ariaLabel',
  'ariaLevel',
  'ariaLive',
  'ariaModal',
  'ariaMultiLine',
  'ariaMultiSelectable',
  'ariaOrientation',
  'ariaPlaceholder',
  'ariaPosInSet',
  'ariaPressed',
  'ariaReadOnly',
  'ariaRequired',
  'ariaRoleDescription',
  'ariaRowCount',
  'ariaRowIndex',
  'ariaRowSpan',
  'ariaSelected',
  'ariaSetSize',
  'ariaSort',
  'ariaValueMax',
  'ariaValueMin',
  'ariaValueNow',
  'ariaValueText'
]
/**
 * Accessibility Object Model aria attributes.
 */
ARIA_PROPERTIES.map(ariaPropertyToAttribute)
/**
 * Converts an AOM aria property into its corresponding attribute.
 *
 * @example
 * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
 *
 * @param property The aria property.
 * @return The aria attribute.
 */
function ariaPropertyToAttribute(property) {
  return (
    property
      .replace('aria', 'aria-')
      // IDREF attributes also include an "Element" or "Elements" suffix
      .replace(/Elements?/g, '')
      .toLowerCase()
  )
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up a `ReactiveElement` constructor to enable updates when delegating
 * aria attributes. Elements may bind `this.aria*` properties to `aria-*`
 * attributes in their render functions.
 *
 * This function will:
 * - Call `requestUpdate()` when an aria attribute changes.
 * - Add `role="presentation"` to the host.
 *
 * NOTE: The following features are not currently supported:
 * - Delegating IDREF attributes (ex: `aria-labelledby`, `aria-controls`)
 * - Delegating the `role` attribute
 *
 * @example
 * class XButton extends LitElement {
 *   static {
 *     requestUpdateOnAriaChange(XButton);
 *   }
 *
 *   protected override render() {
 *     return html`
 *       <button aria-label=${this.ariaLabel || nothing}>
 *         <slot></slot>
 *       </button>
 *     `;
 *   }
 * }
 *
 * @param ctor The `ReactiveElement` constructor to patch.
 */
function requestUpdateOnAriaChange(ctor) {
  for (const ariaProperty of ARIA_PROPERTIES) {
    ctor.createProperty(ariaProperty, {
      attribute: ariaPropertyToAttribute(ariaProperty),
      reflect: true
    })
  }
  ctor.addInitializer((element) => {
    const controller = {
      hostConnected() {
        element.setAttribute('role', 'presentation')
      }
    }
    element.addController(controller)
  })
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique symbol used for protected access to an instance's
 * `ElementInternals`.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   constructor() {
 *     super();
 *     this[internals].role = 'button';
 *   }
 * }
 * ```
 */
const internals = Symbol('internals')
// Private symbols
const privateInternals = Symbol('privateInternals')
/**
 * Mixes in an attached `ElementInternals` instance.
 *
 * This mixin is only needed when other shared code needs access to a
 * component's `ElementInternals`, such as form-associated mixins.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `WithElementInternals` mixed in.
 */
function mixinElementInternals(base) {
  class WithElementInternalsElement extends base {
    get [internals]() {
      // Create internals in getter so that it can be used in methods called on
      // construction in `ReactiveElement`, such as `requestUpdate()`.
      if (!this[privateInternals]) {
        // Cast needed for closure
        this[privateInternals] = this.attachInternals()
      }
      return this[privateInternals]
    }
  }
  return WithElementInternalsElement
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up an element's constructor to enable form submission. The element
 * instance should be form associated and have a `type` property.
 *
 * A click listener is added to each element instance. If the click is not
 * default prevented, it will submit the element's form, if any.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   static {
 *     setupFormSubmitter(MyElement);
 *   }
 *
 *   static formAssociated = true;
 *
 *   type: FormSubmitterType = 'submit';
 * }
 * ```
 *
 * @param ctor The form submitter element's constructor.
 */
function setupFormSubmitter(ctor) {
  ctor.addInitializer((instance) => {
    const submitter = instance
    submitter.addEventListener('click', async (event) => {
      const { type, [internals]: elementInternals } = submitter
      const { form } = elementInternals
      if (!form || type === 'button') {
        return
      }
      // Wait a full task for event bubbling to complete.
      await new Promise((resolve) => {
        setTimeout(resolve)
      })
      if (event.defaultPrevented) {
        return
      }
      if (type === 'reset') {
        form.reset()
        return
      }
      // form.requestSubmit(submitter) does not work with form associated custom
      // elements. This patches the dispatched submit event to add the correct
      // `submitter`.
      // See https://github.com/WICG/webcomponents/issues/814
      form.addEventListener(
        'submit',
        (submitEvent) => {
          Object.defineProperty(submitEvent, 'submitter', {
            configurable: true,
            enumerable: true,
            get: () => submitter
          })
        },
        { capture: true, once: true }
      )
      elementInternals.setFormValue(submitter.value)
      form.requestSubmit()
    })
  })
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
  const event = new MouseEvent('click', { bubbles: true })
  element.dispatchEvent(event)
  return event
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
  // Event must start at the event target.
  if (event.currentTarget !== event.target) {
    return false
  }
  // Event must not be retargeted from shadowRoot.
  if (event.composedPath()[0] !== event.target) {
    return false
  }
  // Target must not be disabled; this should only occur for a synthetically
  // dispatched click.
  if (event.target.disabled) {
    return false
  }
  // This is an activation if the event should not be squelched.
  return !squelchEvent(event)
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
  const squelched = isSquelchingEvents
  if (squelched) {
    event.preventDefault()
    event.stopImmediatePropagation()
  }
  squelchEventsForMicrotask()
  return squelched
}
// Ignore events for one microtask only.
let isSquelchingEvents = false
async function squelchEventsForMicrotask() {
  isSquelchingEvents = true
  // Need to pause for just one microtask.
  // tslint:disable-next-line
  await null
  isSquelchingEvents = false
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const buttonBaseClass = mixinElementInternals(s$1)
/**
 * A button component.
 */
class Button extends buttonBaseClass {
  get name() {
    return this.getAttribute('name') ?? ''
  }
  set name(name) {
    this.setAttribute('name', name)
  }
  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[internals].form
  }
  constructor() {
    super()
    /**
     * Whether or not the button is disabled.
     */
    this.disabled = false
    /**
     * The URL that the link button points to.
     */
    this.href = ''
    /**
     * Where to display the linked `href` URL for a link button. Common options
     * include `_blank` to open in a new tab.
     */
    this.target = ''
    /**
     * Whether to render the icon at the inline end of the label rather than the
     * inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     */
    this.trailingIcon = false
    /**
     * Whether to display the icon or not.
     */
    this.hasIcon = false
    /**
     * The default behavior of the button. May be "text", "reset", or "submit"
     * (default).
     */
    this.type = 'submit'
    /**
     * The value added to a form with the button's name when the button submits a
     * form.
     */
    this.value = ''
    this.handleActivationClick = (event) => {
      if (!isActivationClick(event) || !this.buttonElement) {
        return
      }
      this.focus()
      dispatchActivationClick(this.buttonElement)
    }
    {
      this.addEventListener('click', this.handleActivationClick)
    }
  }
  focus() {
    this.buttonElement?.focus()
  }
  blur() {
    this.buttonElement?.blur()
  }
  render() {
    // Link buttons may not be disabled
    const isDisabled = this.disabled && !this.href
    const buttonOrLink = this.href ? this.renderLink() : this.renderButton()
    // TODO(b/310046938): due to a limitation in focus ring/ripple, we can't use
    // the same ID for different elements, so we change the ID instead.
    const buttonId = this.href ? 'link' : 'button'
    return x`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple for=${buttonId} ?disabled="${isDisabled}"></md-ripple>
      ${buttonOrLink}
    `
  }
  renderButton() {
    // Needed for closure conformance
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this
    return x`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${ariaLabel || T}"
      aria-haspopup="${ariaHasPopup || T}"
      aria-expanded="${ariaExpanded || T}">
      ${this.renderContent()}
    </button>`
  }
  renderLink() {
    // Needed for closure conformance
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this
    return x`<a
      id="link"
      class="button"
      aria-label="${ariaLabel || T}"
      aria-haspopup="${ariaHasPopup || T}"
      aria-expanded="${ariaExpanded || T}"
      href=${this.href}
      target=${this.target || T}
      >${this.renderContent()}
    </a>`
  }
  renderContent() {
    const icon = x`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`
    return x`
      <span class="touch"></span>
      ${this.trailingIcon ? T : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : T}
    `
  }
  handleSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0
  }
}
;(() => {
  requestUpdateOnAriaChange(Button)
  setupFormSubmitter(Button)
})()
/** @nocollapse */
Button.formAssociated = true
/** @nocollapse */
Button.shadowRootOptions = {
  mode: 'open',
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Button.prototype,
  'disabled',
  void 0
)
__decorate([n$5()], Button.prototype, 'href', void 0)
__decorate([n$5()], Button.prototype, 'target', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'trailing-icon', reflect: true })],
  Button.prototype,
  'trailingIcon',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-icon', reflect: true })],
  Button.prototype,
  'hasIcon',
  void 0
)
__decorate([n$5()], Button.prototype, 'type', void 0)
__decorate([n$5({ reflect: true })], Button.prototype, 'value', void 0)
__decorate([e$5('.button')], Button.prototype, 'buttonElement', void 0)
__decorate(
  [o$4({ slot: 'icon', flatten: true })],
  Button.prototype,
  'assignedIcons',
  void 0
)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An elevated button component.
 */
class ElevatedButton extends Button {
  renderElevationOrOutline() {
    return x`<md-elevation part="elevation"></md-elevation>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/elevated-styles.css.
const styles$S = i$4`:host{--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-elevated-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-elevated-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-elevated-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-elevated-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-elevated-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-elevated-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-elevated-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-elevated-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-elevated-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-elevated-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-elevated-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-elevated-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-elevated-button-icon-size, 18px);--_pressed-icon-color: var(--md-elevated-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-elevated-button-container-shape-start-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-elevated-button-container-shape-start-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-elevated-button-container-shape-end-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-elevated-button-container-shape-end-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-elevated-button-leading-space, 24px);--_trailing-space: var(--md-elevated-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-elevated-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-elevated-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-elevated-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-elevated-button-with-trailing-icon-trailing-space, 16px)}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/shared-elevation-styles.css.
const styles$R = i$4`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/shared-styles.css.
const styles$Q = i$4`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Elevated buttons are essentially filled buttons with a lighter
 * background color and a shadow. To prevent shadow creep, only use them when
 * absolutely necessary, such as when the button requires visual separation from
 * a patterned background.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdElevatedButton = class MdElevatedButton extends ElevatedButton {}
MdElevatedButton.styles = [styles$Q, styles$R, styles$S]
MdElevatedButton = __decorate([t$3('md-elevated-button')], MdElevatedButton)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled button component.
 */
class FilledButton extends Button {
  renderElevationOrOutline() {
    return x`<md-elevation part="elevation"></md-elevation>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/filled-styles.css.
const styles$P = i$4`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledButton = class MdFilledButton extends FilledButton {}
MdFilledButton.styles = [styles$Q, styles$R, styles$P]
MdFilledButton = __decorate([t$3('md-filled-button')], MdFilledButton)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled tonal button component.
 */
class FilledTonalButton extends Button {
  renderElevationOrOutline() {
    return x`<md-elevation part="elevation"></md-elevation>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/filled-tonal-styles.css.
const styles$O = i$4`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledTonalButton = class MdFilledTonalButton extends FilledTonalButton {}
MdFilledTonalButton.styles = [styles$Q, styles$R, styles$O]
MdFilledTonalButton = __decorate(
  [t$3('md-filled-tonal-button')],
  MdFilledTonalButton
)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined button component.
 */
class OutlinedButton extends Button {
  renderElevationOrOutline() {
    return x`<div class="outline"></div>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/outlined-styles.css.
const styles$N = i$4`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedButton = class MdOutlinedButton extends OutlinedButton {}
MdOutlinedButton.styles = [styles$Q, styles$N]
MdOutlinedButton = __decorate([t$3('md-outlined-button')], MdOutlinedButton)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A text button component.
 */
class TextButton extends Button {}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/text-styles.css.
const styles$M = i$4`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
let MdTextButton = class MdTextButton extends TextButton {}
MdTextButton.styles = [styles$Q, styles$M]
MdTextButton = __decorate([t$3('md-text-button')], MdTextButton)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * class MyInput extends LitElement {
 *   render() {
 *     return html`<input @change=${this.redispatchEvent}>`;
 *   }
 *
 *   protected redispatchEvent(event: Event) {
 *     redispatchEvent(this, event);
 *   }
 * }
 *
 * @param element The element to dispatch the event from.
 * @param event The event to re-dispatch.
 * @return Whether or not the event was dispatched (if cancelable).
 */
function redispatchEvent(element, event) {
  // For bubbling events in SSR light DOM (or composed), stop their propagation
  // and dispatch the copy.
  if (event.bubbles && (!element.shadowRoot || event.composed)) {
    event.stopPropagation()
  }
  const copy = Reflect.construct(event.constructor, [event.type, event])
  const dispatched = element.dispatchEvent(copy)
  if (!dispatched) {
    event.preventDefault()
  }
  return dispatched
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol property used to create a constraint validation `Validator`.
 * Required for all `mixinConstraintValidation()` elements.
 */
const createValidator = Symbol('createValidator')
/**
 * A symbol property used to return an anchor for constraint validation popups.
 * Required for all `mixinConstraintValidation()` elements.
 */
const getValidityAnchor = Symbol('getValidityAnchor')
// Private symbol members, used to avoid name clashing.
const privateValidator = Symbol('privateValidator')
const privateSyncValidity = Symbol('privateSyncValidity')
const privateCustomValidationMessage = Symbol('privateCustomValidationMessage')
/**
 * Mixes in constraint validation APIs for an element.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
 * for more details.
 *
 * Implementations must provide a validator to cache and compute its validity,
 * along with a shadow root element to anchor validation popups to.
 *
 * @example
 * ```ts
 * const baseClass = mixinConstraintValidation(
 *   mixinFormAssociated(mixinElementInternals(LitElement))
 * );
 *
 * class MyCheckbox extends baseClass {
 *   \@property({type: Boolean}) checked = false;
 *   \@property({type: Boolean}) required = false;
 *
 *   [createValidator]() {
 *     return new CheckboxValidator(() => this);
 *   }
 *
 *   [getValidityAnchor]() {
 *     return this.renderRoot.querySelector('.root');
 *   }
 * }
 * ```
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `ConstraintValidation` mixed in.
 */
function mixinConstraintValidation(base) {
  var _a
  class ConstraintValidationElement extends base {
    constructor() {
      super(...arguments)
      /**
       * Needed for Safari, see https://bugs.webkit.org/show_bug.cgi?id=261432
       * Replace with this[internals].validity.customError when resolved.
       */
      this[_a] = ''
    }
    get validity() {
      this[privateSyncValidity]()
      return this[internals].validity
    }
    get validationMessage() {
      this[privateSyncValidity]()
      return this[internals].validationMessage
    }
    get willValidate() {
      this[privateSyncValidity]()
      return this[internals].willValidate
    }
    checkValidity() {
      this[privateSyncValidity]()
      return this[internals].checkValidity()
    }
    reportValidity() {
      this[privateSyncValidity]()
      return this[internals].reportValidity()
    }
    setCustomValidity(error) {
      this[privateCustomValidationMessage] = error
      this[privateSyncValidity]()
    }
    requestUpdate(name, oldValue, options) {
      super.requestUpdate(name, oldValue, options)
      this[privateSyncValidity]()
    }
    firstUpdated(changed) {
      super.firstUpdated(changed)
      // Sync the validity again when the element first renders, since the
      // validity anchor is now available.
      //
      // Elements that `delegatesFocus: true` to an `<input>` will throw an
      // error in Chrome and Safari when a form tries to submit or call
      // `form.reportValidity()`:
      // "An invalid form control with name='' is not focusable"
      //
      // The validity anchor MUST be provided in `internals.setValidity()` and
      // MUST be the `<input>` element rendered.
      //
      // See https://lit.dev/playground/#gist=6c26e418e0010f7a5aac15005cde8bde
      // for a reproduction.
      this[privateSyncValidity]()
    }
    [((_a = privateCustomValidationMessage), privateSyncValidity)]() {
      if (!this[privateValidator]) {
        this[privateValidator] = this[createValidator]()
      }
      const { validity, validationMessage: nonCustomValidationMessage } =
        this[privateValidator].getValidity()
      const customError = !!this[privateCustomValidationMessage]
      const validationMessage =
        this[privateCustomValidationMessage] || nonCustomValidationMessage
      this[internals].setValidity(
        { ...validity, customError },
        validationMessage,
        this[getValidityAnchor]() ?? undefined
      )
    }
    [createValidator]() {
      throw new Error('Implement [createValidator]')
    }
    [getValidityAnchor]() {
      throw new Error('Implement [getValidityAnchor]')
    }
  }
  return ConstraintValidationElement
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol property to retrieve the form value for an element.
 */
const getFormValue = Symbol('getFormValue')
/**
 * A symbol property to retrieve the form state for an element.
 */
const getFormState = Symbol('getFormState')
/**
 * Mixes in form-associated behavior for a class. This allows an element to add
 * values to `<form>` elements.
 *
 * Implementing classes should provide a `[formValue]` to return the current
 * value of the element, as well as reset and restore callbacks.
 *
 * @example
 * ```ts
 * const base = mixinFormAssociated(mixinElementInternals(LitElement));
 *
 * class MyControl extends base {
 *   \@property()
 *   value = '';
 *
 *   override [getFormValue]() {
 *     return this.value;
 *   }
 *
 *   override formResetCallback() {
 *     const defaultValue = this.getAttribute('value');
 *     this.value = defaultValue;
 *   }
 *
 *   override formStateRestoreCallback(state: string) {
 *     this.value = state;
 *   }
 * }
 * ```
 *
 * Elements may optionally provide a `[formState]` if their values do not
 * represent the state of the component.
 *
 * @example
 * ```ts
 * const base = mixinFormAssociated(mixinElementInternals(LitElement));
 *
 * class MyCheckbox extends base {
 *   \@property()
 *   value = 'on';
 *
 *   \@property({type: Boolean})
 *   checked = false;
 *
 *   override [getFormValue]() {
 *     return this.checked ? this.value : null;
 *   }
 *
 *   override [getFormState]() {
 *     return String(this.checked);
 *   }
 *
 *   override formResetCallback() {
 *     const defaultValue = this.hasAttribute('checked');
 *     this.checked = defaultValue;
 *   }
 *
 *   override formStateRestoreCallback(state: string) {
 *     this.checked = Boolean(state);
 *   }
 * }
 * ```
 *
 * IMPORTANT: Requires declares for lit-analyzer
 * @example
 * ```ts
 * const base = mixinFormAssociated(mixinElementInternals(LitElement));
 * class MyControl extends base {
 *   // Writable mixin properties for lit-html binding, needed for lit-analyzer
 *   declare disabled: boolean;
 *   declare name: string;
 * }
 * ```
 *
 * @param base The class to mix functionality into. The base class must use
 *     `mixinElementInternals()`.
 * @return The provided class with `FormAssociated` mixed in.
 */
function mixinFormAssociated(base) {
  class FormAssociatedElement extends base {
    get form() {
      return this[internals].form
    }
    get labels() {
      return this[internals].labels
    }
    // Use @property for the `name` and `disabled` properties to add them to the
    // `observedAttributes` array and trigger `attributeChangedCallback()`.
    //
    // We don't use Lit's default getter/setter (`noAccessor: true`) because
    // the attributes need to be updated synchronously to work with synchronous
    // form APIs, and Lit updates attributes async by default.
    get name() {
      return this.getAttribute('name') ?? ''
    }
    set name(name) {
      // Note: setting name to null or empty does not remove the attribute.
      this.setAttribute('name', name)
      // We don't need to call `requestUpdate()` since it's called synchronously
      // in `attributeChangedCallback()`.
    }
    get disabled() {
      return this.hasAttribute('disabled')
    }
    set disabled(disabled) {
      this.toggleAttribute('disabled', disabled)
      // We don't need to call `requestUpdate()` since it's called synchronously
      // in `attributeChangedCallback()`.
    }
    attributeChangedCallback(name, old, value) {
      // Manually `requestUpdate()` for `name` and `disabled` when their
      // attribute or property changes.
      // The properties update their attributes, so this callback is invoked
      // immediately when the properties are set. We call `requestUpdate()` here
      // instead of letting Lit set the properties from the attribute change.
      // That would cause the properties to re-set the attribute and invoke this
      // callback again in a loop. This leads to stale state when Lit tries to
      // determine if a property changed or not.
      if (name === 'name' || name === 'disabled') {
        // Disabled's value is only false if the attribute is missing and null.
        const oldValue = name === 'disabled' ? old !== null : old
        // Trigger a lit update when the attribute changes.
        this.requestUpdate(name, oldValue)
        return
      }
      super.attributeChangedCallback(name, old, value)
    }
    requestUpdate(name, oldValue, options) {
      super.requestUpdate(name, oldValue, options)
      // If any properties change, update the form value, which may have changed
      // as well.
      // Update the form value synchronously in `requestUpdate()` rather than
      // `update()` or `updated()`, which are async. This is necessary to ensure
      // that form data is updated in time for synchronous event listeners.
      this[internals].setFormValue(this[getFormValue](), this[getFormState]())
    }
    [getFormValue]() {
      // Closure does not allow abstract symbol members, so a default
      // implementation is needed.
      throw new Error('Implement [getFormValue]')
    }
    [getFormState]() {
      return this[getFormValue]()
    }
    formDisabledCallback(disabled) {
      this.disabled = disabled
    }
  }
  /** @nocollapse */
  FormAssociatedElement.formAssociated = true
  __decorate(
    [n$5({ noAccessor: true })],
    FormAssociatedElement.prototype,
    'name',
    null
  )
  __decorate(
    [n$5({ type: Boolean, noAccessor: true })],
    FormAssociatedElement.prototype,
    'disabled',
    null
  )
  return FormAssociatedElement
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A class that computes and caches `ValidityStateFlags` for a component with
 * a given `State` interface.
 *
 * Cached performance before computing validity is important since constraint
 * validation must be checked frequently and synchronously when properties
 * change.
 *
 * @template State The expected interface of properties relevant to constraint
 *     validation.
 */
class Validator {
  /**
   * Creates a new validator.
   *
   * @param getCurrentState A callback that returns the current state of
   *     constraint validation-related properties.
   */
  constructor(getCurrentState) {
    this.getCurrentState = getCurrentState
    /**
     * The current validity state and message. This is cached and returns if
     * constraint validation state does not change.
     */
    this.currentValidity = {
      validity: {},
      validationMessage: ''
    }
  }
  /**
   * Returns the current `ValidityStateFlags` and validation message for the
   * validator.
   *
   * If the constraint validation state has not changed, this will return a
   * cached result. This is important since `getValidity()` can be called
   * frequently in response to synchronous property changes.
   *
   * @return The current validity and validation message.
   */
  getValidity() {
    const state = this.getCurrentState()
    const hasStateChanged =
      !this.prevState || !this.equals(this.prevState, state)
    if (!hasStateChanged) {
      return this.currentValidity
    }
    const { validity, validationMessage } = this.computeValidity(state)
    this.prevState = this.copy(state)
    this.currentValidity = {
      validationMessage,
      validity: {
        // Change any `ValidityState` instances into `ValidityStateFlags` since
        // `ValidityState` cannot be easily `{...spread}`.
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing
      }
    }
    return this.currentValidity
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A validator that provides constraint validation that emulates
 * `<input type="checkbox">` validation.
 */
class CheckboxValidator extends Validator {
  computeValidity(state) {
    if (!this.checkboxControl) {
      // Lazily create the platform input
      this.checkboxControl = document.createElement('input')
      this.checkboxControl.type = 'checkbox'
    }
    this.checkboxControl.checked = state.checked
    this.checkboxControl.required = state.required
    return {
      validity: this.checkboxControl.validity,
      validationMessage: this.checkboxControl.validationMessage
    }
  }
  equals(prev, next) {
    return prev.checked === next.checked && prev.required === next.required
  }
  copy({ checked, required }) {
    return { checked, required }
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const checkboxBaseClass = mixinConstraintValidation(
  mixinFormAssociated(mixinElementInternals(s$1))
)
/**
 * A checkbox component.
 *
 *
 * @fires change {Event} The native `change` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
 * --bubbles
 * @fires input {InputEvent} The native `input` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * --bubbles --composed
 */
class Checkbox extends checkboxBaseClass {
  constructor() {
    super()
    /**
     * Whether or not the checkbox is selected.
     */
    this.checked = false
    /**
     * Whether or not the checkbox is indeterminate.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
     */
    this.indeterminate = false
    /**
     * When true, require the checkbox to be selected when participating in
     * form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     */
    this.required = false
    /**
     * The value of the checkbox that is submitted with a form when selected.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
     */
    this.value = 'on'
    this.prevChecked = false
    this.prevDisabled = false
    this.prevIndeterminate = false
    {
      this.addEventListener('click', (event) => {
        if (!isActivationClick(event) || !this.input) {
          return
        }
        this.focus()
        dispatchActivationClick(this.input)
      })
    }
  }
  update(changed) {
    if (
      changed.has('checked') ||
      changed.has('disabled') ||
      changed.has('indeterminate')
    ) {
      this.prevChecked = changed.get('checked') ?? this.checked
      this.prevDisabled = changed.get('disabled') ?? this.disabled
      this.prevIndeterminate =
        changed.get('indeterminate') ?? this.indeterminate
    }
    super.update(changed)
  }
  render() {
    const prevNone = !this.prevChecked && !this.prevIndeterminate
    const prevChecked = this.prevChecked && !this.prevIndeterminate
    const prevIndeterminate = this.prevIndeterminate
    const isChecked = this.checked && !this.indeterminate
    const isIndeterminate = this.indeterminate
    const containerClasses = e$1({
      disabled: this.disabled,
      selected: isChecked || isIndeterminate,
      unselected: !isChecked && !isIndeterminate,
      checked: isChecked,
      indeterminate: isIndeterminate,
      'prev-unselected': prevNone,
      'prev-checked': prevChecked,
      'prev-indeterminate': prevIndeterminate,
      'prev-disabled': this.prevDisabled
    })
    // Needed for closure conformance
    const { ariaLabel, ariaInvalid } = this
    // Note: <input> needs to be rendered before the <svg> for
    // form.reportValidity() to work in Chrome.
    return x`
      <div class="container ${containerClasses}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${isIndeterminate ? 'mixed' : T}
          aria-label=${ariaLabel || T}
          aria-invalid=${ariaInvalid || T}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `
  }
  handleInput(event) {
    const target = event.target
    this.checked = target.checked
    this.indeterminate = target.indeterminate
    // <input> 'input' event bubbles and is composed, don't re-dispatch it.
  }
  handleChange(event) {
    // <input> 'change' event is not composed, re-dispatch it.
    redispatchEvent(this, event)
  }
  [getFormValue]() {
    if (!this.checked || this.indeterminate) {
      return null
    }
    return this.value
  }
  [getFormState]() {
    return String(this.checked)
  }
  formResetCallback() {
    // The checked property does not reflect, so the original attribute set by
    // the user is used to determine the default value.
    this.checked = this.hasAttribute('checked')
  }
  formStateRestoreCallback(state) {
    this.checked = state === 'true'
  }
  [createValidator]() {
    return new CheckboxValidator(() => this)
  }
  [getValidityAnchor]() {
    return this.input
  }
}
;(() => {
  requestUpdateOnAriaChange(Checkbox)
})()
/** @nocollapse */
Checkbox.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate([n$5({ type: Boolean })], Checkbox.prototype, 'checked', void 0)
__decorate(
  [n$5({ type: Boolean })],
  Checkbox.prototype,
  'indeterminate',
  void 0
)
__decorate([n$5({ type: Boolean })], Checkbox.prototype, 'required', void 0)
__decorate([n$5()], Checkbox.prototype, 'value', void 0)
__decorate([r$4()], Checkbox.prototype, 'prevChecked', void 0)
__decorate([r$4()], Checkbox.prototype, 'prevDisabled', void 0)
__decorate([r$4()], Checkbox.prototype, 'prevIndeterminate', void 0)
__decorate([e$5('input')], Checkbox.prototype, 'input', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./checkbox/internal/checkbox-styles.css.
const styles$L = i$4`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Checkboxes allow users to select one or more items from a set.
 * Checkboxes can turn an option on or off.
 *
 * @description
 * Use checkboxes to:
 * - Select one or more options from a list
 * - Present a list containing sub-selections
 * - Turn an item on or off in a desktop environment
 *
 * @final
 * @suppress {visibility}
 */
let MdCheckbox = class MdCheckbox extends Checkbox {}
MdCheckbox.styles = [styles$L]
MdCheckbox = __decorate([t$3('md-checkbox')], MdCheckbox)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A chip component.
 *
 * @fires update-focus {Event} Dispatched when `disabled` is toggled. --bubbles
 */
class Chip extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     */
    this.disabled = false
    /**
     * When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See
     * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
     * for more guidance on when this is needed.
     */
    this.alwaysFocusable = false
    /**
     * The label of the chip.
     */
    this.label = ''
    /**
     * Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of
     * Unstyled Content.
     */
    this.hasIcon = false
  }
  /**
   * Whether or not the primary ripple is disabled (defaults to `disabled`).
   * Some chip actions such as links cannot be disabled.
   */
  get rippleDisabled() {
    return this.disabled
  }
  focus(options) {
    if (this.disabled && !this.alwaysFocusable) {
      return
    }
    super.focus(options)
  }
  render() {
    return x`
      <div class="container ${e$1(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `
  }
  updated(changed) {
    if (changed.has('disabled') && changed.get('disabled') !== undefined) {
      this.dispatchEvent(new Event('update-focus', { bubbles: true }))
    }
  }
  getContainerClasses() {
    return {
      disabled: this.disabled,
      'has-icon': this.hasIcon
    }
  }
  renderContainerContent() {
    return x`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `
  }
  renderOutline() {
    return x`<span class="outline"></span>`
  }
  renderLeadingIcon() {
    return x`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`
  }
  renderPrimaryContent() {
    return x`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `
  }
  handleIconChange(event) {
    const slot = event.target
    this.hasIcon = slot.assignedElements({ flatten: true }).length > 0
  }
}
;(() => {
  requestUpdateOnAriaChange(Chip)
})()
/** @nocollapse */
Chip.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Chip.prototype,
  'disabled',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'always-focusable' })],
  Chip.prototype,
  'alwaysFocusable',
  void 0
)
__decorate([n$5()], Chip.prototype, 'label', void 0)
__decorate(
  [n$5({ type: Boolean, reflect: true, attribute: 'has-icon' })],
  Chip.prototype,
  'hasIcon',
  void 0
)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An assist chip component.
 */
class AssistChip extends Chip {
  constructor() {
    super(...arguments)
    this.elevated = false
    this.href = ''
    this.target = ''
  }
  get primaryId() {
    return this.href ? 'link' : 'button'
  }
  get rippleDisabled() {
    // Link chips cannot be disabled
    return !this.href && this.disabled
  }
  getContainerClasses() {
    return {
      ...super.getContainerClasses(),
      // Link chips cannot be disabled
      disabled: !this.href && this.disabled,
      elevated: this.elevated,
      link: !!this.href
    }
  }
  renderPrimaryAction(content) {
    const { ariaLabel } = this
    if (this.href) {
      return x`
        <a
          class="primary action"
          id="link"
          aria-label=${ariaLabel || T}
          href=${this.href}
          target=${this.target || T}
          >${content}</a
        >
      `
    }
    return x`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || T}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        type="button"
        >${content}</button
      >
    `
  }
  renderOutline() {
    if (this.elevated) {
      return x`<md-elevation part="elevation"></md-elevation>`
    }
    return super.renderOutline()
  }
}
__decorate([n$5({ type: Boolean })], AssistChip.prototype, 'elevated', void 0)
__decorate([n$5()], AssistChip.prototype, 'href', void 0)
__decorate([n$5()], AssistChip.prototype, 'target', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/assist-styles.css.
const styles$K = i$4`:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-assist-chip-leading-space, 16px);--_trailing-space: var(--md-assist-chip-trailing-space, 16px);--_icon-label-space: var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/elevated-styles.css.
const styles$J = i$4`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/shared-styles.css.
const styles$I = i$4`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled){cursor:inherit}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdAssistChip = class MdAssistChip extends AssistChip {}
MdAssistChip.styles = [styles$I, styles$J, styles$K]
MdAssistChip = __decorate([t$3('md-assist-chip')], MdAssistChip)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A chip set component.
 */
class ChipSet extends s$1 {
  get chips() {
    return this.childElements.filter((child) => child instanceof Chip)
  }
  constructor() {
    super()
    this.internals =
      // Cast needed for closure
      this.attachInternals()
    {
      this.addEventListener('focusin', this.updateTabIndices.bind(this))
      this.addEventListener('update-focus', this.updateTabIndices.bind(this))
      this.addEventListener('keydown', this.handleKeyDown.bind(this))
      this.internals.role = 'toolbar'
    }
  }
  render() {
    return x`<slot @slotchange=${this.updateTabIndices}></slot>`
  }
  handleKeyDown(event) {
    const isLeft = event.key === 'ArrowLeft'
    const isRight = event.key === 'ArrowRight'
    const isHome = event.key === 'Home'
    const isEnd = event.key === 'End'
    // Ignore non-navigation keys
    if (!isLeft && !isRight && !isHome && !isEnd) {
      return
    }
    const { chips } = this
    // Don't try to select another chip if there aren't any.
    if (chips.length < 2) {
      return
    }
    // Prevent default interactions, such as scrolling.
    event.preventDefault()
    if (isHome || isEnd) {
      const index = isHome ? 0 : chips.length - 1
      chips[index].focus({ trailing: isEnd })
      this.updateTabIndices()
      return
    }
    // Check if moving forwards or backwards
    const isRtl = getComputedStyle(this).direction === 'rtl'
    const forwards = isRtl ? isLeft : isRight
    const focusedChip = chips.find((chip) => chip.matches(':focus-within'))
    if (!focusedChip) {
      // If there is not already a chip focused, select the first or last chip
      // based on the direction we're traveling.
      const nextChip = forwards ? chips[0] : chips[chips.length - 1]
      nextChip.focus({ trailing: !forwards })
      this.updateTabIndices()
      return
    }
    const currentIndex = chips.indexOf(focusedChip)
    let nextIndex = forwards ? currentIndex + 1 : currentIndex - 1
    // Search for the next sibling that is not disabled to select.
    // If we return to the host index, there is nothing to select.
    while (nextIndex !== currentIndex) {
      if (nextIndex >= chips.length) {
        // Return to start if moving past the last item.
        nextIndex = 0
      } else if (nextIndex < 0) {
        // Go to end if moving before the first item.
        nextIndex = chips.length - 1
      }
      // Check if the next sibling is disabled. If so,
      // move the index and continue searching.
      //
      // Some toolbar items may be focusable when disabled for increased
      // visibility.
      const nextChip = chips[nextIndex]
      if (nextChip.disabled && !nextChip.alwaysFocusable) {
        if (forwards) {
          nextIndex++
        } else {
          nextIndex--
        }
        continue
      }
      nextChip.focus({ trailing: !forwards })
      this.updateTabIndices()
      break
    }
  }
  updateTabIndices() {
    // The chip that should be focusable is either the chip that currently has
    // focus or the first chip that can be focused.
    const { chips } = this
    let chipToFocus
    for (const chip of chips) {
      const isChipFocusable = chip.alwaysFocusable || !chip.disabled
      const chipIsFocused = chip.matches(':focus-within')
      if (chipIsFocused && isChipFocusable) {
        // Found the first chip that is actively focused. This overrides the
        // first focusable chip found.
        chipToFocus = chip
        continue
      }
      if (isChipFocusable && !chipToFocus) {
        chipToFocus = chip
      }
      // Disable non-focused chips. If we disable all of them, we'll grant focus
      // to the first focusable child that was found.
      chip.tabIndex = -1
    }
    if (chipToFocus) {
      chipToFocus.tabIndex = 0
    }
  }
}
__decorate([o$4()], ChipSet.prototype, 'childElements', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/chip-set-styles.css.
const styles$H = i$4`:host{display:flex;flex-wrap:wrap;gap:8px}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdChipSet = class MdChipSet extends ChipSet {}
MdChipSet.styles = [styles$H]
MdChipSet = __decorate([t$3('md-chip-set')], MdChipSet)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ARIA_LABEL_REMOVE = 'aria-label-remove'
/**
 * A chip component with multiple actions.
 */
class MultiActionChip extends Chip {
  get ariaLabelRemove() {
    if (this.hasAttribute(ARIA_LABEL_REMOVE)) {
      return this.getAttribute(ARIA_LABEL_REMOVE)
    }
    const { ariaLabel } = this
    return `Remove ${ariaLabel || this.label}`
  }
  set ariaLabelRemove(ariaLabel) {
    const prev = this.ariaLabelRemove
    if (ariaLabel === prev) {
      return
    }
    if (ariaLabel === null) {
      this.removeAttribute(ARIA_LABEL_REMOVE)
    } else {
      this.setAttribute(ARIA_LABEL_REMOVE, ariaLabel)
    }
    this.requestUpdate()
  }
  constructor() {
    super()
    this.handleTrailingActionFocus = this.handleTrailingActionFocus.bind(this)
    {
      this.addEventListener('keydown', this.handleKeyDown.bind(this))
    }
  }
  focus(options) {
    const isFocusable = this.alwaysFocusable || !this.disabled
    if (isFocusable && options?.trailing && this.trailingAction) {
      this.trailingAction.focus(options)
      return
    }
    super.focus(options)
  }
  renderContainerContent() {
    return x`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `
  }
  handleKeyDown(event) {
    const isLeft = event.key === 'ArrowLeft'
    const isRight = event.key === 'ArrowRight'
    // Ignore non-navigation keys.
    if (!isLeft && !isRight) {
      return
    }
    if (!this.primaryAction || !this.trailingAction) {
      // Does not have multiple actions.
      return
    }
    // Check if moving forwards or backwards
    const isRtl = getComputedStyle(this).direction === 'rtl'
    const forwards = isRtl ? isLeft : isRight
    const isPrimaryFocused = this.primaryAction?.matches(':focus-within')
    const isTrailingFocused = this.trailingAction?.matches(':focus-within')
    if ((forwards && isTrailingFocused) || (!forwards && isPrimaryFocused)) {
      // Moving outside of the chip, it will be handled by the chip set.
      return
    }
    // Prevent default interactions, such as scrolling.
    event.preventDefault()
    // Don't let the chip set handle this navigation event.
    event.stopPropagation()
    const actionToFocus = forwards ? this.trailingAction : this.primaryAction
    actionToFocus.focus()
  }
  handleTrailingActionFocus() {
    const { primaryAction, trailingAction } = this
    if (!primaryAction || !trailingAction) {
      return
    }
    // Temporarily turn off the primary action's focusability. This allows
    // shift+tab from the trailing action to move to the previous chip rather
    // than the primary action in the same chip.
    primaryAction.tabIndex = -1
    trailingAction.addEventListener(
      'focusout',
      () => {
        primaryAction.tabIndex = 0
      },
      { once: true }
    )
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @protected */
function renderRemoveButton({
  ariaLabel,
  disabled,
  focusListener,
  tabbable = false
}) {
  return x`
    <button
      class="trailing action"
      aria-label=${ariaLabel}
      tabindex=${!tabbable ? -1 : T}
      @click=${handleRemoveClick}
      @focus=${focusListener}>
      <md-focus-ring part="trailing-focus-ring"></md-focus-ring>
      <md-ripple ?disabled=${disabled}></md-ripple>
      <span class="trailing icon" aria-hidden="true">
        <slot name="remove-trailing-icon">
          <svg viewBox="0 96 960 960">
            <path
              d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </slot>
      </span>
      <span class="touch"></span>
    </button>
  `
}
function handleRemoveClick(event) {
  if (this.disabled) {
    return
  }
  event.stopPropagation()
  const preventDefault = !this.dispatchEvent(
    new Event('remove', { cancelable: true })
  )
  if (preventDefault) {
    return
  }
  this.remove()
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filter chip component.
 *
 * @fires remove {Event} Dispatched when the remove button is clicked.
 */
class FilterChip extends MultiActionChip {
  constructor() {
    super(...arguments)
    this.elevated = false
    this.removable = false
    this.selected = false
    /**
     * Only needed for SSR.
     *
     * Add this attribute when a filter chip has a `slot="selected-icon"` to avoid
     * a Flash Of Unstyled Content.
     */
    this.hasSelectedIcon = false
  }
  get primaryId() {
    return 'button'
  }
  getContainerClasses() {
    return {
      ...super.getContainerClasses(),
      elevated: this.elevated,
      selected: this.selected,
      'has-trailing': this.removable,
      'has-icon': this.hasIcon || this.selected
    }
  }
  renderPrimaryAction(content) {
    const { ariaLabel } = this
    return x`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || T}
        aria-pressed=${this.selected}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        @click=${this.handleClick}
        >${content}</button
      >
    `
  }
  renderLeadingIcon() {
    if (!this.selected) {
      return super.renderLeadingIcon()
    }
    return x`
      <slot name="selected-icon">
        <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
        </svg>
      </slot>
    `
  }
  renderTrailingAction(focusListener) {
    if (this.removable) {
      return renderRemoveButton({
        focusListener,
        ariaLabel: this.ariaLabelRemove,
        disabled: this.disabled
      })
    }
    return T
  }
  renderOutline() {
    if (this.elevated) {
      return x`<md-elevation part="elevation"></md-elevation>`
    }
    return super.renderOutline()
  }
  handleClick(event) {
    if (this.disabled) {
      return
    }
    // Store prevValue to revert in case `chip.selected` is changed during an
    // event listener.
    const prevValue = this.selected
    this.selected = !this.selected
    const preventDefault = !redispatchEvent(this, event)
    if (preventDefault) {
      // We should not do `this.selected = !this.selected`, since a client
      // click listener could change its value. Instead, always revert to the
      // original value.
      this.selected = prevValue
      return
    }
  }
}
__decorate([n$5({ type: Boolean })], FilterChip.prototype, 'elevated', void 0)
__decorate([n$5({ type: Boolean })], FilterChip.prototype, 'removable', void 0)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  FilterChip.prototype,
  'selected',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true, attribute: 'has-selected-icon' })],
  FilterChip.prototype,
  'hasSelectedIcon',
  void 0
)
__decorate(
  [e$5('.primary.action')],
  FilterChip.prototype,
  'primaryAction',
  void 0
)
__decorate(
  [e$5('.trailing.action')],
  FilterChip.prototype,
  'trailingAction',
  void 0
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/filter-styles.css.
const styles$G = i$4`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/selectable-styles.css.
const styles$F = i$4`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/trailing-icon-styles.css.
const styles$E = i$4`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFilterChip = class MdFilterChip extends FilterChip {}
MdFilterChip.styles = [styles$I, styles$J, styles$E, styles$F, styles$G]
MdFilterChip = __decorate([t$3('md-filter-chip')], MdFilterChip)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An input chip component.
 *
 * @fires remove {Event} Dispatched when the remove button is clicked.
 */
class InputChip extends MultiActionChip {
  constructor() {
    super(...arguments)
    this.avatar = false
    this.href = ''
    this.target = ''
    this.removeOnly = false
    this.selected = false
  }
  get primaryId() {
    if (this.href) {
      return 'link'
    }
    if (this.removeOnly) {
      return ''
    }
    return 'button'
  }
  get rippleDisabled() {
    // Link chips cannot be disabled
    return !this.href && this.disabled
  }
  get primaryAction() {
    // Don't use @query() since a remove-only input chip still has a span that
    // has "primary action" classes.
    if (this.removeOnly) {
      return null
    }
    return this.renderRoot.querySelector('.primary.action')
  }
  getContainerClasses() {
    return {
      ...super.getContainerClasses(),
      avatar: this.avatar,
      // Link chips cannot be disabled
      disabled: !this.href && this.disabled,
      link: !!this.href,
      selected: this.selected,
      'has-trailing': true
    }
  }
  renderPrimaryAction(content) {
    const { ariaLabel } = this
    if (this.href) {
      return x`
        <a
          class="primary action"
          id="link"
          aria-label=${ariaLabel || T}
          href=${this.href}
          target=${this.target || T}
          >${content}</a
        >
      `
    }
    if (this.removeOnly) {
      return x`
        <span class="primary action" aria-label=${ariaLabel || T}>
          ${content}
        </span>
      `
    }
    return x`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || T}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        type="button"
        >${content}</button
      >
    `
  }
  renderTrailingAction(focusListener) {
    return renderRemoveButton({
      focusListener,
      ariaLabel: this.ariaLabelRemove,
      disabled: !this.href && this.disabled,
      tabbable: this.removeOnly
    })
  }
}
__decorate([n$5({ type: Boolean })], InputChip.prototype, 'avatar', void 0)
__decorate([n$5()], InputChip.prototype, 'href', void 0)
__decorate([n$5()], InputChip.prototype, 'target', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'remove-only' })],
  InputChip.prototype,
  'removeOnly',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  InputChip.prototype,
  'selected',
  void 0
)
__decorate(
  [e$5('.trailing.action')],
  InputChip.prototype,
  'trailingAction',
  void 0
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/input-styles.css.
const styles$D = i$4`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdInputChip = class MdInputChip extends InputChip {}
MdInputChip.styles = [styles$I, styles$E, styles$F, styles$D]
MdInputChip = __decorate([t$3('md-input-chip')], MdInputChip)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A suggestion chip component.
 */
class SuggestionChip extends AssistChip {}
// Note: assist and suggestion chips are functionally identical with different
// tokens.

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/suggestion-styles.css.
const styles$C = i$4`:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-suggestion-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-suggestion-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-suggestion-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-suggestion-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var(--md-suggestion-chip-container-shape-start-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-suggestion-chip-container-shape-start-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-suggestion-chip-container-shape-end-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-suggestion-chip-container-shape-end-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-suggestion-chip-leading-space, 16px);--_trailing-space: var(--md-suggestion-chip-trailing-space, 16px);--_icon-label-space: var(--md-suggestion-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-suggestion-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdSuggestionChip = class MdSuggestionChip extends SuggestionChip {}
MdSuggestionChip.styles = [styles$I, styles$J, styles$C]
MdSuggestionChip = __decorate([t$3('md-suggestion-chip')], MdSuggestionChip)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A divider component.
 */
class Divider extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Indents the divider with equal padding on both sides.
     */
    this.inset = false
    /**
     * Indents the divider with padding on the leading side.
     */
    this.insetStart = false
    /**
     * Indents the divider with padding on the trailing side.
     */
    this.insetEnd = false
  }
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Divider.prototype,
  'inset',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true, attribute: 'inset-start' })],
  Divider.prototype,
  'insetStart',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true, attribute: 'inset-end' })],
  Divider.prototype,
  'insetEnd',
  void 0
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./divider/internal/divider-styles.css.
const styles$B = i$4`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary A divider is a thin line that groups content in lists and
 * containers.
 *
 * @description Dividers can reinforce tapability, such as when used to separate
 * list items or define tappable regions in an accordion.
 *
 * @final
 * @suppress {visibility}
 */
let MdDivider = class MdDivider extends Divider {}
MdDivider.styles = [styles$B]
MdDivider = __decorate([t$3('md-divider')], MdDivider)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The default dialog open animation.
 */
const DIALOG_DEFAULT_OPEN_ANIMATION = {
  dialog: [
    [
      // Dialog slide down
      [{ transform: 'translateY(-50px)' }, { transform: 'translateY(0)' }],
      { duration: 500, easing: EASING.EMPHASIZED }
    ]
  ],
  scrim: [
    [
      // Scrim fade in
      [{ opacity: 0 }, { opacity: 0.32 }],
      { duration: 500, easing: 'linear' }
    ]
  ],
  container: [
    [
      // Container fade in
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 50, easing: 'linear', pseudoElement: '::before' }
    ],
    [
      // Container grow
      // Note: current spec says to grow from 0dp->100% and shrink from
      // 100%->35%. We change this to 35%->100% to simplify the animation that
      // is supposed to clip content as it grows. From 0dp it's possible to see
      // text/actions appear before the container has fully grown.
      [{ height: '35%' }, { height: '100%' }],
      { duration: 500, easing: EASING.EMPHASIZED, pseudoElement: '::before' }
    ]
  ],
  headline: [
    [
      // Headline fade in
      [{ opacity: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 1 }],
      { duration: 250, easing: 'linear', fill: 'forwards' }
    ]
  ],
  content: [
    [
      // Content fade in
      [{ opacity: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 1 }],
      { duration: 250, easing: 'linear', fill: 'forwards' }
    ]
  ],
  actions: [
    [
      // Actions fade in
      [{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }],
      { duration: 300, easing: 'linear', fill: 'forwards' }
    ]
  ]
}
/**
 * The default dialog close animation.
 */
const DIALOG_DEFAULT_CLOSE_ANIMATION = {
  dialog: [
    [
      // Dialog slide up
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-50px)' }],
      { duration: 150, easing: EASING.EMPHASIZED_ACCELERATE }
    ]
  ],
  scrim: [
    [
      // Scrim fade out
      [{ opacity: 0.32 }, { opacity: 0 }],
      { duration: 150, easing: 'linear' }
    ]
  ],
  container: [
    [
      // Container shrink
      [{ height: '100%' }, { height: '35%' }],
      {
        duration: 150,
        easing: EASING.EMPHASIZED_ACCELERATE,
        pseudoElement: '::before'
      }
    ],
    [
      // Container fade out
      [{ opacity: '1' }, { opacity: '0' }],
      { delay: 100, duration: 50, easing: 'linear', pseudoElement: '::before' }
    ]
  ],
  headline: [
    [
      // Headline fade out
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 100, easing: 'linear', fill: 'forwards' }
    ]
  ],
  content: [
    [
      // Content fade out
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 100, easing: 'linear', fill: 'forwards' }
    ]
  ],
  actions: [
    [
      // Actions fade out
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 100, easing: 'linear', fill: 'forwards' }
    ]
  ]
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A dialog component.
 *
 * @fires open {Event} Dispatched when the dialog is opening before any animations.
 * @fires opened {Event} Dispatched when the dialog has opened after any animations.
 * @fires close {Event} Dispatched when the dialog is closing before any animations.
 * @fires closed {Event} Dispatched when the dialog has closed after any animations.
 * @fires cancel {Event} Dispatched when the dialog has been canceled by clicking
 * on the scrim or pressing Escape.
 */
class Dialog extends s$1 {
  /**
   * Opens the dialog when set to `true` and closes it when set to `false`.
   */
  get open() {
    return this.isOpen
  }
  set open(open) {
    if (open === this.isOpen) {
      return
    }
    this.isOpen = open
    if (open) {
      this.setAttribute('open', '')
      this.show()
    } else {
      this.removeAttribute('open')
      this.close()
    }
  }
  constructor() {
    super()
    /**
     * Skips the opening and closing animations.
     */
    this.quick = false
    /**
     * Gets or sets the dialog's return value, usually to indicate which button
     * a user pressed to close it.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue
     */
    this.returnValue = ''
    /**
     * Gets the opening animation for a dialog. Set to a new function to customize
     * the animation.
     */
    this.getOpenAnimation = () => DIALOG_DEFAULT_OPEN_ANIMATION
    /**
     * Gets the closing animation for a dialog. Set to a new function to customize
     * the animation.
     */
    this.getCloseAnimation = () => DIALOG_DEFAULT_CLOSE_ANIMATION
    this.isOpen = false
    this.isOpening = false
    this.isConnectedPromise = this.getIsConnectedPromise()
    this.isAtScrollTop = false
    this.isAtScrollBottom = false
    this.nextClickIsFromContent = false
    // Dialogs should not be SSR'd while open, so we can just use runtime checks.
    this.hasHeadline = false
    this.hasActions = false
    this.hasIcon = false
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=1512224
    // Chrome v120 has a bug where escape keys do not trigger cancels. If we get
    // a dialog "close" event that is triggered without a "cancel" after an escape
    // keydown, then we need to manually trigger our closing logic.
    //
    // This bug occurs when pressing escape to close a dialog without first
    // interacting with the dialog's content.
    //
    // Cleanup tracking:
    // https://github.com/material-components/material-web/issues/5330
    // This can be removed when full CloseWatcher support added and the above bug
    // in Chromium is fixed to fire 'cancel' with one escape press and close with
    // multiple.
    this.escapePressedWithoutCancel = false
    {
      this.addEventListener('submit', this.handleSubmit)
      // We do not use `delegatesFocus: true` due to a Chromium bug with
      // selecting text.
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=950357
      //
      // Material requires using focus trapping within the dialog (see
      // b/314840853 for the bug to add it). This would normally mean we don't
      // care about delegating focus since the `<dialog>` never receives it.
      // However, we still need to handle situations when a user has not
      // provided an focusable child in the content. When that happens, the
      // `<dialog>` itself is focused.
      //
      // Listen to focus/blur instead of focusin/focusout since those can bubble
      // from content.
      this.addEventListener('focus', () => {
        this.dialog?.focus()
      })
      this.addEventListener('blur', () => {
        this.dialog?.blur()
      })
    }
  }
  /**
   * Opens the dialog and fires a cancelable `open` event. After a dialog's
   * animation, an `opened` event is fired.
   *
   * Add an `autofocus` attribute to a child of the dialog that should
   * receive focus after opening.
   *
   * @return A Promise that resolves after the animation is finished and the
   *     `opened` event was fired.
   */
  async show() {
    this.isOpening = true
    // Dialogs can be opened before being attached to the DOM, so we need to
    // wait until we're connected before calling `showModal()`.
    await this.isConnectedPromise
    await this.updateComplete
    const dialog = this.dialog
    // Check if already opened or if `dialog.close()` was called while awaiting.
    if (dialog.open || !this.isOpening) {
      this.isOpening = false
      return
    }
    const preventOpen = !this.dispatchEvent(
      new Event('open', { cancelable: true })
    )
    if (preventOpen) {
      this.open = false
      return
    }
    // All Material dialogs are modal.
    dialog.showModal()
    this.open = true
    // Reset scroll position if re-opening a dialog with the same content.
    if (this.scroller) {
      this.scroller.scrollTop = 0
    }
    // Native modal dialogs ignore autofocus and instead force focus to the
    // first focusable child. Override this behavior if there is a child with
    // an autofocus attribute.
    this.querySelector('[autofocus]')?.focus()
    await this.animateDialog(this.getOpenAnimation())
    this.dispatchEvent(new Event('opened'))
    this.isOpening = false
  }
  /**
   * Closes the dialog and fires a cancelable `close` event. After a dialog's
   * animation, a `closed` event is fired.
   *
   * @param returnValue A return value usually indicating which button was used
   *     to close a dialog. If a dialog is canceled by clicking the scrim or
   *     pressing Escape, it will not change the return value after closing.
   * @return A Promise that resolves after the animation is finished and the
   *     `closed` event was fired.
   */
  async close(returnValue = this.returnValue) {
    this.isOpening = false
    if (!this.isConnected) {
      // Disconnected dialogs do not fire close events or animate.
      this.open = false
      return
    }
    await this.updateComplete
    const dialog = this.dialog
    // Check if already closed or if `dialog.show()` was called while awaiting.
    if (!dialog.open || this.isOpening) {
      this.open = false
      return
    }
    const prevReturnValue = this.returnValue
    this.returnValue = returnValue
    const preventClose = !this.dispatchEvent(
      new Event('close', { cancelable: true })
    )
    if (preventClose) {
      this.returnValue = prevReturnValue
      return
    }
    await this.animateDialog(this.getCloseAnimation())
    dialog.close(returnValue)
    this.open = false
    this.dispatchEvent(new Event('closed'))
  }
  connectedCallback() {
    super.connectedCallback()
    this.isConnectedPromiseResolve()
  }
  disconnectedCallback() {
    super.disconnectedCallback()
    this.isConnectedPromise = this.getIsConnectedPromise()
  }
  render() {
    const scrollable =
      this.open && !(this.isAtScrollTop && this.isAtScrollBottom)
    const classes = {
      'has-headline': this.hasHeadline,
      'has-actions': this.hasActions,
      'has-icon': this.hasIcon,
      scrollable: scrollable,
      'show-top-divider': scrollable && !this.isAtScrollTop,
      'show-bottom-divider': scrollable && !this.isAtScrollBottom
    }
    const { ariaLabel } = this
    return x`
      <div class="scrim"></div>
      <dialog
        class=${e$1(classes)}
        aria-label=${ariaLabel || T}
        aria-labelledby=${this.hasHeadline ? 'headline' : T}
        role=${this.type === 'alert' ? 'alertdialog' : T}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue || T}>
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline || T}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `
  }
  firstUpdated() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          this.handleAnchorIntersection(entry)
        }
      },
      { root: this.scroller }
    )
    this.intersectionObserver.observe(this.topAnchor)
    this.intersectionObserver.observe(this.bottomAnchor)
  }
  handleDialogClick() {
    if (this.nextClickIsFromContent) {
      // Avoid doing a layout calculation below if we know the click came from
      // content.
      this.nextClickIsFromContent = false
      return
    }
    // Click originated on the backdrop. Native `<dialog>`s will not cancel,
    // but Material dialogs do.
    const preventDefault = !this.dispatchEvent(
      new Event('cancel', { cancelable: true })
    )
    if (preventDefault) {
      return
    }
    this.close()
  }
  handleContentClick() {
    this.nextClickIsFromContent = true
  }
  handleSubmit(event) {
    const form = event.target
    const { submitter } = event
    if (form.method !== 'dialog' || !submitter) {
      return
    }
    // Close reason is the submitter's value attribute, or the dialog's
    // `returnValue` if there is no attribute.
    this.close(submitter.getAttribute('value') ?? this.returnValue)
  }
  handleCancel(event) {
    if (event.target !== this.dialog) {
      // Ignore any cancel events dispatched by content.
      return
    }
    this.escapePressedWithoutCancel = false
    const preventDefault = !redispatchEvent(this, event)
    // We always prevent default on the original dialog event since we'll
    // animate closing it before it actually closes.
    event.preventDefault()
    if (preventDefault) {
      return
    }
    this.close()
  }
  handleClose() {
    if (!this.escapePressedWithoutCancel) {
      return
    }
    this.escapePressedWithoutCancel = false
    this.dialog?.dispatchEvent(new Event('cancel', { cancelable: true }))
  }
  handleKeydown(event) {
    if (event.key !== 'Escape') {
      return
    }
    // An escape key was pressed. If a "close" event fires next without a
    // "cancel" event first, then we know we're in the Chrome v120 bug.
    this.escapePressedWithoutCancel = true
    // Wait a full task for the cancel/close event listeners to fire, then
    // reset the flag.
    setTimeout(() => {
      this.escapePressedWithoutCancel = false
    })
  }
  async animateDialog(animation) {
    // Always cancel the previous animations. Animations can include `fill`
    // modes that need to be cleared when `quick` is toggled. If not, content
    // that faded out will remain hidden when a `quick` dialog re-opens after
    // previously opening and closing without `quick`.
    this.cancelAnimations?.abort()
    this.cancelAnimations = new AbortController()
    if (this.quick) {
      return
    }
    const { dialog, scrim, container, headline, content, actions } = this
    if (!dialog || !scrim || !container || !headline || !content || !actions) {
      return
    }
    const {
      container: containerAnimate,
      dialog: dialogAnimate,
      scrim: scrimAnimate,
      headline: headlineAnimate,
      content: contentAnimate,
      actions: actionsAnimate
    } = animation
    const elementAndAnimation = [
      [dialog, dialogAnimate ?? []],
      [scrim, scrimAnimate ?? []],
      [container, containerAnimate ?? []],
      [headline, headlineAnimate ?? []],
      [content, contentAnimate ?? []],
      [actions, actionsAnimate ?? []]
    ]
    const animations = []
    for (const [element, animation] of elementAndAnimation) {
      for (const animateArgs of animation) {
        const animation = element.animate(...animateArgs)
        this.cancelAnimations.signal.addEventListener('abort', () => {
          animation.cancel()
        })
        animations.push(animation)
      }
    }
    await Promise.all(
      animations.map((animation) =>
        animation.finished.catch(() => {
          // Ignore intentional AbortErrors when calling `animation.cancel()`.
        })
      )
    )
  }
  handleHeadlineChange(event) {
    const slot = event.target
    this.hasHeadline = slot.assignedElements().length > 0
  }
  handleActionsChange(event) {
    const slot = event.target
    this.hasActions = slot.assignedElements().length > 0
  }
  handleIconChange(event) {
    const slot = event.target
    this.hasIcon = slot.assignedElements().length > 0
  }
  handleAnchorIntersection(entry) {
    const { target, isIntersecting } = entry
    if (target === this.topAnchor) {
      this.isAtScrollTop = isIntersecting
    }
    if (target === this.bottomAnchor) {
      this.isAtScrollBottom = isIntersecting
    }
  }
  getIsConnectedPromise() {
    return new Promise((resolve) => {
      this.isConnectedPromiseResolve = resolve
    })
  }
}
;(() => {
  requestUpdateOnAriaChange(Dialog)
})()
__decorate([n$5({ type: Boolean })], Dialog.prototype, 'open', null)
__decorate([n$5({ type: Boolean })], Dialog.prototype, 'quick', void 0)
__decorate([n$5({ attribute: false })], Dialog.prototype, 'returnValue', void 0)
__decorate([n$5()], Dialog.prototype, 'type', void 0)
__decorate([e$5('dialog')], Dialog.prototype, 'dialog', void 0)
__decorate([e$5('.scrim')], Dialog.prototype, 'scrim', void 0)
__decorate([e$5('.container')], Dialog.prototype, 'container', void 0)
__decorate([e$5('.headline')], Dialog.prototype, 'headline', void 0)
__decorate([e$5('.content')], Dialog.prototype, 'content', void 0)
__decorate([e$5('.actions')], Dialog.prototype, 'actions', void 0)
__decorate([r$4()], Dialog.prototype, 'isAtScrollTop', void 0)
__decorate([r$4()], Dialog.prototype, 'isAtScrollBottom', void 0)
__decorate([e$5('.scroller')], Dialog.prototype, 'scroller', void 0)
__decorate([e$5('.top.anchor')], Dialog.prototype, 'topAnchor', void 0)
__decorate([e$5('.bottom.anchor')], Dialog.prototype, 'bottomAnchor', void 0)
__decorate([r$4()], Dialog.prototype, 'hasHeadline', void 0)
__decorate([r$4()], Dialog.prototype, 'hasActions', void 0)
__decorate([r$4()], Dialog.prototype, 'hasIcon', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./dialog/internal/dialog-styles.css.
const styles$A = i$4`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Dialogs can require an action, communicate information, or help
 * users accomplish a task. There are two types of dialogs: basic and
 * full-screen.
 *
 * @description
 * A dialog is a modal window that appears in front of app content to provide
 * critical information or ask for a decision. Dialogs disable all app
 * functionality when they appear, and remain on screen until confirmed,
 * dismissed, or a required action has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 * A less disruptive alternative is to use a menu, which provides options
 * without interrupting a user’s experience.
 *
 * On mobile devices only, complex dialogs should be displayed fullscreen.
 *
 * __Example usages:__
 * - Common use cases for basic dialogs include alerts, quick selection, and
 * confirmation.
 * - More complex dialogs may contain actions that require a series of tasks
 * to complete. One example is creating a calendar entry with the event title,
 * date, location, and time.
 *
 * @final
 * @suppress {visibility}
 */
let MdDialog = class MdDialog extends Dialog {}
MdDialog.styles = [styles$A]
MdDialog = __decorate([t$3('md-dialog')], MdDialog)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class SharedFab extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * The size of the FAB.
     *
     * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not
     * have different sizes.
     */
    this.size = 'medium'
    /**
     * The text to display on the FAB.
     */
    this.label = ''
    /**
     * Lowers the FAB's elevation.
     */
    this.lowered = false
  }
  render() {
    // Needed for closure conformance
    const { ariaLabel } = this
    return x`
      <button
        class="fab ${e$1(this.getRenderClasses())}"
        aria-label=${ariaLabel || T}>
        <md-elevation part="elevation"></md-elevation>
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <md-ripple class="ripple"></md-ripple>
        ${this.renderTouchTarget()} ${this.renderIcon()} ${this.renderLabel()}
      </button>
    `
  }
  getRenderClasses() {
    const isExtended = !!this.label
    return {
      lowered: this.lowered,
      small: this.size === 'small' && !isExtended,
      large: this.size === 'large' && !isExtended,
      extended: isExtended
    }
  }
  renderTouchTarget() {
    return x`<div class="touch-target"></div>`
  }
  renderLabel() {
    return this.label ? x`<span class="label">${this.label}</span>` : ''
  }
  renderIcon() {
    const { ariaLabel } = this
    return x`<span class="icon">
      <slot
        name="icon"
        aria-hidden=${ariaLabel || this.label ? 'true' : T}>
        <span></span>
      </slot>
    </span>`
  }
}
;(() => {
  requestUpdateOnAriaChange(SharedFab)
})()
/** @nocollapse */
SharedFab.shadowRootOptions = {
  mode: 'open',
  delegatesFocus: true
}
__decorate([n$5({ reflect: true })], SharedFab.prototype, 'size', void 0)
__decorate([n$5()], SharedFab.prototype, 'label', void 0)
__decorate([n$5({ type: Boolean })], SharedFab.prototype, 'lowered', void 0)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class Fab extends SharedFab {
  constructor() {
    super(...arguments)
    /**
     * The FAB color variant to render.
     */
    this.variant = 'surface'
  }
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      primary: this.variant === 'primary',
      secondary: this.variant === 'secondary',
      tertiary: this.variant === 'tertiary'
    }
  }
}
__decorate([n$5()], Fab.prototype, 'variant', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./fab/internal/fab-branded-styles.css.
const styles$z = i$4`:host{--_container-color: var(--md-fab-branded-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-branded-container-elevation, 3);--_container-height: var(--md-fab-branded-container-height, 56px);--_container-shadow-color: var(--md-fab-branded-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-width: var(--md-fab-branded-container-width, 56px);--_focus-container-elevation: var(--md-fab-branded-focus-container-elevation, 3);--_hover-container-elevation: var(--md-fab-branded-hover-container-elevation, 4);--_hover-state-layer-color: var(--md-fab-branded-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-branded-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-fab-branded-icon-size, 36px);--_lowered-container-color: var(--md-fab-branded-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-branded-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-branded-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-branded-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-branded-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-branded-pressed-container-elevation, 3);--_pressed-state-layer-color: var(--md-fab-branded-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-branded-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-branded-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-branded-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-branded-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-fab-branded-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-size: var(--md-fab-branded-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-line-height: var(--md-fab-branded-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-weight: var(--md-fab-branded-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_large-container-height: var(--md-fab-branded-large-container-height, 96px);--_large-container-width: var(--md-fab-branded-large-container-width, 96px);--_large-icon-size: var(--md-fab-branded-large-icon-size, 48px);--_pressed-label-text-color: var(--md-fab-branded-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-fab-branded-container-shape-start-start, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-start-end: var(--md-fab-branded-container-shape-start-end, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-end: var(--md-fab-branded-container-shape-end-end, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-start: var(--md-fab-branded-container-shape-end-start, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_large-container-shape-start-start: var(--md-fab-branded-large-container-shape-start-start, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-start-end: var(--md-fab-branded-large-container-shape-start-end, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-end: var(--md-fab-branded-large-container-shape-end-end, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-start: var(--md-fab-branded-large-container-shape-end-start, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)))}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./fab/internal/forced-colors-styles.css.
const styles$y = i$4`@media(forced-colors: active){.fab{border:1px solid ButtonText}.fab.extended{padding-inline-start:15px;padding-inline-end:19px}md-focus-ring{--md-focus-ring-outward-offset: 3px}}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./fab/internal/shared-styles.css.
const styles$x = i$4`:host{--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([size=medium][touch-target=wrapper]){margin:max(0px,48px - var(--_container-height))}:host([size=large][touch-target=wrapper]){margin:max(0px,48px - var(--_large-container-height))}.fab,.icon,.icon ::slotted(*){display:flex}.fab{align-items:center;justify-content:center;vertical-align:middle;padding:0;position:relative;height:var(--_container-height);transition-property:background-color;border-width:0px;outline:none;z-index:0;text-transform:inherit;--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);background-color:var(--_container-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color)}.fab.extended{width:inherit;box-sizing:border-box;padding-inline-start:16px;padding-inline-end:20px}.fab:not(.extended){width:var(--_container-width)}.fab.large{width:var(--_large-container-width);height:var(--_large-container-height)}.fab.large .icon ::slotted(*){width:var(--_large-icon-size);height:var(--_large-icon-size);font-size:var(--_large-icon-size)}.fab.large,.fab.large .ripple{border-start-start-radius:var(--_large-container-shape-start-start);border-start-end-radius:var(--_large-container-shape-start-end);border-end-start-radius:var(--_large-container-shape-end-start);border-end-end-radius:var(--_large-container-shape-end-end)}.fab.large md-focus-ring{--md-focus-ring-shape-start-start: var(--_large-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_large-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_large-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_large-container-shape-end-start)}.fab:focus{--md-elevation-level: var(--_focus-container-elevation)}.fab:hover{--md-elevation-level: var(--_hover-container-elevation)}.fab:active{--md-elevation-level: var(--_pressed-container-elevation)}.fab.lowered{background-color:var(--_lowered-container-color);--md-elevation-level: var(--_lowered-container-elevation)}.fab.lowered:focus{--md-elevation-level: var(--_lowered-focus-container-elevation)}.fab.lowered:hover{--md-elevation-level: var(--_lowered-hover-container-elevation)}.fab.lowered:active{--md-elevation-level: var(--_lowered-pressed-container-elevation)}.fab .label{color:var(--_label-text-color)}.fab:hover .fab .label{color:var(--_hover-label-text-color)}.fab:focus .fab .label{color:var(--_focus-label-text-color)}.fab:active .fab .label{color:var(--_pressed-label-text-color)}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight)}.fab.extended .icon ::slotted(*){margin-inline-end:12px}.ripple{overflow:hidden}.ripple,md-elevation{z-index:-1}.touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch-target{display:none}md-elevation,.fab{transition-duration:280ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1)}.fab,.ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.icon ::slotted(*){width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Floating action buttons (FABs) help people take primary actions.
 * They’re used to represent the most important action on a screen, such as
 * Create or Reply.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The FAB remains the default component for a screen’s primary
 * action. It comes in three sizes: small FAB, FAB, and large FAB. The extended
 * FAB’s wider format and text label give it more visual prominence than a  FAB.
 * It’s often used on larger screens where a FAB would seem too small. Branded
 * FABs are used to specifically call attention to branded logo icons.
 *
 * __Example usages:__
 * - FAB
 *   - Create
 *   - Compose
 * - Extended FAB
 *   - Create
 *   - Compose
 *   - New Thread
 *   - New File
 *
 * @final
 * @suppress {visibility}
 */
let MdBrandedFab = class MdBrandedFab extends Fab {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      primary: false,
      secondary: false,
      tertiary: false,
      small: false
    }
  }
}
MdBrandedFab.styles = [styles$x, styles$z, styles$y]
MdBrandedFab = __decorate([t$3('md-branded-fab')], MdBrandedFab)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./fab/internal/fab-styles.css.
const styles$w = i$4`:host{--_container-color: var(--md-fab-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-container-elevation, 3);--_container-height: var(--md-fab-container-height, 56px);--_container-shadow-color: var(--md-fab-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-width: var(--md-fab-container-width, 56px);--_focus-container-elevation: var(--md-fab-focus-container-elevation, 3);--_focus-icon-color: var(--md-fab-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-fab-hover-container-elevation, 4);--_hover-icon-color: var(--md-fab-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-fab-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-fab-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-fab-icon-size, 24px);--_lowered-container-color: var(--md-fab-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-pressed-container-elevation, 3);--_pressed-icon-color: var(--md-fab-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-fab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-fab-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-fab-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-fab-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-fab-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_large-container-height: var(--md-fab-large-container-height, 96px);--_large-container-width: var(--md-fab-large-container-width, 96px);--_large-icon-size: var(--md-fab-large-icon-size, 36px);--_pressed-label-text-color: var(--md-fab-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_primary-container-color: var(--md-fab-primary-container-color, var(--md-sys-color-primary-container, #eaddff));--_primary-focus-icon-color: var(--md-fab-primary-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-focus-label-text-color: var(--md-fab-primary-focus-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-icon-color: var(--md-fab-primary-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-label-text-color: var(--md-fab-primary-hover-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-state-layer-color: var(--md-fab-primary-hover-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-icon-color: var(--md-fab-primary-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-label-text-color: var(--md-fab-primary-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-icon-color: var(--md-fab-primary-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-label-text-color: var(--md-fab-primary-pressed-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-state-layer-color: var(--md-fab-primary-pressed-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_secondary-container-color: var(--md-fab-secondary-container-color, var(--md-sys-color-secondary-container, #e8def8));--_secondary-focus-icon-color: var(--md-fab-secondary-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-focus-label-text-color: var(--md-fab-secondary-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-icon-color: var(--md-fab-secondary-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-label-text-color: var(--md-fab-secondary-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-state-layer-color: var(--md-fab-secondary-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-icon-color: var(--md-fab-secondary-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-label-text-color: var(--md-fab-secondary-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-icon-color: var(--md-fab-secondary-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-label-text-color: var(--md-fab-secondary-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-state-layer-color: var(--md-fab-secondary-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_small-container-height: var(--md-fab-small-container-height, 40px);--_small-container-width: var(--md-fab-small-container-width, 40px);--_small-icon-size: var(--md-fab-small-icon-size, 24px);--_tertiary-container-color: var(--md-fab-tertiary-container-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_tertiary-focus-icon-color: var(--md-fab-tertiary-focus-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-focus-label-text-color: var(--md-fab-tertiary-focus-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-icon-color: var(--md-fab-tertiary-hover-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-label-text-color: var(--md-fab-tertiary-hover-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-state-layer-color: var(--md-fab-tertiary-hover-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-icon-color: var(--md-fab-tertiary-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-label-text-color: var(--md-fab-tertiary-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-icon-color: var(--md-fab-tertiary-pressed-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-label-text-color: var(--md-fab-tertiary-pressed-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-state-layer-color: var(--md-fab-tertiary-pressed-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_container-shape-start-start: var(--md-fab-container-shape-start-start, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-start-end: var(--md-fab-container-shape-start-end, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-end: var(--md-fab-container-shape-end-end, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-start: var(--md-fab-container-shape-end-start, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_large-container-shape-start-start: var(--md-fab-large-container-shape-start-start, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-start-end: var(--md-fab-large-container-shape-start-end, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-end: var(--md-fab-large-container-shape-end-end, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-start: var(--md-fab-large-container-shape-end-start, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_small-container-shape-start-start: var(--md-fab-small-container-shape-start-start, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-start-end: var(--md-fab-small-container-shape-start-end, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-end-end: var(--md-fab-small-container-shape-end-end, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-end-start: var(--md-fab-small-container-shape-end-start, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));cursor:pointer}:host([size=small][touch-target=wrapper]){margin:max(0px,48px - var(--_small-container-height))}.fab{cursor:inherit}.fab .icon ::slotted(*){color:var(--_icon-color)}.fab:focus{color:var(--_focus-icon-color)}.fab:hover{color:var(--_hover-icon-color)}.fab:active{color:var(--_pressed-icon-color)}.fab.primary{background-color:var(--_primary-container-color);--md-ripple-hover-color: var(--_primary-hover-state-layer-color);--md-ripple-pressed-color: var(--_primary-pressed-state-layer-color)}.fab.primary .icon ::slotted(*){color:var(--_primary-icon-color)}.fab.primary:focus{color:var(--_primary-focus-icon-color)}.fab.primary:hover{color:var(--_primary-hover-icon-color)}.fab.primary:active{color:var(--_primary-pressed-icon-color)}.fab.primary .label{color:var(--_primary-label-text-color)}.fab:hover .fab.primary .label{color:var(--_primary-hover-label-text-color)}.fab:focus .fab.primary .label{color:var(--_primary-focus-label-text-color)}.fab:active .fab.primary .label{color:var(--_primary-pressed-label-text-color)}.fab.secondary{background-color:var(--_secondary-container-color);--md-ripple-hover-color: var(--_secondary-hover-state-layer-color);--md-ripple-pressed-color: var(--_secondary-pressed-state-layer-color)}.fab.secondary .icon ::slotted(*){color:var(--_secondary-icon-color)}.fab.secondary:focus{color:var(--_secondary-focus-icon-color)}.fab.secondary:hover{color:var(--_secondary-hover-icon-color)}.fab.secondary:active{color:var(--_secondary-pressed-icon-color)}.fab.secondary .label{color:var(--_secondary-label-text-color)}.fab:hover .fab.secondary .label{color:var(--_secondary-hover-label-text-color)}.fab:focus .fab.secondary .label{color:var(--_secondary-focus-label-text-color)}.fab:active .fab.secondary .label{color:var(--_secondary-pressed-label-text-color)}.fab.tertiary{background-color:var(--_tertiary-container-color);--md-ripple-hover-color: var(--_tertiary-hover-state-layer-color);--md-ripple-pressed-color: var(--_tertiary-pressed-state-layer-color)}.fab.tertiary .icon ::slotted(*){color:var(--_tertiary-icon-color)}.fab.tertiary:focus{color:var(--_tertiary-focus-icon-color)}.fab.tertiary:hover{color:var(--_tertiary-hover-icon-color)}.fab.tertiary:active{color:var(--_tertiary-pressed-icon-color)}.fab.tertiary .label{color:var(--_tertiary-label-text-color)}.fab:hover .fab.tertiary .label{color:var(--_tertiary-hover-label-text-color)}.fab:focus .fab.tertiary .label{color:var(--_tertiary-focus-label-text-color)}.fab:active .fab.tertiary .label{color:var(--_tertiary-pressed-label-text-color)}.fab.extended slot span{padding-inline-start:4px}.fab.small{width:var(--_small-container-width);height:var(--_small-container-height)}.fab.small .icon ::slotted(*){width:var(--_small-icon-size);height:var(--_small-icon-size);font-size:var(--_small-icon-size)}.fab.small,.fab.small .ripple{border-start-start-radius:var(--_small-container-shape-start-start);border-start-end-radius:var(--_small-container-shape-start-end);border-end-start-radius:var(--_small-container-shape-end-start);border-end-end-radius:var(--_small-container-shape-end-end)}.fab.small md-focus-ring{--md-focus-ring-shape-start-start: var(--_small-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_small-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_small-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_small-container-shape-end-start)}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Floating action buttons (FABs) help people take primary actions.
 * They’re used to represent the most important action on a screen, such as
 * Create or Reply.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The FAB remains the default component for a screen’s primary
 * action. It comes in three sizes: small FAB, FAB, and large FAB. The extended
 * FAB’s wider format and text label give it more visual prominence than a  FAB.
 * It’s often used on larger screens where a FAB would seem too small.
 *
 * __Example usages:__
 * - FAB
 *   - Create
 *   - Compose
 * - Extended FAB
 *   - Create
 *   - Compose
 *   - New Thread
 *   - New File
 *
 * @final
 * @suppress {visibility}
 */
let MdFab = class MdFab extends Fab {}
MdFab.styles = [styles$x, styles$w, styles$y]
MdFab = __decorate([t$3('md-fab')], MdFab)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A field component.
 */
class Field extends s$1 {
  constructor() {
    super(...arguments)
    this.disabled = false
    this.error = false
    this.focused = false
    this.label = ''
    this.populated = false
    this.required = false
    this.resizable = false
    this.supportingText = ''
    this.errorText = ''
    this.count = -1
    this.max = -1
    /**
     * Whether or not the field has leading content.
     */
    this.hasStart = false
    /**
     * Whether or not the field has trailing content.
     */
    this.hasEnd = false
    this.isAnimating = false
    /**
     * When set to true, the error text's `role="alert"` will be removed, then
     * re-added after an animation frame. This will re-announce an error message
     * to screen readers.
     */
    this.refreshErrorAlert = false
    this.disableTransitions = false
  }
  get counterText() {
    // Count and max are typed as number, but can be set to null when Lit removes
    // their attributes. These getters coerce back to a number for calculations.
    const countAsNumber = this.count ?? -1
    const maxAsNumber = this.max ?? -1
    // Counter does not show if count is negative, or max is negative or 0.
    if (countAsNumber < 0 || maxAsNumber <= 0) {
      return ''
    }
    return `${countAsNumber} / ${maxAsNumber}`
  }
  get supportingOrErrorText() {
    return this.error && this.errorText ? this.errorText : this.supportingText
  }
  /**
   * Re-announces the field's error supporting text to screen readers.
   *
   * Error text announces to screen readers anytime it is visible and changes.
   * Use the method to re-announce the message when the text has not changed,
   * but announcement is still needed (such as for `reportValidity()`).
   */
  reannounceError() {
    this.refreshErrorAlert = true
  }
  update(props) {
    // Client-side property updates
    const isDisabledChanging =
      props.has('disabled') && props.get('disabled') !== undefined
    if (isDisabledChanging) {
      this.disableTransitions = true
    }
    // When disabling, remove focus styles if focused.
    if (this.disabled && this.focused) {
      props.set('focused', true)
      this.focused = false
    }
    // Animate if focused or populated change.
    this.animateLabelIfNeeded({
      wasFocused: props.get('focused'),
      wasPopulated: props.get('populated')
    })
    super.update(props)
  }
  render() {
    const floatingLabel = this.renderLabel(/*isFloating*/ true)
    const restingLabel = this.renderLabel(/*isFloating*/ false)
    const outline = this.renderOutline?.(floatingLabel)
    const classes = {
      disabled: this.disabled,
      'disable-transitions': this.disableTransitions,
      error: this.error && !this.disabled,
      focused: this.focused,
      'with-start': this.hasStart,
      'with-end': this.hasEnd,
      populated: this.populated,
      resizable: this.resizable,
      required: this.required,
      'no-label': !this.label
    }
    return x`
      <div class="field ${e$1(classes)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${outline}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${restingLabel} ${outline ? T : floatingLabel}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `
  }
  updated(changed) {
    if (
      changed.has('supportingText') ||
      changed.has('errorText') ||
      changed.has('count') ||
      changed.has('max')
    ) {
      this.updateSlottedAriaDescribedBy()
    }
    if (this.refreshErrorAlert) {
      // The past render cycle removed the role="alert" from the error message.
      // Re-add it after an animation frame to re-announce the error.
      requestAnimationFrame(() => {
        this.refreshErrorAlert = false
      })
    }
    if (this.disableTransitions) {
      requestAnimationFrame(() => {
        this.disableTransitions = false
      })
    }
  }
  renderSupportingText() {
    const { supportingOrErrorText, counterText } = this
    if (!supportingOrErrorText && !counterText) {
      return T
    }
    // Always render the supporting text span so that our `space-around`
    // container puts the counter at the end.
    const start = x`<span>${supportingOrErrorText}</span>`
    // Conditionally render counter so we don't render the extra `gap`.
    // TODO(b/244473435): add aria-label and announcements
    const end = counterText ? x`<span class="counter">${counterText}</span>` : T
    // Announce if there is an error and error text visible.
    // If refreshErrorAlert is true, do not announce. This will remove the
    // role="alert" attribute. Another render cycle will happen after an
    // animation frame to re-add the role.
    const shouldErrorAnnounce =
      this.error && this.errorText && !this.refreshErrorAlert
    const role = shouldErrorAnnounce ? 'alert' : T
    return x`
      <div class="supporting-text" role=${role}>${start}${end}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `
  }
  updateSlottedAriaDescribedBy() {
    for (const element of this.slottedAriaDescribedBy) {
      j(x`${this.supportingOrErrorText} ${this.counterText}`, element)
      element.setAttribute('hidden', '')
    }
  }
  renderLabel(isFloating) {
    if (!this.label) {
      return T
    }
    let visible
    if (isFloating) {
      // Floating label is visible when focused/populated or when animating.
      visible = this.focused || this.populated || this.isAnimating
    } else {
      // Resting label is visible when unfocused. It is never visible while
      // animating.
      visible = !this.focused && !this.populated && !this.isAnimating
    }
    const classes = {
      hidden: !visible,
      floating: isFloating,
      resting: !isFloating
    }
    // Add '*' if a label is present and the field is required
    const labelText = `${this.label}${this.required ? '*' : ''}`
    return x`
      <span class="label ${e$1(classes)}" aria-hidden=${!visible}
        >${labelText}</span
      >
    `
  }
  animateLabelIfNeeded({ wasFocused, wasPopulated }) {
    if (!this.label) {
      return
    }
    wasFocused ?? (wasFocused = this.focused)
    wasPopulated ?? (wasPopulated = this.populated)
    const wasFloating = wasFocused || wasPopulated
    const shouldBeFloating = this.focused || this.populated
    if (wasFloating === shouldBeFloating) {
      return
    }
    this.isAnimating = true
    this.labelAnimation?.cancel()
    // Only one label is visible at a time for clearer text rendering.
    // The floating label is visible and used during animation. At the end of
    // the animation, it will either remain visible (if floating) or hide and
    // the resting label will be shown.
    //
    // We don't use forward filling because if the dimensions of the text field
    // change (leading icon removed, density changes, etc), then the animation
    // will be inaccurate.
    //
    // Re-calculating the animation each time will prevent any visual glitches
    // from appearing.
    // TODO(b/241113345): use animation tokens
    this.labelAnimation = this.floatingLabelEl?.animate(
      this.getLabelKeyframes(),
      { duration: 150, easing: EASING.STANDARD }
    )
    this.labelAnimation?.addEventListener('finish', () => {
      // At the end of the animation, update the visible label.
      this.isAnimating = false
    })
  }
  getLabelKeyframes() {
    const { floatingLabelEl, restingLabelEl } = this
    if (!floatingLabelEl || !restingLabelEl) {
      return []
    }
    const {
      x: floatingX,
      y: floatingY,
      height: floatingHeight
    } = floatingLabelEl.getBoundingClientRect()
    const {
      x: restingX,
      y: restingY,
      height: restingHeight
    } = restingLabelEl.getBoundingClientRect()
    const floatingScrollWidth = floatingLabelEl.scrollWidth
    const restingScrollWidth = restingLabelEl.scrollWidth
    // Scale by width ratio instead of font size since letter-spacing will scale
    // incorrectly. Using the width we can better approximate the adjusted
    // scale and compensate for tracking and overflow.
    // (use scrollWidth instead of width to account for clipped labels)
    const scale = restingScrollWidth / floatingScrollWidth
    const xDelta = restingX - floatingX
    // The line-height of the resting and floating label are different. When
    // we move the floating label down to the resting label's position, it won't
    // exactly match because of this. We need to adjust by half of what the
    // final scaled floating label's height will be.
    const yDelta =
      restingY -
      floatingY +
      Math.round((restingHeight - floatingHeight * scale) / 2)
    // Create the two transforms: floating to resting (using the calculations
    // above), and resting to floating (re-setting the transform to initial
    // values).
    const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`
    const floatTransform = `translateX(0) translateY(0) scale(1)`
    // Constrain the floating labels width to a scaled percentage of the
    // resting label's width. This will prevent long clipped labels from
    // overflowing the container.
    const restingClientWidth = restingLabelEl.clientWidth
    const isRestingClipped = restingScrollWidth > restingClientWidth
    const width = isRestingClipped ? `${restingClientWidth / scale}px` : ''
    if (this.focused || this.populated) {
      return [
        { transform: restTransform, width },
        { transform: floatTransform, width }
      ]
    }
    return [
      { transform: floatTransform, width },
      { transform: restTransform, width }
    ]
  }
  getSurfacePositionClientRect() {
    return this.containerEl.getBoundingClientRect()
  }
}
__decorate([n$5({ type: Boolean })], Field.prototype, 'disabled', void 0)
__decorate([n$5({ type: Boolean })], Field.prototype, 'error', void 0)
__decorate([n$5({ type: Boolean })], Field.prototype, 'focused', void 0)
__decorate([n$5()], Field.prototype, 'label', void 0)
__decorate([n$5({ type: Boolean })], Field.prototype, 'populated', void 0)
__decorate([n$5({ type: Boolean })], Field.prototype, 'required', void 0)
__decorate([n$5({ type: Boolean })], Field.prototype, 'resizable', void 0)
__decorate(
  [n$5({ attribute: 'supporting-text' })],
  Field.prototype,
  'supportingText',
  void 0
)
__decorate(
  [n$5({ attribute: 'error-text' })],
  Field.prototype,
  'errorText',
  void 0
)
__decorate([n$5({ type: Number })], Field.prototype, 'count', void 0)
__decorate([n$5({ type: Number })], Field.prototype, 'max', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-start' })],
  Field.prototype,
  'hasStart',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-end' })],
  Field.prototype,
  'hasEnd',
  void 0
)
__decorate(
  [o$4({ slot: 'aria-describedby' })],
  Field.prototype,
  'slottedAriaDescribedBy',
  void 0
)
__decorate([r$4()], Field.prototype, 'isAnimating', void 0)
__decorate([r$4()], Field.prototype, 'refreshErrorAlert', void 0)
__decorate([r$4()], Field.prototype, 'disableTransitions', void 0)
__decorate([e$5('.label.floating')], Field.prototype, 'floatingLabelEl', void 0)
__decorate([e$5('.label.resting')], Field.prototype, 'restingLabelEl', void 0)
__decorate([e$5('.container')], Field.prototype, 'containerEl', void 0)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled field component.
 */
class FilledField extends Field {
  renderBackground() {
    return x`
      <div class="background"></div>
      <div class="state-layer"></div>
    `
  }
  renderIndicator() {
    return x`<div class="active-indicator"></div>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./field/internal/filled-styles.css.
const styles$v = i$4`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./field/internal/shared-styles.css.
const styles$u = i$4`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
let MdFilledField = class MdFilledField extends FilledField {}
MdFilledField.styles = [styles$u, styles$v]
MdFilledField = __decorate([t$3('md-filled-field')], MdFilledField)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined field component.
 */
class OutlinedField extends Field {
  renderOutline(floatingLabel) {
    return x`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./field/internal/outlined-styles.css.
const styles$t = i$4`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
let MdOutlinedField = class MdOutlinedField extends OutlinedField {}
MdOutlinedField.styles = [styles$u, styles$t]
MdOutlinedField = __decorate([t$3('md-outlined-field')], MdOutlinedField)

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/265336902): add docs
 */
class Icon extends s$1 {
  render() {
    return x`<slot></slot>`
  }
  connectedCallback() {
    super.connectedCallback()
    const ariaHidden = this.getAttribute('aria-hidden')
    if (ariaHidden === 'false') {
      // Allow the user to set `aria-hidden="false"` to create an icon that is
      // announced by screenreaders.
      this.removeAttribute('aria-hidden')
      return
    }
    // Needed for VoiceOver, which will create a "group" if the element is a
    // sibling to other content.
    this.setAttribute('aria-hidden', 'true')
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./icon/internal/icon-styles.css.
const styles$s = i$4`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @final
 * @suppress {visibility}
 */
let MdIcon = class MdIcon extends Icon {}
/** @nocollapse */
MdIcon.styles = [styles$s]
MdIcon = __decorate([t$3('md-icon')], MdIcon)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./iconbutton/internal/filled-styles.css.
const styles$r = i$4`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}
`

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = Symbol.for(''),
  o$1 = (t) => {
    if (t?.r === e) return t?._$litStatic$
  },
  s = (t, ...r) => ({
    _$litStatic$: r.reduce(
      (r, e, o) =>
        r +
        ((t) => {
          if (void 0 !== t._$litStatic$) return t._$litStatic$
          throw Error(
            `Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`
          )
        })(e) +
        t[o + 1],
      t[0]
    ),
    r: e
  }),
  a = new Map(),
  l$1 =
    (t) =>
    (r, ...e) => {
      const i = e.length
      let s, l
      const n = [],
        u = []
      let c,
        $ = 0,
        f = !1
      for (; $ < i; ) {
        for (c = r[$]; $ < i && void 0 !== ((l = e[$]), (s = o$1(l))); )
          (c += s + r[++$]), (f = !0)
        $ !== i && u.push(l), n.push(c), $++
      }
      if (($ === i && n.push(r[i]), f)) {
        const t = n.join('$$lit$$')
        void 0 === (r = a.get(t)) && ((n.raw = n), a.set(t, (r = n))), (e = u)
      }
      return t(r, ...e)
    },
  n$2 = l$1(x)

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns `true` if the given element is in a right-to-left direction.
 *
 * @param el Element to determine direction from
 * @param shouldCheck Optional. If `false`, return `false` without checking
 *     direction. Determining the direction of `el` is somewhat expensive, so
 *     this parameter can be used as a conditional guard. Defaults to `true`.
 */
function isRtl(el, shouldCheck = true) {
  return (
    shouldCheck &&
    getComputedStyle(el).getPropertyValue('direction').trim() === 'rtl'
  )
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const iconButtonBaseClass = mixinElementInternals(s$1)
/**
 * A button for rendering icons.
 *
 * @fires input {InputEvent} Dispatched when a toggle button toggles --bubbles
 * --composed
 * @fires change {Event} Dispatched when a toggle button toggles --bubbles
 */
class IconButton extends iconButtonBaseClass {
  constructor() {
    super(...arguments)
    /**
     * Disables the icon button and makes it non-interactive.
     */
    this.disabled = false
    /**
     * Flips the icon if it is in an RTL context at startup.
     */
    this.flipIconInRtl = false
    /**
     * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     */
    this.href = ''
    /**
     * Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     */
    this.target = ''
    /**
     * The `aria-label` of the button when the button is toggleable and selected.
     */
    this.ariaLabelSelected = ''
    /**
     * When true, the button will toggle between selected and unselected
     * states
     */
    this.toggle = false
    /**
     * Sets the selected state. When false, displays the default icon. When true,
     * displays the selected icon, or the default icon If no `slot="selected"`
     * icon is provided.
     */
    this.selected = false
    /**
     * The default behavior of the button. May be "text", "reset", or "submit"
     * (default).
     */
    this.type = 'submit'
    /**
     * The value added to a form with the button's name when the button submits a
     * form.
     */
    this.value = ''
    this.flipIcon = isRtl(this, this.flipIconInRtl)
  }
  get name() {
    return this.getAttribute('name') ?? ''
  }
  set name(name) {
    this.setAttribute('name', name)
  }
  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[internals].form
  }
  /**
   * The labels this element is associated with.
   */
  get labels() {
    return this[internals].labels
  }
  /**
   * Link buttons cannot be disabled.
   */
  willUpdate() {
    if (this.href) {
      this.disabled = false
    }
  }
  render() {
    const tag = this.href ? s`div` : s`button`
    // Needed for closure conformance
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this
    const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected
    const ariaPressedValue = !this.toggle ? T : this.selected
    let ariaLabelValue = T
    if (!this.href) {
      ariaLabelValue =
        hasToggledAriaLabel && this.selected
          ? this.ariaLabelSelected
          : ariaLabel
    }
    return n$2`<${tag}
        class="icon-button ${e$1(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || T}"
        aria-haspopup="${(!this.href && ariaHasPopup) || T}"
        aria-expanded="${(!this.href && ariaExpanded) || T}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : T}
        ${this.selected ? this.renderSelectedIcon() : T}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`
  }
  renderLink() {
    // Needed for closure conformance
    const { ariaLabel } = this
    return x`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target || T}"
        aria-label="${ariaLabel || T}"></a>
    `
  }
  getRenderClasses() {
    return {
      'flip-icon': this.flipIcon,
      selected: this.toggle && this.selected
    }
  }
  renderIcon() {
    return x`<span class="icon"><slot></slot></span>`
  }
  renderSelectedIcon() {
    // Use default slot as fallback to not require specifying multiple icons
    return x`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`
  }
  renderTouchTarget() {
    return x`<span class="touch"></span>`
  }
  renderFocusRing() {
    // TODO(b/310046938): use the same id for both elements
    return x`<md-focus-ring
      part="focus-ring"
      for=${this.href ? 'link' : 'button'}></md-focus-ring>`
  }
  renderRipple() {
    // TODO(b/310046938): use the same id for both elements
    return x`<md-ripple
      for=${this.href ? 'link' : T}
      ?disabled="${!this.href && this.disabled}"></md-ripple>`
  }
  connectedCallback() {
    this.flipIcon = isRtl(this, this.flipIconInRtl)
    super.connectedCallback()
  }
  async handleClick(event) {
    // Allow the event to propagate
    await 0
    if (!this.toggle || this.disabled || event.defaultPrevented) {
      return
    }
    this.selected = !this.selected
    this.dispatchEvent(
      new InputEvent('input', { bubbles: true, composed: true })
    )
    // Bubbles but does not compose to mimic native browser <input> & <select>
    // Additionally, native change event is not an InputEvent.
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }
}
;(() => {
  requestUpdateOnAriaChange(IconButton)
  setupFormSubmitter(IconButton)
})()
/** @nocollapse */
IconButton.formAssociated = true
/** @nocollapse */
IconButton.shadowRootOptions = {
  mode: 'open',
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  IconButton.prototype,
  'disabled',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'flip-icon-in-rtl' })],
  IconButton.prototype,
  'flipIconInRtl',
  void 0
)
__decorate([n$5()], IconButton.prototype, 'href', void 0)
__decorate([n$5()], IconButton.prototype, 'target', void 0)
__decorate(
  [n$5({ attribute: 'aria-label-selected' })],
  IconButton.prototype,
  'ariaLabelSelected',
  void 0
)
__decorate([n$5({ type: Boolean })], IconButton.prototype, 'toggle', void 0)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  IconButton.prototype,
  'selected',
  void 0
)
__decorate([n$5()], IconButton.prototype, 'type', void 0)
__decorate([n$5({ reflect: true })], IconButton.prototype, 'value', void 0)
__decorate([r$4()], IconButton.prototype, 'flipIcon', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./iconbutton/internal/shared-styles.css.
const styles$q = i$4`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledIconButton = class MdFilledIconButton extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      filled: true,
      'toggle-filled': this.toggle
    }
  }
}
MdFilledIconButton.styles = [styles$q, styles$r]
MdFilledIconButton = __decorate(
  [t$3('md-filled-icon-button')],
  MdFilledIconButton
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./iconbutton/internal/filled-tonal-styles.css.
const styles$p = i$4`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-height: var(--md-filled-tonal-icon-button-container-height, 40px);--_container-width: var(--md-filled-tonal-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-icon-color: var(--md-filled-tonal-icon-button-toggle-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filled-tonal-icon-button-container-shape-start-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-icon-button-container-shape-start-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-icon-button-container-shape-end-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-icon-button-container-shape-end-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled-tonal:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledTonalIconButton = class MdFilledTonalIconButton extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      'filled-tonal': true,
      'toggle-filled-tonal': this.toggle
    }
  }
}
MdFilledTonalIconButton.styles = [styles$q, styles$p]
MdFilledTonalIconButton = __decorate(
  [t$3('md-filled-tonal-icon-button')],
  MdFilledTonalIconButton
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./iconbutton/internal/standard-styles.css.
const styles$o = i$4`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
let MdIconButton = class MdIconButton extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      standard: true
    }
  }
}
MdIconButton.styles = [styles$q, styles$o]
MdIconButton = __decorate([t$3('md-icon-button')], MdIconButton)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./iconbutton/internal/outlined-styles.css.
const styles$n = i$4`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:disabled{color:var(--_disabled-icon-color)}.outlined:disabled::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:disabled .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}.selected:disabled::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host([disabled]){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:disabled::before{border-color:GrayText;opacity:1}}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedIconButton = class MdOutlinedIconButton extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      outlined: true
    }
  }
}
MdOutlinedIconButton.styles = [styles$q, styles$n]
MdOutlinedIconButton = __decorate(
  [t$3('md-outlined-icon-button')],
  MdOutlinedIconButton
)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Activates the first non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     first item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 */
function activateFirstItem(items, isActivatable = isItemNotDisabled) {
  // NOTE: These selector functions are static and not on the instance such
  // that multiple operations can be chained and we do not have to re-query
  // the DOM
  const firstItem = getFirstActivatableItem(items, isActivatable)
  if (firstItem) {
    firstItem.tabIndex = 0
    firstItem.focus()
  }
  return firstItem
}
/**
 * Activates the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     last item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @nocollapse
 */
function activateLastItem(items, isActivatable = isItemNotDisabled) {
  const lastItem = getLastActivatableItem(items, isActivatable)
  if (lastItem) {
    lastItem.tabIndex = 0
    lastItem.focus()
  }
  return lastItem
}
/**
 * Deactivates the currently active item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to deactivate the
 *     active item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return A record of the deleselcted activated item including the item and
 *     the index of the item or `null` if none are deactivated.
 * @nocollapse
 */
function deactivateActiveItem(items, isActivatable = isItemNotDisabled) {
  const activeItem = getActiveItem(items, isActivatable)
  if (activeItem) {
    activeItem.item.tabIndex = -1
  }
  return activeItem
}
/**
 * Retrieves the first activated item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return A record of the first activated item including the item and the
 *     index of the item or `null` if none are activated.
 * @nocollapse
 */
function getActiveItem(items, isActivatable = isItemNotDisabled) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.tabIndex === 0 && isActivatable(item)) {
      return {
        item,
        index: i
      }
    }
  }
  return null
}
/**
 * Retrieves the first non-disabled item of a given array of items. This
 * the first item that is not disabled.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The first activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getFirstActivatableItem(items, isActivatable = isItemNotDisabled) {
  for (const item of items) {
    if (isActivatable(item)) {
      return item
    }
  }
  return null
}
/**
 * Retrieves the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The last activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getLastActivatableItem(items, isActivatable = isItemNotDisabled) {
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i]
    if (isActivatable(item)) {
      return item
    }
  }
  return null
}
/**
 * Retrieves the next non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @param wrap If true, then the next item at the end of the list is the first
 *     item. Defaults to true.
 * @return The next activatable item or `null` if none are activatable.
 */
function getNextItem(
  items,
  index,
  isActivatable = isItemNotDisabled,
  wrap = true
) {
  for (let i = 1; i < items.length; i++) {
    const nextIndex = (i + index) % items.length
    if (nextIndex < index && !wrap) {
      // Return if the index loops back to the beginning and not wrapping.
      return null
    }
    const item = items[nextIndex]
    if (isActivatable(item)) {
      return item
    }
  }
  return items[index] ? items[index] : null
}
/**
 * Retrieves the previous non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @param wrap If true, then the previous item at the beginning of the list is
 *     the last item. Defaults to true.
 * @return The previous activatable item or `null` if none are activatable.
 */
function getPrevItem(
  items,
  index,
  isActivatable = isItemNotDisabled,
  wrap = true
) {
  for (let i = 1; i < items.length; i++) {
    const prevIndex = (index - i + items.length) % items.length
    if (prevIndex > index && !wrap) {
      // Return if the index loops back to the end and not wrapping.
      return null
    }
    const item = items[prevIndex]
    if (isActivatable(item)) {
      return item
    }
  }
  return items[index] ? items[index] : null
}
/**
 * Activates the next item and focuses it. If nothing is currently activated,
 * activates the first item.
 */
function activateNextItem(
  items,
  activeItemRecord,
  isActivatable = isItemNotDisabled,
  wrap = true
) {
  if (activeItemRecord) {
    const next = getNextItem(items, activeItemRecord.index, isActivatable, wrap)
    if (next) {
      next.tabIndex = 0
      next.focus()
    }
    return next
  } else {
    return activateFirstItem(items, isActivatable)
  }
}
/**
 * Activates the previous item and focuses it. If nothing is currently
 * activated, activates the last item.
 */
function activatePreviousItem(
  items,
  activeItemRecord,
  isActivatable = isItemNotDisabled,
  wrap = true
) {
  if (activeItemRecord) {
    const prev = getPrevItem(items, activeItemRecord.index, isActivatable, wrap)
    if (prev) {
      prev.tabIndex = 0
      prev.focus()
    }
    return prev
  } else {
    return activateLastItem(items, isActivatable)
  }
}
/**
 * Creates an event that requests the parent md-list to deactivate all other
 * items.
 */
function createDeactivateItemsEvent() {
  return new Event('deactivate-items', { bubbles: true, composed: true })
}
/**
 * Creates an event that requests the menu to set `tabindex=0` on the item and
 * focus it. We use this pattern because List keeps track of what element is
 * active in the List by maintaining tabindex. We do not want list items
 * to set tabindex on themselves or focus themselves so that we can organize all
 * that logic in the parent List and Menus, and list item stays as dumb as
 * possible.
 */
function createRequestActivationEvent() {
  return new Event('request-activation', { bubbles: true, composed: true })
}
/**
 * The default `isActivatable` function, which checks if an item is not
 * disabled.
 *
 * @param item The item to check.
 * @return true if `item.disabled` is `false.
 */
function isItemNotDisabled(item) {
  return !item.disabled
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO: move this file to List and make List use this
/**
 * Default keys that trigger navigation.
 */
// tslint:disable:enforce-name-casing Following Enum style
const NavigableKeys = {
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowUp: 'ArrowUp',
  ArrowRight: 'ArrowRight',
  Home: 'Home',
  End: 'End'
}
/**
 * A controller that handles list keyboard navigation and item management.
 */
class ListController {
  constructor(config) {
    /**
     * Handles keyboard navigation. Should be bound to the node that will act as
     * the List.
     */
    this.handleKeydown = (event) => {
      const key = event.key
      if (event.defaultPrevented || !this.isNavigableKey(key)) {
        return
      }
      // do not use this.items directly in upcoming calculations so we don't
      // re-query the DOM unnecessarily
      const items = this.items
      if (!items.length) {
        return
      }
      const activeItemRecord = getActiveItem(items, this.isActivatable)
      event.preventDefault()
      const isRtl = this.isRtl()
      const inlinePrevious = isRtl
        ? NavigableKeys.ArrowRight
        : NavigableKeys.ArrowLeft
      const inlineNext = isRtl
        ? NavigableKeys.ArrowLeft
        : NavigableKeys.ArrowRight
      let nextActiveItem = null
      switch (key) {
        // Activate the next item
        case NavigableKeys.ArrowDown:
        case inlineNext:
          nextActiveItem = activateNextItem(
            items,
            activeItemRecord,
            this.isActivatable,
            this.wrapNavigation()
          )
          break
        // Activate the previous item
        case NavigableKeys.ArrowUp:
        case inlinePrevious:
          nextActiveItem = activatePreviousItem(
            items,
            activeItemRecord,
            this.isActivatable,
            this.wrapNavigation()
          )
          break
        // Activate the first item
        case NavigableKeys.Home:
          nextActiveItem = activateFirstItem(items, this.isActivatable)
          break
        // Activate the last item
        case NavigableKeys.End:
          nextActiveItem = activateLastItem(items, this.isActivatable)
          break
      }
      if (
        nextActiveItem &&
        activeItemRecord &&
        activeItemRecord.item !== nextActiveItem
      ) {
        // If a new item was activated, remove the tabindex of the previous
        // activated item.
        activeItemRecord.item.tabIndex = -1
      }
    }
    /**
     * Listener to be bound to the `deactivate-items` item event.
     */
    this.onDeactivateItems = () => {
      const items = this.items
      for (const item of items) {
        this.deactivateItem(item)
      }
    }
    /**
     * Listener to be bound to the `request-activation` item event..
     */
    this.onRequestActivation = (event) => {
      this.onDeactivateItems()
      const target = event.target
      this.activateItem(target)
      target.focus()
    }
    /**
     * Listener to be bound to the `slotchange` event for the slot that renders
     * the items.
     */
    this.onSlotchange = () => {
      const items = this.items
      // Whether we have encountered an item that has been activated
      let encounteredActivated = false
      for (const item of items) {
        const isActivated = !item.disabled && item.tabIndex > -1
        if (isActivated && !encounteredActivated) {
          encounteredActivated = true
          item.tabIndex = 0
          continue
        }
        // Deactivate the rest including disabled
        item.tabIndex = -1
      }
      if (encounteredActivated) {
        return
      }
      const firstActivatableItem = getFirstActivatableItem(
        items,
        this.isActivatable
      )
      if (!firstActivatableItem) {
        return
      }
      firstActivatableItem.tabIndex = 0
    }
    const {
      isItem,
      getPossibleItems,
      isRtl,
      deactivateItem,
      activateItem,
      isNavigableKey,
      isActivatable,
      wrapNavigation
    } = config
    this.isItem = isItem
    this.getPossibleItems = getPossibleItems
    this.isRtl = isRtl
    this.deactivateItem = deactivateItem
    this.activateItem = activateItem
    this.isNavigableKey = isNavigableKey
    this.isActivatable = isActivatable
    this.wrapNavigation = wrapNavigation ?? (() => true)
  }
  /**
   * The items being managed by the list. Additionally, attempts to see if the
   * object has a sub-item in the `.item` property.
   */
  get items() {
    const maybeItems = this.getPossibleItems()
    const items = []
    for (const itemOrParent of maybeItems) {
      const isItem = this.isItem(itemOrParent)
      // if the item is a list item, add it to the list of items
      if (isItem) {
        items.push(itemOrParent)
        continue
      }
      // If the item exposes an `item` property check if it is a list item.
      const subItem = itemOrParent.item
      if (subItem && this.isItem(subItem)) {
        items.push(subItem)
      }
    }
    return items
  }
  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem() {
    const items = this.items
    const activeItemRecord = getActiveItem(items, this.isActivatable)
    if (activeItemRecord) {
      activeItemRecord.item.tabIndex = -1
    }
    return activateNextItem(
      items,
      activeItemRecord,
      this.isActivatable,
      this.wrapNavigation()
    )
  }
  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem() {
    const items = this.items
    const activeItemRecord = getActiveItem(items, this.isActivatable)
    if (activeItemRecord) {
      activeItemRecord.item.tabIndex = -1
    }
    return activatePreviousItem(
      items,
      activeItemRecord,
      this.isActivatable,
      this.wrapNavigation()
    )
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const NAVIGABLE_KEY_SET = new Set(Object.values(NavigableKeys))
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class List extends s$1 {
  /** @export */
  get items() {
    return this.listController.items
  }
  constructor() {
    super()
    this.listController = new ListController({
      isItem: (item) => item.hasAttribute('md-list-item'),
      getPossibleItems: () => this.slotItems,
      isRtl: () => getComputedStyle(this).direction === 'rtl',
      deactivateItem: (item) => {
        item.tabIndex = -1
      },
      activateItem: (item) => {
        item.tabIndex = 0
      },
      isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
      isActivatable: (item) => !item.disabled && item.type !== 'text'
    })
    this.internals =
      // Cast needed for closure
      this.attachInternals()
    {
      this.internals.role = 'list'
      this.addEventListener('keydown', this.listController.handleKeydown)
    }
  }
  render() {
    return x`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `
  }
  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem() {
    return this.listController.activateNextItem()
  }
  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem() {
    return this.listController.activatePreviousItem()
  }
}
__decorate([o$4({ flatten: true })], List.prototype, 'slotItems', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./list/internal/list-styles.css.
const styles$m = i$4`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Lists are continuous, vertical indexes of text or images.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * @final
 * @suppress {visibility}
 */
let MdList = class MdList extends List {}
MdList.styles = [styles$m]
MdList = __decorate([t$3('md-list')], MdList)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component.
 */
class Item extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Only needed for SSR.
     *
     * Add this attribute when an item has two lines to avoid a Flash Of Unstyled
     * Content. This attribute is not needed for single line items or items with
     * three or more lines.
     */
    this.multiline = false
  }
  render() {
    return x`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `
  }
  handleTextSlotChange() {
    // Check if there's more than one text slot with content. If so, the item is
    // multiline, which has a different min-height than single line items.
    let isMultiline = false
    let slotsWithContent = 0
    for (const slot of this.textSlots) {
      if (slotHasContent(slot)) {
        slotsWithContent += 1
      }
      if (slotsWithContent > 1) {
        isMultiline = true
        break
      }
    }
    this.multiline = isMultiline
  }
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Item.prototype,
  'multiline',
  void 0
)
__decorate([r$3('.text slot')], Item.prototype, 'textSlots', void 0)
function slotHasContent(slot) {
  for (const node of slot.assignedNodes({ flatten: true })) {
    // Assume there's content if there's an element slotted in
    const isElement = node.nodeType === Node.ELEMENT_NODE
    // If there's only text nodes for the default slot, check if there's
    // non-whitespace.
    const isTextWithContent =
      node.nodeType === Node.TEXT_NODE && node.textContent?.match(/\S/)
    if (isElement || isTextWithContent) {
      return true
    }
  }
  return false
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./labs/item/internal/item-styles.css.
const styles$l = i$4`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component that can be used inside list items to give them
 * their customizable structure.
 *
 * `<md-item>` does not have any functionality, which must be added by the
 * component using it.
 *
 * All text will wrap unless `white-space: nowrap` is set on the item or any of
 * its children.
 *
 * Slots available:
 * - `<default>`: The headline, or custom content.
 * - `headline`: The first line.
 * - `supporting-text`: Supporting text lines underneath the headline.
 * - `trailing-supporting-text`: A small text snippet at the end of the item.
 * - `start`: Any leading content, such as icons, avatars, or checkboxes.
 * - `end`: Any trailing content, such as icons and buttons.
 * - `container`: Background container content, intended for adding additional
 *     styles, such as ripples or focus rings.
 *
 * @example
 * ```html
 * <md-item>Single line</md-item>
 *
 * <md-item>
 *   <div class="custom-content">...</div>
 * </md-item>
 *
 * <!-- Classic 1 to 3+ line list items -->
 * <md-item>
 *   <md-icon slot="start">image</md-icon>
 *   <div slot="overline">Overline</div>
 *   <div slot="headline">Headline</div>
 *   <div="supporting-text">Supporting text</div>
 *   <div="trailing-supporting-text">Trailing</div>
 *   <md-icon slot="end">image</md-icon>
 * </md-item>
 * ```
 *
 * When wrapping `<md-item>`, forward the available slots to use the same slot
 * structure for the wrapping component (this is what `<md-list-item>` does).
 *
 * @example
 * ```html
 * <md-item>
 *   <slot></slot>
 *   <slot name="overline" slot="overline"></slot>
 *   <slot name="headline" slot="headline"></slot>
 *   <slot name="supporting-text" slot="supporting-text"></slot>
 *   <slot name="trailing-supporting-text"
 *       slot="trailing-supporting-text"></slot>
 *   <slot name="start" slot="start"></slot>
 *   <slot name="end" slot="end"></slot>
 * </md-item>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdItem = class MdItem extends Item {}
MdItem.styles = [styles$l]
MdItem = __decorate([t$3('md-item')], MdItem)

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires request-activation {Event} Requests the list to set `tabindex=0` on
 * the item and focus it. --bubbles --composed
 */
class ListItemEl extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Disables the item and makes it non-selectable and non-interactive.
     */
    this.disabled = false
    /**
     * Sets the behavior of the list item, defaults to "text". Change to "link" or
     * "button" for interactive items.
     */
    this.type = 'text'
    /**
     * READONLY. Sets the `md-list-item` attribute on the element.
     */
    this.isListItem = true
    /**
     * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     */
    this.href = ''
    /**
     * Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is
     * set.
     */
    this.target = ''
  }
  get isDisabled() {
    return this.disabled && this.type !== 'link'
  }
  willUpdate(changed) {
    if (this.href) {
      this.type = 'link'
    }
    super.willUpdate(changed)
  }
  render() {
    return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)
  }
  /**
   * Renders the root list item.
   *
   * @param content the child content of the list item.
   */
  renderListItem(content) {
    const isAnchor = this.type === 'link'
    let tag
    switch (this.type) {
      case 'link':
        tag = s`a`
        break
      case 'button':
        tag = s`button`
        break
      default:
      case 'text':
        tag = s`li`
        break
    }
    const isInteractive = this.type !== 'text'
    // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
    // then all are "listitem" roles for correct announcement.
    const target = isAnchor && !!this.target ? this.target : T
    return n$2`
      <${tag}
        id="item"
        tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected || T}
        aria-checked=${this.ariaChecked || T}
        aria-expanded=${this.ariaExpanded || T}
        aria-haspopup=${this.ariaHasPopup || T}
        class="list-item ${e$1(this.getRenderClasses())}"
        href=${this.href || T}
        target=${target}
        @focus=${this.onFocus}
      >${content}</${tag}>
    `
  }
  /**
   * Handles rendering of the ripple element.
   */
  renderRipple() {
    if (this.type === 'text') {
      return T
    }
    return x` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`
  }
  /**
   * Handles rendering of the focus ring.
   */
  renderFocusRing() {
    if (this.type === 'text') {
      return T
    }
    return x` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`
  }
  onFocusRingVisibilityChanged(e) {}
  /**
   * Classes applied to the list item root.
   */
  getRenderClasses() {
    return { disabled: this.isDisabled }
  }
  /**
   * Handles rendering the headline and supporting text.
   */
  renderBody() {
    return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `
  }
  onFocus() {
    if (this.tabIndex !== -1) {
      return
    }
    // Handles the case where the user clicks on the element and then tabs.
    this.dispatchEvent(createRequestActivationEvent())
  }
  focus() {
    // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
    // work programmatically like in FF and select-option
    this.listItemRoot?.focus()
  }
}
;(() => {
  requestUpdateOnAriaChange(ListItemEl)
})()
/** @nocollapse */
ListItemEl.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  ListItemEl.prototype,
  'disabled',
  void 0
)
__decorate([n$5({ reflect: true })], ListItemEl.prototype, 'type', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'md-list-item', reflect: true })],
  ListItemEl.prototype,
  'isListItem',
  void 0
)
__decorate([n$5()], ListItemEl.prototype, 'href', void 0)
__decorate([n$5()], ListItemEl.prototype, 'target', void 0)
__decorate([e$5('.list-item')], ListItemEl.prototype, 'listItemRoot', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./list/internal/listitem/list-item-styles.css.
const styles$k = i$4`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Lists are continuous, vertical indexes of text or images. Items are placed
 * inside the list.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * Acceptable slot child variants are:
 *
 * - `img[slot=end]`
 * - `img[slot=start]`
 *
 *  @example
 * ```html
 * <md-list-item
 *     headline="User Name"
 *     supportingText="user@name.com">
 *   <md-icon slot="start">account_circle</md-icon>
 *   <md-icon slot="end">check</md-icon>
 * </md-list-item>
 * ```
 *
 * @example
 *
 * @final
 * @suppress {visibility}
 */
let MdListItem = class MdListItem extends ListItemEl {}
MdListItem.styles = [styles$k]
MdListItem = __decorate([t$3('md-list-item')], MdListItem)

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const n$1 = 'important',
  i = ' !' + n$1,
  o = e$2(
    class extends i$1 {
      constructor(t$1) {
        if (
          (super(t$1),
          t$1.type !== t.ATTRIBUTE ||
            'style' !== t$1.name ||
            t$1.strings?.length > 2)
        )
          throw Error(
            'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.'
          )
      }
      render(t) {
        return Object.keys(t).reduce((e, r) => {
          const s = t[r]
          return null == s
            ? e
            : e +
                `${(r = r.includes('-')
                  ? r
                  : r
                      .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                      .toLowerCase())}:${s};`
        }, '')
      }
      update(e, [r]) {
        const { style: s } = e.element
        if (void 0 === this.ft)
          return (this.ft = new Set(Object.keys(r))), this.render(r)
        for (const t of this.ft)
          null == r[t] &&
            (this.ft.delete(t),
            t.includes('-') ? s.removeProperty(t) : (s[t] = null))
        for (const t in r) {
          const e = r[t]
          if (null != e) {
            this.ft.add(t)
            const r = 'string' == typeof e && e.endsWith(i)
            t.includes('-') || r
              ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n$1 : '')
              : (s[t] = e)
          }
        }
        return w
      }
    }
  )

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Creates an event that closes any parent menus.
 */
function createCloseMenuEvent(initiator, reason) {
  return new CustomEvent('close-menu', {
    bubbles: true,
    composed: true,
    detail: { initiator, reason, itemPath: [initiator] }
  })
}
/**
 * Creates a default close menu event used by md-menu.
 */
const createDefaultCloseMenuEvent = createCloseMenuEvent
/**
 * Creates an event that requests the given item be selected.
 */
function createDeactivateTypeaheadEvent() {
  return new Event('deactivate-typeahead', { bubbles: true, composed: true })
}
/**
 * Creates an event that requests the typeahead functionality of containing menu
 * be activated.
 */
function createActivateTypeaheadEvent() {
  return new Event('activate-typeahead', { bubbles: true, composed: true })
}
/**
 * Keys that are used to navigate menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const NavigableKey = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight',
  LEFT: 'ArrowLeft'
}
/**
 * Keys that are used for selection in menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const SelectionKey = {
  SPACE: 'Space',
  ENTER: 'Enter'
}
/**
 * Default close `Reason` kind values.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const CloseReason = {
  CLICK_SELECTION: 'click-selection',
  KEYDOWN: 'keydown'
}
/**
 * Keys that can close menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const KeydownCloseKey = {
  ESCAPE: 'Escape',
  SPACE: SelectionKey.SPACE,
  ENTER: SelectionKey.ENTER
}
/**
 * Determines whether the given key code is a key code that should close the
 * menu.
 *
 * @param code The KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to close the
 * menu.
 */
function isClosableKey(code) {
  return Object.values(KeydownCloseKey).some((value) => value === code)
}
/**
 * Determines whether the given key code is a key code that should select a menu
 * item.
 *
 * @param code They KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to select a
 * menu item.
 */
function isSelectableKey(code) {
  return Object.values(SelectionKey).some((value) => value === code)
}
/**
 * Determines whether a target element is contained inside another element's
 * composed tree.
 *
 * @param target The potential contained element.
 * @param container The potential containing element of the target.
 * @returns Whether the target element is contained inside the container's
 * composed subtree
 */
function isElementInSubtree(target, container) {
  // Dispatch a composed, bubbling event to check its path to see if the
  // newly-focused element is contained in container's subtree
  const focusEv = new Event('md-contains', { bubbles: true, composed: true })
  let composedPath = []
  const listener = (ev) => {
    composedPath = ev.composedPath()
  }
  container.addEventListener('md-contains', listener)
  target.dispatchEvent(focusEv)
  container.removeEventListener('md-contains', listener)
  const isContained = composedPath.length > 0
  return isContained
}
/**
 * Element to focus on when menu is first opened.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const FocusState = {
  NONE: 'none',
  LIST_ROOT: 'list-root',
  FIRST_ITEM: 'first-item',
  LAST_ITEM: 'last-item'
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An enum of supported Menu corners
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const Corner = {
  END_START: 'end-start',
  END_END: 'end-end',
  START_START: 'start-start',
  START_END: 'start-end'
}
/**
 * Given a surface, an anchor, corners, and some options, this surface will
 * calculate the position of a surface to align the two given corners and keep
 * the surface inside the window viewport. It also provides a StyleInfo map that
 * can be applied to the surface to handle visiblility and position.
 */
class SurfacePositionController {
  /**
   * @param host The host to connect the controller to.
   * @param getProperties A function that returns the properties for the
   * controller.
   */
  constructor(host, getProperties) {
    this.host = host
    this.getProperties = getProperties
    // The current styles to apply to the surface.
    this.surfaceStylesInternal = {
      display: 'none'
    }
    // Previous values stored for change detection. Open change detection is
    // calculated separately so initialize it here.
    this.lastValues = {
      isOpen: false
    }
    this.host.addController(this)
  }
  /**
   * The StyleInfo map to apply to the surface via Lit's stylemap
   */
  get surfaceStyles() {
    return this.surfaceStylesInternal
  }
  /**
   * Calculates the surface's new position required so that the surface's
   * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
   * surface inside the window viewport. This positioning also respects RTL by
   * checking `getComputedStyle()` on the surface element.
   */
  async position() {
    const {
      surfaceEl,
      anchorEl,
      anchorCorner: anchorCornerRaw,
      surfaceCorner: surfaceCornerRaw,
      positioning,
      xOffset,
      yOffset,
      repositionStrategy
    } = this.getProperties()
    const anchorCorner = anchorCornerRaw.toLowerCase().trim()
    const surfaceCorner = surfaceCornerRaw.toLowerCase().trim()
    if (!surfaceEl || !anchorEl) {
      return
    }
    // Store these before we potentially resize the window with the next set of
    // lines
    const windowInnerWidth = window.innerWidth
    const windowInnerHeight = window.innerHeight
    const div = document.createElement('div')
    div.style.opacity = '0'
    div.style.position = 'fixed'
    div.style.display = 'block'
    div.style.inset = '0'
    document.body.appendChild(div)
    const scrollbarTestRect = div.getBoundingClientRect()
    div.remove()
    // Calculate the widths of the scrollbars in the inline and block directions
    // to account for window-relative calculations.
    const blockScrollbarHeight = window.innerHeight - scrollbarTestRect.bottom
    const inlineScrollbarWidth = window.innerWidth - scrollbarTestRect.right
    // Paint the surface transparently so that we can get the position and the
    // rect info of the surface.
    this.surfaceStylesInternal = {
      display: 'block',
      opacity: '0'
    }
    // Wait for it to be visible.
    this.host.requestUpdate()
    await this.host.updateComplete
    // Safari has a bug that makes popovers render incorrectly if the node is
    // made visible + Animation Frame before calling showPopover().
    // https://bugs.webkit.org/show_bug.cgi?id=264069
    // also the cast is required due to differing TS types in Google and OSS.
    if (surfaceEl.popover && surfaceEl.isConnected) {
      surfaceEl.showPopover()
    }
    const surfaceRect = surfaceEl.getSurfacePositionClientRect
      ? surfaceEl.getSurfacePositionClientRect()
      : surfaceEl.getBoundingClientRect()
    const anchorRect = anchorEl.getSurfacePositionClientRect
      ? anchorEl.getSurfacePositionClientRect()
      : anchorEl.getBoundingClientRect()
    const [surfaceBlock, surfaceInline] = surfaceCorner.split('-')
    const [anchorBlock, anchorInline] = anchorCorner.split('-')
    // LTR depends on the direction of the SURFACE not the anchor.
    const isLTR = getComputedStyle(surfaceEl).direction === 'ltr'
    /*
     * For more on inline and block dimensions, see MDN article:
     * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values
     *
     * ┌───── inline/blockDocumentOffset  inlineScrollbarWidth
     * │       │                                    │
     * │     ┌─▼─────┐                              │Document
     * │    ┌┼───────┴──────────────────────────────┼────────┐
     * │    ││                                      │        │
     * └──► ││ ┌───── inline/blockWindowOffset      │        │
     *      ││ │       │                            ▼        │
     *      ││ │     ┌─▼───┐                 Window┌┐        │
     *      └┤ │    ┌┼─────┴───────────────────────┼│        │
     *       │ │    ││                             ││        │
     *       │ └──► ││  ┌──inline/blockAnchorOffset││        │
     *       │      ││  │     │                    ││        │
     *       │      └┤  │  ┌──▼───┐                ││        │
     *       │       │  │ ┌┼──────┤                ││        │
     *       │       │  └─►│Anchor│                ││        │
     *       │       │    └┴──────┘                ││        │
     *       │       │                             ││        │
     *       │       │     ┌───────────────────────┼┼────┐   │
     *       │       │     │ Surface               ││    │   │
     *       │       │     │                       ││    │   │
     *       │       │     │                       ││    │   │
     *       │       │     │                       ││    │   │
     *       │       │     │                       ││    │   │
     *       │      ┌┼─────┼───────────────────────┼│    │   │
     *       │   ┌─►┴──────┼────────────────────────┘    ├┐  │
     *       │   │         │ inline/blockOOBCorrection   ││  │
     *       │   │         │                         │   ││  │
     *       │   │         │                         ├──►├│  │
     *       │   │         │                         │   ││  │
     *       │   │         └────────────────────────┐▼───┼┘  │
     *       │  blockScrollbarHeight                └────┘   │
     *       │                                               │
     *       └───────────────────────────────────────────────┘
     */
    // Calculate the block positioning properties
    let { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty } =
      this.calculateBlock({
        surfaceRect,
        anchorRect,
        anchorBlock,
        surfaceBlock,
        yOffset,
        positioning,
        windowInnerHeight,
        blockScrollbarHeight
      })
    // If the surface should be out of bounds in the block direction, flip the
    // surface and anchor corner block values and recalculate
    if (blockOutOfBoundsCorrection) {
      const flippedSurfaceBlock = surfaceBlock === 'start' ? 'end' : 'start'
      const flippedAnchorBlock = anchorBlock === 'start' ? 'end' : 'start'
      const flippedBlock = this.calculateBlock({
        surfaceRect,
        anchorRect,
        anchorBlock: flippedAnchorBlock,
        surfaceBlock: flippedSurfaceBlock,
        yOffset,
        positioning,
        windowInnerHeight,
        blockScrollbarHeight
      })
      // In the case that the flipped verion would require less out of bounds
      // correcting, use the flipped corner block values
      if (
        blockOutOfBoundsCorrection > flippedBlock.blockOutOfBoundsCorrection
      ) {
        blockInset = flippedBlock.blockInset
        blockOutOfBoundsCorrection = flippedBlock.blockOutOfBoundsCorrection
        surfaceBlockProperty = flippedBlock.surfaceBlockProperty
      }
    }
    // Calculate the inline positioning properties
    let { inlineInset, inlineOutOfBoundsCorrection, surfaceInlineProperty } =
      this.calculateInline({
        surfaceRect,
        anchorRect,
        anchorInline,
        surfaceInline,
        xOffset,
        positioning,
        isLTR,
        windowInnerWidth,
        inlineScrollbarWidth
      })
    // If the surface should be out of bounds in the inline direction, flip the
    // surface and anchor corner inline values and recalculate
    if (inlineOutOfBoundsCorrection) {
      const flippedSurfaceInline = surfaceInline === 'start' ? 'end' : 'start'
      const flippedAnchorInline = anchorInline === 'start' ? 'end' : 'start'
      const flippedInline = this.calculateInline({
        surfaceRect,
        anchorRect,
        anchorInline: flippedAnchorInline,
        surfaceInline: flippedSurfaceInline,
        xOffset,
        positioning,
        isLTR,
        windowInnerWidth,
        inlineScrollbarWidth
      })
      // In the case that the flipped verion would require less out of bounds
      // correcting, use the flipped corner inline values
      if (
        Math.abs(inlineOutOfBoundsCorrection) >
        Math.abs(flippedInline.inlineOutOfBoundsCorrection)
      ) {
        inlineInset = flippedInline.inlineInset
        inlineOutOfBoundsCorrection = flippedInline.inlineOutOfBoundsCorrection
        surfaceInlineProperty = flippedInline.surfaceInlineProperty
      }
    }
    // If we are simply repositioning the surface back inside the viewport,
    // subtract the out of bounds correction values from the positioning.
    if (repositionStrategy === 'move') {
      blockInset = blockInset - blockOutOfBoundsCorrection
      inlineInset = inlineInset - inlineOutOfBoundsCorrection
    }
    this.surfaceStylesInternal = {
      display: 'block',
      opacity: '1',
      [surfaceBlockProperty]: `${blockInset}px`,
      [surfaceInlineProperty]: `${inlineInset}px`
    }
    // In the case that we are resizing the surface to stay inside the viewport
    // we need to set height and width on the surface.
    if (repositionStrategy === 'resize') {
      // Add a height property to the styles if there is block height correction
      if (blockOutOfBoundsCorrection) {
        this.surfaceStylesInternal['height'] = `${
          surfaceRect.height - blockOutOfBoundsCorrection
        }px`
      }
      // Add a width property to the styles if there is block height correction
      if (inlineOutOfBoundsCorrection) {
        this.surfaceStylesInternal['width'] = `${
          surfaceRect.width - inlineOutOfBoundsCorrection
        }px`
      }
    }
    this.host.requestUpdate()
  }
  /**
   * Calculates the css property, the inset, and the out of bounds correction
   * for the surface in the block direction.
   */
  calculateBlock(config) {
    const {
      surfaceRect,
      anchorRect,
      anchorBlock,
      surfaceBlock,
      yOffset,
      positioning,
      windowInnerHeight,
      blockScrollbarHeight
    } = config
    // We use number booleans to multiply values rather than `if` / ternary
    // statements because it _heavily_ cuts down on nesting and readability
    const relativeToWindow =
      positioning === 'fixed' || positioning === 'document' ? 1 : 0
    const relativeToDocument = positioning === 'document' ? 1 : 0
    const isSurfaceBlockStart = surfaceBlock === 'start' ? 1 : 0
    const isSurfaceBlockEnd = surfaceBlock === 'end' ? 1 : 0
    const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0
    // Whether or not to apply the height of the anchor
    const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset
    // The absolute block position of the anchor relative to window
    const blockTopLayerOffset =
      isSurfaceBlockStart * anchorRect.top +
      isSurfaceBlockEnd *
        (windowInnerHeight - anchorRect.bottom - blockScrollbarHeight)
    const blockDocumentOffset =
      isSurfaceBlockStart * window.scrollY - isSurfaceBlockEnd * window.scrollY
    // If the surface's block would be out of bounds of the window, move it back
    // in
    const blockOutOfBoundsCorrection = Math.abs(
      Math.min(
        0,
        windowInnerHeight -
          blockTopLayerOffset -
          blockAnchorOffset -
          surfaceRect.height
      )
    )
    // The block logical value of the surface
    const blockInset =
      relativeToWindow * blockTopLayerOffset +
      relativeToDocument * blockDocumentOffset +
      blockAnchorOffset
    const surfaceBlockProperty =
      surfaceBlock === 'start' ? 'inset-block-start' : 'inset-block-end'
    return { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty }
  }
  /**
   * Calculates the css property, the inset, and the out of bounds correction
   * for the surface in the inline direction.
   */
  calculateInline(config) {
    const {
      isLTR: isLTRBool,
      surfaceInline,
      anchorInline,
      anchorRect,
      surfaceRect,
      xOffset,
      positioning,
      windowInnerWidth,
      inlineScrollbarWidth
    } = config
    // We use number booleans to multiply values rather than `if` / ternary
    // statements because it _heavily_ cuts down on nesting and readability
    const relativeToWindow =
      positioning === 'fixed' || positioning === 'document' ? 1 : 0
    const relativeToDocument = positioning === 'document' ? 1 : 0
    const isLTR = isLTRBool ? 1 : 0
    const isRTL = isLTRBool ? 0 : 1
    const isSurfaceInlineStart = surfaceInline === 'start' ? 1 : 0
    const isSurfaceInlineEnd = surfaceInline === 'end' ? 1 : 0
    const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0
    // Whether or not to apply the width of the anchor
    const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset
    // The inline position of the anchor relative to window in LTR
    const inlineTopLayerOffsetLTR =
      isSurfaceInlineStart * anchorRect.left +
      isSurfaceInlineEnd *
        (windowInnerWidth - anchorRect.right - inlineScrollbarWidth)
    // The inline position of the anchor relative to window in RTL
    const inlineTopLayerOffsetRTL =
      isSurfaceInlineStart *
        (windowInnerWidth - anchorRect.right - inlineScrollbarWidth) +
      isSurfaceInlineEnd * anchorRect.left
    // The inline position of the anchor relative to window
    const inlineTopLayerOffset =
      isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL
    // The inline position of the anchor relative to window in LTR
    const inlineDocumentOffsetLTR =
      isSurfaceInlineStart * window.scrollX -
      isSurfaceInlineEnd * window.scrollX
    // The inline position of the anchor relative to window in RTL
    const inlineDocumentOffsetRTL =
      isSurfaceInlineEnd * window.scrollX -
      isSurfaceInlineStart * window.scrollX
    // The inline position of the anchor relative to window
    const inlineDocumentOffset =
      isLTR * inlineDocumentOffsetLTR + isRTL * inlineDocumentOffsetRTL
    // If the surface's inline would be out of bounds of the window, move it
    // back in
    const inlineOutOfBoundsCorrection = Math.abs(
      Math.min(
        0,
        windowInnerWidth -
          inlineTopLayerOffset -
          inlineAnchorOffset -
          surfaceRect.width
      )
    )
    // The inline logical value of the surface
    const inlineInset =
      relativeToWindow * inlineTopLayerOffset +
      inlineAnchorOffset +
      relativeToDocument * inlineDocumentOffset
    let surfaceInlineProperty =
      surfaceInline === 'start' ? 'inset-inline-start' : 'inset-inline-end'
    // There are cases where the element is RTL but the root of the page is not.
    // In these cases we want to not use logical properties.
    if (positioning === 'document' || positioning === 'fixed') {
      if (
        (surfaceInline === 'start' && isLTRBool) ||
        (surfaceInline === 'end' && !isLTRBool)
      ) {
        surfaceInlineProperty = 'left'
      } else {
        surfaceInlineProperty = 'right'
      }
    }
    return {
      inlineInset,
      inlineOutOfBoundsCorrection,
      surfaceInlineProperty
    }
  }
  hostUpdate() {
    this.onUpdate()
  }
  hostUpdated() {
    this.onUpdate()
  }
  /**
   * Checks whether the properties passed into the controller have changed since
   * the last positioning. If so, it will reposition if the surface is open or
   * close it if the surface should close.
   */
  async onUpdate() {
    const props = this.getProperties()
    let hasChanged = false
    for (const [key, value] of Object.entries(props)) {
      // tslint:disable-next-line
      hasChanged = hasChanged || value !== this.lastValues[key]
      if (hasChanged) break
    }
    const openChanged = this.lastValues.isOpen !== props.isOpen
    const hasAnchor = !!props.anchorEl
    const hasSurface = !!props.surfaceEl
    if (hasChanged && hasAnchor && hasSurface) {
      // Only update isOpen, because if it's closed, we do not want to waste
      // time on a useless reposition calculation. So save the other "dirty"
      // values until next time it opens.
      this.lastValues.isOpen = props.isOpen
      if (props.isOpen) {
        // We are going to do a reposition, so save the prop values for future
        // dirty checking.
        this.lastValues = props
        await this.position()
        props.onOpen()
      } else if (openChanged) {
        await props.beforeClose()
        this.close()
        props.onClose()
      }
    }
  }
  /**
   * Hides the surface.
   */
  close() {
    this.surfaceStylesInternal = {
      display: 'none'
    }
    this.host.requestUpdate()
    const surfaceEl = this.getProperties().surfaceEl
    // The following type casts are required due to differing TS types in Google
    // and open source.
    if (surfaceEl?.popover && surfaceEl?.isConnected) {
      surfaceEl.hidePopover()
    }
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Indicies to access the TypeaheadRecord tuple type.
 */
const TYPEAHEAD_RECORD = {
  INDEX: 0,
  ITEM: 1,
  TEXT: 2
}
/**
 * This controller listens to `keydown` events and searches the header text of
 * an array of `MenuItem`s with the corresponding entered keys within the buffer
 * time and activates the item.
 *
 * @example
 * ```ts
 * const typeaheadController = new TypeaheadController(() => ({
 *   typeaheadBufferTime: 50,
 *   getItems: () => Array.from(document.querySelectorAll('md-menu-item'))
 * }));
 * html`
 *   <div
 *       @keydown=${typeaheadController.onKeydown}
 *       tabindex="0"
 *       class="activeItemText">
 *     <!-- focusable element that will receive keydown events -->
 *     Apple
 *   </div>
 *   <div>
 *     <md-menu-item active header="Apple"></md-menu-item>
 *     <md-menu-item header="Apricot"></md-menu-item>
 *     <md-menu-item header="Banana"></md-menu-item>
 *     <md-menu-item header="Olive"></md-menu-item>
 *     <md-menu-item header="Orange"></md-menu-item>
 *   </div>
 * `;
 * ```
 */
class TypeaheadController {
  /**
   * @param getProperties A function that returns the options of the typeahead
   * controller:
   *
   * {
   *   getItems: A function that returns an array of menu items to be searched.
   *   typeaheadBufferTime: The maximum time between each keystroke to keep the
   *       current type buffer alive.
   * }
   */
  constructor(getProperties) {
    this.getProperties = getProperties
    /**
     * Array of tuples that helps with indexing.
     */
    this.typeaheadRecords = []
    /**
     * Currently-typed text since last buffer timeout
     */
    this.typaheadBuffer = ''
    /**
     * The timeout id from the current buffer's setTimeout
     */
    this.cancelTypeaheadTimeout = 0
    /**
     * If we are currently "typing"
     */
    this.isTypingAhead = false
    /**
     * The record of the last active item.
     */
    this.lastActiveRecord = null
    /**
     * Apply this listener to the element that will receive `keydown` events that
     * should trigger this controller.
     *
     * @param event The native browser `KeyboardEvent` from the `keydown` event.
     */
    this.onKeydown = (event) => {
      if (this.isTypingAhead) {
        this.typeahead(event)
      } else {
        this.beginTypeahead(event)
      }
    }
    /**
     * Ends the current typeahead and clears the buffer.
     */
    this.endTypeahead = () => {
      this.isTypingAhead = false
      this.typaheadBuffer = ''
      this.typeaheadRecords = []
    }
  }
  get items() {
    return this.getProperties().getItems()
  }
  get active() {
    return this.getProperties().active
  }
  /**
   * Sets up typingahead
   */
  beginTypeahead(event) {
    if (!this.active) {
      return
    }
    // We don't want to typeahead if the _beginning_ of the typeahead is a menu
    // navigation, or a selection. We will handle "Space" only if it's in the
    // middle of a typeahead
    if (
      event.code === 'Space' ||
      event.code === 'Enter' ||
      event.code.startsWith('Arrow') ||
      event.code === 'Escape'
    ) {
      return
    }
    this.isTypingAhead = true
    // Generates the record array data structure which is the index, the element
    // and a normalized header.
    this.typeaheadRecords = this.items.map((el, index) => [
      index,
      el,
      el.typeaheadText.trim().toLowerCase()
    ])
    this.lastActiveRecord =
      this.typeaheadRecords.find(
        (record) => record[TYPEAHEAD_RECORD.ITEM].tabIndex === 0
      ) ?? null
    if (this.lastActiveRecord) {
      this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1
    }
    this.typeahead(event)
  }
  /**
   * Performs the typeahead. Based on the normalized items and the current text
   * buffer, finds the _next_ item with matching text and activates it.
   *
   * @example
   *
   * items: Apple, Banana, Olive, Orange, Cucumber
   * buffer: ''
   * user types: o
   *
   * activates Olive
   *
   * @example
   *
   * items: Apple, Banana, Olive (active), Orange, Cucumber
   * buffer: 'o'
   * user types: l
   *
   * activates Olive
   *
   * @example
   *
   * items: Apple, Banana, Olive (active), Orange, Cucumber
   * buffer: ''
   * user types: o
   *
   * activates Orange
   *
   * @example
   *
   * items: Apple, Banana, Olive, Orange (active), Cucumber
   * buffer: ''
   * user types: o
   *
   * activates Olive
   */
  typeahead(event) {
    if (event.defaultPrevented) return
    clearTimeout(this.cancelTypeaheadTimeout)
    // Stop typingahead if one of the navigation or selection keys (except for
    // Space) are pressed
    if (
      event.code === 'Enter' ||
      event.code.startsWith('Arrow') ||
      event.code === 'Escape'
    ) {
      this.endTypeahead()
      if (this.lastActiveRecord) {
        this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1
      }
      return
    }
    // If Space is pressed, prevent it from selecting and closing the menu
    if (event.code === 'Space') {
      event.preventDefault()
    }
    // Start up a new keystroke buffer timeout
    this.cancelTypeaheadTimeout = setTimeout(
      this.endTypeahead,
      this.getProperties().typeaheadBufferTime
    )
    this.typaheadBuffer += event.key.toLowerCase()
    const lastActiveIndex = this.lastActiveRecord
      ? this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX]
      : -1
    const numRecords = this.typeaheadRecords.length
    /**
     * Sorting function that will resort the items starting with the given index
     *
     * @example
     *
     * this.typeaheadRecords =
     * 0: [0, <reference>, 'apple']
     * 1: [1, <reference>, 'apricot']
     * 2: [2, <reference>, 'banana']
     * 3: [3, <reference>, 'olive'] <-- lastActiveIndex
     * 4: [4, <reference>, 'orange']
     * 5: [5, <reference>, 'strawberry']
     *
     * this.typeaheadRecords.sort((a,b) => rebaseIndexOnActive(a)
     *                                       - rebaseIndexOnActive(b)) ===
     * 0: [3, <reference>, 'olive'] <-- lastActiveIndex
     * 1: [4, <reference>, 'orange']
     * 2: [5, <reference>, 'strawberry']
     * 3: [0, <reference>, 'apple']
     * 4: [1, <reference>, 'apricot']
     * 5: [2, <reference>, 'banana']
     */
    const rebaseIndexOnActive = (record) => {
      return (
        (record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) %
        numRecords
      )
    }
    // records filtered and sorted / rebased around the last active index
    const matchingRecords = this.typeaheadRecords
      .filter(
        (record) =>
          !record[TYPEAHEAD_RECORD.ITEM].disabled &&
          record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer)
      )
      .sort((a, b) => rebaseIndexOnActive(a) - rebaseIndexOnActive(b))
    // Just leave if there's nothing that matches. Native select will just
    // choose the first thing that starts with the next letter in the alphabet
    // but that's out of scope and hard to localize
    if (matchingRecords.length === 0) {
      clearTimeout(this.cancelTypeaheadTimeout)
      if (this.lastActiveRecord) {
        this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1
      }
      this.endTypeahead()
      return
    }
    const isNewQuery = this.typaheadBuffer.length === 1
    let nextRecord
    // This is likely the case that someone is trying to "tab" through different
    // entries that start with the same letter
    if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
      nextRecord = matchingRecords[1] ?? matchingRecords[0]
    } else {
      nextRecord = matchingRecords[0]
    }
    if (this.lastActiveRecord) {
      this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1
    }
    this.lastActiveRecord = nextRecord
    nextRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = 0
    nextRecord[TYPEAHEAD_RECORD.ITEM].focus()
    return
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The default value for the typeahead buffer time in Milliseconds.
 */
const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200
const submenuNavKeys = new Set([
  NavigableKeys.ArrowDown,
  NavigableKeys.ArrowUp,
  NavigableKeys.Home,
  NavigableKeys.End
])
const menuNavKeys = new Set([
  NavigableKeys.ArrowLeft,
  NavigableKeys.ArrowRight,
  ...submenuNavKeys
])
/**
 * Gets the currently focused element on the page.
 *
 * @param activeDoc The document or shadowroot from which to start the search.
 *    Defaults to `window.document`
 * @return Returns the currently deeply focused element or `null` if none.
 */
function getFocusedElement(activeDoc = document) {
  let activeEl = activeDoc.activeElement
  // Check for activeElement in the case that an element with a shadow root host
  // is currently focused.
  while (activeEl && activeEl?.shadowRoot?.activeElement) {
    activeEl = activeEl.shadowRoot.activeElement
  }
  return activeEl
}
/**
 * @fires opening {Event} Fired before the opening animation begins
 * @fires opened {Event} Fired once the menu is open, after any animations
 * @fires closing {Event} Fired before the closing animation begins
 * @fires closed {Event} Fired once the menu is closed, after any animations
 */
class Menu extends s$1 {
  /**
   * Whether the menu is animating upwards or downwards when opening. This is
   * helpful for calculating some animation calculations.
   */
  get openDirection() {
    const menuCornerBlock = this.menuCorner.split('-')[0]
    return menuCornerBlock === 'start' ? 'DOWN' : 'UP'
  }
  /**
   * The element which the menu should align to. If `anchor` is set to a
   * non-empty idref string, then `anchorEl` will resolve to the element with
   * the given id in the same root node. Otherwise, `null`.
   */
  get anchorElement() {
    if (this.anchor) {
      return this.getRootNode().querySelector(`#${this.anchor}`)
    }
    return this.currentAnchorElement
  }
  set anchorElement(element) {
    this.currentAnchorElement = element
    this.requestUpdate('anchorElement')
  }
  constructor() {
    super()
    /**
     * The ID of the element in the same root node in which the menu should align
     * to. Overrides setting `anchorElement = elementReference`.
     *
     * __NOTE__: anchor or anchorElement must either be an HTMLElement or resolve
     * to an HTMLElement in order for menu to open.
     */
    this.anchor = ''
    /**
     * Whether the positioning algorithm should calculate relative to the parent
     * of the anchor element (`absolute`), relative to the window (`fixed`), or
     * relative to the document (`document`). `popover` will use the popover API
     * to render the menu in the top-layer. If your browser does not support the
     * popover API, it will fall back to `fixed`.
     *
     * __Examples for `position = 'fixed'`:__
     *
     * - If there is no `position:relative` in the given parent tree and the
     *   surface is `position:absolute`
     * - If the surface is `position:fixed`
     * - If the surface is in the "top layer"
     * - The anchor and the surface do not share a common `position:relative`
     *   ancestor
     *
     * When using `positioning=fixed`, in most cases, the menu should position
     * itself above most other `position:absolute` or `position:fixed` elements
     * when placed inside of them. e.g. using a menu inside of an `md-dialog`.
     *
     * __NOTE__: Fixed menus will not scroll with the page and will be fixed to
     * the window instead.
     *
     * __Examples for `position = 'document'`:__
     *
     * - There is no parent that creates a relative positioning context e.g.
     *   `position: relative`, `position: absolute`, `transform: translate(x, y)`,
     *   etc.
     * - You put the effort into hoisting the menu to the top of the DOM like the
     *   end of the `<body>` to render over everything or in a top-layer.
     * - You are reusing a single `md-menu` element that dynamically renders
     *   content.
     *
     * __Examples for `position = 'popover'`:__
     *
     * - Your browser supports `popover`.
     * - Most cases. Once popover is in browsers, this will become the default.
     */
    this.positioning = 'absolute'
    /**
     * Skips the opening and closing animations.
     */
    this.quick = false
    /**
     * Displays overflow content like a submenu. Not required in most cases when
     * using `positioning="popover"`.
     *
     * __NOTE__: This may cause adverse effects if you set
     * `md-menu {max-height:...}`
     * and have items overflowing items in the "y" direction.
     */
    this.hasOverflow = false
    /**
     * Opens the menu and makes it visible. Alternative to the `.show()` and
     * `.close()` methods
     */
    this.open = false
    /**
     * Offsets the menu's inline alignment from the anchor by the given number in
     * pixels. This value is direction aware and will follow the LTR / RTL
     * direction.
     *
     * e.g. LTR: positive -> right, negative -> left
     *      RTL: positive -> left, negative -> right
     */
    this.xOffset = 0
    /**
     * Offsets the menu's block alignment from the anchor by the given number in
     * pixels.
     *
     * e.g. positive -> down, negative -> up
     */
    this.yOffset = 0
    /**
     * The max time between the keystrokes of the typeahead menu behavior before
     * it clears the typeahead buffer.
     */
    this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME
    /**
     * The corner of the anchor which to align the menu in the standard logical
     * property style of <block>-<inline> e.g. `'end-start'`.
     *
     * NOTE: This value may not be respected by the menu positioning algorithm
     * if the menu would render outisde the viewport.
     */
    this.anchorCorner = Corner.END_START
    /**
     * The corner of the menu which to align the anchor in the standard logical
     * property style of <block>-<inline> e.g. `'start-start'`.
     *
     * NOTE: This value may not be respected by the menu positioning algorithm
     * if the menu would render outisde the viewport.
     */
    this.menuCorner = Corner.START_START
    /**
     * Keeps the user clicks outside the menu.
     *
     * NOTE: clicking outside may still cause focusout to close the menu so see
     * `stayOpenOnFocusout`.
     */
    this.stayOpenOnOutsideClick = false
    /**
     * Keeps the menu open when focus leaves the menu's composed subtree.
     *
     * NOTE: Focusout behavior will stop propagation of the focusout event. Set
     * this property to true to opt-out of menu's focusout handling altogether.
     */
    this.stayOpenOnFocusout = false
    /**
     * After closing, does not restore focus to the last focused element before
     * the menu was opened.
     */
    this.skipRestoreFocus = false
    /**
     * The element that should be focused by default once opened.
     *
     * NOTE: When setting default focus to 'LIST_ROOT', remember to change
     * `tabindex` to `0` and change md-menu's display to something other than
     * `display: contents` when necessary.
     */
    this.defaultFocus = FocusState.FIRST_ITEM
    /**
     * Turns off navigation wrapping. By default, navigating past the end of the
     * menu items will wrap focus back to the beginning and vice versa. Use this
     * for ARIA patterns that do not wrap focus, like combobox.
     */
    this.noNavigationWrap = false
    this.typeaheadActive = true
    /**
     * Whether or not the current menu is a submenu and should not handle specific
     * navigation keys.
     *
     * @export
     */
    this.isSubmenu = false
    /**
     * The event path of the last window pointerdown event.
     */
    this.pointerPath = []
    /**
     * Whether or not the menu is repositoining due to window / document resize
     */
    this.isRepositioning = false
    this.openCloseAnimationSignal = createAnimationSignal()
    this.listController = new ListController({
      isItem: (maybeItem) => {
        return maybeItem.hasAttribute('md-menu-item')
      },
      getPossibleItems: () => this.slotItems,
      isRtl: () => getComputedStyle(this).direction === 'rtl',
      deactivateItem: (item) => {
        item.selected = false
        item.tabIndex = -1
      },
      activateItem: (item) => {
        item.selected = true
        item.tabIndex = 0
      },
      isNavigableKey: (key) => {
        if (!this.isSubmenu) {
          return menuNavKeys.has(key)
        }
        const isRtl = getComputedStyle(this).direction === 'rtl'
        // we want md-submenu to handle the submenu's left/right arrow exit
        // key so it can close the menu instead of navigate the list.
        // Therefore we need to include all keys but left/right arrow close
        // key
        const arrowOpen = isRtl
          ? NavigableKeys.ArrowLeft
          : NavigableKeys.ArrowRight
        if (key === arrowOpen) {
          return true
        }
        return submenuNavKeys.has(key)
      },
      wrapNavigation: () => !this.noNavigationWrap
    })
    /**
     * The element that was focused before the menu opened.
     */
    this.lastFocusedElement = null
    /**
     * Handles typeahead navigation through the menu.
     */
    this.typeaheadController = new TypeaheadController(() => {
      return {
        getItems: () => this.items,
        typeaheadBufferTime: this.typeaheadDelay,
        active: this.typeaheadActive
      }
    })
    this.currentAnchorElement = null
    this.internals =
      // Cast needed for closure
      this.attachInternals()
    /**
     * Handles positioning the surface and aligning it to the anchor as well as
     * keeping it in the viewport.
     */
    this.menuPositionController = new SurfacePositionController(this, () => {
      return {
        anchorCorner: this.anchorCorner,
        surfaceCorner: this.menuCorner,
        surfaceEl: this.surfaceEl,
        anchorEl: this.anchorElement,
        positioning:
          this.positioning === 'popover' ? 'document' : this.positioning,
        isOpen: this.open,
        xOffset: this.xOffset,
        yOffset: this.yOffset,
        onOpen: this.onOpened,
        beforeClose: this.beforeClose,
        onClose: this.onClosed,
        // We can't resize components that have overflow like menus with
        // submenus because the overflow-y will show menu items / content
        // outside the bounds of the menu. Popover API fixes this because each
        // submenu is hoisted to the top-layer and are not considered overflow
        // content.
        repositionStrategy:
          this.hasOverflow && this.positioning !== 'popover' ? 'move' : 'resize'
      }
    })
    this.onWindowResize = () => {
      if (
        this.isRepositioning ||
        (this.positioning !== 'document' &&
          this.positioning !== 'fixed' &&
          this.positioning !== 'popover')
      ) {
        return
      }
      this.isRepositioning = true
      this.reposition()
      this.isRepositioning = false
    }
    this.handleFocusout = async (event) => {
      const anchorEl = this.anchorElement
      // Do not close if we focused out by clicking on the anchor element. We
      // can't assume anchor buttons can be the related target because of iOS does
      // not focus buttons.
      if (
        this.stayOpenOnFocusout ||
        !this.open ||
        this.pointerPath.includes(anchorEl)
      ) {
        return
      }
      if (event.relatedTarget) {
        // Don't close the menu if we are switching focus between menu,
        // md-menu-item, and md-list or if the anchor was click focused, but check
        // if length of pointerPath is 0 because that means something was at least
        // clicked (shift+tab case).
        if (
          isElementInSubtree(event.relatedTarget, this) ||
          (this.pointerPath.length !== 0 &&
            isElementInSubtree(event.relatedTarget, anchorEl))
        ) {
          return
        }
      } else if (this.pointerPath.includes(this)) {
        // If menu tabindex == -1 and the user clicks on the menu or a divider, we
        // want to keep the menu open.
        return
      }
      const oldRestoreFocus = this.skipRestoreFocus
      // allow focus to continue to the next focused object rather than returning
      this.skipRestoreFocus = true
      this.close()
      // await for close
      await this.updateComplete
      // return to previous behavior
      this.skipRestoreFocus = oldRestoreFocus
    }
    /**
     * Saves the last focused element focuses the new element based on
     * `defaultFocus`, and animates open.
     */
    this.onOpened = async () => {
      this.lastFocusedElement = getFocusedElement()
      const items = this.items
      const activeItemRecord = getActiveItem(items)
      if (activeItemRecord && this.defaultFocus !== FocusState.NONE) {
        activeItemRecord.item.tabIndex = -1
      }
      let animationAborted = !this.quick
      if (this.quick) {
        this.dispatchEvent(new Event('opening'))
      } else {
        animationAborted = !!(await this.animateOpen())
      }
      // This must come after the opening animation or else it may focus one of
      // the items before the animation has begun and causes the list to slide
      // (block-padding-of-the-menu)px at the end of the animation
      switch (this.defaultFocus) {
        case FocusState.FIRST_ITEM:
          const first = getFirstActivatableItem(items)
          if (first) {
            first.tabIndex = 0
            first.focus()
            await first.updateComplete
          }
          break
        case FocusState.LAST_ITEM:
          const last = getLastActivatableItem(items)
          if (last) {
            last.tabIndex = 0
            last.focus()
            await last.updateComplete
          }
          break
        case FocusState.LIST_ROOT:
          this.focus()
          break
        default:
        case FocusState.NONE:
          // Do nothing.
          break
      }
      if (!animationAborted) {
        this.dispatchEvent(new Event('opened'))
      }
    }
    /**
     * Animates closed.
     */
    this.beforeClose = async () => {
      this.open = false
      if (!this.skipRestoreFocus) {
        this.lastFocusedElement?.focus?.()
      }
      if (!this.quick) {
        await this.animateClose()
      }
    }
    /**
     * Focuses the last focused element.
     */
    this.onClosed = () => {
      if (this.quick) {
        this.dispatchEvent(new Event('closing'))
        this.dispatchEvent(new Event('closed'))
      }
    }
    this.onWindowPointerdown = (event) => {
      this.pointerPath = event.composedPath()
    }
    /**
     * We cannot listen to window click because Safari on iOS will not bubble a
     * click event on window if the item clicked is not a "clickable" item such as
     * <body>
     */
    this.onDocumentClick = (event) => {
      if (!this.open) {
        return
      }
      const path = event.composedPath()
      if (
        !this.stayOpenOnOutsideClick &&
        !path.includes(this) &&
        !path.includes(this.anchorElement)
      ) {
        this.open = false
      }
    }
    {
      this.internals.role = 'menu'
      this.addEventListener('keydown', this.handleKeydown)
      // Capture so that we can grab the event before it reaches the menu item
      // istelf. Specifically useful for the case where typeahead encounters a
      // space and we don't want the menu item to close the menu.
      this.addEventListener('keydown', this.captureKeydown, { capture: true })
      this.addEventListener('focusout', this.handleFocusout)
    }
  }
  /**
   * The menu items associated with this menu. The items must be `MenuItem`s and
   * have both the `md-menu-item` and `md-list-item` attributes.
   */
  get items() {
    return this.listController.items
  }
  willUpdate(changed) {
    if (!changed.has('open')) {
      return
    }
    if (this.open) {
      this.removeAttribute('aria-hidden')
      return
    }
    this.setAttribute('aria-hidden', 'true')
  }
  update(changed) {
    if (changed.has('open')) {
      if (this.open) {
        this.setUpGlobalEventListeners()
      } else {
        this.cleanUpGlobalEventListeners()
      }
    }
    // Firefox does not support popover. Fall-back to using fixed.
    if (
      changed.has('positioning') &&
      this.positioning === 'popover' &&
      // type required for Google JS conformance
      !this.showPopover
    ) {
      this.positioning = 'fixed'
    }
    super.update(changed)
  }
  connectedCallback() {
    super.connectedCallback()
    if (this.open) {
      this.setUpGlobalEventListeners()
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback()
    this.cleanUpGlobalEventListeners()
  }
  render() {
    return this.renderSurface()
  }
  /**
   * Renders the positionable surface element and its contents.
   */
  renderSurface() {
    return x`
      <div
        class="menu ${e$1(this.getSurfaceClasses())}"
        style=${o(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning === 'popover' ? 'manual' : T}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `
  }
  /**
   * Renders the menu items' slot
   */
  renderMenuItems() {
    return x`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`
  }
  /**
   * Renders the elevation component.
   */
  renderElevation() {
    return x`<md-elevation part="elevation"></md-elevation>`
  }
  getSurfaceClasses() {
    return {
      open: this.open,
      fixed: this.positioning === 'fixed',
      'has-overflow': this.hasOverflow
    }
  }
  captureKeydown(event) {
    if (
      event.target === this &&
      !event.defaultPrevented &&
      isClosableKey(event.code)
    ) {
      event.preventDefault()
      this.close()
    }
    this.typeaheadController.onKeydown(event)
  }
  /**
   * Performs the opening animation:
   *
   * https://direct.googleplex.com/#/spec/295000003+271060003
   *
   * @return A promise that resolve to `true` if the animation was aborted,
   *     `false` if it was not aborted.
   */
  async animateOpen() {
    const surfaceEl = this.surfaceEl
    const slotEl = this.slotEl
    if (!surfaceEl || !slotEl) return true
    const openDirection = this.openDirection
    this.dispatchEvent(new Event('opening'))
    // needs to be imperative because we don't want to mix animation and Lit
    // render timing
    surfaceEl.classList.toggle('animating', true)
    const signal = this.openCloseAnimationSignal.start()
    const height = surfaceEl.offsetHeight
    const openingUpwards = openDirection === 'UP'
    const children = this.items
    const FULL_DURATION = 500
    const SURFACE_OPACITY_DURATION = 50
    const ITEM_OPACITY_DURATION = 250
    // We want to fit every child fade-in animation within the full duration of
    // the animation.
    const DELAY_BETWEEN_ITEMS =
      (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length
    const surfaceHeightAnimation = surfaceEl.animate(
      [{ height: '0px' }, { height: `${height}px` }],
      {
        duration: FULL_DURATION,
        easing: EASING.EMPHASIZED
      }
    )
    // When we are opening upwards, we want to make sure the last item is always
    // in view, so we need to translate it upwards the opposite direction of the
    // height animation
    const upPositionCorrectionAnimation = slotEl.animate(
      [
        { transform: openingUpwards ? `translateY(-${height}px)` : '' },
        { transform: '' }
      ],
      { duration: FULL_DURATION, easing: EASING.EMPHASIZED }
    )
    const surfaceOpacityAnimation = surfaceEl.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      SURFACE_OPACITY_DURATION
    )
    const childrenAnimations = []
    for (let i = 0; i < children.length; i++) {
      // If we are animating upwards, then reverse the children list.
      const directionalIndex = openingUpwards ? children.length - 1 - i : i
      const child = children[directionalIndex]
      const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: ITEM_OPACITY_DURATION,
        delay: DELAY_BETWEEN_ITEMS * i
      })
      // Make them all initially hidden and then clean up at the end of each
      // animation.
      child.classList.toggle('md-menu-hidden', true)
      animation.addEventListener('finish', () => {
        child.classList.toggle('md-menu-hidden', false)
      })
      childrenAnimations.push([child, animation])
    }
    let resolveAnimation = (value) => {}
    const animationFinished = new Promise((resolve) => {
      resolveAnimation = resolve
    })
    signal.addEventListener('abort', () => {
      surfaceHeightAnimation.cancel()
      upPositionCorrectionAnimation.cancel()
      surfaceOpacityAnimation.cancel()
      childrenAnimations.forEach(([child, animation]) => {
        child.classList.toggle('md-menu-hidden', false)
        animation.cancel()
      })
      resolveAnimation(true)
    })
    surfaceHeightAnimation.addEventListener('finish', () => {
      surfaceEl.classList.toggle('animating', false)
      this.openCloseAnimationSignal.finish()
      resolveAnimation(false)
    })
    return await animationFinished
  }
  /**
   * Performs the closing animation:
   *
   * https://direct.googleplex.com/#/spec/295000003+271060003
   */
  animateClose() {
    let resolve
    let reject
    // This promise blocks the surface position controller from setting
    // display: none on the surface which will interfere with this animation.
    const animationEnded = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })
    const surfaceEl = this.surfaceEl
    const slotEl = this.slotEl
    if (!surfaceEl || !slotEl) {
      reject()
      return animationEnded
    }
    const openDirection = this.openDirection
    const closingDownwards = openDirection === 'UP'
    this.dispatchEvent(new Event('closing'))
    // needs to be imperative because we don't want to mix animation and Lit
    // render timing
    surfaceEl.classList.toggle('animating', true)
    const signal = this.openCloseAnimationSignal.start()
    const height = surfaceEl.offsetHeight
    const children = this.items
    const FULL_DURATION = 150
    const SURFACE_OPACITY_DURATION = 50
    // The surface fades away at the very end
    const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION
    const ITEM_OPACITY_DURATION = 50
    const ITEM_OPACITY_INITIAL_DELAY = 50
    const END_HEIGHT_PERCENTAGE = 0.35
    // We want to fit every child fade-out animation within the full duration of
    // the animation.
    const DELAY_BETWEEN_ITEMS =
      (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) /
      children.length
    // The mock has the animation shrink to 35%
    const surfaceHeightAnimation = surfaceEl.animate(
      [
        { height: `${height}px` },
        { height: `${height * END_HEIGHT_PERCENTAGE}px` }
      ],
      {
        duration: FULL_DURATION,
        easing: EASING.EMPHASIZED_ACCELERATE
      }
    )
    // When we are closing downwards, we want to make sure the last item is
    // always in view, so we need to translate it upwards the opposite direction
    // of the height animation
    const downPositionCorrectionAnimation = slotEl.animate(
      [
        { transform: '' },
        {
          transform: closingDownwards
            ? `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)`
            : ''
        }
      ],
      { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE }
    )
    const surfaceOpacityAnimation = surfaceEl.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY }
    )
    const childrenAnimations = []
    for (let i = 0; i < children.length; i++) {
      // If the animation is closing upwards, then reverse the list of
      // children so that we animate in the opposite direction.
      const directionalIndex = closingDownwards ? i : children.length - 1 - i
      const child = children[directionalIndex]
      const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: ITEM_OPACITY_DURATION,
        delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i
      })
      // Make sure the items stay hidden at the end of each child animation.
      // We clean this up at the end of the overall animation.
      animation.addEventListener('finish', () => {
        child.classList.toggle('md-menu-hidden', true)
      })
      childrenAnimations.push([child, animation])
    }
    signal.addEventListener('abort', () => {
      surfaceHeightAnimation.cancel()
      downPositionCorrectionAnimation.cancel()
      surfaceOpacityAnimation.cancel()
      childrenAnimations.forEach(([child, animation]) => {
        animation.cancel()
        child.classList.toggle('md-menu-hidden', false)
      })
      reject()
    })
    surfaceHeightAnimation.addEventListener('finish', () => {
      surfaceEl.classList.toggle('animating', false)
      childrenAnimations.forEach(([child]) => {
        child.classList.toggle('md-menu-hidden', false)
      })
      this.openCloseAnimationSignal.finish()
      this.dispatchEvent(new Event('closed'))
      resolve(true)
    })
    return animationEnded
  }
  handleKeydown(event) {
    // At any key event, the pointer interaction is done so we need to clear our
    // cached pointerpath. This handles the case where the user clicks on the
    // anchor, and then hits shift+tab
    this.pointerPath = []
    this.listController.handleKeydown(event)
  }
  setUpGlobalEventListeners() {
    document.addEventListener('click', this.onDocumentClick, { capture: true })
    window.addEventListener('pointerdown', this.onWindowPointerdown)
    document.addEventListener('resize', this.onWindowResize, { passive: true })
    window.addEventListener('resize', this.onWindowResize, { passive: true })
  }
  cleanUpGlobalEventListeners() {
    document.removeEventListener('click', this.onDocumentClick, {
      capture: true
    })
    window.removeEventListener('pointerdown', this.onWindowPointerdown)
    document.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('resize', this.onWindowResize)
  }
  onCloseMenu() {
    this.close()
  }
  onDeactivateItems(event) {
    event.stopPropagation()
    this.listController.onDeactivateItems()
  }
  onRequestActivation(event) {
    event.stopPropagation()
    this.listController.onRequestActivation(event)
  }
  handleDeactivateTypeahead(event) {
    // stopPropagation so that this does not deactivate any typeaheads in menus
    // nested above it e.g. md-sub-menu
    event.stopPropagation()
    this.typeaheadActive = false
  }
  handleActivateTypeahead(event) {
    // stopPropagation so that this does not activate any typeaheads in menus
    // nested above it e.g. md-sub-menu
    event.stopPropagation()
    this.typeaheadActive = true
  }
  handleStayOpenOnFocusout(event) {
    event.stopPropagation()
    this.stayOpenOnFocusout = true
  }
  handleCloseOnFocusout(event) {
    event.stopPropagation()
    this.stayOpenOnFocusout = false
  }
  close() {
    this.open = false
    const maybeSubmenu = this.slotItems
    maybeSubmenu.forEach((item) => {
      item.close?.()
    })
  }
  show() {
    this.open = true
  }
  /**
   * Activates the next item in the menu. If at the end of the menu, the first
   * item will be activated.
   *
   * @return The activated menu item or `null` if there are no items.
   */
  activateNextItem() {
    return this.listController.activateNextItem() ?? null
  }
  /**
   * Activates the previous item in the menu. If at the start of the menu, the
   * last item will be activated.
   *
   * @return The activated menu item or `null` if there are no items.
   */
  activatePreviousItem() {
    return this.listController.activatePreviousItem() ?? null
  }
  /**
   * Repositions the menu if it is open.
   *
   * Useful for the case where document or window-positioned menus have their
   * anchors moved while open.
   */
  reposition() {
    if (this.open) {
      this.menuPositionController.position()
    }
  }
}
__decorate([e$5('.menu')], Menu.prototype, 'surfaceEl', void 0)
__decorate([e$5('slot')], Menu.prototype, 'slotEl', void 0)
__decorate([n$5()], Menu.prototype, 'anchor', void 0)
__decorate([n$5()], Menu.prototype, 'positioning', void 0)
__decorate([n$5({ type: Boolean })], Menu.prototype, 'quick', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-overflow' })],
  Menu.prototype,
  'hasOverflow',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Menu.prototype,
  'open',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'x-offset' })],
  Menu.prototype,
  'xOffset',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'y-offset' })],
  Menu.prototype,
  'yOffset',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'typeahead-delay' })],
  Menu.prototype,
  'typeaheadDelay',
  void 0
)
__decorate(
  [n$5({ attribute: 'anchor-corner' })],
  Menu.prototype,
  'anchorCorner',
  void 0
)
__decorate(
  [n$5({ attribute: 'menu-corner' })],
  Menu.prototype,
  'menuCorner',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'stay-open-on-outside-click' })],
  Menu.prototype,
  'stayOpenOnOutsideClick',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'stay-open-on-focusout' })],
  Menu.prototype,
  'stayOpenOnFocusout',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'skip-restore-focus' })],
  Menu.prototype,
  'skipRestoreFocus',
  void 0
)
__decorate(
  [n$5({ attribute: 'default-focus' })],
  Menu.prototype,
  'defaultFocus',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'no-navigation-wrap' })],
  Menu.prototype,
  'noNavigationWrap',
  void 0
)
__decorate([o$4({ flatten: true })], Menu.prototype, 'slotItems', void 0)
__decorate([r$4()], Menu.prototype, 'typeaheadActive', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./menu/internal/menu-styles.css.
const styles$j = i$4`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menus appear when users interact with a button, action, or other control.
 *
 * They can be opened from a variety of elements, most commonly icon buttons,
 * buttons, and text fields.
 *
 * md-menu listens for the `close-menu` and `deselect-items` events.
 *
 * - `close-menu` closes the menu when dispatched from a child element.
 * - `deselect-items` deselects all of its immediate menu-item children.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       id="anchor"
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents.
 *
 *     Additionally, `anchor` ingests an idref which do not pass through shadow
 *     roots. You can also set `.anchorElement` to an element reference if
 *     necessary.
 *   -->
 *   <md-menu anchor="anchor" has-overflow ${ref(menuRef)}>
 *     <md-menu-item headline="This is a headline"></md-menu-item>
 *     <md-sub-menu>
 *       <md-menu-item
 *           slot="item"
 *           headline="this is a submenu item">
 *       </md-menu-item>
 *       <md-menu slot="menu">
 *         <md-menu-item headline="This is an item inside a submenu">
 *         </md-menu-item>
 *       </md-menu>
 *     </md-sub-menu>
 *   </md-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdMenu = class MdMenu extends Menu {}
MdMenu.styles = [styles$j]
MdMenu = __decorate([t$3('md-menu')], MdMenu)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A controller that provides most functionality of an element that implements
 * the MenuItem interface.
 */
class MenuItemController {
  /**
   * @param host The MenuItem in which to attach this controller to.
   * @param config The object that configures this controller's behavior.
   */
  constructor(host, config) {
    this.host = host
    this.internalTypeaheadText = null
    /**
     * Bind this click listener to the interactive element. Handles closing the
     * menu.
     */
    this.onClick = () => {
      if (this.host.keepOpen) return
      this.host.dispatchEvent(
        createDefaultCloseMenuEvent(this.host, {
          kind: CloseReason.CLICK_SELECTION
        })
      )
    }
    /**
     * Bind this click listener to the interactive element. Handles closing the
     * menu.
     */
    this.onKeydown = (event) => {
      // Check if the interactive element is an anchor tag. If so, click it.
      if (this.host.href && event.code === 'Enter') {
        const interactiveElement = this.getInteractiveElement()
        if (interactiveElement instanceof HTMLAnchorElement) {
          interactiveElement.click()
        }
      }
      if (event.defaultPrevented) return
      // If the host has keepOpen = true we should ignore clicks & Space/Enter,
      // however we always maintain the ability to close a menu with a explicit
      // `escape` keypress.
      const keyCode = event.code
      if (this.host.keepOpen && keyCode !== 'Escape') return
      if (isClosableKey(keyCode)) {
        event.preventDefault()
        this.host.dispatchEvent(
          createDefaultCloseMenuEvent(this.host, {
            kind: CloseReason.KEYDOWN,
            key: keyCode
          })
        )
      }
    }
    this.getHeadlineElements = config.getHeadlineElements
    this.getSupportingTextElements = config.getSupportingTextElements
    this.getDefaultElements = config.getDefaultElements
    this.getInteractiveElement = config.getInteractiveElement
    this.host.addController(this)
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot, and if there are
   * no slotted elements into headline, then it checks the _default_ slot, and
   * then the `"supporting-text"` slot if nothing is in _default_.
   */
  get typeaheadText() {
    if (this.internalTypeaheadText !== null) {
      return this.internalTypeaheadText
    }
    const headlineElements = this.getHeadlineElements()
    const textParts = []
    headlineElements.forEach((headlineElement) => {
      if (headlineElement.textContent && headlineElement.textContent.trim()) {
        textParts.push(headlineElement.textContent.trim())
      }
    })
    // If there are no headline elements, check the default slot's text content
    if (textParts.length === 0) {
      this.getDefaultElements().forEach((defaultElement) => {
        if (defaultElement.textContent && defaultElement.textContent.trim()) {
          textParts.push(defaultElement.textContent.trim())
        }
      })
    }
    // If there are no headline nor default slot elements, check the
    //supporting-text slot's text content
    if (textParts.length === 0) {
      this.getSupportingTextElements().forEach((supportingTextElement) => {
        if (
          supportingTextElement.textContent &&
          supportingTextElement.textContent.trim()
        ) {
          textParts.push(supportingTextElement.textContent.trim())
        }
      })
    }
    return textParts.join(' ')
  }
  /**
   * The recommended tag name to render as the list item.
   */
  get tagName() {
    const type = this.host.type
    switch (type) {
      case 'link':
        return 'a'
      case 'button':
        return 'button'
      default:
      case 'menuitem':
      case 'option':
        return 'li'
    }
  }
  /**
   * The recommended role of the menu item.
   */
  get role() {
    return this.host.type === 'option' ? 'option' : 'menuitem'
  }
  hostConnected() {
    this.host.toggleAttribute('md-menu-item', true)
  }
  hostUpdate() {
    if (this.host.href) {
      this.host.type = 'link'
    }
  }
  /**
   * Use to set the typeaheadText when it changes.
   */
  setTypeaheadText(text) {
    this.internalTypeaheadText = text
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires close-menu {CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>}
 * Closes the encapsulating menu on closable interaction. --bubbles --composed
 */
class MenuItemEl extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Disables the item and makes it non-selectable and non-interactive.
     */
    this.disabled = false
    /**
     * Sets the behavior and role of the menu item, defaults to "menuitem".
     */
    this.type = 'menuitem'
    /**
     * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     */
    this.href = ''
    /**
     * Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is
     * set.
     */
    this.target = ''
    /**
     * Keeps the menu open if clicked or keyboard selected.
     */
    this.keepOpen = false
    /**
     * Sets the item in the selected visual state when a submenu is opened.
     */
    this.selected = false
    this.menuItemController = new MenuItemController(this, {
      getHeadlineElements: () => {
        return this.headlineElements
      },
      getSupportingTextElements: () => {
        return this.supportingTextElements
      },
      getDefaultElements: () => {
        return this.defaultElements
      },
      getInteractiveElement: () => this.listItemRoot
    })
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot.
   */
  get typeaheadText() {
    return this.menuItemController.typeaheadText
  }
  set typeaheadText(text) {
    this.menuItemController.setTypeaheadText(text)
  }
  render() {
    return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)
  }
  /**
   * Renders the root list item.
   *
   * @param content the child content of the list item.
   */
  renderListItem(content) {
    const isAnchor = this.type === 'link'
    let tag
    switch (this.menuItemController.tagName) {
      case 'a':
        tag = s`a`
        break
      case 'button':
        tag = s`button`
        break
      default:
      case 'li':
        tag = s`li`
        break
    }
    // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
    // then all are "menuitem" roles for correct announcement.
    const target = isAnchor && !!this.target ? this.target : T
    return n$2`
      <${tag}
        id="item"
        tabindex=${this.disabled && !isAnchor ? -1 : 0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel || T}
        aria-selected=${this.ariaSelected || T}
        aria-checked=${this.ariaChecked || T}
        aria-expanded=${this.ariaExpanded || T}
        aria-haspopup=${this.ariaHasPopup || T}
        class="list-item ${e$1(this.getRenderClasses())}"
        href=${this.href || T}
        target=${target}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${content}</${tag}>
    `
  }
  /**
   * Handles rendering of the ripple element.
   */
  renderRipple() {
    return x` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`
  }
  /**
   * Handles rendering of the focus ring.
   */
  renderFocusRing() {
    return x` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`
  }
  /**
   * Classes applied to the list item root.
   */
  getRenderClasses() {
    return {
      disabled: this.disabled,
      selected: this.selected
    }
  }
  /**
   * Handles rendering the headline and supporting text.
   */
  renderBody() {
    return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `
  }
  focus() {
    // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
    // work programmatically like in FF and select-option
    this.listItemRoot?.focus()
  }
}
;(() => {
  requestUpdateOnAriaChange(MenuItemEl)
})()
/** @nocollapse */
MenuItemEl.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  MenuItemEl.prototype,
  'disabled',
  void 0
)
__decorate([n$5()], MenuItemEl.prototype, 'type', void 0)
__decorate([n$5()], MenuItemEl.prototype, 'href', void 0)
__decorate([n$5()], MenuItemEl.prototype, 'target', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'keep-open' })],
  MenuItemEl.prototype,
  'keepOpen',
  void 0
)
__decorate([n$5({ type: Boolean })], MenuItemEl.prototype, 'selected', void 0)
__decorate([e$5('.list-item')], MenuItemEl.prototype, 'listItemRoot', void 0)
__decorate(
  [o$4({ slot: 'headline' })],
  MenuItemEl.prototype,
  'headlineElements',
  void 0
)
__decorate(
  [o$4({ slot: 'supporting-text' })],
  MenuItemEl.prototype,
  'supportingTextElements',
  void 0
)
__decorate([n$4({ slot: '' })], MenuItemEl.prototype, 'defaultElements', void 0)
__decorate(
  [n$5({ attribute: 'typeahead-text' })],
  MenuItemEl.prototype,
  'typeaheadText',
  null
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./menu/internal/menuitem/menu-item-styles.css.
const styles$i = i$4`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * @final
 * @suppress {visibility}
 */
let MdMenuItem = class MdMenuItem extends MenuItemEl {}
MdMenuItem.styles = [styles$i]
MdMenuItem = __decorate([t$3('md-menu-item')], MdMenuItem)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires deactivate-items {Event} Requests the parent menu to deselect other
 * items when a submenu opens. --bubbles --composed
 * @fires request-activation {Event} Requests the parent to make the slotted item
 * focusable and focus the item. --bubbles --composed
 * @fires deactivate-typeahead {Event} Requests the parent menu to deactivate
 * the typeahead functionality when a submenu opens. --bubbles --composed
 * @fires activate-typeahead {Event} Requests the parent menu to activate the
 * typeahead functionality when a submenu closes. --bubbles --composed
 */
class SubMenu extends s$1 {
  get item() {
    return this.items[0] ?? null
  }
  get menu() {
    return this.menus[0] ?? null
  }
  constructor() {
    super()
    /**
     * The anchorCorner to set on the submenu.
     */
    this.anchorCorner = Corner.START_END
    /**
     * The menuCorner to set on the submenu.
     */
    this.menuCorner = Corner.START_START
    /**
     * The delay between mouseenter and submenu opening.
     */
    this.hoverOpenDelay = 400
    /**
     * The delay between ponterleave and the submenu closing.
     */
    this.hoverCloseDelay = 400
    /**
     * READONLY: self-identifies as a menu item and sets its identifying attribute
     */
    this.isSubMenu = true
    this.previousOpenTimeout = 0
    this.previousCloseTimeout = 0
    /**
     * Starts the default 400ms countdown to open the submenu.
     *
     * NOTE: We explicitly use mouse events and not pointer events because
     * pointer events apply to touch events. And if a user were to tap a
     * sub-menu, it would fire the "pointerenter", "pointerleave", "click" events
     * which would open the menu on click, and then set the timeout to close the
     * menu due to pointerleave.
     */
    this.onMouseenter = () => {
      clearTimeout(this.previousOpenTimeout)
      clearTimeout(this.previousCloseTimeout)
      if (this.menu?.open) return
      // Open synchronously if delay is 0. (screenshot tests infra
      // would never resolve otherwise)
      if (!this.hoverOpenDelay) {
        this.show()
      } else {
        this.previousOpenTimeout = setTimeout(() => {
          this.show()
        }, this.hoverOpenDelay)
      }
    }
    /**
     * Starts the default 400ms countdown to close the submenu.
     *
     * NOTE: We explicitly use mouse events and not pointer events because
     * pointer events apply to touch events. And if a user were to tap a
     * sub-menu, it would fire the "pointerenter", "pointerleave", "click" events
     * which would open the menu on click, and then set the timeout to close the
     * menu due to pointerleave.
     */
    this.onMouseleave = () => {
      clearTimeout(this.previousCloseTimeout)
      clearTimeout(this.previousOpenTimeout)
      // Close synchronously if delay is 0. (screenshot tests infra
      // would never resolve otherwise)
      if (!this.hoverCloseDelay) {
        this.close()
      } else {
        this.previousCloseTimeout = setTimeout(() => {
          this.close()
        }, this.hoverCloseDelay)
      }
    }
    {
      this.addEventListener('mouseenter', this.onMouseenter)
      this.addEventListener('mouseleave', this.onMouseleave)
    }
  }
  render() {
    return x`
      <slot
        name="item"
        @click=${this.onClick}
        @keydown=${this.onKeydown}
        @slotchange=${this.onSlotchange}>
      </slot>
      <slot
        name="menu"
        @keydown=${this.onSubMenuKeydown}
        @close-menu=${this.onCloseSubmenu}
        @slotchange=${this.onSlotchange}>
      </slot>
    `
  }
  firstUpdated() {
    // slotchange is not fired if the contents have been SSRd
    this.onSlotchange()
  }
  /**
   * Shows the submenu.
   */
  async show() {
    const menu = this.menu
    if (!menu || menu.open) return
    // Ensures that we deselect items when the menu closes and reactivate
    // typeahead when the menu closes, so that we do not have dirty state of
    // `sub-menu > menu-item[selected]` when we reopen.
    //
    // This cannot happen in `close()` because the menu may close via other
    // means Additionally, this cannot happen in onCloseSubmenu because
    // `close-menu` may not be called via focusout of outside click and not
    // triggered by an item
    menu.addEventListener(
      'closed',
      () => {
        this.item.ariaExpanded = 'false'
        this.dispatchEvent(createActivateTypeaheadEvent())
        this.dispatchEvent(createDeactivateItemsEvent())
        // aria-hidden required so ChromeVox doesn't announce the closed menu
        menu.ariaHidden = 'true'
      },
      { once: true }
    )
    // Parent menu is `position: absolute` – this creates a new CSS relative
    // positioning context (similar to doing `position: relative`), so the
    // submenu's `<md-menu slot="submenu" positioning="document">` would be
    // wrong even if we change `md-sub-menu` from `position: relative` to
    // `position: static` because the submenu it would still be positioning
    // itself relative to the parent menu.
    if (menu.positioning === 'document') {
      menu.positioning = 'absolute'
    }
    menu.quick = true
    // Submenus are in overflow when not fixed. Can remove once we have native
    // popup support
    menu.hasOverflow = true
    menu.anchorCorner = this.anchorCorner
    menu.menuCorner = this.menuCorner
    menu.anchorElement = this.item
    menu.defaultFocus = 'first-item'
    // aria-hidden management required so ChromeVox doesn't announce the closed
    // menu. Remove it here since we are about to show and focus it.
    menu.removeAttribute('aria-hidden')
    // This is required in the case where we have a leaf menu open and and the
    // user hovers a parent menu's item which is not an md-sub-menu item.
    // If this were set to true, then the menu would close and focus would be
    // lost. That means the focusout event would have a `relatedTarget` of
    // `null` since nothing in the menu would be focused anymore due to the
    // leaf menu closing. restoring focus ensures that we keep focus in the
    // submenu tree.
    menu.skipRestoreFocus = false
    // Menu could already be opened because of mouse interaction
    const menuAlreadyOpen = menu.open
    menu.show()
    this.item.ariaExpanded = 'true'
    this.item.ariaHasPopup = 'menu'
    if (menu.id) {
      this.item.setAttribute('aria-controls', menu.id)
    }
    // Deactivate other items. This can be the case if the user has tabbed
    // around the menu and then mouses over an md-sub-menu.
    this.dispatchEvent(createDeactivateItemsEvent())
    this.dispatchEvent(createDeactivateTypeaheadEvent())
    this.item.selected = true
    // This is the case of mouse hovering when already opened via keyboard or
    // vice versa
    if (!menuAlreadyOpen) {
      let open = (value) => {}
      const opened = new Promise((resolve) => {
        open = resolve
      })
      menu.addEventListener('opened', open, { once: true })
      await opened
    }
  }
  /**
   * Closes the submenu.
   */
  async close() {
    const menu = this.menu
    if (!menu || !menu.open) return
    this.dispatchEvent(createActivateTypeaheadEvent())
    menu.quick = true
    menu.close()
    this.dispatchEvent(createDeactivateItemsEvent())
    let close = (value) => {}
    const closed = new Promise((resolve) => {
      close = resolve
    })
    menu.addEventListener('closed', close, { once: true })
    await closed
  }
  onSlotchange() {
    if (!this.item) {
      return
    }
    // TODO(b/301296618): clean up old aria values on change
    this.item.ariaExpanded = 'false'
    this.item.ariaHasPopup = 'menu'
    if (this.menu?.id) {
      this.item.setAttribute('aria-controls', this.menu.id)
    }
    this.item.keepOpen = true
    const menu = this.menu
    if (!menu) return
    menu.isSubmenu = true
    // Required for ChromeVox to not linearly navigate to the menu while closed
    menu.ariaHidden = 'true'
  }
  onClick() {
    this.show()
  }
  /**
   * On item keydown handles opening the submenu.
   */
  async onKeydown(event) {
    const shouldOpenSubmenu = this.isSubmenuOpenKey(event.code)
    if (event.defaultPrevented) return
    const openedWithLR =
      shouldOpenSubmenu &&
      (NavigableKey.LEFT === event.code || NavigableKey.RIGHT === event.code)
    if (event.code === SelectionKey.SPACE || openedWithLR) {
      // prevent space from scrolling and Left + Right from selecting previous /
      // next items or opening / closing parent menus. Only open the submenu.
      event.preventDefault()
      if (openedWithLR) {
        event.stopPropagation()
      }
    }
    if (!shouldOpenSubmenu) {
      return
    }
    const submenu = this.menu
    if (!submenu) return
    const submenuItems = submenu.items
    const firstActivatableItem = getFirstActivatableItem(submenuItems)
    if (firstActivatableItem) {
      await this.show()
      firstActivatableItem.tabIndex = 0
      firstActivatableItem.focus()
      return
    }
  }
  onCloseSubmenu(event) {
    const { itemPath, reason } = event.detail
    itemPath.push(this.item)
    this.dispatchEvent(createActivateTypeaheadEvent())
    // Escape should only close one menu not all of the menus unlike space or
    // click selection which should close all menus.
    if (
      reason.kind === CloseReason.KEYDOWN &&
      reason.key === KeydownCloseKey.ESCAPE
    ) {
      event.stopPropagation()
      this.item.dispatchEvent(createRequestActivationEvent())
      return
    }
    this.dispatchEvent(createDeactivateItemsEvent())
  }
  async onSubMenuKeydown(event) {
    if (event.defaultPrevented) return
    const { close: shouldClose, keyCode } = this.isSubmenuCloseKey(event.code)
    if (!shouldClose) return
    // Communicate that it's handled so that we don't accidentally close every
    // parent menu. Additionally, we want to isolate things like the typeahead
    // keydowns from bubbling up to the parent menu and confounding things.
    event.preventDefault()
    if (keyCode === NavigableKey.LEFT || keyCode === NavigableKey.RIGHT) {
      // Prevent this from bubbling to parents
      event.stopPropagation()
    }
    await this.close()
    deactivateActiveItem(this.menu.items)
    this.item?.focus()
    this.item.tabIndex = 0
    this.item.focus()
  }
  /**
   * Determines whether the given KeyboardEvent code is one that should open
   * the submenu. This is RTL-aware. By default, left, right, space, or enter.
   *
   * @param code The native KeyboardEvent code.
   * @return Whether or not the key code should open the submenu.
   */
  isSubmenuOpenKey(code) {
    const isRtl = getComputedStyle(this).direction === 'rtl'
    const arrowEnterKey = isRtl ? NavigableKey.LEFT : NavigableKey.RIGHT
    switch (code) {
      case arrowEnterKey:
      case SelectionKey.SPACE:
      case SelectionKey.ENTER:
        return true
      default:
        return false
    }
  }
  /**
   * Determines whether the given KeyboardEvent code is one that should close
   * the submenu. This is RTL-aware. By default right, left, or escape.
   *
   * @param code The native KeyboardEvent code.
   * @return Whether or not the key code should close the submenu.
   */
  isSubmenuCloseKey(code) {
    const isRtl = getComputedStyle(this).direction === 'rtl'
    const arrowEnterKey = isRtl ? NavigableKey.RIGHT : NavigableKey.LEFT
    switch (code) {
      case arrowEnterKey:
      case KeydownCloseKey.ESCAPE:
        return { close: true, keyCode: code }
      default:
        return { close: false }
    }
  }
}
__decorate(
  [n$5({ attribute: 'anchor-corner' })],
  SubMenu.prototype,
  'anchorCorner',
  void 0
)
__decorate(
  [n$5({ attribute: 'menu-corner' })],
  SubMenu.prototype,
  'menuCorner',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'hover-open-delay' })],
  SubMenu.prototype,
  'hoverOpenDelay',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'hover-close-delay' })],
  SubMenu.prototype,
  'hoverCloseDelay',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true, attribute: 'md-sub-menu' })],
  SubMenu.prototype,
  'isSubMenu',
  void 0
)
__decorate(
  [o$4({ slot: 'item', flatten: true })],
  SubMenu.prototype,
  'items',
  void 0
)
__decorate(
  [o$4({ slot: 'menu', flatten: true })],
  SubMenu.prototype,
  'menus',
  void 0
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./menu/internal/submenu/sub-menu-styles.css.
const styles$h = i$4`:host{position:relative;display:flex;flex-direction:column}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `Menu` interface and also have the `md-menu`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * This menu item will open a sub-menu that is slotted in the `submenu` slot.
 * Additionally, the containing menu must either have `has-overflow` or
 * `positioning=fixed` set to `true` in order to display the containing menu
 * properly.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       id="anchor"
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents
 *   -->
 *   <md-menu anchor="anchor" has-overflow ${ref(menuRef)}>
 *     <md-menu-item headline="This is a headline"></md-menu-item>
 *     <md-sub-menu>
 *       <md-menu-item
 *           slot="item"
 *           headline="this is a submenu item">
 *       </md-menu-item>
 *       <md-menu slot="menu">
 *         <md-menu-item headline="This is an item inside a submenu">
 *         </md-menu-item>
 *       </md-menu>
 *     </md-sub-menu>
 *   </md-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdSubMenu = class MdSubMenu extends SubMenu {}
MdSubMenu.styles = [styles$h]
MdSubMenu = __decorate([t$3('md-sub-menu')], MdSubMenu)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A progress component.
 */
class Progress extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Progress to display, a fraction between 0 and `max`.
     */
    this.value = 0
    /**
     * Maximum progress to display, defaults to 1.
     */
    this.max = 1
    /**
     * Whether or not to display indeterminate progress, which gives no indication
     * to how long an activity will take.
     */
    this.indeterminate = false
    /**
     * Whether or not to render indeterminate mode using 4 colors instead of one.
     */
    this.fourColor = false
  }
  render() {
    // Needed for closure conformance
    const { ariaLabel } = this
    return x`
      <div
        class="progress ${e$1(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${ariaLabel || T}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? T : this.value}
        >${this.renderIndicator()}</div
      >
    `
  }
  getRenderClasses() {
    return {
      indeterminate: this.indeterminate,
      'four-color': this.fourColor
    }
  }
}
;(() => {
  requestUpdateOnAriaChange(Progress)
})()
__decorate([n$5({ type: Number })], Progress.prototype, 'value', void 0)
__decorate([n$5({ type: Number })], Progress.prototype, 'max', void 0)
__decorate(
  [n$5({ type: Boolean })],
  Progress.prototype,
  'indeterminate',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'four-color' })],
  Progress.prototype,
  'fourColor',
  void 0
)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A circular progress component.
 */
class CircularProgress extends Progress {
  renderIndicator() {
    if (this.indeterminate) {
      return this.renderIndeterminateContainer()
    }
    return this.renderDeterminateContainer()
  }
  // Determinate mode is rendered with an svg so the progress arc can be
  // easily animated via stroke-dashoffset.
  renderDeterminateContainer() {
    const dashOffset = (1 - this.value / this.max) * 100
    // note, dash-array/offset are relative to Setting `pathLength` but
    // Chrome seems to render this inaccurately and using a large viewbox helps.
    return x`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${dashOffset}></circle>
      </svg>
    `
  }
  // Indeterminate mode rendered with 2 bordered-divs. The borders are
  // clipped into half circles by their containers. The divs are then carefully
  // animated to produce changes to the spinner arc size.
  // This approach has 4.5x the FPS of rendering via svg on Chrome 111.
  // See https://lit.dev/playground/#gist=febb773565272f75408ab06a0eb49746.
  renderIndeterminateContainer() {
    return x` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./progress/internal/circular-progress-styles.css.
const styles$g = i$4`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Circular progress indicators display progress by animating along an
 * invisible circular track in a clockwise direction. They can be applied
 * directly to a surface, such as a button or card.
 *
 * @description
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 *
 * @final
 * @suppress {visibility}
 */
let MdCircularProgress = class MdCircularProgress extends CircularProgress {}
MdCircularProgress.styles = [styles$g]
MdCircularProgress = __decorate(
  [t$3('md-circular-progress')],
  MdCircularProgress
)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A linear progress component.
 */
class LinearProgress extends Progress {
  constructor() {
    super(...arguments)
    /**
     * Buffer amount to display, a fraction between 0 and `max`.
     * If the value is 0 or negative, the buffer is not displayed.
     */
    this.buffer = 0
  }
  // Note, the indeterminate animation is rendered with transform %'s
  // Previously, this was optimized to use px calculated with the resizeObserver
  // due to a now fixed Chrome bug: crbug.com/389359.
  renderIndicator() {
    const progressStyles = {
      transform: `scaleX(${
        (this.indeterminate ? 1 : this.value / this.max) * 100
      }%)`
    }
    const bufferValue = this.buffer ?? 0
    const hasBuffer = bufferValue > 0
    const dotSize =
      this.indeterminate || !hasBuffer ? 1 : bufferValue / this.max
    const dotStyles = {
      transform: `scaleX(${dotSize * 100}%)`
    }
    // Only display dots when visible - this prevents invisible infinite
    // animation.
    const hideDots =
      this.indeterminate ||
      !hasBuffer ||
      bufferValue >= this.max ||
      this.value >= this.max
    return x`
      <div class="dots" ?hidden=${hideDots}></div>
      <div class="inactive-track" style=${o(dotStyles)}></div>
      <div class="bar primary-bar" style=${o(progressStyles)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `
  }
}
__decorate([n$5({ type: Number })], LinearProgress.prototype, 'buffer', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./progress/internal/linear-progress-styles.css.
const styles$f = i$4`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, var(--md-sys-shape-corner-none, 0px));border-radius:var(--_track-shape);display:flex;position:relative;min-width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.dots[hidden]{display:none}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Linear progress indicators display progress by animating along the
 * length of a fixed, visible track.
 *
 * @description
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 *
 * @final
 * @suppress {visibility}
 */
let MdLinearProgress = class MdLinearProgress extends LinearProgress {}
MdLinearProgress.styles = [styles$f]
MdLinearProgress = __decorate([t$3('md-linear-progress')], MdLinearProgress)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A property symbol that indicates whether or not a `Focusable` element can be
 * focused.
 */
const isFocusable = Symbol('isFocusable')
const privateIsFocusable = Symbol('privateIsFocusable')
const externalTabIndex = Symbol('externalTabIndex')
const isUpdatingTabIndex = Symbol('isUpdatingTabIndex')
const updateTabIndex = Symbol('updateTabIndex')
/**
 * Mixes in focusable functionality for a class.
 *
 * Elements can enable and disable their focusability with the `isFocusable`
 * symbol property. Changing `tabIndex` will trigger a lit render, meaning
 * `this.tabIndex` can be used in template expressions.
 *
 * This mixin will preserve externally-set tabindices. If an element turns off
 * focusability, but a user sets `tabindex="0"`, it will still be focusable.
 *
 * To remove user overrides and restore focusability control to the element,
 * remove the `tabindex` attribute.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `Focusable` mixed in.
 */
function mixinFocusable(base) {
  var _a, _b, _c
  class FocusableElement extends base {
    constructor() {
      super(...arguments)
      this[_a] = true
      this[_b] = null
      this[_c] = false
    }
    get [isFocusable]() {
      return this[privateIsFocusable]
    }
    set [isFocusable](value) {
      if (this[isFocusable] === value) {
        return
      }
      this[privateIsFocusable] = value
      this[updateTabIndex]()
    }
    connectedCallback() {
      super.connectedCallback()
      this[updateTabIndex]()
    }
    attributeChangedCallback(name, old, value) {
      if (name !== 'tabindex') {
        super.attributeChangedCallback(name, old, value)
        return
      }
      this.requestUpdate('tabIndex', Number(old ?? -1))
      if (this[isUpdatingTabIndex]) {
        // Not an externally-initiated update.
        return
      }
      if (!this.hasAttribute('tabindex')) {
        // User removed the attribute, can now use internal tabIndex
        this[externalTabIndex] = null
        this[updateTabIndex]()
        return
      }
      this[externalTabIndex] = this.tabIndex
    }
    [((_a = privateIsFocusable),
    (_b = externalTabIndex),
    (_c = isUpdatingTabIndex),
    updateTabIndex)]() {
      const internalTabIndex = this[isFocusable] ? 0 : -1
      const computedTabIndex = this[externalTabIndex] ?? internalTabIndex
      this[isUpdatingTabIndex] = true
      this.tabIndex = computedTabIndex
      this[isUpdatingTabIndex] = false
    }
  }
  __decorate(
    [n$5({ noAccessor: true })],
    FocusableElement.prototype,
    'tabIndex',
    void 0
  )
  return FocusableElement
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A validator that provides constraint validation that emulates
 * `<input type="radio">` validation.
 */
class RadioValidator extends Validator {
  computeValidity(states) {
    if (!this.radioElement) {
      // Lazily create the radio element
      this.radioElement = document.createElement('input')
      this.radioElement.type = 'radio'
      // A name is required for validation to run
      this.radioElement.name = 'group'
    }
    let isRequired = false
    let isChecked = false
    for (const { checked, required } of states) {
      if (required) {
        isRequired = true
      }
      if (checked) {
        isChecked = true
      }
    }
    // Firefox v119 doesn't compute grouped radio validation correctly while
    // they are detached from the DOM, which is why we don't render multiple
    // virtual <input>s. Instead, we can check the required/checked states and
    // grab the i18n'd validation message if the value is missing.
    this.radioElement.checked = isChecked
    this.radioElement.required = isRequired
    return {
      validity: {
        valueMissing: isRequired && !isChecked
      },
      validationMessage: this.radioElement.validationMessage
    }
  }
  equals(prevGroup, nextGroup) {
    if (prevGroup.length !== nextGroup.length) {
      return false
    }
    for (let i = 0; i < prevGroup.length; i++) {
      const prev = prevGroup[i]
      const next = nextGroup[i]
      if (prev.checked !== next.checked || prev.required !== next.required) {
        return false
      }
    }
    return true
  }
  copy(states) {
    // Cast as unknown since typescript does not have enough information to
    // infer that the array always has at least one element.
    return states.map(({ checked, required }) => ({
      checked,
      required
    }))
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A `ReactiveController` that provides root node-scoped single selection for
 * elements, similar to native `<input type="radio">` selection.
 *
 * To use, elements should add the controller and call
 * `selectionController.handleCheckedChange()` in a getter/setter. This must
 * be synchronous to match native behavior.
 *
 * @example
 * const CHECKED = Symbol('checked');
 *
 * class MyToggle extends LitElement {
 *   get checked() { return this[CHECKED]; }
 *   set checked(checked: boolean) {
 *     const oldValue = this.checked;
 *     if (oldValue === checked) {
 *       return;
 *     }
 *
 *     this[CHECKED] = checked;
 *     this.selectionController.handleCheckedChange();
 *     this.requestUpdate('checked', oldValue);
 *   }
 *
 *   [CHECKED] = false;
 *
 *   private selectionController = new SingleSelectionController(this);
 *
 *   constructor() {
 *     super();
 *     this.addController(this.selectionController);
 *   }
 * }
 */
class SingleSelectionController {
  /**
   * All single selection elements in the host element's root with the same
   * `name` attribute, including the host element.
   */
  get controls() {
    const name = this.host.getAttribute('name')
    if (!name || !this.root || !this.host.isConnected) {
      return [this.host]
    }
    // Cast as unknown since there is not enough information for typescript to
    // know that there is always at least one element (the host).
    return Array.from(this.root.querySelectorAll(`[name="${name}"]`))
  }
  constructor(host) {
    this.host = host
    this.focused = false
    this.root = null
    this.handleFocusIn = () => {
      this.focused = true
      this.updateTabIndices()
    }
    this.handleFocusOut = () => {
      this.focused = false
      this.updateTabIndices()
    }
    /**
     * Handles arrow key events from the host. Using the arrow keys will
     * select and check the next or previous sibling with the host's
     * `name` attribute.
     */
    this.handleKeyDown = (event) => {
      const isDown = event.key === 'ArrowDown'
      const isUp = event.key === 'ArrowUp'
      const isLeft = event.key === 'ArrowLeft'
      const isRight = event.key === 'ArrowRight'
      // Ignore non-arrow keys
      if (!isLeft && !isRight && !isDown && !isUp) {
        return
      }
      // Don't try to select another sibling if there aren't any.
      const siblings = this.controls
      if (!siblings.length) {
        return
      }
      // Prevent default interactions on the element for arrow keys,
      // since this controller will introduce new behavior.
      event.preventDefault()
      // Check if moving forwards or backwards
      const isRtl = getComputedStyle(this.host).direction === 'rtl'
      const forwards = isRtl ? isLeft || isDown : isRight || isDown
      const hostIndex = siblings.indexOf(this.host)
      let nextIndex = forwards ? hostIndex + 1 : hostIndex - 1
      // Search for the next sibling that is not disabled to select.
      // If we return to the host index, there is nothing to select.
      while (nextIndex !== hostIndex) {
        if (nextIndex >= siblings.length) {
          // Return to start if moving past the last item.
          nextIndex = 0
        } else if (nextIndex < 0) {
          // Go to end if moving before the first item.
          nextIndex = siblings.length - 1
        }
        // Check if the next sibling is disabled. If so,
        // move the index and continue searching.
        const nextSibling = siblings[nextIndex]
        if (nextSibling.hasAttribute('disabled')) {
          if (forwards) {
            nextIndex++
          } else {
            nextIndex--
          }
          continue
        }
        // Uncheck and remove focusability from other siblings.
        for (const sibling of siblings) {
          if (sibling !== nextSibling) {
            sibling.checked = false
            sibling.tabIndex = -1
            sibling.blur()
          }
        }
        // The next sibling should be checked, focused and dispatch a change event
        nextSibling.checked = true
        nextSibling.tabIndex = 0
        nextSibling.focus()
        // Fire a change event since the change is triggered by a user action.
        // This matches native <input type="radio"> behavior.
        nextSibling.dispatchEvent(new Event('change', { bubbles: true }))
        break
      }
    }
  }
  hostConnected() {
    this.root = this.host.getRootNode()
    this.host.addEventListener('keydown', this.handleKeyDown)
    this.host.addEventListener('focusin', this.handleFocusIn)
    this.host.addEventListener('focusout', this.handleFocusOut)
    if (this.host.checked) {
      // Uncheck other siblings when attached if already checked. This mimics
      // native <input type="radio"> behavior.
      this.uncheckSiblings()
    }
    // Update for the newly added host.
    this.updateTabIndices()
  }
  hostDisconnected() {
    this.host.removeEventListener('keydown', this.handleKeyDown)
    this.host.removeEventListener('focusin', this.handleFocusIn)
    this.host.removeEventListener('focusout', this.handleFocusOut)
    // Update for siblings that are still connected.
    this.updateTabIndices()
    this.root = null
  }
  /**
   * Should be called whenever the host's `checked` property changes
   * synchronously.
   */
  handleCheckedChange() {
    if (!this.host.checked) {
      return
    }
    this.uncheckSiblings()
    this.updateTabIndices()
  }
  uncheckSiblings() {
    for (const sibling of this.controls) {
      if (sibling !== this.host) {
        sibling.checked = false
      }
    }
  }
  /**
   * Updates the `tabindex` of the host and its siblings.
   */
  updateTabIndices() {
    // There are three tabindex states for a group of elements:
    // 1. If any are checked, that element is focusable.
    const siblings = this.controls
    const checkedSibling = siblings.find((sibling) => sibling.checked)
    // 2. If an element is focused, the others are no longer focusable.
    if (checkedSibling || this.focused) {
      const focusable = checkedSibling || this.host
      focusable.tabIndex = 0
      for (const sibling of siblings) {
        if (sibling !== focusable) {
          sibling.tabIndex = -1
        }
      }
      return
    }
    // 3. If none are checked or focused, all are focusable.
    for (const sibling of siblings) {
      sibling.tabIndex = 0
    }
  }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$2
const CHECKED = Symbol('checked')
let maskId = 0
// Separate variable needed for closure.
const radioBaseClass = mixinConstraintValidation(
  mixinFormAssociated(mixinElementInternals(mixinFocusable(s$1)))
)
/**
 * A radio component.
 *
 * @fires input {InputEvent} Dispatched when the value changes from user
 * interaction. --bubbles
 * @fires change {Event} Dispatched when the value changes from user
 * interaction. --bubbles --composed
 */
class Radio extends radioBaseClass {
  /**
   * Whether or not the radio is selected.
   */
  get checked() {
    return this[CHECKED]
  }
  set checked(checked) {
    const wasChecked = this.checked
    if (wasChecked === checked) {
      return
    }
    this[CHECKED] = checked
    this.requestUpdate('checked', wasChecked)
    this.selectionController.handleCheckedChange()
  }
  constructor() {
    super()
    // Unique maskId is required because of a Safari bug that fail to persist
    // reference to the mask. This should be removed once the bug is fixed.
    this.maskId = `cutout${++maskId}`
    this[_a$2] = false
    /**
     * Whether or not the radio is required. If any radio is required in a group,
     * all radios are implicitly required.
     */
    this.required = false
    /**
     * The element value to use in form submission when checked.
     */
    this.value = 'on'
    this.selectionController = new SingleSelectionController(this)
    this.addController(this.selectionController)
    {
      this[internals].role = 'radio'
      this.addEventListener('click', this.handleClick.bind(this))
      this.addEventListener('keydown', this.handleKeydown.bind(this))
    }
  }
  render() {
    const classes = { checked: this.checked }
    return x`
      <div class="container ${e$1(classes)}" aria-hidden="true">
        <md-ripple
          part="ripple"
          .control=${this}
          ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle
            class="outer circle"
            cx="10"
            cy="10"
            r="10"
            mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled} />
      </div>
    `
  }
  updated() {
    this[internals].ariaChecked = String(this.checked)
  }
  async handleClick(event) {
    if (this.disabled) {
      return
    }
    // allow event to propagate to user code after a microtask.
    await 0
    if (event.defaultPrevented) {
      return
    }
    if (isActivationClick(event)) {
      this.focus()
    }
    // Per spec, clicking on a radio input always selects it.
    this.checked = true
    this.dispatchEvent(new Event('change', { bubbles: true }))
    this.dispatchEvent(
      new InputEvent('input', { bubbles: true, composed: true })
    )
  }
  async handleKeydown(event) {
    // allow event to propagate to user code after a microtask.
    await 0
    if (event.key !== ' ' || event.defaultPrevented) {
      return
    }
    this.click()
  }
  [((_a$2 = CHECKED), getFormValue)]() {
    return this.checked ? this.value : null
  }
  [getFormState]() {
    return String(this.checked)
  }
  formResetCallback() {
    // The checked property does not reflect, so the original attribute set by
    // the user is used to determine the default value.
    this.checked = this.hasAttribute('checked')
  }
  formStateRestoreCallback(state) {
    this.checked = state === 'true'
  }
  [createValidator]() {
    return new RadioValidator(() => {
      if (!this.selectionController) {
        // Validation runs on superclass construction, so selection controller
        // might not actually be ready until this class constructs.
        return [this]
      }
      return this.selectionController.controls
    })
  }
  [getValidityAnchor]() {
    return this.container
  }
}
__decorate([n$5({ type: Boolean })], Radio.prototype, 'checked', null)
__decorate([n$5({ type: Boolean })], Radio.prototype, 'required', void 0)
__decorate([n$5()], Radio.prototype, 'value', void 0)
__decorate([e$5('.container')], Radio.prototype, 'container', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./radio/internal/radio-styles.css.
const styles$e = i$4`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Radio buttons allow users to select one option from a set.
 *
 * @description
 * Radio buttons are the recommended way to allow users to make a single
 * selection from a list of options.
 *
 * Only one radio button can be selected at a time.
 *
 * Use radio buttons to:
 * - Select a single option from a set
 * - Expose all available options
 *
 * @final
 * @suppress {visibility}
 */
let MdRadio = class MdRadio extends Radio {}
MdRadio.styles = [styles$e]
MdRadio = __decorate([t$3('md-radio')], MdRadio)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol property used for a callback when validity has been reported.
 */
const onReportValidity = Symbol('onReportValidity')
// Private symbol members, used to avoid name clashing.
const privateCleanupFormListeners = Symbol('privateCleanupFormListeners')
const privateDoNotReportInvalid = Symbol('privateDoNotReportInvalid')
const privateIsSelfReportingValidity = Symbol('privateIsSelfReportingValidity')
const privateCallOnReportValidity = Symbol('privateCallOnReportValidity')
/**
 * Mixes in a callback for constraint validation when validity should be
 * styled and reported to the user.
 *
 * This is commonly used in text-field-like controls that display error styles
 * and error messages.
 *
 * @example
 * ```ts
 * const baseClass = mixinOnReportValidity(
 *   mixinConstraintValidation(
 *     mixinFormAssociated(mixinElementInternals(LitElement)),
 *   ),
 * );
 *
 * class MyField extends baseClass {
 *   \@property({type: Boolean}) error = false;
 *   \@property() errorMessage = '';
 *
 *   [onReportValidity](invalidEvent: Event | null) {
 *     this.error = !!invalidEvent;
 *     this.errorMessage = this.validationMessage;
 *
 *     // Optionally prevent platform popup from displaying
 *     invalidEvent?.preventDefault();
 *   }
 * }
 * ```
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `OnReportValidity` mixed in.
 */
function mixinOnReportValidity(base) {
  var _a, _b, _c
  class OnReportValidityElement extends base {
    // Mixins must have a constructor with `...args: any[]`
    // tslint:disable-next-line:no-any
    constructor(...args) {
      super(...args)
      /**
       * Used to clean up event listeners when a new form is associated.
       */
      this[_a] = new AbortController()
      /**
       * Used to determine if an invalid event should report validity. Invalid
       * events from `checkValidity()` do not trigger reporting.
       */
      this[_b] = false
      /**
       * Used to determine if the control is reporting validity from itself, or
       * if a `<form>` is causing the validity report. Forms have different
       * control focusing behavior.
       */
      this[_c] = false
      this.addEventListener(
        'invalid',
        (invalidEvent) => {
          // Listen for invalid events dispatched by a `<form>` when it tries to
          // submit and the element is invalid. We ignore events dispatched when
          // calling `checkValidity()` as well as untrusted events, since the
          // `reportValidity()` and `<form>`-dispatched events are always
          // trusted.
          if (this[privateDoNotReportInvalid] || !invalidEvent.isTrusted) {
            return
          }
          this.addEventListener(
            'invalid',
            () => {
              // A normal bubbling phase event listener. By adding it here, we
              // ensure it's the last event listener that is called during the
              // bubbling phase.
              this[privateCallOnReportValidity](invalidEvent)
            },
            { once: true }
          )
        },
        {
          // Listen during the capture phase, which will happen before the
          // bubbling phase. That way, we can add a final event listener that
          // will run after other event listeners, and we can check if it was
          // default prevented. This works because invalid does not bubble.
          capture: true
        }
      )
    }
    checkValidity() {
      this[privateDoNotReportInvalid] = true
      const valid = super.checkValidity()
      this[privateDoNotReportInvalid] = false
      return valid
    }
    reportValidity() {
      this[privateIsSelfReportingValidity] = true
      const valid = super.reportValidity()
      // Constructor's invalid listener will handle reporting invalid events.
      if (valid) {
        this[privateCallOnReportValidity](null)
      }
      this[privateIsSelfReportingValidity] = false
      return valid
    }
    [((_a = privateCleanupFormListeners),
    (_b = privateDoNotReportInvalid),
    (_c = privateIsSelfReportingValidity),
    privateCallOnReportValidity)](invalidEvent) {
      // Since invalid events do not bubble to parent listeners, and because
      // our invalid listeners are added lazily after other listeners, we can
      // reliably read `defaultPrevented` synchronously without worrying
      // about waiting for another listener that could cancel it.
      const wasCanceled = invalidEvent?.defaultPrevented
      if (wasCanceled) {
        return
      }
      this[onReportValidity](invalidEvent)
      // If an implementation calls invalidEvent.preventDefault() to stop the
      // platform popup from displaying, focusing is also prevented, so we need
      // to manually focus.
      const implementationCanceledFocus =
        !wasCanceled && invalidEvent?.defaultPrevented
      if (!implementationCanceledFocus) {
        return
      }
      // The control should be focused when:
      // - `control.reportValidity()` is called (self-reporting).
      // - a form is reporting validity for its controls and this is the first
      //   invalid control.
      if (
        this[privateIsSelfReportingValidity] ||
        isFirstInvalidControlInForm(this[internals].form, this)
      ) {
        this.focus()
      }
    }
    [onReportValidity](invalidEvent) {
      throw new Error('Implement [onReportValidity]')
    }
    formAssociatedCallback(form) {
      // can't use super.formAssociatedCallback?.() due to closure
      if (super.formAssociatedCallback) {
        super.formAssociatedCallback(form)
      }
      // Clean up previous form listeners.
      this[privateCleanupFormListeners].abort()
      if (!form) {
        return
      }
      this[privateCleanupFormListeners] = new AbortController()
      // Add a listener that fires when the form runs constraint validation and
      // the control is valid, so that it may remove its error styles.
      //
      // This happens on `form.reportValidity()` and `form.requestSubmit()`
      // (both when the submit fails and passes).
      addFormReportValidListener(
        this,
        form,
        () => {
          this[privateCallOnReportValidity](null)
        },
        this[privateCleanupFormListeners].signal
      )
    }
  }
  return OnReportValidityElement
}
/**
 * Add a listener that fires when a form runs constraint validation on a control
 * and it is valid. This is needed to clear previously invalid styles.
 *
 * @param control The control of the form to listen for valid events.
 * @param form The control's form that can run constraint validation.
 * @param onControlValid A listener that is called when the form runs constraint
 *     validation and the control is valid.
 * @param cleanup A cleanup signal to remove the listener.
 */
function addFormReportValidListener(control, form, onControlValid, cleanup) {
  const validateHooks = getFormValidateHooks(form)
  // When a form validates its controls, check if an invalid event is dispatched
  // on the control. If it is not, then inform the control to report its valid
  // state.
  let controlFiredInvalid = false
  let cleanupInvalidListener
  let isNextSubmitFromHook = false
  validateHooks.addEventListener(
    'before',
    () => {
      isNextSubmitFromHook = true
      cleanupInvalidListener = new AbortController()
      controlFiredInvalid = false
      control.addEventListener(
        'invalid',
        () => {
          controlFiredInvalid = true
        },
        {
          signal: cleanupInvalidListener.signal
        }
      )
    },
    { signal: cleanup }
  )
  validateHooks.addEventListener(
    'after',
    () => {
      isNextSubmitFromHook = false
      cleanupInvalidListener?.abort()
      if (controlFiredInvalid) {
        return
      }
      onControlValid()
    },
    { signal: cleanup }
  )
  // The above hooks handle imperatively submitting the form, but not
  // declaratively submitting the form. This happens when:
  // 1. A non-custom element `<button type="submit">` is clicked.
  // 2. Enter is pressed on a non-custom element text editable `<input>`.
  form.addEventListener(
    'submit',
    () => {
      // This submit was from `form.requestSubmit()`, which already calls the
      // listener.
      if (isNextSubmitFromHook) {
        return
      }
      onControlValid()
    },
    {
      signal: cleanup
    }
  )
  // Note: it is a known limitation that we cannot detect if a form tries to
  // submit declaratively, but fails to do so because an unrelated sibling
  // control failed its constraint validation.
  //
  // Since we cannot detect when that happens, a previously invalid control may
  // not clear its error styling when it becomes valid again.
  //
  // To work around this, call `form.reportValidity()` when submitting a form
  // declaratively. This can be down on the `<button type="submit">`'s click or
  // the text editable `<input>`'s 'Enter' keydown.
}
const FORM_VALIDATE_HOOKS = new WeakMap()
/**
 * Get a hooks `EventTarget` that dispatches 'before' and 'after' events that
 * fire before a form runs constraint validation and immediately after it
 * finishes running constraint validation on its controls.
 *
 * This happens during `form.reportValidity()` and `form.requestSubmit()`.
 *
 * @param form The form to get or set up hooks for.
 * @return A hooks `EventTarget` to add listeners to.
 */
function getFormValidateHooks(form) {
  if (!FORM_VALIDATE_HOOKS.has(form)) {
    // Patch form methods to add event listener hooks. These are needed to react
    // to form behaviors that do not dispatch events, such as a form asking its
    // controls to report their validity.
    //
    // We should only patch the methods once, since multiple controls and other
    // forces may want to patch this method. We cannot reliably clean it up if
    // there are multiple patched and re-patched methods referring holding
    // references to each other.
    //
    // Instead, we never clean up the patch but add and clean up event listeners
    // added to the hooks after the patch.
    const hooks = new EventTarget()
    FORM_VALIDATE_HOOKS.set(form, hooks)
    // Add hooks to support notifying before and after a form has run constraint
    // validation on its controls.
    // Note: `form.submit()` does not run constraint validation per spec.
    for (const methodName of ['reportValidity', 'requestSubmit']) {
      const superMethod = form[methodName]
      form[methodName] = function () {
        hooks.dispatchEvent(new Event('before'))
        const result = Reflect.apply(superMethod, this, arguments)
        hooks.dispatchEvent(new Event('after'))
        return result
      }
    }
  }
  return FORM_VALIDATE_HOOKS.get(form)
}
/**
 * Checks if a control is the first invalid control in a form.
 *
 * @param form The control's form. When `null`, the control doesn't have a form
 *     and the method returns true.
 * @param control The control to check.
 * @return True if there is no form or if the control is the form's first
 *     invalid control.
 */
function isFirstInvalidControlInForm(form, control) {
  if (!form) {
    return true
  }
  let firstInvalidControl
  for (const element of form.elements) {
    if (element.matches(':invalid')) {
      firstInvalidControl = element
      break
    }
  }
  return firstInvalidControl === control
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A validator that provides constraint validation that emulates `<select>`
 * validation.
 */
class SelectValidator extends Validator {
  computeValidity(state) {
    if (!this.selectControl) {
      // Lazily create the platform select
      this.selectControl = document.createElement('select')
    }
    j(x`<option value=${state.value}></option>`, this.selectControl)
    this.selectControl.value = state.value
    this.selectControl.required = state.required
    return {
      validity: this.selectControl.validity,
      validationMessage: this.selectControl.validationMessage
    }
  }
  equals(prev, next) {
    return prev.value === next.value && prev.required === next.required
  }
  copy({ value, required }) {
    return { value, required }
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Given a list of select options, this function will return an array of
 * SelectOptionRecords that are selected.
 *
 * @return An array of SelectOptionRecords describing the options that are
 * selected.
 */
function getSelectedItems(items) {
  const selectedItemRecords = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.selected) {
      selectedItemRecords.push([item, i])
    }
  }
  return selectedItemRecords
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$1
const VALUE = Symbol('value')
// Separate variable needed for closure.
const selectBaseClass = mixinOnReportValidity(
  mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(s$1)))
)
/**
 * @fires change {Event} The native `change` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
 * --bubbles
 * @fires input {InputEvent} The native `input` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * --bubbles --composed
 * @fires opening {Event} Fired when the select's menu is about to open.
 * @fires opened {Event} Fired when the select's menu has finished animations
 * and opened.
 * @fires closing {Event} Fired when the select's menu is about to close.
 * @fires closed {Event} Fired when the select's menu has finished animations
 * and closed.
 */
class Select extends selectBaseClass {
  /**
   * The value of the currently selected option.
   *
   * Note: For SSR, set `[selected]` on the requested option and `displayText`
   * rather than setting `value` setting `value` will incur a DOM query.
   */
  get value() {
    return this[VALUE]
  }
  set value(value) {
    this.lastUserSetValue = value
    this.select(value)
  }
  get options() {
    // NOTE: this does a DOM query.
    return this.menu?.items ?? []
  }
  /**
   * The index of the currently selected option.
   *
   * Note: For SSR, set `[selected]` on the requested option and `displayText`
   * rather than setting `selectedIndex` setting `selectedIndex` will incur a
   * DOM query.
   */
  get selectedIndex() {
    // tslint:disable-next-line:enforce-name-casing
    const [_option, index] = (this.getSelectedOptions() ?? [])[0] ?? []
    return index ?? -1
  }
  set selectedIndex(index) {
    this.lastUserSetSelectedIndex = index
    this.selectIndex(index)
  }
  /**
   * Returns an array of selected options.
   *
   * NOTE: md-select only suppoprts single selection.
   */
  get selectedOptions() {
    return (this.getSelectedOptions() ?? []).map(([option]) => option)
  }
  get hasError() {
    return this.error || this.nativeError
  }
  constructor() {
    super()
    /**
     * Opens the menu synchronously with no animation.
     */
    this.quick = false
    /**
     * Whether or not the select is required.
     */
    this.required = false
    /**
     * The error message that replaces supporting text when `error` is true. If
     * `errorText` is an empty string, then the supporting text will continue to
     * show.
     *
     * This error message overrides the error message displayed by
     * `reportValidity()`.
     */
    this.errorText = ''
    /**
     * The floating label for the field.
     */
    this.label = ''
    /**
     * Conveys additional information below the select, such as how it should
     * be used.
     */
    this.supportingText = ''
    /**
     * Gets or sets whether or not the select is in a visually invalid state.
     *
     * This error state overrides the error state controlled by
     * `reportValidity()`.
     */
    this.error = false
    /**
     * Whether or not the underlying md-menu should be position: fixed to display
     * in a top-level manner, or position: absolute.
     *
     * position:fixed is useful for cases where select is inside of another
     * element with stacking context and hidden overflows such as `md-dialog`.
     */
    this.menuPositioning = 'popover'
    /**
     * Clamps the menu-width to the width of the select.
     */
    this.clampMenuWidth = false
    /**
     * The max time between the keystrokes of the typeahead select / menu behavior
     * before it clears the typeahead buffer.
     */
    this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME
    /**
     * Whether or not the text field has a leading icon. Used for SSR.
     */
    this.hasLeadingIcon = false
    /**
     * Text to display in the field. Only set for SSR.
     */
    this.displayText = ''
    /**
     * Whether the menu should be aligned to the start or the end of the select's
     * textbox.
     */
    this.menuAlign = 'start'
    this[_a$1] = ''
    /**
     * Used for initializing select when the user sets the `value` directly.
     */
    this.lastUserSetValue = null
    /**
     * Used for initializing select when the user sets the `selectedIndex`
     * directly.
     */
    this.lastUserSetSelectedIndex = null
    /**
     * Used for `input` and `change` event change detection.
     */
    this.lastSelectedOption = null
    // tslint:disable-next-line:enforce-name-casing
    this.lastSelectedOptionRecords = []
    /**
     * Whether or not a native error has been reported via `reportValidity()`.
     */
    this.nativeError = false
    /**
     * The validation message displayed from a native error via
     * `reportValidity()`.
     */
    this.nativeErrorText = ''
    this.focused = false
    this.open = false
    this.defaultFocus = FocusState.NONE
    // Have to keep track of previous open because it's state and private and thus
    // cannot be tracked in PropertyValues<this> map.
    this.prevOpen = this.open
    this.selectWidth = 0
    this.addEventListener('focus', this.handleFocus.bind(this))
    this.addEventListener('blur', this.handleBlur.bind(this))
  }
  /**
   * Selects an option given the value of the option, and updates MdSelect's
   * value.
   */
  select(value) {
    const optionToSelect = this.options.find((option) => option.value === value)
    if (optionToSelect) {
      this.selectItem(optionToSelect)
    }
  }
  /**
   * Selects an option given the index of the option, and updates MdSelect's
   * value.
   */
  selectIndex(index) {
    const optionToSelect = this.options[index]
    if (optionToSelect) {
      this.selectItem(optionToSelect)
    }
  }
  /**
   * Reset the select to its default value.
   */
  reset() {
    for (const option of this.options) {
      option.selected = option.hasAttribute('selected')
    }
    this.updateValueAndDisplayText()
    this.nativeError = false
    this.nativeErrorText = ''
  }
  [((_a$1 = VALUE), onReportValidity)](invalidEvent) {
    // Prevent default pop-up behavior.
    invalidEvent?.preventDefault()
    const prevMessage = this.getErrorText()
    this.nativeError = !!invalidEvent
    this.nativeErrorText = this.validationMessage
    if (prevMessage === this.getErrorText()) {
      this.field?.reannounceError()
    }
  }
  update(changed) {
    // In SSR the options will be ready to query, so try to figure out what
    // the value and display text should be.
    if (!this.hasUpdated) {
      this.initUserSelection()
    }
    // We have just opened the menu.
    // We are only able to check for the select's rect in `update()` instead of
    // having to wait for `updated()` because the menu can never be open on
    // first render since it is not settable and Lit SSR does not support click
    // events which would open the menu.
    if (this.prevOpen !== this.open && this.open) {
      const selectRect = this.getBoundingClientRect()
      this.selectWidth = selectRect.width
    }
    this.prevOpen = this.open
    super.update(changed)
  }
  render() {
    return x`
      <span
        class="select ${e$1(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `
  }
  async firstUpdated(changed) {
    await this.menu?.updateComplete
    // If this has been handled on update already due to SSR, try again.
    if (!this.lastSelectedOptionRecords.length) {
      this.initUserSelection()
    }
    // Case for when the DOM is streaming, there are no children, and a child
    // has [selected] set on it, we need to wait for DOM to render something.
    if (
      !this.lastSelectedOptionRecords.length &&
      !o$2 &&
      !this.options.length
    ) {
      setTimeout(() => {
        this.updateValueAndDisplayText()
      })
    }
    super.firstUpdated(changed)
  }
  getRenderClasses() {
    return {
      disabled: this.disabled,
      error: this.error,
      open: this.open
    }
  }
  renderField() {
    return n$2`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-label=${this.ariaLabel || T}
          aria-describedby="description"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`
  }
  renderFieldContent() {
    return [
      this.renderLeadingIcon(),
      this.renderLabel(),
      this.renderTrailingIcon()
    ]
  }
  renderLeadingIcon() {
    return x`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `
  }
  renderTrailingIcon() {
    return x`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `
  }
  renderLabel() {
    // need to render &nbsp; so that line-height can apply and give it a
    // non-zero height
    return x`<div id="label">${this.displayText || x`&nbsp;`}</div>`
  }
  renderMenu() {
    const ariaLabel = this.label || this.ariaLabel
    return x`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${ariaLabel || T}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${o({
          '--__menu-min-width': `${this.selectWidth}px`,
          '--__menu-max-width': this.clampMenuWidth
            ? `${this.selectWidth}px`
            : undefined
        })}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign === 'start' ? 'end-start' : 'end-end'}
        .menuCorner=${this.menuAlign === 'start' ? 'start-start' : 'start-end'}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`
  }
  renderMenuContent() {
    return x`<slot></slot>`
  }
  /**
   * Handles opening the select on keydown and typahead selection when the menu
   * is closed.
   */
  handleKeydown(event) {
    if (this.open || this.disabled || !this.menu) {
      return
    }
    const typeaheadController = this.menu.typeaheadController
    const isOpenKey =
      event.code === 'Space' ||
      event.code === 'ArrowDown' ||
      event.code === 'ArrowUp' ||
      event.code === 'End' ||
      event.code === 'Home' ||
      event.code === 'Enter'
    // Do not open if currently typing ahead because the user may be typing the
    // spacebar to match a word with a space
    if (!typeaheadController.isTypingAhead && isOpenKey) {
      event.preventDefault()
      this.open = true
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/#kbd_label
      switch (event.code) {
        case 'Space':
        case 'ArrowDown':
        case 'Enter':
          // We will handle focusing last selected item in this.handleOpening()
          this.defaultFocus = FocusState.NONE
          break
        case 'End':
          this.defaultFocus = FocusState.LAST_ITEM
          break
        case 'ArrowUp':
        case 'Home':
          this.defaultFocus = FocusState.FIRST_ITEM
          break
      }
      return
    }
    const isPrintableKey = event.key.length === 1
    // Handles typing ahead when the menu is closed by delegating the event to
    // the underlying menu's typeaheadController
    if (isPrintableKey) {
      typeaheadController.onKeydown(event)
      event.preventDefault()
      const { lastActiveRecord } = typeaheadController
      if (!lastActiveRecord) {
        return
      }
      this.labelEl?.setAttribute?.('aria-live', 'polite')
      const hasChanged = this.selectItem(
        lastActiveRecord[TYPEAHEAD_RECORD.ITEM]
      )
      if (hasChanged) {
        this.dispatchInteractionEvents()
      }
    }
  }
  handleClick() {
    this.open = !this.open
  }
  handleFocus() {
    this.focused = true
  }
  handleBlur() {
    this.focused = false
  }
  /**
   * Handles closing the menu when the focus leaves the select's subtree.
   */
  handleFocusout(event) {
    // Don't close the menu if we are switching focus between menu,
    // select-option, and field
    if (event.relatedTarget && isElementInSubtree(event.relatedTarget, this)) {
      return
    }
    this.open = false
  }
  /**
   * Gets a list of all selected select options as a list item record array.
   *
   * @return An array of selected list option records.
   */
  getSelectedOptions() {
    if (!this.menu) {
      this.lastSelectedOptionRecords = []
      return null
    }
    const items = this.menu.items
    this.lastSelectedOptionRecords = getSelectedItems(items)
    return this.lastSelectedOptionRecords
  }
  async getUpdateComplete() {
    await this.menu?.updateComplete
    return super.getUpdateComplete()
  }
  /**
   * Gets the selected options from the DOM, and updates the value and display
   * text to the first selected option's value and headline respectively.
   *
   * @return Whether or not the selected option has changed since last update.
   */
  updateValueAndDisplayText() {
    const selectedOptions = this.getSelectedOptions() ?? []
    // Used to determine whether or not we need to fire an input / change event
    // which fire whenever the option element changes (value or selectedIndex)
    // on user interaction.
    let hasSelectedOptionChanged = false
    if (selectedOptions.length) {
      const [firstSelectedOption] = selectedOptions[0]
      hasSelectedOptionChanged = this.lastSelectedOption !== firstSelectedOption
      this.lastSelectedOption = firstSelectedOption
      this[VALUE] = firstSelectedOption.value
      this.displayText = firstSelectedOption.displayText
    } else {
      hasSelectedOptionChanged = this.lastSelectedOption !== null
      this.lastSelectedOption = null
      this[VALUE] = ''
      this.displayText = ''
    }
    return hasSelectedOptionChanged
  }
  /**
   * Focuses and activates the last selected item upon opening, and resets other
   * active items.
   */
  async handleOpening(e) {
    this.labelEl?.removeAttribute?.('aria-live')
    this.redispatchEvent(e)
    // FocusState.NONE means we want to handle focus ourselves and focus the
    // last selected item.
    if (this.defaultFocus !== FocusState.NONE) {
      return
    }
    const items = this.menu.items
    const activeItem = getActiveItem(items)?.item
    let [selectedItem] = this.lastSelectedOptionRecords[0] ?? [null]
    // This is true if the user keys through the list but clicks out of the menu
    // thus no close-menu event is fired by an item and we can't clean up in
    // handleCloseMenu.
    if (activeItem && activeItem !== selectedItem) {
      activeItem.tabIndex = -1
    }
    // in the case that nothing is selected, focus the first item
    selectedItem = selectedItem ?? items[0]
    if (selectedItem) {
      selectedItem.tabIndex = 0
      selectedItem.focus()
    }
  }
  redispatchEvent(e) {
    redispatchEvent(this, e)
  }
  handleClosed(e) {
    this.open = false
    this.redispatchEvent(e)
  }
  /**
   * Determines the reason for closing, and updates the UI accordingly.
   */
  handleCloseMenu(event) {
    const reason = event.detail.reason
    const item = event.detail.itemPath[0]
    this.open = false
    let hasChanged = false
    if (reason.kind === 'click-selection') {
      hasChanged = this.selectItem(item)
    } else if (reason.kind === 'keydown' && isSelectableKey(reason.key)) {
      hasChanged = this.selectItem(item)
    } else {
      // This can happen on ESC being pressed
      item.tabIndex = -1
      item.blur()
    }
    // Dispatch interaction events since selection has been made via keyboard
    // or mouse.
    if (hasChanged) {
      this.dispatchInteractionEvents()
    }
  }
  /**
   * Selects a given option, deselects other options, and updates the UI.
   *
   * @return Whether the last selected option has changed.
   */
  selectItem(item) {
    const selectedOptions = this.getSelectedOptions() ?? []
    selectedOptions.forEach(([option]) => {
      if (item !== option) {
        option.selected = false
      }
    })
    item.selected = true
    return this.updateValueAndDisplayText()
  }
  /**
   * Handles updating selection when an option element requests selection via
   * property / attribute change.
   */
  handleRequestSelection(event) {
    const requestingOptionEl = event.target
    // No-op if this item is already selected.
    if (
      this.lastSelectedOptionRecords.some(
        ([option]) => option === requestingOptionEl
      )
    ) {
      return
    }
    this.selectItem(requestingOptionEl)
  }
  /**
   * Handles updating selection when an option element requests deselection via
   * property / attribute change.
   */
  handleRequestDeselection(event) {
    const requestingOptionEl = event.target
    // No-op if this item is not even in the list of tracked selected items.
    if (
      !this.lastSelectedOptionRecords.some(
        ([option]) => option === requestingOptionEl
      )
    ) {
      return
    }
    this.updateValueAndDisplayText()
  }
  /**
   * Attempts to initialize the selected option from user-settable values like
   * SSR, setting `value`, or `selectedIndex` at startup.
   */
  initUserSelection() {
    // User has set `.value` directly, but internals have not yet booted up.
    if (this.lastUserSetValue && !this.lastSelectedOptionRecords.length) {
      this.select(this.lastUserSetValue)
      // User has set `.selectedIndex` directly, but internals have not yet
      // booted up.
    } else if (
      this.lastUserSetSelectedIndex !== null &&
      !this.lastSelectedOptionRecords.length
    ) {
      this.selectIndex(this.lastUserSetSelectedIndex)
      // Regular boot up!
    } else {
      this.updateValueAndDisplayText()
    }
  }
  handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0
  }
  /**
   * Dispatches the `input` and `change` events.
   */
  dispatchInteractionEvents() {
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText
  }
  [getFormValue]() {
    return this.value
  }
  formResetCallback() {
    this.reset()
  }
  formStateRestoreCallback(state) {
    this.value = state
  }
  click() {
    this.field?.click()
  }
  [createValidator]() {
    return new SelectValidator(() => this)
  }
  [getValidityAnchor]() {
    return this.field
  }
}
;(() => {
  requestUpdateOnAriaChange(Select)
})()
/** @nocollapse */
Select.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate([n$5({ type: Boolean })], Select.prototype, 'quick', void 0)
__decorate([n$5({ type: Boolean })], Select.prototype, 'required', void 0)
__decorate(
  [n$5({ type: String, attribute: 'error-text' })],
  Select.prototype,
  'errorText',
  void 0
)
__decorate([n$5()], Select.prototype, 'label', void 0)
__decorate(
  [n$5({ type: String, attribute: 'supporting-text' })],
  Select.prototype,
  'supportingText',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Select.prototype,
  'error',
  void 0
)
__decorate(
  [n$5({ attribute: 'menu-positioning' })],
  Select.prototype,
  'menuPositioning',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'clamp-menu-width' })],
  Select.prototype,
  'clampMenuWidth',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'typeahead-delay' })],
  Select.prototype,
  'typeaheadDelay',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-leading-icon' })],
  Select.prototype,
  'hasLeadingIcon',
  void 0
)
__decorate(
  [n$5({ attribute: 'display-text' })],
  Select.prototype,
  'displayText',
  void 0
)
__decorate(
  [n$5({ attribute: 'menu-align' })],
  Select.prototype,
  'menuAlign',
  void 0
)
__decorate([n$5()], Select.prototype, 'value', null)
__decorate(
  [n$5({ type: Number, attribute: 'selected-index' })],
  Select.prototype,
  'selectedIndex',
  null
)
__decorate([r$4()], Select.prototype, 'nativeError', void 0)
__decorate([r$4()], Select.prototype, 'nativeErrorText', void 0)
__decorate([r$4()], Select.prototype, 'focused', void 0)
__decorate([r$4()], Select.prototype, 'open', void 0)
__decorate([r$4()], Select.prototype, 'defaultFocus', void 0)
__decorate([e$5('.field')], Select.prototype, 'field', void 0)
__decorate([e$5('md-menu')], Select.prototype, 'menu', void 0)
__decorate([e$5('#label')], Select.prototype, 'labelEl', void 0)
__decorate(
  [o$4({ slot: 'leading-icon', flatten: true })],
  Select.prototype,
  'leadingIcons',
  void 0
)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class FilledSelect extends Select {
  constructor() {
    super(...arguments)
    this.fieldTag = s`md-filled-field`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./select/internal/filled-select-styles.css.
const styles$d = i$4`:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 3px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-filled-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-filled-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-filled-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-filled-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-filled-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-filled-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-filled-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 24px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-filled-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-filled-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-filled-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-filled-select-text-field-container-shape-start-start, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-filled-select-text-field-container-shape-start-end, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-filled-select-text-field-container-shape-end-end, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_text-field-container-shape-end-start: var(--md-filled-select-text-field-container-shape-end-start, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-font: var(--_text-field-input-text-font);--md-filled-field-content-line-height: var(--_text-field-input-text-line-height);--md-filled-field-content-size: var(--_text-field-input-text-size);--md-filled-field-content-weight: var(--_text-field-input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-font: var(--_text-field-label-text-font);--md-filled-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-size: var(--_text-field-label-text-size);--md-filled-field-label-text-weight: var(--_text-field-label-text-weight);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-filled-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./select/internal/shared-styles.css.
const styles$c = i$4`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "filled"
 * variant.
 *
 * @example
 * ```html
 * <md-filled-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-filled-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledSelect = class MdFilledSelect extends FilledSelect {}
MdFilledSelect.styles = [styles$c, styles$d]
MdFilledSelect = __decorate([t$3('md-filled-select')], MdFilledSelect)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class OutlinedSelect extends Select {
  constructor() {
    super(...arguments)
    this.fieldTag = s`md-outlined-field`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./select/internal/outlined-select-styles.css.
const styles$b = i$4`:host{--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-outlined-select-text-field-container-shape-start-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-outlined-select-text-field-container-shape-start-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-outlined-select-text-field-container-shape-end-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-start: var(--md-outlined-select-text-field-container-shape-end-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "outlined"
 * variant.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedSelect = class MdOutlinedSelect extends OutlinedSelect {}
MdOutlinedSelect.styles = [styles$c, styles$b]
MdOutlinedSelect = __decorate([t$3('md-outlined-select')], MdOutlinedSelect)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Creates an event fired by a SelectOption to request selection from md-select.
 * Typically fired after `selected` changes from `false` to `true`.
 */
function createRequestSelectionEvent() {
  return new Event('request-selection', {
    bubbles: true,
    composed: true
  })
}
/**
 * Creates an event fired by a SelectOption to request deselection from
 * md-select. Typically fired after `selected` changes from `true` to `false`.
 */
function createRequestDeselectionEvent() {
  return new Event('request-deselection', {
    bubbles: true,
    composed: true
  })
}
/**
 * A controller that provides most functionality and md-select compatibility for
 * an element that implements the SelectOption interface.
 */
class SelectOptionController {
  /**
   * The recommended role of the select option.
   */
  get role() {
    return this.menuItemController.role
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot, and if there are
   * no slotted elements into headline, then it checks the _default_ slot, and
   * then the `"supporting-text"` slot if nothing is in _default_.
   */
  get typeaheadText() {
    return this.menuItemController.typeaheadText
  }
  setTypeaheadText(text) {
    this.menuItemController.setTypeaheadText(text)
  }
  /**
   * The text that is displayed in the select field when selected. If not set,
   * defaults to the textContent of the item slotted into the `"headline"` slot,
   * and if there are no slotted elements into headline, then it checks the
   * _default_ slot, and then the `"supporting-text"` slot if nothing is in
   * _default_.
   */
  get displayText() {
    if (this.internalDisplayText !== null) {
      return this.internalDisplayText
    }
    return this.menuItemController.typeaheadText
  }
  setDisplayText(text) {
    this.internalDisplayText = text
  }
  /**
   * @param host The SelectOption in which to attach this controller to.
   * @param config The object that configures this controller's behavior.
   */
  constructor(host, config) {
    this.host = host
    this.internalDisplayText = null
    this.lastSelected = this.host.selected
    this.firstUpdate = true
    /**
     * Bind this click listener to the interactive element. Handles closing the
     * menu.
     */
    this.onClick = () => {
      this.menuItemController.onClick()
    }
    /**
     * Bind this click listener to the interactive element. Handles closing the
     * menu.
     */
    this.onKeydown = (e) => {
      this.menuItemController.onKeydown(e)
    }
    this.menuItemController = new MenuItemController(host, config)
    host.addController(this)
  }
  hostUpdate() {
    if (this.lastSelected !== this.host.selected) {
      this.host.ariaSelected = this.host.selected ? 'true' : 'false'
    }
  }
  hostUpdated() {
    // Do not dispatch event on first update / boot-up.
    if (this.lastSelected !== this.host.selected && !this.firstUpdate) {
      // This section is really useful for when the user sets selected on the
      // option programmatically. Most other cases (click and keyboard) are
      // handled by md-select because it needs to coordinate the
      // single-selection behavior.
      if (this.host.selected) {
        this.host.dispatchEvent(createRequestSelectionEvent())
      } else {
        this.host.dispatchEvent(createRequestDeselectionEvent())
      }
    }
    this.lastSelected = this.host.selected
    this.firstUpdate = false
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires close-menu {CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>}
 * Closes the encapsulating menu on closable interaction. --bubbles --composed
 * @fires request-selection {Event} Requests the parent md-select to select this
 * element (and deselect others if single-selection) when `selected` changed to
 * `true`. --bubbles --composed
 * @fires request-deselection {Event} Requests the parent md-select to deselect
 * this element when `selected` changed to `false`. --bubbles --composed
 */
class SelectOptionEl extends s$1 {
  constructor() {
    super(...arguments)
    /**
     * Disables the item and makes it non-selectable and non-interactive.
     */
    this.disabled = false
    /**
     * READONLY: self-identifies as a menu item and sets its identifying attribute
     */
    this.isMenuItem = true
    /**
     * Sets the item in the selected visual state when a submenu is opened.
     */
    this.selected = false
    /**
     * Form value of the option.
     */
    this.value = ''
    this.type = 'option'
    this.selectOptionController = new SelectOptionController(this, {
      getHeadlineElements: () => {
        return this.headlineElements
      },
      getSupportingTextElements: () => {
        return this.supportingTextElements
      },
      getDefaultElements: () => {
        return this.defaultElements
      },
      getInteractiveElement: () => this.listItemRoot
    })
  }
  /**
   * The text that is selectable via typeahead. If not set, defaults to the
   * innerText of the item slotted into the `"headline"` slot.
   */
  get typeaheadText() {
    return this.selectOptionController.typeaheadText
  }
  set typeaheadText(text) {
    this.selectOptionController.setTypeaheadText(text)
  }
  /**
   * The text that is displayed in the select field when selected. If not set,
   * defaults to the textContent of the item slotted into the `"headline"` slot.
   */
  get displayText() {
    return this.selectOptionController.displayText
  }
  set displayText(text) {
    this.selectOptionController.setDisplayText(text)
  }
  render() {
    return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)
  }
  /**
   * Renders the root list item.
   *
   * @param content the child content of the list item.
   */
  renderListItem(content) {
    return x`
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || T}
        aria-selected=${this.ariaSelected || T}
        aria-checked=${this.ariaChecked || T}
        aria-expanded=${this.ariaExpanded || T}
        aria-haspopup=${this.ariaHasPopup || T}
        class="list-item ${e$1(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${content}</li
      >
    `
  }
  /**
   * Handles rendering of the ripple element.
   */
  renderRipple() {
    return x` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`
  }
  /**
   * Handles rendering of the focus ring.
   */
  renderFocusRing() {
    return x` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`
  }
  /**
   * Classes applied to the list item root.
   */
  getRenderClasses() {
    return {
      disabled: this.disabled,
      selected: this.selected
    }
  }
  /**
   * Handles rendering the headline and supporting text.
   */
  renderBody() {
    return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `
  }
  focus() {
    // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
    // work programmatically like in FF and select-option
    this.listItemRoot?.focus()
  }
}
;(() => {
  requestUpdateOnAriaChange(SelectOptionEl)
})()
/** @nocollapse */
SelectOptionEl.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  SelectOptionEl.prototype,
  'disabled',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'md-menu-item', reflect: true })],
  SelectOptionEl.prototype,
  'isMenuItem',
  void 0
)
__decorate(
  [n$5({ type: Boolean })],
  SelectOptionEl.prototype,
  'selected',
  void 0
)
__decorate([n$5()], SelectOptionEl.prototype, 'value', void 0)
__decorate(
  [e$5('.list-item')],
  SelectOptionEl.prototype,
  'listItemRoot',
  void 0
)
__decorate(
  [o$4({ slot: 'headline' })],
  SelectOptionEl.prototype,
  'headlineElements',
  void 0
)
__decorate(
  [o$4({ slot: 'supporting-text' })],
  SelectOptionEl.prototype,
  'supportingTextElements',
  void 0
)
__decorate(
  [n$4({ slot: '' })],
  SelectOptionEl.prototype,
  'defaultElements',
  void 0
)
__decorate(
  [n$5({ attribute: 'typeahead-text' })],
  SelectOptionEl.prototype,
  'typeaheadText',
  null
)
__decorate(
  [n$5({ attribute: 'display-text' })],
  SelectOptionEl.prototype,
  'displayText',
  null
)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the option that
 * can be placed inside of an md-select.
 *
 * This component is a subclass of `md-menu-item` and can accept the same slots,
 * properties, and events as `md-menu-item`.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdSelectOption = class MdSelectOption extends SelectOptionEl {}
MdSelectOption.styles = [styles$i]
MdSelectOption = __decorate([t$3('md-select-option')], MdSelectOption)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./slider/internal/forced-colors-styles.css.
const styles$a = i$4`@media(forced-colors: active){:host{--md-slider-active-track-color: CanvasText;--md-slider-disabled-active-track-color: GrayText;--md-slider-disabled-active-track-opacity: 1;--md-slider-disabled-handle-color: GrayText;--md-slider-disabled-inactive-track-color: GrayText;--md-slider-disabled-inactive-track-opacity: 1;--md-slider-focus-handle-color: CanvasText;--md-slider-handle-color: CanvasText;--md-slider-handle-shadow-color: Canvas;--md-slider-hover-handle-color: CanvasText;--md-slider-hover-state-layer-color: Canvas;--md-slider-hover-state-layer-opacity: 1;--md-slider-inactive-track-color: Canvas;--md-slider-label-container-color: Canvas;--md-slider-label-text-color: CanvasText;--md-slider-pressed-handle-color: CanvasText;--md-slider-pressed-state-layer-color: Canvas;--md-slider-pressed-state-layer-opacity: 1;--md-slider-with-overlap-handle-outline-color: CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}.tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='CanvasText'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}.tickmarks::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/svg%3E")}:host([disabled]) .tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n, r, t) {
  return n ? r(n) : t?.(n)
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Disable warning for classMap with destructuring
// tslint:disable:no-implicit-dictionary-conversion
// Separate variable needed for closure.
const sliderBaseClass = mixinFormAssociated(mixinElementInternals(s$1))
/**
 * Slider component.
 *
 *
 * @fires change {Event} The native `change` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
 * --bubbles
 * @fires input {InputEvent} The native `input` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * --bubbles --composed
 */
class Slider extends sliderBaseClass {
  /**
   * The HTML name to use in form submission for a range slider's starting
   * value. Use `name` instead if both the start and end values should use the
   * same name.
   */
  get nameStart() {
    return this.getAttribute('name-start') ?? this.name
  }
  set nameStart(name) {
    this.setAttribute('name-start', name)
  }
  /**
   * The HTML name to use in form submission for a range slider's ending value.
   * Use `name` instead if both the start and end values should use the same
   * name.
   */
  get nameEnd() {
    return this.getAttribute('name-end') ?? this.nameStart
  }
  set nameEnd(name) {
    this.setAttribute('name-end', name)
  }
  // Note: start aria-* properties are only applied when range=true, which is
  // why they do not need to handle both cases.
  get renderAriaLabelStart() {
    // Needed for closure conformance
    const { ariaLabel } = this
    return (
      this.ariaLabelStart ||
      (ariaLabel && `${ariaLabel} start`) ||
      this.valueLabelStart ||
      String(this.valueStart)
    )
  }
  get renderAriaValueTextStart() {
    return (
      this.ariaValueTextStart || this.valueLabelStart || String(this.valueStart)
    )
  }
  // Note: end aria-* properties are applied for single and range sliders, which
  // is why it needs to handle `this.range` (while start aria-* properties do
  // not).
  get renderAriaLabelEnd() {
    // Needed for closure conformance
    const { ariaLabel } = this
    if (this.range) {
      return (
        this.ariaLabelEnd ||
        (ariaLabel && `${ariaLabel} end`) ||
        this.valueLabelEnd ||
        String(this.valueEnd)
      )
    }
    return ariaLabel || this.valueLabel || String(this.value)
  }
  get renderAriaValueTextEnd() {
    if (this.range) {
      return (
        this.ariaValueTextEnd || this.valueLabelEnd || String(this.valueEnd)
      )
    }
    // Needed for conformance
    const { ariaValueText } = this
    return ariaValueText || this.valueLabel || String(this.value)
  }
  constructor() {
    super()
    /**
     * The slider minimum value
     */
    this.min = 0
    /**
     * The slider maximum value
     */
    this.max = 100
    /**
     * An optional label for the slider's value displayed when range is
     * false; if not set, the label is the value itself.
     */
    this.valueLabel = ''
    /**
     * An optional label for the slider's start value displayed when
     * range is true; if not set, the label is the valueStart itself.
     */
    this.valueLabelStart = ''
    /**
     * An optional label for the slider's end value displayed when
     * range is true; if not set, the label is the valueEnd itself.
     */
    this.valueLabelEnd = ''
    /**
     * Aria label for the slider's start handle displayed when
     * range is true.
     */
    this.ariaLabelStart = ''
    /**
     * Aria value text for the slider's start value displayed when
     * range is true.
     */
    this.ariaValueTextStart = ''
    /**
     * Aria label for the slider's end handle displayed when
     * range is true.
     */
    this.ariaLabelEnd = ''
    /**
     * Aria value text for the slider's end value displayed when
     * range is true.
     */
    this.ariaValueTextEnd = ''
    /**
     * The step between values.
     */
    this.step = 1
    /**
     * Whether or not to show tick marks.
     */
    this.ticks = false
    /**
     * Whether or not to show a value label when activated.
     */
    this.labeled = false
    /**
     * Whether or not to show a value range. When false, the slider displays
     * a slideable handle for the value property; when true, it displays
     * slideable handles for the valueStart and valueEnd properties.
     */
    this.range = false
    // handle hover/pressed states are set manually since the handle
    // does not receive pointer events so that the native inputs are
    // interaction targets.
    this.handleStartHover = false
    this.handleEndHover = false
    this.startOnTop = false
    this.handlesOverlapping = false
    // used in synthetic events generated to control ripple hover state.
    this.ripplePointerId = 1
    // flag to prevent processing of re-dispatched input event.
    this.isRedispatchingEvent = false
    {
      this.addEventListener('click', (event) => {
        if (!isActivationClick(event) || !this.inputEnd) {
          return
        }
        this.focus()
        dispatchActivationClick(this.inputEnd)
      })
    }
  }
  focus() {
    this.inputEnd?.focus()
  }
  willUpdate(changed) {
    this.renderValueStart = changed.has('valueStart')
      ? this.valueStart
      : this.inputStart?.valueAsNumber
    const endValueChanged =
      (changed.has('valueEnd') && this.range) || changed.has('value')
    this.renderValueEnd = endValueChanged
      ? this.range
        ? this.valueEnd
        : this.value
      : this.inputEnd?.valueAsNumber
    // manually handle ripple hover state since the handle is pointer events
    // none.
    if (changed.get('handleStartHover') !== undefined) {
      this.toggleRippleHover(this.rippleStart, this.handleStartHover)
    } else if (changed.get('handleEndHover') !== undefined) {
      this.toggleRippleHover(this.rippleEnd, this.handleEndHover)
    }
  }
  updated(changed) {
    // Validate input rendered value and re-render if necessary. This ensures
    // the rendred handle stays in sync with the input thumb which is used for
    // interaction. These can get out of sync if a supplied value does not
    // map to an exactly stepped value between min and max.
    if (this.range) {
      this.renderValueStart = this.inputStart.valueAsNumber
    }
    this.renderValueEnd = this.inputEnd.valueAsNumber
    // update values if they are unset
    // when using a range, default to equi-distant between
    // min - valueStart - valueEnd - max
    if (this.range) {
      const segment = (this.max - this.min) / 3
      if (this.valueStart === undefined) {
        this.inputStart.valueAsNumber = this.min + segment
        // read actual value from input
        const v = this.inputStart.valueAsNumber
        this.valueStart = this.renderValueStart = v
      }
      if (this.valueEnd === undefined) {
        this.inputEnd.valueAsNumber = this.min + 2 * segment
        // read actual value from input
        const v = this.inputEnd.valueAsNumber
        this.valueEnd = this.renderValueEnd = v
      }
    } else {
      this.value ?? (this.value = this.renderValueEnd)
    }
    if (
      changed.has('range') ||
      changed.has('renderValueStart') ||
      changed.has('renderValueEnd') ||
      this.isUpdatePending
    ) {
      // Only check if the handle nubs are overlapping, as the ripple touch
      // target extends subtantially beyond the boundary of the handle nub.
      const startNub = this.handleStart?.querySelector('.handleNub')
      const endNub = this.handleEnd?.querySelector('.handleNub')
      this.handlesOverlapping = isOverlapping(startNub, endNub)
    }
    // called to finish the update imediately;
    // note, this is a no-op unless an update is scheduled
    this.performUpdate()
  }
  render() {
    const step = this.step === 0 ? 1 : this.step
    const range = Math.max(this.max - this.min, step)
    const startFraction = this.range
      ? ((this.renderValueStart ?? this.min) - this.min) / range
      : 0
    const endFraction = ((this.renderValueEnd ?? this.min) - this.min) / range
    const containerStyles = {
      // for clipping inputs and active track.
      '--_start-fraction': String(startFraction),
      '--_end-fraction': String(endFraction),
      // for generating tick marks
      '--_tick-count': String(range / step)
    }
    const containerClasses = { ranged: this.range }
    // optional label values to show in place of the value.
    const labelStart = this.valueLabelStart || String(this.renderValueStart)
    const labelEnd =
      (this.range ? this.valueLabelEnd : this.valueLabel) ||
      String(this.renderValueEnd)
    const inputStartProps = {
      start: true,
      value: this.renderValueStart,
      ariaLabel: this.renderAriaLabelStart,
      ariaValueText: this.renderAriaValueTextStart,
      ariaMin: this.min,
      ariaMax: this.valueEnd ?? this.max
    }
    const inputEndProps = {
      start: false,
      value: this.renderValueEnd,
      ariaLabel: this.renderAriaLabelEnd,
      ariaValueText: this.renderAriaValueTextEnd,
      ariaMin: this.range ? this.valueStart ?? this.min : this.min,
      ariaMax: this.max
    }
    const handleStartProps = {
      start: true,
      hover: this.handleStartHover,
      label: labelStart
    }
    const handleEndProps = {
      start: false,
      hover: this.handleEndHover,
      label: labelEnd
    }
    const handleContainerClasses = {
      hover: this.handleStartHover || this.handleEndHover
    }
    return x` <div
      class="container ${e$1(containerClasses)}"
      style=${o(containerStyles)}>
      ${n(this.range, () => this.renderInput(inputStartProps))}
      ${this.renderInput(inputEndProps)} ${this.renderTrack()}
      <div class="handleContainerPadded">
        <div class="handleContainerBlock">
          <div class="handleContainer ${e$1(handleContainerClasses)}">
            ${n(this.range, () => this.renderHandle(handleStartProps))}
            ${this.renderHandle(handleEndProps)}
          </div>
        </div>
      </div>
    </div>`
  }
  renderTrack() {
    return x`
      <div class="track"></div>
      ${this.ticks ? x`<div class="tickmarks"></div>` : T}
    `
  }
  renderLabel(value) {
    return x`<div class="label" aria-hidden="true">
      <span class="labelContent" part="label">${value}</span>
    </div>`
  }
  renderHandle({ start, hover, label }) {
    const onTop = !this.disabled && start === this.startOnTop
    const isOverlapping = !this.disabled && this.handlesOverlapping
    const name = start ? 'start' : 'end'
    return x`<div
      class="handle ${e$1({
        [name]: true,
        hover,
        onTop,
        isOverlapping
      })}">
      <md-focus-ring part="focus-ring" for=${name}></md-focus-ring>
      <md-ripple
        for=${name}
        class=${name}
        ?disabled=${this.disabled}></md-ripple>
      <div class="handleNub">
        <md-elevation part="elevation"></md-elevation>
      </div>
      ${n(this.labeled, () => this.renderLabel(label))}
    </div>`
  }
  renderInput({ start, value, ariaLabel, ariaValueText, ariaMin, ariaMax }) {
    // Slider requires min/max set to the overall min/max for both inputs.
    // This is reported to screen readers, which is why we need aria-valuemin
    // and aria-valuemax.
    const name = start ? `start` : `end`
    return x`<input
      type="range"
      class="${e$1({
        start,
        end: !start
      })}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${name}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      aria-valuemin=${ariaMin}
      .max=${String(this.max)}
      aria-valuemax=${ariaMax}
      .step=${String(this.step)}
      .value=${String(value)}
      .tabIndex=${start ? 1 : 0}
      aria-label=${ariaLabel || T}
      aria-valuetext=${ariaValueText} />`
  }
  async toggleRippleHover(ripple, hovering) {
    const rippleEl = await ripple
    if (!rippleEl) {
      return
    }
    // TODO(b/269799771): improve slider ripple connection
    if (hovering) {
      rippleEl.handlePointerenter(
        new PointerEvent('pointerenter', {
          isPrimary: true,
          pointerId: this.ripplePointerId
        })
      )
    } else {
      rippleEl.handlePointerleave(
        new PointerEvent('pointerleave', {
          isPrimary: true,
          pointerId: this.ripplePointerId
        })
      )
    }
  }
  handleFocus(event) {
    this.updateOnTop(event.target)
  }
  startAction(event) {
    const target = event.target
    const fixed = target === this.inputStart ? this.inputEnd : this.inputStart
    this.action = {
      canFlip: event.type === 'pointerdown',
      flipped: false,
      target,
      fixed,
      values: new Map([
        [target, target.valueAsNumber],
        [fixed, fixed?.valueAsNumber]
      ])
    }
  }
  finishAction(event) {
    this.action = undefined
  }
  handleKeydown(event) {
    this.startAction(event)
  }
  handleKeyup(event) {
    this.finishAction(event)
  }
  handleDown(event) {
    this.startAction(event)
    this.ripplePointerId = event.pointerId
    const isStart = event.target === this.inputStart
    // Since handle moves to pointer on down and there may not be a move,
    // it needs to be considered hovered..
    this.handleStartHover =
      !this.disabled && isStart && Boolean(this.handleStart)
    this.handleEndHover = !this.disabled && !isStart && Boolean(this.handleEnd)
  }
  async handleUp(event) {
    if (!this.action) {
      return
    }
    const { target, values, flipped } = this.action
    //  Async here for Firefox because input can be after pointerup
    //  when value is calmped.
    await new Promise(requestAnimationFrame)
    if (target !== undefined) {
      // Ensure Safari focuses input so label renders.
      // Ensure any flipped input is focused so the tab order is right.
      target.focus()
      // When action is flipped, change must be fired manually since the
      // real event target did not change.
      if (flipped && target.valueAsNumber !== values.get(target)) {
        target.dispatchEvent(new Event('change', { bubbles: true }))
      }
    }
    this.finishAction(event)
  }
  /**
   * The move handler tracks handle hovering to facilitate proper ripple
   * behavior on the slider handle. This is needed because user interaction with
   * the native input is leveraged to position the handle. Because the separate
   * displayed handle element has pointer events disabled (to allow interaction
   * with the input) and the input's handle is a pseudo-element, neither can be
   * the ripple's interactive element. Therefore the input is the ripple's
   * interactive element and has a `ripple` directive; however the ripple
   * is gated on the handle being hovered. In addition, because the ripple
   * hover state is being specially handled, it must be triggered independent
   * of the directive. This is done based on the hover state when the
   * slider is updated.
   */
  handleMove(event) {
    this.handleStartHover = !this.disabled && inBounds(event, this.handleStart)
    this.handleEndHover = !this.disabled && inBounds(event, this.handleEnd)
  }
  handleEnter(event) {
    this.handleMove(event)
  }
  handleLeave() {
    this.handleStartHover = false
    this.handleEndHover = false
  }
  updateOnTop(input) {
    this.startOnTop = input.classList.contains('start')
  }
  needsClamping() {
    if (!this.action) {
      return false
    }
    const { target, fixed } = this.action
    const isStart = target === this.inputStart
    return isStart
      ? target.valueAsNumber > fixed.valueAsNumber
      : target.valueAsNumber < fixed.valueAsNumber
  }
  // if start/end start coincident and the first drag input would e.g. move
  // start > end, avoid clamping and "flip" to use the other input
  // as the action target.
  isActionFlipped() {
    const { action } = this
    if (!action) {
      return false
    }
    const { target, fixed, values } = action
    if (action.canFlip) {
      const coincident = values.get(target) === values.get(fixed)
      if (coincident && this.needsClamping()) {
        action.canFlip = false
        action.flipped = true
        action.target = fixed
        action.fixed = target
      }
    }
    return action.flipped
  }
  // when flipped, apply the drag input to the flipped target and reset
  // the actual target.
  flipAction() {
    if (!this.action) {
      return false
    }
    const { target, fixed, values } = this.action
    const changed = target.valueAsNumber !== fixed.valueAsNumber
    target.valueAsNumber = fixed.valueAsNumber
    fixed.valueAsNumber = values.get(fixed)
    return changed
  }
  // clamp such that start does not move beyond end and visa versa.
  clampAction() {
    if (!this.needsClamping() || !this.action) {
      return false
    }
    const { target, fixed } = this.action
    target.valueAsNumber = fixed.valueAsNumber
    return true
  }
  handleInput(event) {
    // avoid processing a re-dispatched event
    if (this.isRedispatchingEvent) {
      return
    }
    let stopPropagation = false
    let redispatch = false
    if (this.range) {
      if (this.isActionFlipped()) {
        stopPropagation = true
        redispatch = this.flipAction()
      }
      if (this.clampAction()) {
        stopPropagation = true
        redispatch = false
      }
    }
    const target = event.target
    this.updateOnTop(target)
    // update value only on interaction
    if (this.range) {
      this.valueStart = this.inputStart.valueAsNumber
      this.valueEnd = this.inputEnd.valueAsNumber
    } else {
      this.value = this.inputEnd.valueAsNumber
    }
    // control external visibility of input event
    if (stopPropagation) {
      event.stopPropagation()
    }
    // ensure event path is correct when flipped.
    if (redispatch) {
      this.isRedispatchingEvent = true
      redispatchEvent(target, event)
      this.isRedispatchingEvent = false
    }
  }
  handleChange(event) {
    // prevent keyboard triggered changes from dispatching for
    // clamped values; note, this only occurs for keyboard
    const changeTarget = event.target
    const { target, values } = this.action ?? {}
    const squelch = target && target.valueAsNumber === values.get(changeTarget)
    if (!squelch) {
      redispatchEvent(this, event)
    }
    // ensure keyboard triggered change clears action.
    this.finishAction(event)
  }
  [getFormValue]() {
    if (this.range) {
      const data = new FormData()
      data.append(this.nameStart, String(this.valueStart))
      data.append(this.nameEnd, String(this.valueEnd))
      return data
    }
    return String(this.value)
  }
  formResetCallback() {
    if (this.range) {
      const valueStart = this.getAttribute('value-start')
      this.valueStart = valueStart !== null ? Number(valueStart) : undefined
      const valueEnd = this.getAttribute('value-end')
      this.valueEnd = valueEnd !== null ? Number(valueEnd) : undefined
      return
    }
    const value = this.getAttribute('value')
    this.value = value !== null ? Number(value) : undefined
  }
  formStateRestoreCallback(state) {
    if (Array.isArray(state)) {
      const [[, valueStart], [, valueEnd]] = state
      this.valueStart = Number(valueStart)
      this.valueEnd = Number(valueEnd)
      this.range = true
      return
    }
    this.value = Number(state)
    this.range = false
  }
}
;(() => {
  requestUpdateOnAriaChange(Slider)
})()
/** @nocollapse */
Slider.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate([n$5({ type: Number })], Slider.prototype, 'min', void 0)
__decorate([n$5({ type: Number })], Slider.prototype, 'max', void 0)
__decorate([n$5({ type: Number })], Slider.prototype, 'value', void 0)
__decorate(
  [n$5({ type: Number, attribute: 'value-start' })],
  Slider.prototype,
  'valueStart',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'value-end' })],
  Slider.prototype,
  'valueEnd',
  void 0
)
__decorate(
  [n$5({ attribute: 'value-label' })],
  Slider.prototype,
  'valueLabel',
  void 0
)
__decorate(
  [n$5({ attribute: 'value-label-start' })],
  Slider.prototype,
  'valueLabelStart',
  void 0
)
__decorate(
  [n$5({ attribute: 'value-label-end' })],
  Slider.prototype,
  'valueLabelEnd',
  void 0
)
__decorate(
  [n$5({ attribute: 'aria-label-start' })],
  Slider.prototype,
  'ariaLabelStart',
  void 0
)
__decorate(
  [n$5({ attribute: 'aria-valuetext-start' })],
  Slider.prototype,
  'ariaValueTextStart',
  void 0
)
__decorate(
  [n$5({ attribute: 'aria-label-end' })],
  Slider.prototype,
  'ariaLabelEnd',
  void 0
)
__decorate(
  [n$5({ attribute: 'aria-valuetext-end' })],
  Slider.prototype,
  'ariaValueTextEnd',
  void 0
)
__decorate([n$5({ type: Number })], Slider.prototype, 'step', void 0)
__decorate([n$5({ type: Boolean })], Slider.prototype, 'ticks', void 0)
__decorate([n$5({ type: Boolean })], Slider.prototype, 'labeled', void 0)
__decorate([n$5({ type: Boolean })], Slider.prototype, 'range', void 0)
__decorate([e$5('input.start')], Slider.prototype, 'inputStart', void 0)
__decorate([e$5('.handle.start')], Slider.prototype, 'handleStart', void 0)
__decorate([r$2('md-ripple.start')], Slider.prototype, 'rippleStart', void 0)
__decorate([e$5('input.end')], Slider.prototype, 'inputEnd', void 0)
__decorate([e$5('.handle.end')], Slider.prototype, 'handleEnd', void 0)
__decorate([r$2('md-ripple.end')], Slider.prototype, 'rippleEnd', void 0)
__decorate([r$4()], Slider.prototype, 'handleStartHover', void 0)
__decorate([r$4()], Slider.prototype, 'handleEndHover', void 0)
__decorate([r$4()], Slider.prototype, 'startOnTop', void 0)
__decorate([r$4()], Slider.prototype, 'handlesOverlapping', void 0)
__decorate([r$4()], Slider.prototype, 'renderValueStart', void 0)
__decorate([r$4()], Slider.prototype, 'renderValueEnd', void 0)
function inBounds({ x, y }, element) {
  if (!element) {
    return false
  }
  const { top, left, bottom, right } = element.getBoundingClientRect()
  return x >= left && x <= right && y >= top && y <= bottom
}
function isOverlapping(elA, elB) {
  if (!(elA && elB)) {
    return false
  }
  const a = elA.getBoundingClientRect()
  const b = elB.getBoundingClientRect()
  return !(
    a.top > b.bottom ||
    a.right < b.left ||
    a.bottom < b.top ||
    a.left > b.right
  )
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./slider/internal/slider-styles.css.
const styles$9 = i$4`:host{--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, var(--md-sys-shape-corner-full, 9999px));--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, var(--md-sys-shape-corner-full, 9999px));--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, var(--md-sys-shape-corner-full, 9999px));--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-slider-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-slider-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-slider-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-slider-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-weight: var(--md-slider-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_start-fraction: 0;--_end-fraction: 0;--_tick-count: 0;display:inline-flex;vertical-align:middle;min-inline-size:200px;--md-elevation-level: var(--_handle-elevation);--md-elevation-shadow-color: var(--_handle-shadow-color)}md-focus-ring{height:48px;inset:unset;width:48px}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level: var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track,.tickmarks{position:absolute;inset:0;display:flex;align-items:center}.track::before,.tickmarks::before,.track::after,.tickmarks::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--_tick-count)) 100%}.track::before,.tickmarks::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape)}.track::before{background:var(--_inactive-track-color)}.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background:var(--_disabled-inactive-track-color)}.track::after,.tickmarks::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)))}.track::after{background:var(--_active-track-color)}.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}.tickmarks:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}:host([disabled]) .track::after{background:var(--_disabled-active-track-color)}:host([disabled]) .tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--_start-fraction));inline-size:calc(100%*(var(--_end-fraction) - var(--_start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:flex;place-content:center;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{outline:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.onTop.isOverlapping .handleNub{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:flex;padding:4px;place-content:center;place-items:center;border-radius:var(--md-sys-shape-corner-full, 9999px);color:var(--_label-text-color);font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_handle-height);inline-size:var(--_handle-width);opacity:0;z-index:2}input.end::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_end-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.end:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}input.start::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_start-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.start:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))) 0 0)}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)))}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)) 0 0)}.onTop{z-index:1}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Sliders allow users to view and select a value (or range) along
 * a track.
 *
 * @description
 * Changes made with sliders are immediate, allowing the user to make slider
 * adjustments while determining a selection. Sliders shouldn’t be used to
 * adjust settings with any delay in providing user feedback. Sliders reflect
 * the current state of the settings they control.
 *
 * __Example usages:__
 * - Sliders are ideal for adjusting settings such as volume and brightness, or
 * for applying image filters.
 *
 * @final
 * @suppress {visibility}
 */
let MdSlider = class MdSlider extends Slider {}
MdSlider.styles = [styles$9, styles$a]
MdSlider = __decorate([t$3('md-slider')], MdSlider)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const switchBaseClass = mixinConstraintValidation(
  mixinFormAssociated(mixinElementInternals(s$1))
)
/**
 * @fires input {InputEvent} Fired whenever `selected` changes due to user
 * interaction (bubbles and composed).
 * @fires change {Event} Fired whenever `selected` changes due to user
 * interaction (bubbles).
 */
class Switch extends switchBaseClass {
  constructor() {
    super()
    /**
     * Puts the switch in the selected state and sets the form submission value to
     * the `value` property.
     */
    this.selected = false
    /**
     * Shows both the selected and deselected icons.
     */
    this.icons = false
    /**
     * Shows only the selected icon, and not the deselected icon. If `true`,
     * overrides the behavior of the `icons` property.
     */
    this.showOnlySelectedIcon = false
    /**
     * When true, require the switch to be selected when participating in
     * form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     */
    this.required = false
    /**
     * The value associated with this switch on form submission. `null` is
     * submitted when `selected` is `false`.
     */
    this.value = 'on'
    {
      this.addEventListener('click', (event) => {
        if (!isActivationClick(event) || !this.input) {
          return
        }
        this.focus()
        dispatchActivationClick(this.input)
      })
    }
  }
  render() {
    // NOTE: buttons must use only [phrasing
    // content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)
    // children, which includes custom elements, but not `div`s
    return x`
      <div class="switch ${e$1(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel || T}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `
  }
  getRenderClasses() {
    return {
      selected: this.selected,
      unselected: !this.selected,
      disabled: this.disabled
    }
  }
  renderHandle() {
    const classes = {
      'with-icon': this.showOnlySelectedIcon ? this.selected : this.icons
    }
    return x`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${e$1(classes)}">
          ${this.shouldShowIcons() ? this.renderIcons() : x``}
        </span>
      </span>
    `
  }
  renderIcons() {
    return x`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon ? x`` : this.renderOffIcon()}
      </div>
    `
  }
  /**
   * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
   */
  renderOnIcon() {
    return x`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `
  }
  /**
   * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
   */
  renderOffIcon() {
    return x`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `
  }
  renderTouchTarget() {
    return x`<span class="touch"></span>`
  }
  shouldShowIcons() {
    return this.icons || this.showOnlySelectedIcon
  }
  handleInput(event) {
    const target = event.target
    this.selected = target.checked
    // <input> 'input' event bubbles and is composed, don't re-dispatch it.
  }
  handleChange(event) {
    // <input> 'change' event is not composed, re-dispatch it.
    redispatchEvent(this, event)
  }
  [getFormValue]() {
    return this.selected ? this.value : null
  }
  [getFormState]() {
    return String(this.selected)
  }
  formResetCallback() {
    // The selected property does not reflect, so the original attribute set by
    // the user is used to determine the default value.
    this.selected = this.hasAttribute('selected')
  }
  formStateRestoreCallback(state) {
    this.selected = state === 'true'
  }
  [createValidator]() {
    return new CheckboxValidator(() => ({
      checked: this.selected,
      required: this.required
    }))
  }
  [getValidityAnchor]() {
    return this.input
  }
}
;(() => {
  requestUpdateOnAriaChange(Switch)
})()
/** @nocollapse */
Switch.shadowRootOptions = {
  mode: 'open',
  delegatesFocus: true
}
__decorate([n$5({ type: Boolean })], Switch.prototype, 'selected', void 0)
__decorate([n$5({ type: Boolean })], Switch.prototype, 'icons', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'show-only-selected-icon' })],
  Switch.prototype,
  'showOnlySelectedIcon',
  void 0
)
__decorate([n$5({ type: Boolean })], Switch.prototype, 'required', void 0)
__decorate([n$5()], Switch.prototype, 'value', void 0)
__decorate([e$5('input')], Switch.prototype, 'input', void 0)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./switch/internal/switch-styles.css.
const styles$8 = i$4`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:100%;z-index:1;cursor:inherit}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Switches toggle the state of a single item on or off.
 *
 * @description
 * There's one type of switch in Material. Use this selection control when the
 * user needs to toggle a single item on or off.
 *
 * @final
 * @suppress {visibility}
 */
let MdSwitch = class MdSwitch extends Switch {}
MdSwitch.styles = [styles$8]
MdSwitch = __decorate([t$3('md-switch')], MdSwitch)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a
/**
 * Symbol for tabs to use to animate their indicators based off another tab's
 * indicator.
 */
const INDICATOR = Symbol('indicator')
/**
 * Symbol used by the tab bar to request a tab to animate its indicator from a
 * previously selected tab.
 */
const ANIMATE_INDICATOR = Symbol('animateIndicator')
// Separate variable needed for closure.
const tabBaseClass = mixinFocusable(s$1)
/**
 * Tab component.
 */
class Tab extends tabBaseClass {
  /**
   * @deprecated use `active`
   */
  get selected() {
    return this.active
  }
  set selected(active) {
    this.active = active
  }
  constructor() {
    super()
    /**
     * The attribute `md-tab` indicates that the element is a tab for the parent
     * element, `<md-tabs>`. Make sure if you're implementing your own `md-tab`
     * component that you have an `md-tab` attribute set.
     */
    this.isTab = true
    /**
     * Whether or not the tab is selected.
     **/
    this.active = false
    /**
     * In SSR, set this to true when an icon is present.
     */
    this.hasIcon = false
    /**
     * In SSR, set this to true when there is no label and only an icon.
     */
    this.iconOnly = false
    this.fullWidthIndicator = false
    this.internals =
      // Cast needed for closure
      this.attachInternals()
    {
      this.internals.role = 'tab'
      this.addEventListener('keydown', this.handleKeydown.bind(this))
    }
  }
  render() {
    const indicator = x`<div class="indicator"></div>`
    return x`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${e$1(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator ? T : indicator}
      </div>
      ${this.fullWidthIndicator ? indicator : T}
    </div>`
  }
  getContentClasses() {
    return {
      'has-icon': this.hasIcon,
      'has-label': !this.iconOnly
    }
  }
  updated() {
    this.internals.ariaSelected = String(this.active)
  }
  async handleKeydown(event) {
    // Allow event to bubble.
    await 0
    if (event.defaultPrevented) {
      return
    }
    if (event.key === 'Enter' || event.key === ' ') {
      // Prevent default behavior such as scrolling when pressing spacebar.
      event.preventDefault()
      this.click()
    }
  }
  handleContentClick(event) {
    // Ensure the "click" target is always the tab, and not content, by stopping
    // propagation of content clicks and re-clicking the host.
    event.stopPropagation()
    this.click()
  }
  [((_a = INDICATOR), ANIMATE_INDICATOR)](previousTab) {
    if (!this[INDICATOR]) {
      return
    }
    this[INDICATOR].getAnimations().forEach((a) => {
      a.cancel()
    })
    const frames = this.getKeyframes(previousTab)
    if (frames !== null) {
      this[INDICATOR].animate(frames, {
        duration: 250,
        easing: EASING.EMPHASIZED
      })
    }
  }
  getKeyframes(previousTab) {
    const reduceMotion = shouldReduceMotion()
    if (!this.active) {
      return reduceMotion ? [{ opacity: 1 }, { transform: 'none' }] : null
    }
    const from = {}
    const fromRect = previousTab[INDICATOR]?.getBoundingClientRect() ?? {}
    const fromPos = fromRect.left
    const fromExtent = fromRect.width
    const toRect = this[INDICATOR].getBoundingClientRect()
    const toPos = toRect.left
    const toExtent = toRect.width
    const scale = fromExtent / toExtent
    if (
      !reduceMotion &&
      fromPos !== undefined &&
      toPos !== undefined &&
      !isNaN(scale)
    ) {
      from['transform'] = `translateX(${(fromPos - toPos).toFixed(
        4
      )}px) scaleX(${scale.toFixed(4)})`
    } else {
      from['opacity'] = 0
    }
    // note, including `transform: none` avoids quirky Safari behavior
    // that can hide the animation.
    return [from, { transform: 'none' }]
  }
  handleSlotChange() {
    this.iconOnly = false
    // Check if there's any label text or elements. If not, then there is only
    // an icon.
    for (const node of this.assignedDefaultNodes) {
      const hasTextContent =
        node.nodeType === Node.TEXT_NODE && !!node.wholeText.match(/\S/)
      if (node.nodeType === Node.ELEMENT_NODE || hasTextContent) {
        return
      }
    }
    this.iconOnly = true
  }
  handleIconSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0
  }
}
__decorate(
  [n$5({ type: Boolean, reflect: true, attribute: 'md-tab' })],
  Tab.prototype,
  'isTab',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  Tab.prototype,
  'active',
  void 0
)
__decorate([n$5({ type: Boolean })], Tab.prototype, 'selected', null)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-icon' })],
  Tab.prototype,
  'hasIcon',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'icon-only' })],
  Tab.prototype,
  'iconOnly',
  void 0
)
__decorate([e$5('.indicator')], Tab.prototype, _a, void 0)
__decorate([r$4()], Tab.prototype, 'fullWidthIndicator', void 0)
__decorate(
  [n$4({ flatten: true })],
  Tab.prototype,
  'assignedDefaultNodes',
  void 0
)
__decorate(
  [o$4({ slot: 'icon', flatten: true })],
  Tab.prototype,
  'assignedIcons',
  void 0
)
function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A primary tab component.
 */
class PrimaryTab extends Tab {
  constructor() {
    super(...arguments)
    /**
     * Whether or not the icon renders inline with label or stacked vertically.
     */
    this.inlineIcon = false
  }
  getContentClasses() {
    return {
      ...super.getContentClasses(),
      stacked: !this.inlineIcon
    }
  }
}
__decorate(
  [n$5({ type: Boolean, attribute: 'inline-icon' })],
  PrimaryTab.prototype,
  'inlineIcon',
  void 0
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./tabs/internal/primary-tab-styles.css.
const styles$7 = i$4`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./tabs/internal/tab-styles.css.
const styles$6 = i$4`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO(b/267336507): add docs
/**
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
let MdPrimaryTab = class MdPrimaryTab extends PrimaryTab {}
MdPrimaryTab.styles = [styles$6, styles$7]
MdPrimaryTab = __decorate([t$3('md-primary-tab')], MdPrimaryTab)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A secondary tab component.
 */
class SecondaryTab extends Tab {
  constructor() {
    super(...arguments)
    this.fullWidthIndicator = true
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./tabs/internal/secondary-tab-styles.css.
const styles$5 = i$4`:host{--_active-indicator-color: var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color: var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-secondary-tab-container-elevation, 0);--_container-height: var(--md-secondary-tab-container-height, 48px);--_focus-label-text-color: var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-secondary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-secondary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-secondary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-secondary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-secondary-tab-active-focus-icon-color, );--_active-focus-label-text-color: var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-secondary-tab-active-hover-icon-color, );--_active-hover-label-text-color: var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity: var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color: var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape: var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-icon-color: var(--md-secondary-tab-active-pressed-icon-color, );--_active-pressed-label-text-color: var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity: var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color: var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size: var(--md-secondary-tab-icon-size, 24px);--_icon-color: var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-secondary-tab-container-shape-start-start, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-secondary-tab-container-shape-start-end, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-secondary-tab-container-shape-end-end, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-secondary-tab-container-shape-end-start, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO(b/267336507): add docs
/**
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
let MdSecondaryTab = class MdSecondaryTab extends SecondaryTab {}
MdSecondaryTab.styles = [styles$6, styles$5]
MdSecondaryTab = __decorate([t$3('md-secondary-tab')], MdSecondaryTab)

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires change {Event} Fired when the selected tab changes. The target's selected or
 * selectedItem and previousSelected or previousSelectedItem provide information
 * about the selection change. The change event is fired when a user interaction
 * like a space/enter key or click cause a selection change. The tab selection
 * based on these actions can be cancelled by calling preventDefault on the
 * triggering `keydown` or `click` event. --bubbles
 *
 * @example
 * // perform an action if a tab is clicked
 * tabs.addEventListener('change', (event: Event) => {
 *   if (event.target.selected === 2)
 *      takeAction();
 *   }
 * });
 *
 * // prevent a click from triggering tab selection under some condition
 * tabs.addEventListener('click', (event: Event) => {
 *   if (notReady)
 *      event.preventDefault();
 *   }
 * });
 *
 */
class Tabs extends s$1 {
  /**
   * The currently selected tab, `null` only when there are no tab children.
   *
   * @export
   */
  get activeTab() {
    return this.tabs.find((tab) => tab.active) ?? null
  }
  set activeTab(tab) {
    // Ignore setting activeTab to null. As long as there are children, one tab
    // must be selected.
    if (tab) {
      this.activateTab(tab)
    }
  }
  /**
   * The index of the currently selected tab.
   *
   * @export
   */
  get activeTabIndex() {
    return this.tabs.findIndex((tab) => tab.active)
  }
  set activeTabIndex(index) {
    const activateTabAtIndex = () => {
      const tab = this.tabs[index]
      // Ignore out-of-bound indices.
      if (tab) {
        this.activateTab(tab)
      }
    }
    if (!this.slotElement) {
      // This is needed to support setting the activeTabIndex via a lit property
      // binding.
      //
      // ```ts
      // html`
      //   <md-tabs .activeTabIndex=${1}>
      //     <md-tab>First</md-tab>
      //     <md-tab>Second</md-tab>
      //   </md-tabs>
      // `;
      // ```
      //
      // It's needed since lit's rendering lifecycle is asynchronous, and the
      // `<slot>` element hasn't rendered, so `tabs` is empty.
      this.updateComplete.then(activateTabAtIndex)
      return
    }
    activateTabAtIndex()
  }
  get focusedTab() {
    return this.tabs.find((tab) => tab.matches(':focus-within'))
  }
  constructor() {
    super()
    /**
     * Whether or not to automatically select a tab when it is focused.
     */
    this.autoActivate = false
    this.internals =
      // Cast needed for closure
      this.attachInternals()
    {
      this.internals.role = 'tablist'
      this.addEventListener('keydown', this.handleKeydown.bind(this))
      this.addEventListener('keyup', this.handleKeyup.bind(this))
      this.addEventListener('focusout', this.handleFocusout.bind(this))
    }
  }
  /**
   * Scrolls the toolbar, if overflowing, to the active tab, or the provided
   * tab.
   *
   * @param tabToScrollTo The tab that should be scrolled to. Defaults to the
   *     active tab.
   * @return A Promise that resolves after the tab has been scrolled to.
   */
  async scrollToTab(tabToScrollTo) {
    await this.updateComplete
    const { tabs } = this
    tabToScrollTo ?? (tabToScrollTo = this.activeTab)
    if (
      !tabToScrollTo ||
      !tabs.includes(tabToScrollTo) ||
      !this.tabsScrollerElement
    ) {
      return
    }
    // wait for tabs to render.
    for (const tab of this.tabs) {
      await tab.updateComplete
    }
    const offset = tabToScrollTo.offsetLeft
    const extent = tabToScrollTo.offsetWidth
    const scroll = this.scrollLeft
    const hostExtent = this.offsetWidth
    const scrollMargin = 48
    const min = offset - scrollMargin
    const max = offset + extent - hostExtent + scrollMargin
    const to = Math.min(min, Math.max(max, scroll))
    // When a tab is focused, use 'auto' to use the CSS `scroll-behavior`. The
    // default behavior is smooth scrolling. However, when there is not a tab
    // focused on initialization, use 'instant' to immediately bring the focused
    // tab into view.
    const behavior = !this.focusedTab ? 'instant' : 'auto'
    this.tabsScrollerElement.scrollTo({ behavior, top: 0, left: to })
  }
  render() {
    return x`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `
  }
  async handleTabClick(event) {
    const tab = event.target
    // Allow event to bubble
    await 0
    if (event.defaultPrevented || !isTab(tab) || tab.active) {
      return
    }
    this.activateTab(tab)
  }
  activateTab(activeTab) {
    const { tabs } = this
    const previousTab = this.activeTab
    if (!tabs.includes(activeTab) || previousTab === activeTab) {
      // Ignore setting activeTab to a tab element that is not a child.
      return
    }
    for (const tab of tabs) {
      tab.active = tab === activeTab
    }
    if (previousTab) {
      // Don't dispatch a change event if activating a tab when no previous tabs
      // were selected, such as when md-tabs auto-selects the first tab.
      const defaultPrevented = !this.dispatchEvent(
        new Event('change', { bubbles: true, cancelable: true })
      )
      if (defaultPrevented) {
        for (const tab of tabs) {
          tab.active = tab === previousTab
        }
        return
      }
      activeTab[ANIMATE_INDICATOR](previousTab)
    }
    this.updateFocusableTab(activeTab)
    this.scrollToTab(activeTab)
  }
  updateFocusableTab(focusableTab) {
    for (const tab of this.tabs) {
      tab.tabIndex = tab === focusableTab ? 0 : -1
    }
  }
  // focus item on keydown and optionally select it
  async handleKeydown(event) {
    // Allow event to bubble.
    await 0
    const isLeft = event.key === 'ArrowLeft'
    const isRight = event.key === 'ArrowRight'
    const isHome = event.key === 'Home'
    const isEnd = event.key === 'End'
    // Ignore non-navigation keys
    if (event.defaultPrevented || (!isLeft && !isRight && !isHome && !isEnd)) {
      return
    }
    const { tabs } = this
    // Don't try to select another tab if there aren't any.
    if (tabs.length < 2) {
      return
    }
    // Prevent default interactions, such as scrolling.
    event.preventDefault()
    let indexToFocus
    if (isHome || isEnd) {
      indexToFocus = isHome ? 0 : tabs.length - 1
    } else {
      // Check if moving forwards or backwards
      const isRtl = getComputedStyle(this).direction === 'rtl'
      const forwards = isRtl ? isLeft : isRight
      const { focusedTab } = this
      if (!focusedTab) {
        // If there is not already a tab focused, select the first or last tab
        // based on the direction we're traveling.
        indexToFocus = forwards ? 0 : tabs.length - 1
      } else {
        const focusedIndex = this.tabs.indexOf(focusedTab)
        indexToFocus = forwards ? focusedIndex + 1 : focusedIndex - 1
        if (indexToFocus >= tabs.length) {
          // Return to start if moving past the last item.
          indexToFocus = 0
        } else if (indexToFocus < 0) {
          // Go to end if moving before the first item.
          indexToFocus = tabs.length - 1
        }
      }
    }
    const tabToFocus = tabs[indexToFocus]
    tabToFocus.focus()
    if (this.autoActivate) {
      this.activateTab(tabToFocus)
    } else {
      this.updateFocusableTab(tabToFocus)
    }
  }
  // scroll to item on keyup.
  handleKeyup() {
    this.scrollToTab(this.focusedTab ?? this.activeTab)
  }
  handleFocusout() {
    // restore focus to selected item when blurring the tab bar.
    if (this.matches(':focus-within')) {
      return
    }
    const { activeTab } = this
    if (activeTab) {
      this.updateFocusableTab(activeTab)
    }
  }
  handleSlotChange() {
    const firstTab = this.tabs[0]
    if (!this.activeTab && firstTab) {
      // If the active tab was removed, auto-select the first one. There should
      // always be a selected tab while the bar has children.
      this.activateTab(firstTab)
    }
    // When children shift, ensure the active tab is visible. For example, if
    // many children are added before the active tab, it'd be pushed off screen.
    // This ensures it stays visible.
    this.scrollToTab(this.activeTab)
  }
}
__decorate(
  [o$4({ flatten: true, selector: '[md-tab]' })],
  Tabs.prototype,
  'tabs',
  void 0
)
__decorate(
  [n$5({ type: Number, attribute: 'active-tab-index' })],
  Tabs.prototype,
  'activeTabIndex',
  null
)
__decorate(
  [n$5({ type: Boolean, attribute: 'auto-activate' })],
  Tabs.prototype,
  'autoActivate',
  void 0
)
__decorate([e$5('.tabs')], Tabs.prototype, 'tabsScrollerElement', void 0)
__decorate([e$5('slot')], Tabs.prototype, 'slotElement', void 0)
function isTab(element) {
  return element instanceof HTMLElement && element.hasAttribute('md-tab')
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./tabs/internal/tabs-styles.css.
const styles$4 = i$4`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO(b/267336507): add docs
/**
 * @summary Tabs displays a list of selectable tabs.
 *
 * @final
 * @suppress {visibility}
 */
let MdTabs = class MdTabs extends Tabs {}
MdTabs.styles = [styles$4]
MdTabs = __decorate([t$3('md-tabs')], MdTabs)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./textfield/internal/filled-styles.css.
const styles$3 = i$4`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const f = (o) => void 0 === o.strings,
  u = {},
  m = (o, t = u) => (o._$AH = t)

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = e$2(
  class extends i$1 {
    constructor(r) {
      if (
        (super(r),
        r.type !== t.PROPERTY &&
          r.type !== t.ATTRIBUTE &&
          r.type !== t.BOOLEAN_ATTRIBUTE)
      )
        throw Error(
          'The `live` directive is not allowed on child or event bindings'
        )
      if (!f(r))
        throw Error('`live` bindings can only contain a single expression')
    }
    render(r) {
      return r
    }
    update(i, [t$1]) {
      if (t$1 === w || t$1 === T) return t$1
      const o = i.element,
        l = i.name
      if (i.type === t.PROPERTY) {
        if (t$1 === o[l]) return w
      } else if (i.type === t.BOOLEAN_ATTRIBUTE) {
        if (!!t$1 === o.hasAttribute(l)) return w
      } else if (i.type === t.ATTRIBUTE && o.getAttribute(l) === t$1 + '')
        return w
      return m(i), t$1
    }
  }
)

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const stringConverter = {
  fromAttribute(value) {
    return value ?? ''
  },
  toAttribute(value) {
    return value || null
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A validator that provides constraint validation that emulates `<input>` and
 * `<textarea>` validation.
 */
class TextFieldValidator extends Validator {
  computeValidity({ state, renderedControl }) {
    let inputOrTextArea = renderedControl
    if (isInputState(state) && !inputOrTextArea) {
      // Get cached <input> or create it.
      inputOrTextArea = this.inputControl || document.createElement('input')
      // Cache the <input> to re-use it next time.
      this.inputControl = inputOrTextArea
    } else if (!inputOrTextArea) {
      // Get cached <textarea> or create it.
      inputOrTextArea =
        this.textAreaControl || document.createElement('textarea')
      // Cache the <textarea> to re-use it next time.
      this.textAreaControl = inputOrTextArea
    }
    // Set this variable so we can check it for input-specific properties.
    const input = isInputState(state) ? inputOrTextArea : null
    // Set input's "type" first, since this can change the other properties
    if (input) {
      input.type = state.type
    }
    if (inputOrTextArea.value !== state.value) {
      // Only programmatically set the value if there's a difference. When using
      // the rendered control, the value will always be up to date. Setting the
      // property (even if it's the same string) will reset the internal <input>
      // dirty flag, making minlength and maxlength validation reset.
      inputOrTextArea.value = state.value
    }
    inputOrTextArea.required = state.required
    // The following IDLAttribute properties will always hydrate an attribute,
    // even if set to a the default value ('' or -1). The presence of the
    // attribute triggers constraint validation, so we must remove the attribute
    // when empty.
    if (input) {
      const inputState = state
      if (inputState.pattern) {
        input.pattern = inputState.pattern
      } else {
        input.removeAttribute('pattern')
      }
      if (inputState.min) {
        input.min = inputState.min
      } else {
        input.removeAttribute('min')
      }
      if (inputState.max) {
        input.max = inputState.max
      } else {
        input.removeAttribute('max')
      }
      if (inputState.step) {
        input.step = inputState.step
      } else {
        input.removeAttribute('step')
      }
    }
    // Use -1 to represent no minlength and maxlength, which is what the
    // platform input returns. However, it will throw an error if you try to
    // manually set it to -1.
    //
    // While the type is `number`, it may actually be `null` at runtime.
    // `null > -1` is true since `null` coerces to `0`, so we default null and
    // undefined to -1.
    //
    // We set attributes instead of properties since setting a property may
    // throw an out of bounds error in relation to the other property.
    // Attributes will not throw errors while the state is updating.
    if ((state.minLength ?? -1) > -1) {
      inputOrTextArea.setAttribute('minlength', String(state.minLength))
    } else {
      inputOrTextArea.removeAttribute('minlength')
    }
    if ((state.maxLength ?? -1) > -1) {
      inputOrTextArea.setAttribute('maxlength', String(state.maxLength))
    } else {
      inputOrTextArea.removeAttribute('maxlength')
    }
    return {
      validity: inputOrTextArea.validity,
      validationMessage: inputOrTextArea.validationMessage
    }
  }
  equals({ state: prev }, { state: next }) {
    // Check shared input and textarea properties
    const inputOrTextAreaEqual =
      prev.type === next.type &&
      prev.value === next.value &&
      prev.required === next.required &&
      prev.minLength === next.minLength &&
      prev.maxLength === next.maxLength
    if (!isInputState(prev) || !isInputState(next)) {
      // Both are textareas, all relevant properties are equal.
      return inputOrTextAreaEqual
    }
    // Check additional input-specific properties.
    return (
      inputOrTextAreaEqual &&
      prev.pattern === next.pattern &&
      prev.min === next.min &&
      prev.max === next.max &&
      prev.step === next.step
    )
  }
  copy({ state }) {
    // Don't hold a reference to the rendered control when copying since we
    // don't use it when checking if the state changed.
    return {
      state: isInputState(state)
        ? this.copyInput(state)
        : this.copyTextArea(state),
      renderedControl: null
    }
  }
  copyInput(state) {
    const { type, pattern, min, max, step } = state
    return {
      ...this.copySharedState(state),
      type,
      pattern,
      min,
      max,
      step
    }
  }
  copyTextArea(state) {
    return {
      ...this.copySharedState(state),
      type: state.type
    }
  }
  copySharedState({ value, required, minLength, maxLength }) {
    return { value, required, minLength, maxLength }
  }
}
function isInputState(state) {
  return state.type !== 'textarea'
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const textFieldBaseClass = mixinOnReportValidity(
  mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(s$1)))
)
/**
 * A text field component.
 *
 * @fires select {Event} The native `select` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
 * --bubbles
 * @fires change {Event} The native `change` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
 * --bubbles
 * @fires input {InputEvent} The native `input` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * --bubbles --composed
 */
class TextField extends textFieldBaseClass {
  constructor() {
    super(...arguments)
    /**
     * Gets or sets whether or not the text field is in a visually invalid state.
     *
     * This error state overrides the error state controlled by
     * `reportValidity()`.
     */
    this.error = false
    /**
     * The error message that replaces supporting text when `error` is true. If
     * `errorText` is an empty string, then the supporting text will continue to
     * show.
     *
     * This error message overrides the error message displayed by
     * `reportValidity()`.
     */
    this.errorText = ''
    /**
     * The floating Material label of the textfield component. It informs the user
     * about what information is requested for a text field. It is aligned with
     * the input text, is always visible, and it floats when focused or when text
     * is entered into the textfield. This label also sets accessibilty labels,
     * but the accessible label is overriden by `aria-label`.
     *
     * Learn more about floating labels from the Material Design guidelines:
     * https://m3.material.io/components/text-fields/guidelines
     */
    this.label = ''
    /**
     * Indicates that the user must specify a value for the input before the
     * owning form can be submitted and will render an error state when
     * `reportValidity()` is invoked when value is empty. Additionally the
     * floating label will render an asterisk `"*"` when true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
     */
    this.required = false
    /**
     * The current value of the text field. It is always a string.
     */
    this.value = ''
    /**
     * An optional prefix to display before the input value.
     */
    this.prefixText = ''
    /**
     * An optional suffix to display after the input value.
     */
    this.suffixText = ''
    /**
     * Whether or not the text field has a leading icon. Used for SSR.
     */
    this.hasLeadingIcon = false
    /**
     * Whether or not the text field has a trailing icon. Used for SSR.
     */
    this.hasTrailingIcon = false
    /**
     * Conveys additional information below the text field, such as how it should
     * be used.
     */
    this.supportingText = ''
    /**
     * Override the input text CSS `direction`. Useful for RTL languages that use
     * LTR notation for fractions.
     */
    this.textDirection = ''
    /**
     * The number of rows to display for a `type="textarea"` text field.
     * Defaults to 2.
     */
    this.rows = 2
    /**
     * The number of cols to display for a `type="textarea"` text field.
     * Defaults to 20.
     */
    this.cols = 20
    // <input> properties
    this.inputMode = ''
    /**
     * Defines the greatest value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
     */
    this.max = ''
    /**
     * The maximum number of characters a user can enter into the text field. Set
     * to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
     */
    this.maxLength = -1
    /**
     * Defines the most negative value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
     */
    this.min = ''
    /**
     * The minimum number of characters a user can enter into the text field. Set
     * to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
     */
    this.minLength = -1
    /**
     * When true, hide the spinner for `type="number"` text fields.
     */
    this.noSpinner = false
    /**
     * A regular expression that the text field's value must match to pass
     * constraint validation.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
     */
    this.pattern = ''
    /**
     * Defines the text displayed in the textfield when it has no value. Provides
     * a brief hint to the user as to the expected type of data that should be
     * entered into the control. Unlike `label`, the placeholder is not visible
     * and does not float when the textfield has a value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
     */
    this.placeholder = ''
    /**
     * Indicates whether or not a user should be able to edit the text field's
     * value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
     */
    this.readOnly = false
    /**
     * Indicates that input accepts multiple email addresses.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
     */
    this.multiple = false
    /**
     * Returns or sets the element's step attribute, which works with min and max
     * to limit the increments at which a numeric or date-time value can be set.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     */
    this.step = ''
    /**
     * The `<input>` type to use, defaults to "text". The type greatly changes how
     * the text field behaves.
     *
     * Text fields support a limited number of `<input>` types:
     *
     * - text
     * - textarea
     * - email
     * - number
     * - password
     * - search
     * - tel
     * - url
     *
     * See
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
     * for more details on each input type.
     */
    this.type = 'text'
    /**
     * Describes what, if any, type of autocomplete functionality the input
     * should provide.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    this.autocomplete = ''
    /**
     * Returns true when the text field has been interacted with. Native
     * validation errors only display in response to user interactions.
     */
    this.dirty = false
    this.focused = false
    /**
     * Whether or not a native error has been reported via `reportValidity()`.
     */
    this.nativeError = false
    /**
     * The validation message displayed from a native error via
     * `reportValidity()`.
     */
    this.nativeErrorText = ''
  }
  /**
   * Gets or sets the direction in which selection occurred.
   */
  get selectionDirection() {
    return this.getInputOrTextarea().selectionDirection
  }
  set selectionDirection(value) {
    this.getInputOrTextarea().selectionDirection = value
  }
  /**
   * Gets or sets the end position or offset of a text selection.
   */
  get selectionEnd() {
    return this.getInputOrTextarea().selectionEnd
  }
  set selectionEnd(value) {
    this.getInputOrTextarea().selectionEnd = value
  }
  /**
   * Gets or sets the starting position or offset of a text selection.
   */
  get selectionStart() {
    return this.getInputOrTextarea().selectionStart
  }
  set selectionStart(value) {
    this.getInputOrTextarea().selectionStart = value
  }
  /**
   * The text field's value as a number.
   */
  get valueAsNumber() {
    const input = this.getInput()
    if (!input) {
      return NaN
    }
    return input.valueAsNumber
  }
  set valueAsNumber(value) {
    const input = this.getInput()
    if (!input) {
      return
    }
    input.valueAsNumber = value
    this.value = input.value
  }
  /**
   * The text field's value as a Date.
   */
  get valueAsDate() {
    const input = this.getInput()
    if (!input) {
      return null
    }
    return input.valueAsDate
  }
  set valueAsDate(value) {
    const input = this.getInput()
    if (!input) {
      return
    }
    input.valueAsDate = value
    this.value = input.value
  }
  get hasError() {
    return this.error || this.nativeError
  }
  /**
   * Selects all the text in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
   */
  select() {
    this.getInputOrTextarea().select()
  }
  setRangeText(...args) {
    // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
    // Use spread syntax and type casting to ensure correct usage.
    this.getInputOrTextarea().setRangeText(...args)
    this.value = this.getInputOrTextarea().value
  }
  /**
   * Sets the start and end positions of a selection in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
   *
   * @param start The offset into the text field for the start of the selection.
   * @param end The offset into the text field for the end of the selection.
   * @param direction The direction in which the selection is performed.
   */
  setSelectionRange(start, end, direction) {
    this.getInputOrTextarea().setSelectionRange(start, end, direction)
  }
  /**
   * Decrements the value of a numeric type text field by `step` or `n` `step`
   * number of times.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
   *
   * @param stepDecrement The number of steps to decrement, defaults to 1.
   */
  stepDown(stepDecrement) {
    const input = this.getInput()
    if (!input) {
      return
    }
    input.stepDown(stepDecrement)
    this.value = input.value
  }
  /**
   * Increments the value of a numeric type text field by `step` or `n` `step`
   * number of times.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
   *
   * @param stepIncrement The number of steps to increment, defaults to 1.
   */
  stepUp(stepIncrement) {
    const input = this.getInput()
    if (!input) {
      return
    }
    input.stepUp(stepIncrement)
    this.value = input.value
  }
  /**
   * Reset the text field to its default value.
   */
  reset() {
    this.dirty = false
    this.value = this.getAttribute('value') ?? ''
    this.nativeError = false
    this.nativeErrorText = ''
  }
  attributeChangedCallback(attribute, newValue, oldValue) {
    if (attribute === 'value' && this.dirty) {
      // After user input, changing the value attribute no longer updates the
      // text field's value (until reset). This matches native <input> behavior.
      return
    }
    super.attributeChangedCallback(attribute, newValue, oldValue)
  }
  render() {
    const classes = {
      disabled: this.disabled,
      error: !this.disabled && this.hasError,
      textarea: this.type === 'textarea',
      'no-spinner': this.noSpinner
    }
    return x`
      <span class="text-field ${e$1(classes)}">
        ${this.renderField()}
      </span>
    `
  }
  updated(changedProperties) {
    // Keep changedProperties arg so that subclasses may call it
    // If a property such as `type` changes and causes the internal <input>
    // value to change without dispatching an event, re-sync it.
    const value = this.getInputOrTextarea().value
    if (this.value !== value) {
      // Note this is typically inefficient in updated() since it schedules
      // another update. However, it is needed for the <input> to fully render
      // before checking its value.
      this.value = value
    }
  }
  renderField() {
    return n$2`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === 'textarea'}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`
  }
  renderLeadingIcon() {
    return x`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `
  }
  renderTrailingIcon() {
    return x`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `
  }
  renderInputOrTextarea() {
    const style = { direction: this.textDirection }
    const ariaLabel = this.ariaLabel || this.label || T
    // lit-anaylzer `autocomplete` types are too strict
    // tslint:disable-next-line:no-any
    const autocomplete = this.autocomplete
    // These properties may be set to null if the attribute is removed, and
    // `null > -1` is incorrectly `true`.
    const hasMaxLength = (this.maxLength ?? -1) > -1
    const hasMinLength = (this.minLength ?? -1) > -1
    if (this.type === 'textarea') {
      return x`
        <textarea
          class="input"
          style=${o(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || T}
          ?disabled=${this.disabled}
          maxlength=${hasMaxLength ? this.maxLength : T}
          minlength=${hasMinLength ? this.minLength : T}
          placeholder=${this.placeholder || T}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `
    }
    const prefix = this.renderPrefix()
    const suffix = this.renderSuffix()
    // TODO(b/243805848): remove `as unknown as number` and `as any` once lit
    // analyzer is fixed
    // tslint:disable-next-line:no-any
    const inputMode = this.inputMode
    return x`
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${o(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || T}
          ?disabled=${this.disabled}
          inputmode=${inputMode || T}
          max=${this.max || T}
          maxlength=${hasMaxLength ? this.maxLength : T}
          min=${this.min || T}
          minlength=${hasMinLength ? this.minLength : T}
          pattern=${this.pattern || T}
          placeholder=${this.placeholder || T}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step || T}
          type=${this.type}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${suffix}
      </div>
    `
  }
  renderPrefix() {
    return this.renderAffix(this.prefixText, /* isSuffix */ false)
  }
  renderSuffix() {
    return this.renderAffix(this.suffixText, /* isSuffix */ true)
  }
  renderAffix(text, isSuffix) {
    if (!text) {
      return T
    }
    const classes = {
      suffix: isSuffix,
      prefix: !isSuffix
    }
    return x`<span class="${e$1(classes)}">${text}</span>`
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText
  }
  handleFocusChange() {
    // When calling focus() or reportValidity() during change, it's possible
    // for blur to be called after the new focus event. Rather than set
    // `this.focused` to true/false on focus/blur, we always set it to whether
    // or not the input itself is focused.
    this.focused = this.inputOrTextarea?.matches(':focus') ?? false
  }
  handleInput(event) {
    this.dirty = true
    this.value = event.target.value
  }
  redispatchEvent(event) {
    redispatchEvent(this, event)
  }
  getInputOrTextarea() {
    if (!this.inputOrTextarea) {
      // If the input is not yet defined, synchronously render.
      // e.g.
      // const textField = document.createElement('md-outlined-text-field');
      // document.body.appendChild(textField);
      // textField.focus(); // synchronously render
      this.connectedCallback()
      this.scheduleUpdate()
    }
    if (this.isUpdatePending) {
      // If there are pending updates, synchronously perform them. This ensures
      // that constraint validation properties (like `required`) are synced
      // before interacting with input APIs that depend on them.
      this.scheduleUpdate()
    }
    return this.inputOrTextarea
  }
  getInput() {
    if (this.type === 'textarea') {
      return null
    }
    return this.getInputOrTextarea()
  }
  handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0
    this.hasTrailingIcon = this.trailingIcons.length > 0
  }
  [getFormValue]() {
    return this.value
  }
  formResetCallback() {
    this.reset()
  }
  formStateRestoreCallback(state) {
    this.value = state
  }
  focus() {
    // Required for the case that the user slots a focusable element into the
    // leading icon slot such as an iconbutton due to how delegatesFocus works.
    this.getInputOrTextarea().focus()
  }
  [createValidator]() {
    return new TextFieldValidator(() => ({
      state: this,
      renderedControl: this.inputOrTextarea
    }))
  }
  [getValidityAnchor]() {
    return this.inputOrTextarea
  }
  [onReportValidity](invalidEvent) {
    // Prevent default pop-up behavior.
    invalidEvent?.preventDefault()
    const prevMessage = this.getErrorText()
    this.nativeError = !!invalidEvent
    this.nativeErrorText = this.validationMessage
    if (prevMessage === this.getErrorText()) {
      this.field?.reannounceError()
    }
  }
}
;(() => {
  requestUpdateOnAriaChange(TextField)
})()
/** @nocollapse */
TextField.shadowRootOptions = {
  ...s$1.shadowRootOptions,
  delegatesFocus: true
}
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  TextField.prototype,
  'error',
  void 0
)
__decorate(
  [n$5({ attribute: 'error-text' })],
  TextField.prototype,
  'errorText',
  void 0
)
__decorate([n$5()], TextField.prototype, 'label', void 0)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  TextField.prototype,
  'required',
  void 0
)
__decorate([n$5()], TextField.prototype, 'value', void 0)
__decorate(
  [n$5({ attribute: 'prefix-text' })],
  TextField.prototype,
  'prefixText',
  void 0
)
__decorate(
  [n$5({ attribute: 'suffix-text' })],
  TextField.prototype,
  'suffixText',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-leading-icon' })],
  TextField.prototype,
  'hasLeadingIcon',
  void 0
)
__decorate(
  [n$5({ type: Boolean, attribute: 'has-trailing-icon' })],
  TextField.prototype,
  'hasTrailingIcon',
  void 0
)
__decorate(
  [n$5({ attribute: 'supporting-text' })],
  TextField.prototype,
  'supportingText',
  void 0
)
__decorate(
  [n$5({ attribute: 'text-direction' })],
  TextField.prototype,
  'textDirection',
  void 0
)
__decorate([n$5({ type: Number })], TextField.prototype, 'rows', void 0)
__decorate([n$5({ type: Number })], TextField.prototype, 'cols', void 0)
__decorate([n$5({ reflect: true })], TextField.prototype, 'inputMode', void 0)
__decorate([n$5()], TextField.prototype, 'max', void 0)
__decorate([n$5({ type: Number })], TextField.prototype, 'maxLength', void 0)
__decorate([n$5()], TextField.prototype, 'min', void 0)
__decorate([n$5({ type: Number })], TextField.prototype, 'minLength', void 0)
__decorate(
  [n$5({ type: Boolean, attribute: 'no-spinner' })],
  TextField.prototype,
  'noSpinner',
  void 0
)
__decorate([n$5()], TextField.prototype, 'pattern', void 0)
__decorate(
  [n$5({ reflect: true, converter: stringConverter })],
  TextField.prototype,
  'placeholder',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  TextField.prototype,
  'readOnly',
  void 0
)
__decorate(
  [n$5({ type: Boolean, reflect: true })],
  TextField.prototype,
  'multiple',
  void 0
)
__decorate([n$5()], TextField.prototype, 'step', void 0)
__decorate([n$5({ reflect: true })], TextField.prototype, 'type', void 0)
__decorate(
  [n$5({ reflect: true })],
  TextField.prototype,
  'autocomplete',
  void 0
)
__decorate([r$4()], TextField.prototype, 'dirty', void 0)
__decorate([r$4()], TextField.prototype, 'focused', void 0)
__decorate([r$4()], TextField.prototype, 'nativeError', void 0)
__decorate([r$4()], TextField.prototype, 'nativeErrorText', void 0)
__decorate([e$5('.input')], TextField.prototype, 'inputOrTextarea', void 0)
__decorate([e$5('.field')], TextField.prototype, 'field', void 0)
__decorate(
  [o$4({ slot: 'leading-icon' })],
  TextField.prototype,
  'leadingIcons',
  void 0
)
__decorate(
  [o$4({ slot: 'trailing-icon' })],
  TextField.prototype,
  'trailingIcons',
  void 0
)

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled text field component.
 */
class FilledTextField extends TextField {
  constructor() {
    super(...arguments)
    this.fieldTag = s`md-filled-field`
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./textfield/internal/shared-styles.css.
const styles$2 = i$4`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
let MdFilledTextField = class MdFilledTextField extends FilledTextField {
  constructor() {
    super(...arguments)
    this.fieldTag = s`md-filled-field`
  }
}
MdFilledTextField.styles = [styles$2, styles$3]
MdFilledTextField = __decorate([t$3('md-filled-text-field')], MdFilledTextField)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./textfield/internal/outlined-styles.css.
const styles$1 = i$4`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}
`

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined text field component
 */
class OutlinedTextField extends TextField {
  constructor() {
    super(...arguments)
    this.fieldTag = s`md-outlined-field`
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
  constructor() {
    super(...arguments)
    this.fieldTag = s`md-outlined-field`
  }
}
MdOutlinedTextField.styles = [styles$2, styles$1]
MdOutlinedTextField = __decorate(
  [t$3('md-outlined-text-field')],
  MdOutlinedTextField
)

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./typography/md-typescale-styles.css.
const styles = i$4`@layer{.md-typescale-display-small,.md-typescale-display-small-prominent{font:var(--md-sys-typescale-display-small-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-display-small-size, 2.25rem)/var(--md-sys-typescale-display-small-line-height, 2.75rem) var(--md-sys-typescale-display-small-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-display-medium,.md-typescale-display-medium-prominent{font:var(--md-sys-typescale-display-medium-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-display-medium-size, 2.8125rem)/var(--md-sys-typescale-display-medium-line-height, 3.25rem) var(--md-sys-typescale-display-medium-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-display-large,.md-typescale-display-large-prominent{font:var(--md-sys-typescale-display-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-display-large-size, 3.5625rem)/var(--md-sys-typescale-display-large-line-height, 4rem) var(--md-sys-typescale-display-large-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-headline-small,.md-typescale-headline-small-prominent{font:var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-headline-small-size, 1.5rem)/var(--md-sys-typescale-headline-small-line-height, 2rem) var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-headline-medium,.md-typescale-headline-medium-prominent{font:var(--md-sys-typescale-headline-medium-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-headline-medium-size, 1.75rem)/var(--md-sys-typescale-headline-medium-line-height, 2.25rem) var(--md-sys-typescale-headline-medium-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-headline-large,.md-typescale-headline-large-prominent{font:var(--md-sys-typescale-headline-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-headline-large-size, 2rem)/var(--md-sys-typescale-headline-large-line-height, 2.5rem) var(--md-sys-typescale-headline-large-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-title-small,.md-typescale-title-small-prominent{font:var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-title-small-size, 0.875rem)/var(--md-sys-typescale-title-small-line-height, 1.25rem) var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-title-medium,.md-typescale-title-medium-prominent{font:var(--md-sys-typescale-title-medium-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-title-medium-size, 1rem)/var(--md-sys-typescale-title-medium-line-height, 1.5rem) var(--md-sys-typescale-title-medium-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-title-large,.md-typescale-title-large-prominent{font:var(--md-sys-typescale-title-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-title-large-size, 1.375rem)/var(--md-sys-typescale-title-large-line-height, 1.75rem) var(--md-sys-typescale-title-large-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-body-small,.md-typescale-body-small-prominent{font:var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-body-small-size, 0.75rem)/var(--md-sys-typescale-body-small-line-height, 1rem) var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-body-medium,.md-typescale-body-medium-prominent{font:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-body-medium-size, 0.875rem)/var(--md-sys-typescale-body-medium-line-height, 1.25rem) var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-body-large,.md-typescale-body-large-prominent{font:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-body-large-size, 1rem)/var(--md-sys-typescale-body-large-line-height, 1.5rem) var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-small,.md-typescale-label-small-prominent{font:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-small-size, 0.6875rem)/var(--md-sys-typescale-label-small-line-height, 1rem) var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-medium,.md-typescale-label-medium-prominent{font:var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-medium-size, 0.75rem)/var(--md-sys-typescale-label-medium-line-height, 1rem) var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-medium-prominent{font-weight:var(--md-sys-typescale-label-medium-weight-prominent, var(--md-ref-typeface-weight-bold, 700))}.md-typescale-label-large,.md-typescale-label-large-prominent{font:var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-large-size, 0.875rem)/var(--md-sys-typescale-label-large-line-height, 1.25rem) var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-large-prominent{font-weight:var(--md-sys-typescale-label-large-weight-prominent, var(--md-ref-typeface-weight-bold, 700))}}
`

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
/**
 * Utility methods for mathematical operations.
 */
/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
function signum(num) {
  if (num < 0) {
    return -1
  } else if (num === 0) {
    return 0
  } else {
    return 1
  }
}
/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
function lerp(start, stop, amount) {
  return (1.0 - amount) * start + amount * stop
}
/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampInt(min, max, input) {
  if (input < min) {
    return min
  } else if (input > max) {
    return max
  }
  return input
}
/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampDouble(min, max, input) {
  if (input < min) {
    return min
  } else if (input > max) {
    return max
  }
  return input
}
/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
function sanitizeDegreesDouble(degrees) {
  degrees = degrees % 360.0
  if (degrees < 0) {
    degrees = degrees + 360.0
  }
  return degrees
}
/**
 * Sign of direction change needed to travel from one angle to
 * another.
 *
 * For angles that are 180 degrees apart from each other, both
 * directions have the same travel distance, so either direction is
 * shortest. The value 1.0 is returned in this case.
 *
 * @param from The angle travel starts from, in degrees.
 * @param to The angle travel ends at, in degrees.
 * @return -1 if decreasing from leads to the shortest travel
 * distance, 1 if increasing from leads to the shortest travel
 * distance.
 */
function rotationDirection(from, to) {
  const increasingDifference = sanitizeDegreesDouble(to - from)
  return increasingDifference <= 180.0 ? 1.0 : -1.0
}
/**
 * Distance of two points on a circle, represented using degrees.
 */
function differenceDegrees(a, b) {
  return 180.0 - Math.abs(Math.abs(a - b) - 180.0)
}
/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
function matrixMultiply(row, matrix) {
  const a =
    row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2]
  const b =
    row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2]
  const c =
    row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2]
  return [a, b, c]
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */
const SRGB_TO_XYZ = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
]
const XYZ_TO_SRGB = [
  [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
  [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
  [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]
]
const WHITE_POINT_D65 = [95.047, 100.0, 108.883]
/**
 * Converts a color from RGB components to ARGB format.
 */
function argbFromRgb(red, green, blue) {
  return (
    ((255 << 24) |
      ((red & 255) << 16) |
      ((green & 255) << 8) |
      (blue & 255)) >>>
    0
  )
}
/**
 * Converts a color from linear RGB components to ARGB format.
 */
function argbFromLinrgb(linrgb) {
  const r = delinearized(linrgb[0])
  const g = delinearized(linrgb[1])
  const b = delinearized(linrgb[2])
  return argbFromRgb(r, g, b)
}
/**
 * Returns the red component of a color in ARGB format.
 */
function redFromArgb(argb) {
  return (argb >> 16) & 255
}
/**
 * Returns the green component of a color in ARGB format.
 */
function greenFromArgb(argb) {
  return (argb >> 8) & 255
}
/**
 * Returns the blue component of a color in ARGB format.
 */
function blueFromArgb(argb) {
  return argb & 255
}
/**
 * Converts a color from ARGB to XYZ.
 */
function argbFromXyz(x, y, z) {
  const matrix = XYZ_TO_SRGB
  const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z
  const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z
  const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z
  const r = delinearized(linearR)
  const g = delinearized(linearG)
  const b = delinearized(linearB)
  return argbFromRgb(r, g, b)
}
/**
 * Converts a color from XYZ to ARGB.
 */
function xyzFromArgb(argb) {
  const r = linearized(redFromArgb(argb))
  const g = linearized(greenFromArgb(argb))
  const b = linearized(blueFromArgb(argb))
  return matrixMultiply([r, g, b], SRGB_TO_XYZ)
}
/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
function argbFromLstar(lstar) {
  const y = yFromLstar(lstar)
  const component = delinearized(y)
  return argbFromRgb(component, component, component)
}
/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
function lstarFromArgb(argb) {
  const y = xyzFromArgb(argb)[1]
  return 116.0 * labF(y / 100.0) - 16.0
}
/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
function yFromLstar(lstar) {
  return 100.0 * labInvf((lstar + 16.0) / 116.0)
}
/**
 * Converts a Y value to an L* value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param y Y in XYZ
 * @return L* in L*a*b*
 */
function lstarFromY(y) {
  return labF(y / 100.0) * 116.0 - 16.0
}
/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
function linearized(rgbComponent) {
  const normalized = rgbComponent / 255.0
  if (normalized <= 0.040449936) {
    return (normalized / 12.92) * 100.0
  } else {
    return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0
  }
}
/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
function delinearized(rgbComponent) {
  const normalized = rgbComponent / 100.0
  let delinearized = 0.0
  if (normalized <= 0.0031308) {
    delinearized = normalized * 12.92
  } else {
    delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055
  }
  return clampInt(0, 255, Math.round(delinearized * 255.0))
}
/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
function whitePointD65() {
  return WHITE_POINT_D65
}
function labF(t) {
  const e = 216.0 / 24389.0
  const kappa = 24389.0 / 27.0
  if (t > e) {
    return Math.pow(t, 1.0 / 3.0)
  } else {
    return (kappa * t + 16) / 116
  }
}
function labInvf(ft) {
  const e = 216.0 / 24389.0
  const kappa = 24389.0 / 27.0
  const ft3 = ft * ft * ft
  if (ft3 > e) {
    return ft3
  } else {
    return (116 * ft - 16) / kappa
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 *
 * This class caches intermediate values of the CAM16 conversion process that
 * depend only on viewing conditions, enabling speed ups.
 */
class ViewingConditions {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(
    whitePoint = whitePointD65(),
    adaptingLuminance = ((200.0 / Math.PI) * yFromLstar(50.0)) / 100.0,
    backgroundLstar = 50.0,
    surround = 2.0,
    discountingIlluminant = false
  ) {
    const xyz = whitePoint
    const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461
    const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854
    const bW = xyz[0] * -0.002079 + xyz[1] * 0.048952 + xyz[2] * 0.953127
    const f = 0.8 + surround / 10.0
    const c =
      f >= 0.9
        ? lerp(0.59, 0.69, (f - 0.9) * 10.0)
        : lerp(0.525, 0.59, (f - 0.8) * 10.0)
    let d = discountingIlluminant
      ? 1.0
      : f * (1.0 - (1.0 / 3.6) * Math.exp((-adaptingLuminance - 42.0) / 92.0))
    d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d
    const nc = f
    const rgbD = [
      d * (100.0 / rW) + 1.0 - d,
      d * (100.0 / gW) + 1.0 - d,
      d * (100.0 / bW) + 1.0 - d
    ]
    const k = 1.0 / (5.0 * adaptingLuminance + 1.0)
    const k4 = k * k * k * k
    const k4F = 1.0 - k4
    const fl =
      k4 * adaptingLuminance +
      0.1 * k4F * k4F * Math.cbrt(5.0 * adaptingLuminance)
    const n = yFromLstar(backgroundLstar) / whitePoint[1]
    const z = 1.48 + Math.sqrt(n)
    const nbb = 0.725 / Math.pow(n, 0.2)
    const ncb = nbb
    const rgbAFactors = [
      Math.pow((fl * rgbD[0] * rW) / 100.0, 0.42),
      Math.pow((fl * rgbD[1] * gW) / 100.0, 0.42),
      Math.pow((fl * rgbD[2] * bW) / 100.0, 0.42)
    ]
    const rgbA = [
      (400.0 * rgbAFactors[0]) / (rgbAFactors[0] + 27.13),
      (400.0 * rgbAFactors[1]) / (rgbAFactors[1] + 27.13),
      (400.0 * rgbAFactors[2]) / (rgbAFactors[2] + 27.13)
    ]
    const aw = (2.0 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb
    return new ViewingConditions(
      n,
      aw,
      nbb,
      ncb,
      c,
      nc,
      rgbD,
      fl,
      Math.pow(fl, 0.25),
      z
    )
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
    this.n = n
    this.aw = aw
    this.nbb = nbb
    this.ncb = ncb
    this.c = c
    this.nc = nc
    this.rgbD = rgbD
    this.fl = fl
    this.fLRoot = fLRoot
    this.z = z
  }
}
/** sRGB-like viewing conditions.  */
ViewingConditions.DEFAULT = ViewingConditions.make()

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */
class Cam16 {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
    this.hue = hue
    this.chroma = chroma
    this.j = j
    this.q = q
    this.m = m
    this.s = s
    this.jstar = jstar
    this.astar = astar
    this.bstar = bstar
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(other) {
    const dJ = this.jstar - other.jstar
    const dA = this.astar - other.astar
    const dB = this.bstar - other.bstar
    const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB)
    const dE = 1.41 * Math.pow(dEPrime, 0.63)
    return dE
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(argb) {
    return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT)
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(argb, viewingConditions) {
    const red = (argb & 0x00ff0000) >> 16
    const green = (argb & 0x0000ff00) >> 8
    const blue = argb & 0x000000ff
    const redL = linearized(red)
    const greenL = linearized(green)
    const blueL = linearized(blue)
    const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL
    const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL
    const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL
    const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z
    const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z
    const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z
    const rD = viewingConditions.rgbD[0] * rC
    const gD = viewingConditions.rgbD[1] * gC
    const bD = viewingConditions.rgbD[2] * bC
    const rAF = Math.pow((viewingConditions.fl * Math.abs(rD)) / 100.0, 0.42)
    const gAF = Math.pow((viewingConditions.fl * Math.abs(gD)) / 100.0, 0.42)
    const bAF = Math.pow((viewingConditions.fl * Math.abs(bD)) / 100.0, 0.42)
    const rA = (signum(rD) * 400.0 * rAF) / (rAF + 27.13)
    const gA = (signum(gD) * 400.0 * gAF) / (gAF + 27.13)
    const bA = (signum(bD) * 400.0 * bAF) / (bAF + 27.13)
    const a = (11.0 * rA + -12.0 * gA + bA) / 11.0
    const b = (rA + gA - 2.0 * bA) / 9.0
    const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0
    const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0
    const atan2 = Math.atan2(b, a)
    const atanDegrees = (atan2 * 180.0) / Math.PI
    const hue =
      atanDegrees < 0
        ? atanDegrees + 360.0
        : atanDegrees >= 360
        ? atanDegrees - 360.0
        : atanDegrees
    const hueRadians = (hue * Math.PI) / 180.0
    const ac = p2 * viewingConditions.nbb
    const j =
      100.0 *
      Math.pow(
        ac / viewingConditions.aw,
        viewingConditions.c * viewingConditions.z
      )
    const q =
      (4.0 / viewingConditions.c) *
      Math.sqrt(j / 100.0) *
      (viewingConditions.aw + 4.0) *
      viewingConditions.fLRoot
    const huePrime = hue < 20.14 ? hue + 360 : hue
    const eHue = 0.25 * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8)
    const p1 =
      (50000.0 / 13.0) * eHue * viewingConditions.nc * viewingConditions.ncb
    const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305)
    const alpha =
      Math.pow(t, 0.9) *
      Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73)
    const c = alpha * Math.sqrt(j / 100.0)
    const m = c * viewingConditions.fLRoot
    const s =
      50.0 *
      Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0))
    const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j)
    const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m)
    const astar = mstar * Math.cos(hueRadians)
    const bstar = mstar * Math.sin(hueRadians)
    return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar)
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(j, c, h) {
    return Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT)
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(j, c, h, viewingConditions) {
    const q =
      (4.0 / viewingConditions.c) *
      Math.sqrt(j / 100.0) *
      (viewingConditions.aw + 4.0) *
      viewingConditions.fLRoot
    const m = c * viewingConditions.fLRoot
    const alpha = c / Math.sqrt(j / 100.0)
    const s =
      50.0 *
      Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0))
    const hueRadians = (h * Math.PI) / 180.0
    const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j)
    const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m)
    const astar = mstar * Math.cos(hueRadians)
    const bstar = mstar * Math.sin(hueRadians)
    return new Cam16(h, c, j, q, m, s, jstar, astar, bstar)
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(jstar, astar, bstar) {
    return Cam16.fromUcsInViewingConditions(
      jstar,
      astar,
      bstar,
      ViewingConditions.DEFAULT
    )
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
    const a = astar
    const b = bstar
    const m = Math.sqrt(a * a + b * b)
    const M = (Math.exp(m * 0.0228) - 1.0) / 0.0228
    const c = M / viewingConditions.fLRoot
    let h = Math.atan2(b, a) * (180.0 / Math.PI)
    if (h < 0.0) {
      h += 360.0
    }
    const j = jstar / (1 - (jstar - 100) * 0.007)
    return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions)
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(ViewingConditions.DEFAULT)
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(viewingConditions) {
    const alpha =
      this.chroma === 0.0 || this.j === 0.0
        ? 0.0
        : this.chroma / Math.sqrt(this.j / 100.0)
    const t = Math.pow(
      alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73),
      1.0 / 0.9
    )
    const hRad = (this.hue * Math.PI) / 180.0
    const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8)
    const ac =
      viewingConditions.aw *
      Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z)
    const p1 =
      eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb
    const p2 = ac / viewingConditions.nbb
    const hSin = Math.sin(hRad)
    const hCos = Math.cos(hRad)
    const gamma =
      (23.0 * (p2 + 0.305) * t) /
      (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin)
    const a = gamma * hCos
    const b = gamma * hSin
    const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0
    const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0
    const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0
    const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)))
    const rC =
      signum(rA) * (100.0 / viewingConditions.fl) * Math.pow(rCBase, 1.0 / 0.42)
    const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)))
    const gC =
      signum(gA) * (100.0 / viewingConditions.fl) * Math.pow(gCBase, 1.0 / 0.42)
    const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)))
    const bC =
      signum(bA) * (100.0 / viewingConditions.fl) * Math.pow(bCBase, 1.0 / 0.42)
    const rF = rC / viewingConditions.rgbD[0]
    const gF = gC / viewingConditions.rgbD[1]
    const bF = bC / viewingConditions.rgbD[2]
    const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF
    const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF
    const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF
    const argb = argbFromXyz(x, y, z)
    return argb
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(x, y, z, viewingConditions) {
    // Transform XYZ to 'cone'/'rgb' responses
    const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z
    const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z
    const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z
    // Discount illuminant
    const rD = viewingConditions.rgbD[0] * rC
    const gD = viewingConditions.rgbD[1] * gC
    const bD = viewingConditions.rgbD[2] * bC
    // chromatic adaptation
    const rAF = Math.pow((viewingConditions.fl * Math.abs(rD)) / 100.0, 0.42)
    const gAF = Math.pow((viewingConditions.fl * Math.abs(gD)) / 100.0, 0.42)
    const bAF = Math.pow((viewingConditions.fl * Math.abs(bD)) / 100.0, 0.42)
    const rA = (signum(rD) * 400.0 * rAF) / (rAF + 27.13)
    const gA = (signum(gD) * 400.0 * gAF) / (gAF + 27.13)
    const bA = (signum(bD) * 400.0 * bAF) / (bAF + 27.13)
    // redness-greenness
    const a = (11.0 * rA + -12.0 * gA + bA) / 11.0
    // yellowness-blueness
    const b = (rA + gA - 2.0 * bA) / 9.0
    // auxiliary components
    const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0
    const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0
    // hue
    const atan2 = Math.atan2(b, a)
    const atanDegrees = (atan2 * 180.0) / Math.PI
    const hue =
      atanDegrees < 0
        ? atanDegrees + 360.0
        : atanDegrees >= 360
        ? atanDegrees - 360
        : atanDegrees
    const hueRadians = (hue * Math.PI) / 180.0
    // achromatic response to color
    const ac = p2 * viewingConditions.nbb
    // CAM16 lightness and brightness
    const J =
      100.0 *
      Math.pow(
        ac / viewingConditions.aw,
        viewingConditions.c * viewingConditions.z
      )
    const Q =
      (4.0 / viewingConditions.c) *
      Math.sqrt(J / 100.0) *
      (viewingConditions.aw + 4.0) *
      viewingConditions.fLRoot
    const huePrime = hue < 20.14 ? hue + 360 : hue
    const eHue =
      (1.0 / 4.0) * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8)
    const p1 =
      (50000.0 / 13.0) * eHue * viewingConditions.nc * viewingConditions.ncb
    const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305)
    const alpha =
      Math.pow(t, 0.9) *
      Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73)
    // CAM16 chroma, colorfulness, chroma
    const C = alpha * Math.sqrt(J / 100.0)
    const M = C * viewingConditions.fLRoot
    const s =
      50.0 *
      Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0))
    // CAM16-UCS components
    const jstar = ((1.0 + 100.0 * 0.007) * J) / (1.0 + 0.007 * J)
    const mstar = Math.log(1.0 + 0.0228 * M) / 0.0228
    const astar = mstar * Math.cos(hueRadians)
    const bstar = mstar * Math.sin(hueRadians)
    return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar)
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(viewingConditions) {
    const alpha =
      this.chroma === 0.0 || this.j === 0.0
        ? 0.0
        : this.chroma / Math.sqrt(this.j / 100.0)
    const t = Math.pow(
      alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73),
      1.0 / 0.9
    )
    const hRad = (this.hue * Math.PI) / 180.0
    const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8)
    const ac =
      viewingConditions.aw *
      Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z)
    const p1 =
      eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb
    const p2 = ac / viewingConditions.nbb
    const hSin = Math.sin(hRad)
    const hCos = Math.cos(hRad)
    const gamma =
      (23.0 * (p2 + 0.305) * t) / (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin)
    const a = gamma * hCos
    const b = gamma * hSin
    const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0
    const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0
    const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0
    const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)))
    const rC =
      signum(rA) * (100.0 / viewingConditions.fl) * Math.pow(rCBase, 1.0 / 0.42)
    const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)))
    const gC =
      signum(gA) * (100.0 / viewingConditions.fl) * Math.pow(gCBase, 1.0 / 0.42)
    const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)))
    const bC =
      signum(bA) * (100.0 / viewingConditions.fl) * Math.pow(bCBase, 1.0 / 0.42)
    const rF = rC / viewingConditions.rgbD[0]
    const gF = gC / viewingConditions.rgbD[1]
    const bF = bC / viewingConditions.rgbD[2]
    const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF
    const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF
    const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF
    return [x, y, z]
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * A class that solves the HCT equation.
 */
class HctSolver {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(angle) {
    return (angle + Math.PI * 8) % (Math.PI * 2)
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(rgbComponent) {
    const normalized = rgbComponent / 100.0
    let delinearized = 0.0
    if (normalized <= 0.0031308) {
      delinearized = normalized * 12.92
    } else {
      delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055
    }
    return delinearized * 255.0
  }
  static chromaticAdaptation(component) {
    const af = Math.pow(Math.abs(component), 0.42)
    return (signum(component) * 400.0 * af) / (af + 27.13)
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(linrgb) {
    const scaledDiscount = matrixMultiply(
      linrgb,
      HctSolver.SCALED_DISCOUNT_FROM_LINRGB
    )
    const rA = HctSolver.chromaticAdaptation(scaledDiscount[0])
    const gA = HctSolver.chromaticAdaptation(scaledDiscount[1])
    const bA = HctSolver.chromaticAdaptation(scaledDiscount[2])
    // redness-greenness
    const a = (11.0 * rA + -12.0 * gA + bA) / 11.0
    // yellowness-blueness
    const b = (rA + gA - 2.0 * bA) / 9.0
    return Math.atan2(b, a)
  }
  static areInCyclicOrder(a, b, c) {
    const deltaAB = HctSolver.sanitizeRadians(b - a)
    const deltaAC = HctSolver.sanitizeRadians(c - a)
    return deltaAB < deltaAC
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(source, mid, target) {
    return (mid - source) / (target - source)
  }
  static lerpPoint(source, t, target) {
    return [
      source[0] + (target[0] - source[0]) * t,
      source[1] + (target[1] - source[1]) * t,
      source[2] + (target[2] - source[2]) * t
    ]
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(source, coordinate, target, axis) {
    const t = HctSolver.intercept(source[axis], coordinate, target[axis])
    return HctSolver.lerpPoint(source, t, target)
  }
  static isBounded(x) {
    return 0.0 <= x && x <= 100.0
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(y, n) {
    const kR = HctSolver.Y_FROM_LINRGB[0]
    const kG = HctSolver.Y_FROM_LINRGB[1]
    const kB = HctSolver.Y_FROM_LINRGB[2]
    const coordA = n % 4 <= 1 ? 0.0 : 100.0
    const coordB = n % 2 === 0 ? 0.0 : 100.0
    if (n < 4) {
      const g = coordA
      const b = coordB
      const r = (y - g * kG - b * kB) / kR
      if (HctSolver.isBounded(r)) {
        return [r, g, b]
      } else {
        return [-1.0, -1.0, -1.0]
      }
    } else if (n < 8) {
      const b = coordA
      const r = coordB
      const g = (y - r * kR - b * kB) / kG
      if (HctSolver.isBounded(g)) {
        return [r, g, b]
      } else {
        return [-1.0, -1.0, -1.0]
      }
    } else {
      const r = coordA
      const g = coordB
      const b = (y - r * kR - g * kG) / kB
      if (HctSolver.isBounded(b)) {
        return [r, g, b]
      } else {
        return [-1.0, -1.0, -1.0]
      }
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(y, targetHue) {
    let left = [-1.0, -1.0, -1.0]
    let right = left
    let leftHue = 0.0
    let rightHue = 0.0
    let initialized = false
    let uncut = true
    for (let n = 0; n < 12; n++) {
      const mid = HctSolver.nthVertex(y, n)
      if (mid[0] < 0) {
        continue
      }
      const midHue = HctSolver.hueOf(mid)
      if (!initialized) {
        left = mid
        right = mid
        leftHue = midHue
        rightHue = midHue
        initialized = true
        continue
      }
      if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
        uncut = false
        if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
          right = mid
          rightHue = midHue
        } else {
          left = mid
          leftHue = midHue
        }
      }
    }
    return [left, right]
  }
  static midpoint(a, b) {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]
  }
  static criticalPlaneBelow(x) {
    return Math.floor(x - 0.5)
  }
  static criticalPlaneAbove(x) {
    return Math.ceil(x - 0.5)
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(y, targetHue) {
    const segment = HctSolver.bisectToSegment(y, targetHue)
    let left = segment[0]
    let leftHue = HctSolver.hueOf(left)
    let right = segment[1]
    for (let axis = 0; axis < 3; axis++) {
      if (left[axis] !== right[axis]) {
        let lPlane = -1
        let rPlane = 255
        if (left[axis] < right[axis]) {
          lPlane = HctSolver.criticalPlaneBelow(
            HctSolver.trueDelinearized(left[axis])
          )
          rPlane = HctSolver.criticalPlaneAbove(
            HctSolver.trueDelinearized(right[axis])
          )
        } else {
          lPlane = HctSolver.criticalPlaneAbove(
            HctSolver.trueDelinearized(left[axis])
          )
          rPlane = HctSolver.criticalPlaneBelow(
            HctSolver.trueDelinearized(right[axis])
          )
        }
        for (let i = 0; i < 8; i++) {
          if (Math.abs(rPlane - lPlane) <= 1) {
            break
          } else {
            const mPlane = Math.floor((lPlane + rPlane) / 2.0)
            const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane]
            const mid = HctSolver.setCoordinate(
              left,
              midPlaneCoordinate,
              right,
              axis
            )
            const midHue = HctSolver.hueOf(mid)
            if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
              right = mid
              rPlane = mPlane
            } else {
              left = mid
              leftHue = midHue
              lPlane = mPlane
            }
          }
        }
      }
    }
    return HctSolver.midpoint(left, right)
  }
  static inverseChromaticAdaptation(adapted) {
    const adaptedAbs = Math.abs(adapted)
    const base = Math.max(0, (27.13 * adaptedAbs) / (400.0 - adaptedAbs))
    return signum(adapted) * Math.pow(base, 1.0 / 0.42)
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(hueRadians, chroma, y) {
    // Initial estimate of j.
    let j = Math.sqrt(y) * 11.0
    // ===========================================================
    // Operations inlined from Cam16 to avoid repeated calculation
    // ===========================================================
    const viewingConditions = ViewingConditions.DEFAULT
    const tInnerCoeff =
      1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73)
    const eHue = 0.25 * (Math.cos(hueRadians + 2.0) + 3.8)
    const p1 =
      eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb
    const hSin = Math.sin(hueRadians)
    const hCos = Math.cos(hueRadians)
    for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
      // ===========================================================
      // Operations inlined from Cam16 to avoid repeated calculation
      // ===========================================================
      const jNormalized = j / 100.0
      const alpha =
        chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(jNormalized)
      const t = Math.pow(alpha * tInnerCoeff, 1.0 / 0.9)
      const ac =
        viewingConditions.aw *
        Math.pow(jNormalized, 1.0 / viewingConditions.c / viewingConditions.z)
      const p2 = ac / viewingConditions.nbb
      const gamma =
        (23.0 * (p2 + 0.305) * t) /
        (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin)
      const a = gamma * hCos
      const b = gamma * hSin
      const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0
      const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0
      const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0
      const rCScaled = HctSolver.inverseChromaticAdaptation(rA)
      const gCScaled = HctSolver.inverseChromaticAdaptation(gA)
      const bCScaled = HctSolver.inverseChromaticAdaptation(bA)
      const linrgb = matrixMultiply(
        [rCScaled, gCScaled, bCScaled],
        HctSolver.LINRGB_FROM_SCALED_DISCOUNT
      )
      // ===========================================================
      // Operations inlined from Cam16 to avoid repeated calculation
      // ===========================================================
      if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
        return 0
      }
      const kR = HctSolver.Y_FROM_LINRGB[0]
      const kG = HctSolver.Y_FROM_LINRGB[1]
      const kB = HctSolver.Y_FROM_LINRGB[2]
      const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2]
      if (fnj <= 0) {
        return 0
      }
      if (iterationRound === 4 || Math.abs(fnj - y) < 0.002) {
        if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
          return 0
        }
        return argbFromLinrgb(linrgb)
      }
      // Iterates with Newton method,
      // Using 2 * fn(j) / j as the approximation of fn'(j)
      j = j - ((fnj - y) * j) / (2 * fnj)
    }
    return 0
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(hueDegrees, chroma, lstar) {
    if (chroma < 0.0001 || lstar < 0.0001 || lstar > 99.9999) {
      return argbFromLstar(lstar)
    }
    hueDegrees = sanitizeDegreesDouble(hueDegrees)
    const hueRadians = (hueDegrees / 180) * Math.PI
    const y = yFromLstar(lstar)
    const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y)
    if (exactAnswer !== 0) {
      return exactAnswer
    }
    const linrgb = HctSolver.bisectToLimit(y, hueRadians)
    return argbFromLinrgb(linrgb)
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(hueDegrees, chroma, lstar) {
    return Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar))
  }
}
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
  [0.001200833568784504, 0.002389694492170889, 0.0002795742885861124],
  [0.0005891086651375999, 0.0029785502573438758, 0.0003270666104008398],
  [0.00010146692491640572, 0.0005364214359186694, 0.0032979401770712076]
]
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
  [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
  [-271.815969077903, 559.6580465940733, -32.46047482791194],
  [1.9622899599665666, -57.173814538844006, 308.7233197812385]
]
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722]
HctSolver.CRITICAL_PLANES = [
  0.015176349177441876, 0.045529047532325624, 0.07588174588720938,
  0.10623444424209313, 0.13658714259697685, 0.16693984095186062,
  0.19729253930674434, 0.2276452376616281, 0.2579979360165119,
  0.28835063437139563, 0.3188300904430532, 0.350925934958123,
  0.3848314933096426, 0.42057480301049466, 0.458183274052838,
  0.4976837250274023, 0.5391024159806381, 0.5824650784040898,
  0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786,
  0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039,
  1.0642236851973577, 1.1283421258858297, 1.1946592148522128,
  1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415,
  1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
  1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551,
  2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007,
  2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997,
  3.0131901897720907, 3.1301480604002863, 3.2497121605402226,
  3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311,
  3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941,
  4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298,
  5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865,
  5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475,
  6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611,
  7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345,
  7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703,
  8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839,
  9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024,
  10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008,
  11.569896988756009, 11.825048221409341, 12.083451977536606,
  12.345119996613247, 12.610063955123938, 12.878295467455942,
  13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513,
  14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273,
  15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634,
  16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625,
  17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138,
  19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067,
  20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322,
  22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462,
  23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558,
  25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664,
  26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597,
  28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845,
  30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785,
  32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603,
  33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207,
  35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789,
  37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697,
  39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194,
  42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913,
  44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209,
  46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468,
  48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984,
  51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392,
  53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934,
  56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621,
  58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585,
  61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914,
  64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224,
  66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093,
  69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312,
  72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136,
  75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167,
  78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934,
  81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372,
  85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819,
  88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518,
  91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902,
  95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044,
  98.6670533535366, 99.55452497210776
]

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */
/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
class Hct {
  static from(hue, chroma, tone) {
    return new Hct(HctSolver.solveToInt(hue, chroma, tone))
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(argb) {
    return new Hct(argb)
  }
  toInt() {
    return this.argb
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(newHue) {
    this.setInternalState(
      HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone)
    )
  }
  get chroma() {
    return this.internalChroma
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(newChroma) {
    this.setInternalState(
      HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone)
    )
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(newTone) {
    this.setInternalState(
      HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone)
    )
  }
  constructor(argb) {
    this.argb = argb
    const cam = Cam16.fromInt(argb)
    this.internalHue = cam.hue
    this.internalChroma = cam.chroma
    this.internalTone = lstarFromArgb(argb)
    this.argb = argb
  }
  setInternalState(argb) {
    const cam = Cam16.fromInt(argb)
    this.internalHue = cam.hue
    this.internalChroma = cam.chroma
    this.internalTone = lstarFromArgb(argb)
    this.argb = argb
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(vc) {
    // 1. Use CAM16 to find XYZ coordinates of color in specified VC.
    const cam = Cam16.fromInt(this.toInt())
    const viewedInVc = cam.xyzInViewingConditions(vc)
    // 2. Create CAM16 of those XYZ coordinates in default VC.
    const recastInVc = Cam16.fromXyzInViewingConditions(
      viewedInVc[0],
      viewedInVc[1],
      viewedInVc[2],
      ViewingConditions.make()
    )
    // 3. Create HCT from:
    // - CAM16 using default VC with XYZ coordinates in specified VC.
    // - L* converted from Y in XYZ coordinates in specified VC.
    const recastHct = Hct.from(
      recastInVc.hue,
      recastInVc.chroma,
      lstarFromY(viewedInVc[1])
    )
    return recastHct
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Functions for blending in HCT and CAM16.
 */
class Blend {
  /**
   * Blend the design color's HCT hue towards the key color's HCT
   * hue, in a way that leaves the original color recognizable and
   * recognizably shifted towards the key color.
   *
   * @param designColor ARGB representation of an arbitrary color.
   * @param sourceColor ARGB representation of the main theme color.
   * @return The design color with a hue shifted towards the
   * system's color, a slightly warmer/cooler variant of the design
   * color's hue.
   */
  static harmonize(designColor, sourceColor) {
    const fromHct = Hct.fromInt(designColor)
    const toHct = Hct.fromInt(sourceColor)
    const differenceDegrees$1 = differenceDegrees(fromHct.hue, toHct.hue)
    const rotationDegrees = Math.min(differenceDegrees$1 * 0.5, 15.0)
    const outputHue = sanitizeDegreesDouble(
      fromHct.hue + rotationDegrees * rotationDirection(fromHct.hue, toHct.hue)
    )
    return Hct.from(outputHue, fromHct.chroma, fromHct.tone).toInt()
  }
  /**
   * Blends hue from one color into another. The chroma and tone of
   * the original color are maintained.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, with a hue blended towards to. Chroma and tone
   * are constant.
   */
  static hctHue(from, to, amount) {
    const ucs = Blend.cam16Ucs(from, to, amount)
    const ucsCam = Cam16.fromInt(ucs)
    const fromCam = Cam16.fromInt(from)
    const blended = Hct.from(ucsCam.hue, fromCam.chroma, lstarFromArgb(from))
    return blended.toInt()
  }
  /**
   * Blend in CAM16-UCS space.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, blended towards to. Hue, chroma, and tone will
   * change.
   */
  static cam16Ucs(from, to, amount) {
    const fromCam = Cam16.fromInt(from)
    const toCam = Cam16.fromInt(to)
    const fromJ = fromCam.jstar
    const fromA = fromCam.astar
    const fromB = fromCam.bstar
    const toJ = toCam.jstar
    const toA = toCam.astar
    const toB = toCam.bstar
    const jstar = fromJ + (toJ - fromJ) * amount
    const astar = fromA + (toA - fromA) * amount
    const bstar = fromB + (toB - fromB) * amount
    return Cam16.fromUcs(jstar, astar, bstar).toInt()
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Utility methods for calculating contrast given two colors, or calculating a
 * color given one color and a contrast ratio.
 *
 * Contrast ratio is calculated using XYZ's Y. When linearized to match human
 * perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
 * lightness of a color.
 *
 * Methods refer to tone, T in the the HCT color space.
 * Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
 * space.
 */
class Contrast {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(toneA, toneB) {
    toneA = clampDouble(0.0, 100.0, toneA)
    toneB = clampDouble(0.0, 100.0, toneB)
    return Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB))
  }
  static ratioOfYs(y1, y2) {
    const lighter = y1 > y2 ? y1 : y2
    const darker = lighter === y2 ? y1 : y2
    return (lighter + 5.0) / (darker + 5.0)
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(tone, ratio) {
    if (tone < 0.0 || tone > 100.0) {
      return -1.0
    }
    const darkY = yFromLstar(tone)
    const lightY = ratio * (darkY + 5.0) - 5.0
    const realContrast = Contrast.ratioOfYs(lightY, darkY)
    const delta = Math.abs(realContrast - ratio)
    if (realContrast < ratio && delta > 0.04) {
      return -1
    }
    // Ensure gamut mapping, which requires a 'range' on tone, will still result
    // the correct ratio by darkening slightly.
    const returnValue = lstarFromY(lightY) + 0.4
    if (returnValue < 0 || returnValue > 100) {
      return -1
    }
    return returnValue
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(tone, ratio) {
    if (tone < 0.0 || tone > 100.0) {
      return -1.0
    }
    const lightY = yFromLstar(tone)
    const darkY = (lightY + 5.0) / ratio - 5.0
    const realContrast = Contrast.ratioOfYs(lightY, darkY)
    const delta = Math.abs(realContrast - ratio)
    if (realContrast < ratio && delta > 0.04) {
      return -1
    }
    // Ensure gamut mapping, which requires a 'range' on tone, will still result
    // the correct ratio by darkening slightly.
    const returnValue = lstarFromY(darkY) - 0.4
    if (returnValue < 0 || returnValue > 100) {
      return -1
    }
    return returnValue
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(tone, ratio) {
    const lighterSafe = Contrast.lighter(tone, ratio)
    return lighterSafe < 0.0 ? 100.0 : lighterSafe
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(tone, ratio) {
    const darkerSafe = Contrast.darker(tone, ratio)
    return darkerSafe < 0.0 ? 0.0 : darkerSafe
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Check and/or fix universally disliked colors.
 * Color science studies of color preference indicate universal distaste for
 * dark yellow-greens, and also show this is correlated to distate for
 * biological waste and rotting food.
 *
 * See Palmer and Schloss, 2010 or Schloss and Palmer's Chapter 21 in Handbook
 * of Color Psychology (2015).
 */
class DislikeAnalyzer {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(hct) {
    const huePasses =
      Math.round(hct.hue) >= 90.0 && Math.round(hct.hue) <= 111.0
    const chromaPasses = Math.round(hct.chroma) > 16.0
    const tonePasses = Math.round(hct.tone) < 65.0
    return huePasses && chromaPasses && tonePasses
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(hct) {
    if (DislikeAnalyzer.isDisliked(hct)) {
      return Hct.from(hct.hue, hct.chroma, 70.0)
    }
    return hct
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color that adjusts itself based on UI state provided by DynamicScheme.
 *
 * Colors without backgrounds do not change tone when contrast changes. Colors
 * with backgrounds become closer to their background as contrast lowers, and
 * further when contrast increases.
 *
 * Prefer static constructors. They require either a hexcode, a palette and
 * tone, or a hue and chroma. Optionally, they can provide a background
 * DynamicColor.
 */
class DynamicColor {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(args) {
    return new DynamicColor(
      args.name ?? '',
      args.palette,
      args.tone,
      args.isBackground ?? false,
      args.background,
      args.secondBackground,
      args.contrastCurve,
      args.toneDeltaPair
    )
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(
    name,
    palette,
    tone,
    isBackground,
    background,
    secondBackground,
    contrastCurve,
    toneDeltaPair
  ) {
    this.name = name
    this.palette = palette
    this.tone = tone
    this.isBackground = isBackground
    this.background = background
    this.secondBackground = secondBackground
    this.contrastCurve = contrastCurve
    this.toneDeltaPair = toneDeltaPair
    this.hctCache = new Map()
    if (!background && secondBackground) {
      throw new Error(
        `Color ${name} has secondBackground` +
          `defined, but background is not defined.`
      )
    }
    if (!background && contrastCurve) {
      throw new Error(
        `Color ${name} has contrastCurve` +
          `defined, but background is not defined.`
      )
    }
    if (background && !contrastCurve) {
      throw new Error(
        `Color ${name} has background` +
          `defined, but contrastCurve is not defined.`
      )
    }
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(scheme) {
    return this.getHct(scheme).toInt()
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(scheme) {
    const cachedAnswer = this.hctCache.get(scheme)
    if (cachedAnswer != null) {
      return cachedAnswer
    }
    const tone = this.getTone(scheme)
    const answer = this.palette(scheme).getHct(tone)
    if (this.hctCache.size > 4) {
      this.hctCache.clear()
    }
    this.hctCache.set(scheme, answer)
    return answer
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(scheme) {
    const decreasingContrast = scheme.contrastLevel < 0
    // Case 1: dual foreground, pair of colors with delta constraint.
    if (this.toneDeltaPair) {
      const toneDeltaPair = this.toneDeltaPair(scheme)
      const roleA = toneDeltaPair.roleA
      const roleB = toneDeltaPair.roleB
      const delta = toneDeltaPair.delta
      const polarity = toneDeltaPair.polarity
      const stayTogether = toneDeltaPair.stayTogether
      const bg = this.background(scheme)
      const bgTone = bg.getTone(scheme)
      const aIsNearer =
        polarity === 'nearer' ||
        (polarity === 'lighter' && !scheme.isDark) ||
        (polarity === 'darker' && scheme.isDark)
      const nearer = aIsNearer ? roleA : roleB
      const farther = aIsNearer ? roleB : roleA
      const amNearer = this.name === nearer.name
      const expansionDir = scheme.isDark ? 1 : -1
      // 1st round: solve to min, each
      const nContrast = nearer.contrastCurve.getContrast(scheme.contrastLevel)
      const fContrast = farther.contrastCurve.getContrast(scheme.contrastLevel)
      // If a color is good enough, it is not adjusted.
      // Initial and adjusted tones for `nearer`
      const nInitialTone = nearer.tone(scheme)
      let nTone =
        Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast
          ? nInitialTone
          : DynamicColor.foregroundTone(bgTone, nContrast)
      // Initial and adjusted tones for `farther`
      const fInitialTone = farther.tone(scheme)
      let fTone =
        Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast
          ? fInitialTone
          : DynamicColor.foregroundTone(bgTone, fContrast)
      if (decreasingContrast) {
        // If decreasing contrast, adjust color to the "bare minimum"
        // that satisfies contrast.
        nTone = DynamicColor.foregroundTone(bgTone, nContrast)
        fTone = DynamicColor.foregroundTone(bgTone, fContrast)
      }
      if ((fTone - nTone) * expansionDir >= delta);
      else {
        // 2nd round: expand farther to match delta.
        fTone = clampDouble(0, 100, nTone + delta * expansionDir)
        if ((fTone - nTone) * expansionDir >= delta);
        else {
          // 3rd round: contract nearer to match delta.
          nTone = clampDouble(0, 100, fTone - delta * expansionDir)
        }
      }
      // Avoids the 50-59 awkward zone.
      if (50 <= nTone && nTone < 60) {
        // If `nearer` is in the awkward zone, move it away, together with
        // `farther`.
        if (expansionDir > 0) {
          nTone = 60
          fTone = Math.max(fTone, nTone + delta * expansionDir)
        } else {
          nTone = 49
          fTone = Math.min(fTone, nTone + delta * expansionDir)
        }
      } else if (50 <= fTone && fTone < 60) {
        if (stayTogether) {
          // Fixes both, to avoid two colors on opposite sides of the "awkward
          // zone".
          if (expansionDir > 0) {
            nTone = 60
            fTone = Math.max(fTone, nTone + delta * expansionDir)
          } else {
            nTone = 49
            fTone = Math.min(fTone, nTone + delta * expansionDir)
          }
        } else {
          // Not required to stay together; fixes just one.
          if (expansionDir > 0) {
            fTone = 60
          } else {
            fTone = 49
          }
        }
      }
      // Returns `nTone` if this color is `nearer`, otherwise `fTone`.
      return amNearer ? nTone : fTone
    } else {
      // Case 2: No contrast pair; just solve for itself.
      let answer = this.tone(scheme)
      if (this.background == null) {
        return answer // No adjustment for colors with no background.
      }
      const bgTone = this.background(scheme).getTone(scheme)
      const desiredRatio = this.contrastCurve.getContrast(scheme.contrastLevel)
      if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio);
      else {
        // Rough improvement.
        answer = DynamicColor.foregroundTone(bgTone, desiredRatio)
      }
      if (decreasingContrast) {
        answer = DynamicColor.foregroundTone(bgTone, desiredRatio)
      }
      if (this.isBackground && 50 <= answer && answer < 60) {
        // Must adjust
        if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
          answer = 49
        } else {
          answer = 60
        }
      }
      if (this.secondBackground) {
        // Case 3: Adjust for dual backgrounds.
        const [bg1, bg2] = [this.background, this.secondBackground]
        const [bgTone1, bgTone2] = [
          bg1(scheme).getTone(scheme),
          bg2(scheme).getTone(scheme)
        ]
        const [upper, lower] = [
          Math.max(bgTone1, bgTone2),
          Math.min(bgTone1, bgTone2)
        ]
        if (
          Contrast.ratioOfTones(upper, answer) >= desiredRatio &&
          Contrast.ratioOfTones(lower, answer) >= desiredRatio
        ) {
          return answer
        }
        // The darkest light tone that satisfies the desired ratio,
        // or -1 if such ratio cannot be reached.
        const lightOption = Contrast.lighter(upper, desiredRatio)
        // The lightest dark tone that satisfies the desired ratio,
        // or -1 if such ratio cannot be reached.
        const darkOption = Contrast.darker(lower, desiredRatio)
        // Tones suitable for the foreground.
        const availables = []
        if (lightOption !== -1) availables.push(lightOption)
        if (darkOption !== -1) availables.push(darkOption)
        const prefersLight =
          DynamicColor.tonePrefersLightForeground(bgTone1) ||
          DynamicColor.tonePrefersLightForeground(bgTone2)
        if (prefersLight) {
          return lightOption < 0 ? 100 : lightOption
        }
        if (availables.length === 1) {
          return availables[0]
        }
        return darkOption < 0 ? 0 : darkOption
      }
      return answer
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(bgTone, ratio) {
    const lighterTone = Contrast.lighterUnsafe(bgTone, ratio)
    const darkerTone = Contrast.darkerUnsafe(bgTone, ratio)
    const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone)
    const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone)
    const preferLighter = DynamicColor.tonePrefersLightForeground(bgTone)
    if (preferLighter) {
      // This handles an edge case where the initial contrast ratio is high
      // (ex. 13.0), and the ratio passed to the function is that high
      // ratio, and both the lighter and darker ratio fails to pass that
      // ratio.
      //
      // This was observed with Tonal Spot's On Primary Container turning
      // black momentarily between high and max contrast in light mode. PC's
      // standard tone was T90, OPC's was T10, it was light mode, and the
      // contrast value was 0.6568521221032331.
      const negligibleDifference =
        Math.abs(lighterRatio - darkerRatio) < 0.1 &&
        lighterRatio < ratio &&
        darkerRatio < ratio
      return lighterRatio >= ratio ||
        lighterRatio >= darkerRatio ||
        negligibleDifference
        ? lighterTone
        : darkerTone
    } else {
      return darkerRatio >= ratio || darkerRatio >= lighterRatio
        ? darkerTone
        : lighterTone
    }
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(tone) {
    return Math.round(tone) < 60.0
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(tone) {
    return Math.round(tone) <= 49.0
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(tone) {
    if (
      DynamicColor.tonePrefersLightForeground(tone) &&
      !DynamicColor.toneAllowsLightForeground(tone)
    ) {
      return 49.0
    }
    return tone
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Set of themes supported by Dynamic Color.
 * Instantiate the corresponding subclass, ex. SchemeTonalSpot, to create
 * colors corresponding to the theme.
 */
var Variant
;(function (Variant) {
  Variant[(Variant['MONOCHROME'] = 0)] = 'MONOCHROME'
  Variant[(Variant['NEUTRAL'] = 1)] = 'NEUTRAL'
  Variant[(Variant['TONAL_SPOT'] = 2)] = 'TONAL_SPOT'
  Variant[(Variant['VIBRANT'] = 3)] = 'VIBRANT'
  Variant[(Variant['EXPRESSIVE'] = 4)] = 'EXPRESSIVE'
  Variant[(Variant['FIDELITY'] = 5)] = 'FIDELITY'
  Variant[(Variant['CONTENT'] = 6)] = 'CONTENT'
  Variant[(Variant['RAINBOW'] = 7)] = 'RAINBOW'
  Variant[(Variant['FRUIT_SALAD'] = 8)] = 'FRUIT_SALAD'
})(Variant || (Variant = {}))

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class containing the contrast curve for a dynamic color on its background.
 *
 * The four values correspond to contrast requirements for contrast levels
 * -1.0, 0.0, 0.5, and 1.0, respectively.
 */
class ContrastCurve {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(low, normal, medium, high) {
    this.low = low
    this.normal = normal
    this.medium = medium
    this.high = high
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(contrastLevel) {
    if (contrastLevel <= -1.0) {
      return this.low
    } else if (contrastLevel < 0.0) {
      return lerp(this.low, this.normal, (contrastLevel - -1) / 1)
    } else if (contrastLevel < 0.5) {
      return lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5)
    } else if (contrastLevel < 1.0) {
      return lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5)
    } else {
      return this.high
    }
  }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Documents a constraint between two DynamicColors, in which their tones must
 * have a certain distance from each other.
 *
 * Prefer a DynamicColor with a background, this is for special cases when
 * designers want tonal distance, literally contrast, between two colors that
 * don't have a background / foreground relationship or a contrast guarantee.
 */
class ToneDeltaPair {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(roleA, roleB, delta, polarity, stayTogether) {
    this.roleA = roleA
    this.roleB = roleB
    this.delta = delta
    this.polarity = polarity
    this.stayTogether = stayTogether
  }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isFidelity(scheme) {
  return (
    scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT
  )
}
function isMonochrome(scheme) {
  return scheme.variant === Variant.MONOCHROME
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
  let answer = tone
  let closestToChroma = Hct.from(hue, chroma, tone)
  if (closestToChroma.chroma < chroma) {
    let chromaPeak = closestToChroma.chroma
    while (closestToChroma.chroma < chroma) {
      answer += byDecreasingTone ? -1.0 : 1.0
      const potentialSolution = Hct.from(hue, chroma, answer)
      if (chromaPeak > potentialSolution.chroma) {
        break
      }
      if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
        break
      }
      const potentialDelta = Math.abs(potentialSolution.chroma - chroma)
      const currentDelta = Math.abs(closestToChroma.chroma - chroma)
      if (potentialDelta < currentDelta) {
        closestToChroma = potentialSolution
      }
      chromaPeak = Math.max(chromaPeak, potentialSolution.chroma)
    }
  }
  return answer
}
function viewingConditionsForAlbers(scheme) {
  return ViewingConditions.make(
    /*whitePoint=*/ undefined,
    /*adaptingLuminance=*/ undefined,
    /*backgroundLstar=*/ scheme.isDark ? 30 : 80,
    /*surround=*/ undefined,
    /*discountingIlluminant=*/ undefined
  )
}
function performAlbers(prealbers, scheme) {
  const albersd = prealbers.inViewingConditions(
    viewingConditionsForAlbers(scheme)
  )
  if (
    DynamicColor.tonePrefersLightForeground(prealbers.tone) &&
    !DynamicColor.toneAllowsLightForeground(albersd.tone)
  ) {
    return DynamicColor.enableLightForeground(prealbers.tone)
  } else {
    return DynamicColor.enableLightForeground(albersd.tone)
  }
}
/**
 * DynamicColors for the colors in the Material Design system.
 */
// Material Color Utilities namespaces the various utilities it provides.
// tslint:disable-next-line:class-as-namespace
class MaterialDynamicColors {
  static highestSurface(s) {
    return s.isDark
      ? MaterialDynamicColors.surfaceBright
      : MaterialDynamicColors.surfaceDim
  }
}
MaterialDynamicColors.contentAccentToneDelta = 15.0
MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
  name: 'primary_palette_key_color',
  palette: (s) => s.primaryPalette,
  tone: (s) => s.primaryPalette.keyColor.tone
})
MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
  name: 'secondary_palette_key_color',
  palette: (s) => s.secondaryPalette,
  tone: (s) => s.secondaryPalette.keyColor.tone
})
MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
  name: 'tertiary_palette_key_color',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => s.tertiaryPalette.keyColor.tone
})
MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
  name: 'neutral_palette_key_color',
  palette: (s) => s.neutralPalette,
  tone: (s) => s.neutralPalette.keyColor.tone
})
MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
  name: 'neutral_variant_palette_key_color',
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.neutralVariantPalette.keyColor.tone
})
MaterialDynamicColors.background = DynamicColor.fromPalette({
  name: 'background',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 6 : 98),
  isBackground: true
})
MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
  name: 'on_background',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 90 : 10),
  background: (s) => MaterialDynamicColors.background,
  contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
})
MaterialDynamicColors.surface = DynamicColor.fromPalette({
  name: 'surface',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 6 : 98),
  isBackground: true
})
MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
  name: 'surface_dim',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 6 : 87),
  isBackground: true
})
MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
  name: 'surface_bright',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 24 : 98),
  isBackground: true
})
MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
  name: 'surface_container_lowest',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 4 : 100),
  isBackground: true
})
MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
  name: 'surface_container_low',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 10 : 96),
  isBackground: true
})
MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
  name: 'surface_container',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 12 : 94),
  isBackground: true
})
MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
  name: 'surface_container_high',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 17 : 92),
  isBackground: true
})
MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
  name: 'surface_container_highest',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 22 : 90),
  isBackground: true
})
MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
  name: 'on_surface',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 90 : 10),
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
  name: 'surface_variant',
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => (s.isDark ? 30 : 90),
  isBackground: true
})
MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
  name: 'on_surface_variant',
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => (s.isDark ? 80 : 30),
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
})
MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
  name: 'inverse_surface',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 90 : 20)
})
MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
  name: 'inverse_on_surface',
  palette: (s) => s.neutralPalette,
  tone: (s) => (s.isDark ? 20 : 95),
  background: (s) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.outline = DynamicColor.fromPalette({
  name: 'outline',
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => (s.isDark ? 60 : 50),
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
})
MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
  name: 'outline_variant',
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => (s.isDark ? 30 : 80),
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7)
})
MaterialDynamicColors.shadow = DynamicColor.fromPalette({
  name: 'shadow',
  palette: (s) => s.neutralPalette,
  tone: (s) => 0
})
MaterialDynamicColors.scrim = DynamicColor.fromPalette({
  name: 'scrim',
  palette: (s) => s.neutralPalette,
  tone: (s) => 0
})
MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
  name: 'surface_tint',
  palette: (s) => s.primaryPalette,
  tone: (s) => (s.isDark ? 80 : 40),
  isBackground: true
})
MaterialDynamicColors.primary = DynamicColor.fromPalette({
  name: 'primary',
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 100 : 0
    }
    return s.isDark ? 80 : 40
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.primaryContainer,
      MaterialDynamicColors.primary,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
  name: 'on_primary',
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 90
    }
    return s.isDark ? 20 : 100
  },
  background: (s) => MaterialDynamicColors.primary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
  name: 'primary_container',
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isFidelity(s)) {
      return performAlbers(s.sourceColorHct, s)
    }
    if (isMonochrome(s)) {
      return s.isDark ? 85 : 25
    }
    return s.isDark ? 30 : 90
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.primaryContainer,
      MaterialDynamicColors.primary,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
  name: 'on_primary_container',
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isFidelity(s)) {
      return DynamicColor.foregroundTone(
        MaterialDynamicColors.primaryContainer.tone(s),
        4.5
      )
    }
    if (isMonochrome(s)) {
      return s.isDark ? 0 : 100
    }
    return s.isDark ? 90 : 10
  },
  background: (s) => MaterialDynamicColors.primaryContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
  name: 'inverse_primary',
  palette: (s) => s.primaryPalette,
  tone: (s) => (s.isDark ? 40 : 80),
  background: (s) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
})
MaterialDynamicColors.secondary = DynamicColor.fromPalette({
  name: 'secondary',
  palette: (s) => s.secondaryPalette,
  tone: (s) => (s.isDark ? 80 : 40),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.secondaryContainer,
      MaterialDynamicColors.secondary,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
  name: 'on_secondary',
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 100
    } else {
      return s.isDark ? 20 : 100
    }
  },
  background: (s) => MaterialDynamicColors.secondary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
  name: 'secondary_container',
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    const initialTone = s.isDark ? 30 : 90
    if (isMonochrome(s)) {
      return s.isDark ? 30 : 85
    }
    if (!isFidelity(s)) {
      return initialTone
    }
    let answer = findDesiredChromaByTone(
      s.secondaryPalette.hue,
      s.secondaryPalette.chroma,
      initialTone,
      s.isDark ? false : true
    )
    answer = performAlbers(s.secondaryPalette.getHct(answer), s)
    return answer
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.secondaryContainer,
      MaterialDynamicColors.secondary,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
  name: 'on_secondary_container',
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    if (!isFidelity(s)) {
      return s.isDark ? 90 : 10
    }
    return DynamicColor.foregroundTone(
      MaterialDynamicColors.secondaryContainer.tone(s),
      4.5
    )
  },
  background: (s) => MaterialDynamicColors.secondaryContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
  name: 'tertiary',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 90 : 25
    }
    return s.isDark ? 80 : 40
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.tertiaryContainer,
      MaterialDynamicColors.tertiary,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
  name: 'on_tertiary',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 90
    }
    return s.isDark ? 20 : 100
  },
  background: (s) => MaterialDynamicColors.tertiary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
  name: 'tertiary_container',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 60 : 49
    }
    if (!isFidelity(s)) {
      return s.isDark ? 30 : 90
    }
    const albersTone = performAlbers(
      s.tertiaryPalette.getHct(s.sourceColorHct.tone),
      s
    )
    const proposedHct = s.tertiaryPalette.getHct(albersTone)
    return DislikeAnalyzer.fixIfDisliked(proposedHct).tone
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.tertiaryContainer,
      MaterialDynamicColors.tertiary,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
  name: 'on_tertiary_container',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 0 : 100
    }
    if (!isFidelity(s)) {
      return s.isDark ? 90 : 10
    }
    return DynamicColor.foregroundTone(
      MaterialDynamicColors.tertiaryContainer.tone(s),
      4.5
    )
  },
  background: (s) => MaterialDynamicColors.tertiaryContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.error = DynamicColor.fromPalette({
  name: 'error',
  palette: (s) => s.errorPalette,
  tone: (s) => (s.isDark ? 80 : 40),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.errorContainer,
      MaterialDynamicColors.error,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onError = DynamicColor.fromPalette({
  name: 'on_error',
  palette: (s) => s.errorPalette,
  tone: (s) => (s.isDark ? 20 : 100),
  background: (s) => MaterialDynamicColors.error,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
  name: 'error_container',
  palette: (s) => s.errorPalette,
  tone: (s) => (s.isDark ? 30 : 90),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.errorContainer,
      MaterialDynamicColors.error,
      15,
      'nearer',
      false
    )
})
MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
  name: 'on_error_container',
  palette: (s) => s.errorPalette,
  tone: (s) => (s.isDark ? 90 : 10),
  background: (s) => MaterialDynamicColors.errorContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
  name: 'primary_fixed',
  palette: (s) => s.primaryPalette,
  tone: (s) => (isMonochrome(s) ? 40.0 : 90.0),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.primaryFixed,
      MaterialDynamicColors.primaryFixedDim,
      10,
      'lighter',
      true
    )
})
MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
  name: 'primary_fixed_dim',
  palette: (s) => s.primaryPalette,
  tone: (s) => (isMonochrome(s) ? 30.0 : 80.0),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.primaryFixed,
      MaterialDynamicColors.primaryFixedDim,
      10,
      'lighter',
      true
    )
})
MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
  name: 'on_primary_fixed',
  palette: (s) => s.primaryPalette,
  tone: (s) => (isMonochrome(s) ? 100.0 : 10.0),
  background: (s) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
  name: 'on_primary_fixed_variant',
  palette: (s) => s.primaryPalette,
  tone: (s) => (isMonochrome(s) ? 90.0 : 30.0),
  background: (s) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
})
MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
  name: 'secondary_fixed',
  palette: (s) => s.secondaryPalette,
  tone: (s) => (isMonochrome(s) ? 80.0 : 90.0),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.secondaryFixed,
      MaterialDynamicColors.secondaryFixedDim,
      10,
      'lighter',
      true
    )
})
MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
  name: 'secondary_fixed_dim',
  palette: (s) => s.secondaryPalette,
  tone: (s) => (isMonochrome(s) ? 70.0 : 80.0),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.secondaryFixed,
      MaterialDynamicColors.secondaryFixedDim,
      10,
      'lighter',
      true
    )
})
MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
  name: 'on_secondary_fixed',
  palette: (s) => s.secondaryPalette,
  tone: (s) => 10.0,
  background: (s) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
  name: 'on_secondary_fixed_variant',
  palette: (s) => s.secondaryPalette,
  tone: (s) => (isMonochrome(s) ? 25.0 : 30.0),
  background: (s) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
})
MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
  name: 'tertiary_fixed',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => (isMonochrome(s) ? 40.0 : 90.0),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.tertiaryFixed,
      MaterialDynamicColors.tertiaryFixedDim,
      10,
      'lighter',
      true
    )
})
MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
  name: 'tertiary_fixed_dim',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => (isMonochrome(s) ? 30.0 : 80.0),
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) =>
    new ToneDeltaPair(
      MaterialDynamicColors.tertiaryFixed,
      MaterialDynamicColors.tertiaryFixedDim,
      10,
      'lighter',
      true
    )
})
MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
  name: 'on_tertiary_fixed',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => (isMonochrome(s) ? 100.0 : 10.0),
  background: (s) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
})
MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
  name: 'on_tertiary_fixed_variant',
  palette: (s) => s.tertiaryPalette,
  tone: (s) => (isMonochrome(s) ? 90.0 : 30.0),
  background: (s) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
})

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *  A convenience class for retrieving colors that are constant in hue and
 *  chroma, but vary in tone.
 */
class TonalPalette {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(argb) {
    const hct = Hct.fromInt(argb)
    return TonalPalette.fromHct(hct)
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(hct) {
    return new TonalPalette(hct.hue, hct.chroma, hct)
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(hue, chroma) {
    return new TonalPalette(
      hue,
      chroma,
      TonalPalette.createKeyColor(hue, chroma)
    )
  }
  constructor(hue, chroma, keyColor) {
    this.hue = hue
    this.chroma = chroma
    this.keyColor = keyColor
    this.cache = new Map()
  }
  static createKeyColor(hue, chroma) {
    const startTone = 50.0
    let smallestDeltaHct = Hct.from(hue, chroma, startTone)
    let smallestDelta = Math.abs(smallestDeltaHct.chroma - chroma)
    // Starting from T50, check T+/-delta to see if they match the requested
    // chroma.
    //
    // Starts from T50 because T50 has the most chroma available, on
    // average. Thus it is most likely to have a direct answer and minimize
    // iteration.
    for (let delta = 1.0; delta < 50.0; delta += 1.0) {
      // Termination condition rounding instead of minimizing delta to avoid
      // case where requested chroma is 16.51, and the closest chroma is 16.49.
      // Error is minimized, but when rounded and displayed, requested chroma
      // is 17, key color's chroma is 16.
      if (Math.round(chroma) === Math.round(smallestDeltaHct.chroma)) {
        return smallestDeltaHct
      }
      const hctAdd = Hct.from(hue, chroma, startTone + delta)
      const hctAddDelta = Math.abs(hctAdd.chroma - chroma)
      if (hctAddDelta < smallestDelta) {
        smallestDelta = hctAddDelta
        smallestDeltaHct = hctAdd
      }
      const hctSubtract = Hct.from(hue, chroma, startTone - delta)
      const hctSubtractDelta = Math.abs(hctSubtract.chroma - chroma)
      if (hctSubtractDelta < smallestDelta) {
        smallestDelta = hctSubtractDelta
        smallestDeltaHct = hctSubtract
      }
    }
    return smallestDeltaHct
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(tone) {
    let argb = this.cache.get(tone)
    if (argb === undefined) {
      argb = Hct.from(this.hue, this.chroma, tone).toInt()
      this.cache.set(tone, argb)
    }
    return argb
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(tone) {
    return Hct.fromInt(this.tone(tone))
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */
class CorePalette {
  /**
   * @param argb ARGB representation of a color
   */
  static of(argb) {
    return new CorePalette(argb, false)
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(argb) {
    return new CorePalette(argb, true)
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(colors) {
    return CorePalette.createPaletteFromColors(false, colors)
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(colors) {
    return CorePalette.createPaletteFromColors(true, colors)
  }
  static createPaletteFromColors(content, colors) {
    const palette = new CorePalette(colors.primary, content)
    if (colors.secondary) {
      const p = new CorePalette(colors.secondary, content)
      palette.a2 = p.a1
    }
    if (colors.tertiary) {
      const p = new CorePalette(colors.tertiary, content)
      palette.a3 = p.a1
    }
    if (colors.error) {
      const p = new CorePalette(colors.error, content)
      palette.error = p.a1
    }
    if (colors.neutral) {
      const p = new CorePalette(colors.neutral, content)
      palette.n1 = p.n1
    }
    if (colors.neutralVariant) {
      const p = new CorePalette(colors.neutralVariant, content)
      palette.n2 = p.n2
    }
    return palette
  }
  constructor(argb, isContent) {
    const hct = Hct.fromInt(argb)
    const hue = hct.hue
    const chroma = hct.chroma
    if (isContent) {
      this.a1 = TonalPalette.fromHueAndChroma(hue, chroma)
      this.a2 = TonalPalette.fromHueAndChroma(hue, chroma / 3)
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, chroma / 2)
      this.n1 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4))
      this.n2 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8))
    } else {
      this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma))
      this.a2 = TonalPalette.fromHueAndChroma(hue, 16)
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24)
      this.n1 = TonalPalette.fromHueAndChroma(hue, 4)
      this.n2 = TonalPalette.fromHueAndChroma(hue, 8)
    }
    this.error = TonalPalette.fromHueAndChroma(25, 84)
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
/**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
class Scheme {
  get primary() {
    return this.props.primary
  }
  get onPrimary() {
    return this.props.onPrimary
  }
  get primaryContainer() {
    return this.props.primaryContainer
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer
  }
  get secondary() {
    return this.props.secondary
  }
  get onSecondary() {
    return this.props.onSecondary
  }
  get secondaryContainer() {
    return this.props.secondaryContainer
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer
  }
  get tertiary() {
    return this.props.tertiary
  }
  get onTertiary() {
    return this.props.onTertiary
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer
  }
  get error() {
    return this.props.error
  }
  get onError() {
    return this.props.onError
  }
  get errorContainer() {
    return this.props.errorContainer
  }
  get onErrorContainer() {
    return this.props.onErrorContainer
  }
  get background() {
    return this.props.background
  }
  get onBackground() {
    return this.props.onBackground
  }
  get surface() {
    return this.props.surface
  }
  get onSurface() {
    return this.props.onSurface
  }
  get surfaceVariant() {
    return this.props.surfaceVariant
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant
  }
  get outline() {
    return this.props.outline
  }
  get outlineVariant() {
    return this.props.outlineVariant
  }
  get shadow() {
    return this.props.shadow
  }
  get scrim() {
    return this.props.scrim
  }
  get inverseSurface() {
    return this.props.inverseSurface
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface
  }
  get inversePrimary() {
    return this.props.inversePrimary
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material color scheme, based on the color's hue.
   */
  static light(argb) {
    return Scheme.lightFromCorePalette(CorePalette.of(argb))
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(argb) {
    return Scheme.darkFromCorePalette(CorePalette.of(argb))
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(argb) {
    return Scheme.lightFromCorePalette(CorePalette.contentOf(argb))
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(argb) {
    return Scheme.darkFromCorePalette(CorePalette.contentOf(argb))
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(core) {
    return new Scheme({
      primary: core.a1.tone(40),
      onPrimary: core.a1.tone(100),
      primaryContainer: core.a1.tone(90),
      onPrimaryContainer: core.a1.tone(10),
      secondary: core.a2.tone(40),
      onSecondary: core.a2.tone(100),
      secondaryContainer: core.a2.tone(90),
      onSecondaryContainer: core.a2.tone(10),
      tertiary: core.a3.tone(40),
      onTertiary: core.a3.tone(100),
      tertiaryContainer: core.a3.tone(90),
      onTertiaryContainer: core.a3.tone(10),
      error: core.error.tone(40),
      onError: core.error.tone(100),
      errorContainer: core.error.tone(90),
      onErrorContainer: core.error.tone(10),
      background: core.n1.tone(99),
      onBackground: core.n1.tone(10),
      surface: core.n1.tone(99),
      onSurface: core.n1.tone(10),
      surfaceVariant: core.n2.tone(90),
      onSurfaceVariant: core.n2.tone(30),
      outline: core.n2.tone(50),
      outlineVariant: core.n2.tone(80),
      shadow: core.n1.tone(0),
      scrim: core.n1.tone(0),
      inverseSurface: core.n1.tone(20),
      inverseOnSurface: core.n1.tone(95),
      inversePrimary: core.a1.tone(80)
    })
  }
  /**
   * Dark scheme from core palette
   */
  static darkFromCorePalette(core) {
    return new Scheme({
      primary: core.a1.tone(80),
      onPrimary: core.a1.tone(20),
      primaryContainer: core.a1.tone(30),
      onPrimaryContainer: core.a1.tone(90),
      secondary: core.a2.tone(80),
      onSecondary: core.a2.tone(20),
      secondaryContainer: core.a2.tone(30),
      onSecondaryContainer: core.a2.tone(90),
      tertiary: core.a3.tone(80),
      onTertiary: core.a3.tone(20),
      tertiaryContainer: core.a3.tone(30),
      onTertiaryContainer: core.a3.tone(90),
      error: core.error.tone(80),
      onError: core.error.tone(20),
      errorContainer: core.error.tone(30),
      onErrorContainer: core.error.tone(80),
      background: core.n1.tone(10),
      onBackground: core.n1.tone(90),
      surface: core.n1.tone(10),
      onSurface: core.n1.tone(90),
      surfaceVariant: core.n2.tone(30),
      onSurfaceVariant: core.n2.tone(80),
      outline: core.n2.tone(60),
      outlineVariant: core.n2.tone(30),
      shadow: core.n1.tone(0),
      scrim: core.n1.tone(0),
      inverseSurface: core.n1.tone(90),
      inverseOnSurface: core.n1.tone(20),
      inversePrimary: core.a1.tone(40)
    })
  }
  constructor(props) {
    this.props = props
  }
  toJSON() {
    return {
      ...this.props
    }
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Utility methods for hexadecimal representations of colors.
 */
/**
 * @param argb ARGB representation of a color.
 * @return Hex string representing color, ex. #ff0000 for red.
 */
function hexFromArgb(argb) {
  const r = redFromArgb(argb)
  const g = greenFromArgb(argb)
  const b = blueFromArgb(argb)
  const outParts = [r.toString(16), g.toString(16), b.toString(16)]
  // Pad single-digit output values
  for (const [i, part] of outParts.entries()) {
    if (part.length === 1) {
      outParts[i] = '0' + part
    }
  }
  return '#' + outParts.join('')
}
/**
 * @param hex String representing color as hex code. Accepts strings with or
 *     without leading #, and string representing the color using 3, 6, or 8
 *     hex characters.
 * @return ARGB representation of color.
 */
function argbFromHex(hex) {
  hex = hex.replace('#', '')
  const isThree = hex.length === 3
  const isSix = hex.length === 6
  const isEight = hex.length === 8
  if (!isThree && !isSix && !isEight) {
    throw new Error('unexpected hex ' + hex)
  }
  let r = 0
  let g = 0
  let b = 0
  if (isThree) {
    r = parseIntHex(hex.slice(0, 1).repeat(2))
    g = parseIntHex(hex.slice(1, 2).repeat(2))
    b = parseIntHex(hex.slice(2, 3).repeat(2))
  } else if (isSix) {
    r = parseIntHex(hex.slice(0, 2))
    g = parseIntHex(hex.slice(2, 4))
    b = parseIntHex(hex.slice(4, 6))
  } else if (isEight) {
    r = parseIntHex(hex.slice(2, 4))
    g = parseIntHex(hex.slice(4, 6))
    b = parseIntHex(hex.slice(6, 8))
  }
  return (
    ((255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) | (b & 0x0ff)) >>> 0
  )
}
function parseIntHex(value) {
  // tslint:disable-next-line:ban
  return parseInt(value, 16)
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generate a theme from a source color
 *
 * @param source Source color
 * @param customColors Array of custom colors
 * @return Theme object
 */
function themeFromSourceColor(source, customColors = []) {
  const palette = CorePalette.of(source)
  return {
    source,
    schemes: {
      light: Scheme.light(source),
      dark: Scheme.dark(source)
    },
    palettes: {
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error
    },
    customColors: customColors.map((c) => customColor(source, c))
  }
}
/**
 * Generate custom color group from source and target color
 *
 * @param source Source color
 * @param color Custom color
 * @return Custom color group
 *
 * @link https://m3.material.io/styles/color/the-color-system/color-roles
 */
function customColor(source, color) {
  let value = color.value
  const from = value
  const to = source
  if (color.blend) {
    value = Blend.harmonize(from, to)
  }
  const palette = CorePalette.of(value)
  const tones = palette.a1
  return {
    color,
    value,
    light: {
      color: tones.tone(40),
      onColor: tones.tone(100),
      colorContainer: tones.tone(90),
      onColorContainer: tones.tone(10)
    },
    dark: {
      color: tones.tone(80),
      onColor: tones.tone(20),
      colorContainer: tones.tone(30),
      onColorContainer: tones.tone(90)
    }
  }
}
/**
 * Apply a theme to an element
 *
 * @param theme Theme object
 * @param options Options
 */
function applyTheme(theme, options) {
  const target = options?.target ?? document.body
  const isDark = options?.dark ?? false
  const scheme = isDark ? theme.schemes.dark : theme.schemes.light
  setSchemeProperties(target, scheme)
  if (options?.brightnessSuffix) {
    setSchemeProperties(target, theme.schemes.dark, '-dark')
    setSchemeProperties(target, theme.schemes.light, '-light')
  }
  if (options?.paletteTones) {
    const tones = options?.paletteTones ?? []
    for (const [key, palette] of Object.entries(theme.palettes)) {
      const paletteKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      for (const tone of tones) {
        const token = `--md-ref-palette-${paletteKey}-${paletteKey}${tone}`
        const color = hexFromArgb(palette.tone(tone))
        target.style.setProperty(token, color)
      }
    }
  }
}
function setSchemeProperties(target, scheme, suffix = '') {
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    target.style.setProperty(`--md-sys-color-${token}${suffix}`, color)
  }
}

document.adoptedStyleSheets.push(styles.styleSheet)

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#006874'))

// Print out the theme as JSON
// console.log(JSON.stringify(theme, null, 2))

// Check if the user has dark mode turned on
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, { target: document.body })
