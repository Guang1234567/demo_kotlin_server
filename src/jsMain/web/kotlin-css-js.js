(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var unboxChar = Kotlin.unboxChar;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init_0 = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var math = Kotlin.kotlin.math;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var numberToInt = Kotlin.numberToInt;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toString = Kotlin.toString;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  CSSBuilder.prototype = Object.create(StyledElement.prototype);
  CSSBuilder.prototype.constructor = CSSBuilder;
  LinearDimension.prototype = Object.create(CssValue.prototype);
  LinearDimension.prototype.constructor = LinearDimension;
  Align.prototype = Object.create(Enum.prototype);
  Align.prototype.constructor = Align;
  JustifyContent.prototype = Object.create(Enum.prototype);
  JustifyContent.prototype.constructor = JustifyContent;
  BackgroundRepeat.prototype = Object.create(Enum.prototype);
  BackgroundRepeat.prototype.constructor = BackgroundRepeat;
  BackgroundAttachment.prototype = Object.create(Enum.prototype);
  BackgroundAttachment.prototype.constructor = BackgroundAttachment;
  BackgroundClip.prototype = Object.create(Enum.prototype);
  BackgroundClip.prototype.constructor = BackgroundClip;
  BackgroundOrigin.prototype = Object.create(Enum.prototype);
  BackgroundOrigin.prototype.constructor = BackgroundOrigin;
  BorderCollapse.prototype = Object.create(Enum.prototype);
  BorderCollapse.prototype.constructor = BorderCollapse;
  BorderStyle.prototype = Object.create(Enum.prototype);
  BorderStyle.prototype.constructor = BorderStyle;
  BoxSizing.prototype = Object.create(Enum.prototype);
  BoxSizing.prototype.constructor = BoxSizing;
  Clear.prototype = Object.create(Enum.prototype);
  Clear.prototype.constructor = Clear;
  Color.prototype = Object.create(CssValue.prototype);
  Color.prototype.constructor = Color;
  ColumnGap.prototype = Object.create(CssValue.prototype);
  ColumnGap.prototype.constructor = ColumnGap;
  Contain.prototype = Object.create(Enum.prototype);
  Contain.prototype.constructor = Contain;
  Cursor.prototype = Object.create(Enum.prototype);
  Cursor.prototype.constructor = Cursor;
  QuotedString.prototype = Object.create(CssValue.prototype);
  QuotedString.prototype.constructor = QuotedString;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  Display.prototype = Object.create(Enum.prototype);
  Display.prototype.constructor = Display;
  FlexBasis.prototype = Object.create(CssValue.prototype);
  FlexBasis.prototype.constructor = FlexBasis;
  FlexWrap.prototype = Object.create(Enum.prototype);
  FlexWrap.prototype.constructor = FlexWrap;
  Float.prototype = Object.create(Enum.prototype);
  Float.prototype.constructor = Float;
  FontWeight.prototype = Object.create(CssValue.prototype);
  FontWeight.prototype.constructor = FontWeight;
  FontStyle.prototype = Object.create(CssValue.prototype);
  FontStyle.prototype.constructor = FontStyle;
  FlexDirection.prototype = Object.create(Enum.prototype);
  FlexDirection.prototype.constructor = FlexDirection;
  Gap.prototype = Object.create(CssValue.prototype);
  Gap.prototype.constructor = Gap;
  GridAutoColumns.prototype = Object.create(CssValue.prototype);
  GridAutoColumns.prototype.constructor = GridAutoColumns;
  GridAutoFlow.prototype = Object.create(CssValue.prototype);
  GridAutoFlow.prototype.constructor = GridAutoFlow;
  GridAutoRows.prototype = Object.create(CssValue.prototype);
  GridAutoRows.prototype.constructor = GridAutoRows;
  GridColumn.prototype = Object.create(CssValue.prototype);
  GridColumn.prototype.constructor = GridColumn;
  GridColumnEnd.prototype = Object.create(CssValue.prototype);
  GridColumnEnd.prototype.constructor = GridColumnEnd;
  GridColumnGap.prototype = Object.create(CssValue.prototype);
  GridColumnGap.prototype.constructor = GridColumnGap;
  GridColumnStart.prototype = Object.create(CssValue.prototype);
  GridColumnStart.prototype.constructor = GridColumnStart;
  GridGap.prototype = Object.create(CssValue.prototype);
  GridGap.prototype.constructor = GridGap;
  GridRow.prototype = Object.create(CssValue.prototype);
  GridRow.prototype.constructor = GridRow;
  GridRowEnd.prototype = Object.create(CssValue.prototype);
  GridRowEnd.prototype.constructor = GridRowEnd;
  GridRowGap.prototype = Object.create(CssValue.prototype);
  GridRowGap.prototype.constructor = GridRowGap;
  GridRowStart.prototype = Object.create(CssValue.prototype);
  GridRowStart.prototype.constructor = GridRowStart;
  GridTemplate.prototype = Object.create(CssValue.prototype);
  GridTemplate.prototype.constructor = GridTemplate;
  GridTemplateAreas.prototype = Object.create(CssValue.prototype);
  GridTemplateAreas.prototype.constructor = GridTemplateAreas;
  GridTemplateColumns.prototype = Object.create(CssValue.prototype);
  GridTemplateColumns.prototype.constructor = GridTemplateColumns;
  GridTemplateRows.prototype = Object.create(CssValue.prototype);
  GridTemplateRows.prototype.constructor = GridTemplateRows;
  Grow.prototype = Object.create(Enum.prototype);
  Grow.prototype.constructor = Grow;
  Hyphens.prototype = Object.create(Enum.prototype);
  Hyphens.prototype.constructor = Hyphens;
  ListStyleType.prototype = Object.create(Enum.prototype);
  ListStyleType.prototype.constructor = ListStyleType;
  ObjectFit.prototype = Object.create(Enum.prototype);
  ObjectFit.prototype.constructor = ObjectFit;
  Outline.prototype = Object.create(Enum.prototype);
  Outline.prototype.constructor = Outline;
  Overflow.prototype = Object.create(Enum.prototype);
  Overflow.prototype.constructor = Overflow;
  OverflowWrap.prototype = Object.create(Enum.prototype);
  OverflowWrap.prototype.constructor = OverflowWrap;
  OverscrollBehavior.prototype = Object.create(Enum.prototype);
  OverscrollBehavior.prototype.constructor = OverscrollBehavior;
  PointerEvents.prototype = Object.create(Enum.prototype);
  PointerEvents.prototype.constructor = PointerEvents;
  Position.prototype = Object.create(Enum.prototype);
  Position.prototype.constructor = Position;
  RowGap.prototype = Object.create(CssValue.prototype);
  RowGap.prototype.constructor = RowGap;
  ScrollBehavior.prototype = Object.create(Enum.prototype);
  ScrollBehavior.prototype.constructor = ScrollBehavior;
  TextAlign.prototype = Object.create(Enum.prototype);
  TextAlign.prototype.constructor = TextAlign;
  TableLayout.prototype = Object.create(Enum.prototype);
  TableLayout.prototype.constructor = TableLayout;
  TextOverflow.prototype = Object.create(Enum.prototype);
  TextOverflow.prototype.constructor = TextOverflow;
  TextTransform.prototype = Object.create(Enum.prototype);
  TextTransform.prototype.constructor = TextTransform;
  UserSelect.prototype = Object.create(Enum.prototype);
  UserSelect.prototype.constructor = UserSelect;
  VerticalAlign.prototype = Object.create(CssValue.prototype);
  VerticalAlign.prototype.constructor = VerticalAlign;
  Visibility.prototype = Object.create(Enum.prototype);
  Visibility.prototype.constructor = Visibility;
  WhiteSpace.prototype = Object.create(Enum.prototype);
  WhiteSpace.prototype.constructor = WhiteSpace;
  WordBreak.prototype = Object.create(Enum.prototype);
  WordBreak.prototype.constructor = WordBreak;
  WordWrap.prototype = Object.create(Enum.prototype);
  WordWrap.prototype.constructor = WordWrap;
  Image.prototype = Object.create(CssValue.prototype);
  Image.prototype.constructor = Image;
  IterationCount.prototype = Object.create(CssValue.prototype);
  IterationCount.prototype.constructor = IterationCount;
  AnimationDirection.prototype = Object.create(Enum.prototype);
  AnimationDirection.prototype.constructor = AnimationDirection;
  FillMode.prototype = Object.create(Enum.prototype);
  FillMode.prototype.constructor = FillMode;
  PlayState.prototype = Object.create(Enum.prototype);
  PlayState.prototype.constructor = PlayState;
  Animations.prototype = Object.create(StyleList.prototype);
  Animations.prototype.constructor = Animations;
  BoxShadows.prototype = Object.create(StyleList.prototype);
  BoxShadows.prototype.constructor = BoxShadows;
  LineHeight.prototype = Object.create(CssValue.prototype);
  LineHeight.prototype.constructor = LineHeight;
  TextDecorationLine.prototype = Object.create(Enum.prototype);
  TextDecorationLine.prototype.constructor = TextDecorationLine;
  TextDecorationStyle.prototype = Object.create(Enum.prototype);
  TextDecorationStyle.prototype.constructor = TextDecorationStyle;
  Time.prototype = Object.create(CssValue.prototype);
  Time.prototype.constructor = Time;
  Timing.prototype = Object.create(CssValue.prototype);
  Timing.prototype.constructor = Timing;
  TransitionDirection.prototype = Object.create(Enum.prototype);
  TransitionDirection.prototype.constructor = TransitionDirection;
  Angle.prototype = Object.create(CssValue.prototype);
  Angle.prototype.constructor = Angle;
  Transforms.prototype = Object.create(StyleList.prototype);
  Transforms.prototype.constructor = Transforms;
  Transitions.prototype = Object.create(StyleList.prototype);
  Transitions.prototype.constructor = Transitions;
  function ruleSet(set) {
    return set;
  }
  function Rule(selector, block) {
    this.selector = selector;
    this.block = block;
  }
  Rule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rule',
    interfaces: []
  };
  Rule.prototype.component1 = function () {
    return this.selector;
  };
  Rule.prototype.component2 = function () {
    return this.block;
  };
  Rule.prototype.copy_xk38i9$ = function (selector, block) {
    return new Rule(selector === void 0 ? this.selector : selector, block === void 0 ? this.block : block);
  };
  Rule.prototype.toString = function () {
    return 'Rule(selector=' + Kotlin.toString(this.selector) + (', block=' + Kotlin.toString(this.block)) + ')';
  };
  Rule.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.selector) | 0;
    result = result * 31 + Kotlin.hashCode(this.block) | 0;
    return result;
  };
  Rule.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.selector, other.selector) && Kotlin.equals(this.block, other.block)))));
  };
  function RuleContainer() {
  }
  RuleContainer.prototype.buildRules_s47sd7$ = function ($receiver, indent) {
    var resolvedRules = LinkedHashMap_init();
    var tmp$;
    tmp$ = this.rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var selector = element.component1()
      , block = element.component2();
      if (!resolvedRules.containsKey_11rb$(selector)) {
        var value = new CSSBuilder(indent + '  ', false);
        resolvedRules.put_xwzc9p$(selector, value);
      }
      var rule = ensureNotNull(resolvedRules.get_11rb$(selector));
      block(rule);
    }
    var tmp$_0;
    tmp$_0 = resolvedRules.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $receiver.append_gw00v9$(element_0.key + ' {' + '\n');
      $receiver.append_s8jyv4$(element_0.value);
      $receiver.append_gw00v9$('}\n');
    }
  };
  RuleContainer.prototype.rule_xk38i9$ = function (selector, block) {
    var $receiver = new Rule(selector, block);
    this.rules.add_11rb$($receiver);
    return $receiver;
  };
  RuleContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuleContainer',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function CSSBuilder(indent, allowClasses) {
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    StyledElement.call(this);
    this.indent = indent;
    this.allowClasses = allowClasses;
    this.styleName = null;
    this.classes = ArrayList_init();
    this.rules_tsqyll$_0 = ArrayList_init();
  }
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  CSSBuilder.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = this.declarations.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_gw00v9$(hyphenize_0(element.key) + ': ' + element.value.toString() + ';' + '\n');
    }
    this.buildRules_s47sd7$($receiver, this.indent);
    return $receiver.toString();
  };
  Object.defineProperty(CSSBuilder.prototype, 'rules', {
    get: function () {
      return this.rules_tsqyll$_0;
    }
  });
  CSSBuilder.prototype.invoke_32jdrg$ = function ($receiver, block) {
    return this.rule_xk38i9$($receiver, block);
  };
  CSSBuilder.prototype.invoke_30ubnp$ = function ($receiver, block) {
    return this.invoke_32jdrg$($receiver.tagName, block);
  };
  CSSBuilder.prototype.active_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:active', block);
  };
  CSSBuilder.prototype.checked_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:checked', block);
  };
  CSSBuilder.prototype.default_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:default', block);
  };
  CSSBuilder.prototype.disabled_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:disabled', block);
  };
  CSSBuilder.prototype.empty_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:empty', block);
  };
  CSSBuilder.prototype.enabled_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:enabled', block);
  };
  CSSBuilder.prototype.firstChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:first-child', block);
  };
  CSSBuilder.prototype.firstOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:first-of-type', block);
  };
  CSSBuilder.prototype.focus_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:focus', block);
  };
  CSSBuilder.prototype.hover_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:hover', block);
  };
  CSSBuilder.prototype.indeterminate_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:indeterminate', block);
  };
  CSSBuilder.prototype.inRange_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:in-range', block);
  };
  CSSBuilder.prototype.invalid_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:invalid', block);
  };
  CSSBuilder.prototype.lastChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:last-child', block);
  };
  CSSBuilder.prototype.lastOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:last-of-type', block);
  };
  CSSBuilder.prototype.link_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:link', block);
  };
  CSSBuilder.prototype.not_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:not(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthChild_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-child(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthLastChild_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-last-child(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthLastOfType_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-last-of-type(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthOfType_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-of-type(' + selector + ')', block);
  };
  CSSBuilder.prototype.onlyChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:only-child', block);
  };
  CSSBuilder.prototype.onlyOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:only-of-type', block);
  };
  CSSBuilder.prototype.optional_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:optional', block);
  };
  CSSBuilder.prototype.outOfRange_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:out-of-range', block);
  };
  CSSBuilder.prototype.readOnly_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:read-only', block);
  };
  CSSBuilder.prototype.readWrite_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:read-write', block);
  };
  CSSBuilder.prototype.required_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:required', block);
  };
  CSSBuilder.prototype.valid_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:valid', block);
  };
  CSSBuilder.prototype.visited_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:visited', block);
  };
  CSSBuilder.prototype.children_fcku8i$ = function (selector, block) {
    if (selector === void 0)
      selector = null;
    var tmp$;
    return this.invoke_32jdrg$('& > ' + ((tmp$ = selector != null ? selector : null) != null ? tmp$ : '*'), block);
  };
  CSSBuilder.prototype.descendants_fcku8i$ = function (selector, block) {
    if (selector === void 0)
      selector = null;
    var tmp$;
    return this.invoke_32jdrg$('& ' + ((tmp$ = selector != null ? selector : null) != null ? tmp$ : '*'), block);
  };
  CSSBuilder.prototype.ancestorHover_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$(selector + ':hover &', block);
  };
  function CSSBuilder$after$lambda(closure$block) {
    return function ($receiver) {
      $receiver.content = get_quoted('');
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.after_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&::after', CSSBuilder$after$lambda(block));
  };
  function CSSBuilder$before$lambda(closure$block) {
    return function ($receiver) {
      $receiver.content = get_quoted('');
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.before_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&::before', CSSBuilder$before$lambda(block));
  };
  CSSBuilder.prototype.placeholder_sa4rfh$ = function (block) {
    this.invoke_32jdrg$('&::placeholder', block);
    this.invoke_32jdrg$('&::-webkit-input-placeholder', block);
    this.invoke_32jdrg$('&::-moz-placeholder', block);
    this.invoke_32jdrg$('&::-ms-input-placeholder', block);
    this.invoke_32jdrg$('&:-moz-placeholder', block);
  };
  CSSBuilder.prototype.child_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('> ' + selector, block);
  };
  CSSBuilder.prototype.sibling_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('~ ' + selector, block);
  };
  CSSBuilder.prototype.adjacentSibling_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('+ ' + selector, block);
  };
  CSSBuilder.prototype.universal_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('*', block);
  };
  CSSBuilder.prototype.compareTo_er05um$ = function (rule) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.child_xk38i9$(rule.selector, rule.block);
    return 0;
  };
  CSSBuilder.prototype.not_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    var $receiver_0 = $receiver.selector;
    var regex = Regex_init('^(&?)(.*)$');
    var replacement = '$1:not($2)';
    this.invoke_32jdrg$(regex.replace_x2uqeu$($receiver_0, replacement), $receiver.block);
  };
  CSSBuilder.prototype.unaryPlus_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.invoke_32jdrg$('&.' + $receiver.selector, $receiver.block);
  };
  CSSBuilder.prototype.specific_api79v$ = function (specificity, block) {
    if (specificity === void 0)
      specificity = 2;
    return this.invoke_32jdrg$(repeat('&', specificity), block);
  };
  CSSBuilder.prototype.prefix_xk38i9$ = function (selector, block) {
    this.invoke_32jdrg$(selector + ' &', block);
  };
  CSSBuilder.prototype.media_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@media ' + query, block);
  };
  CSSBuilder.prototype.supports_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@supports ' + query, block);
  };
  CSSBuilder.prototype.fontFace_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@font-face ' + query, block);
  };
  function CSSBuilder$root$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.root_sa4rfh$ = function (block) {
    this.invoke_32jdrg$(':root', CSSBuilder$root$lambda(block));
  };
  CSSBuilder.prototype.setCustomProperty_lwowle$ = function (name, value) {
    this.put_puj7f4$('--' + name, value.value);
  };
  CSSBuilder.prototype.unaryPlus_ocqyl0$ = function ($receiver) {
    $receiver(this);
  };
  CSSBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    if (!this.allowClasses) {
      throw RuntimeException_init('class names are not allowed for this builder');
    }
    this.classes.add_11rb$($receiver);
  };
  CSSBuilder.prototype.unaryPlus_a3w2bl$ = function ($receiver) {
    if (!this.allowClasses) {
      throw RuntimeException_init('class names are not allowed for this builder');
    }
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.classes.add_11rb$(element);
    }
  };
  CSSBuilder.prototype.unaryPlus_sdeqdk$ = function ($receiver) {
    if (!this.allowClasses) {
      throw RuntimeException_init('class names are not allowed for this builder');
    }
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.classes.add_11rb$(element);
    }
  };
  CSSBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSSBuilder',
    interfaces: [RuleContainer, StyledElement]
  };
  function toCustomProperty($receiver) {
    return 'var(--' + $receiver + ')';
  }
  var toChar = Kotlin.toChar;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  function hyphenize$lambda(it) {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = iterator(it);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      var it_0 = toBoxedChar(element);
      var tmp$_0, tmp$_1;
      tmp$_0 = unboxChar(it_0);
      if ((new CharRange(65, 90)).contains_mef7kx$(tmp$_0)) {
        var tmp$_2 = String;
        var tmp$_3 = tmp$_2.fromCharCode;
        var $receiver_0 = unboxChar(it_0);
        tmp$_1 = '-' + tmp$_3.call(tmp$_2, toChar(String.fromCharCode($receiver_0 | 0).toLowerCase().charCodeAt(0)));
      }
       else
        tmp$_1 = it_0;
      $receiver.append_s8jyv4$(tmp$_1);
    }
    return $receiver.toString();
  }
  var hyphenize;
  function memoizeString$lambda(closure$map, closure$fn) {
    return function (it) {
      var closure$map_0 = closure$map;
      var closure$fn_0 = closure$fn;
      if (!closure$map_0.containsKey_11rb$(it)) {
        var value = closure$fn_0(it);
        closure$map_0.put_xwzc9p$(it, value);
      }
      return ensureNotNull(closure$map_0.get_11rb$(it));
    };
  }
  function memoizeString(fn) {
    var map = LinkedHashMap_init();
    return memoizeString$lambda(map, fn);
  }
  function hyphenize_0($receiver) {
    return hyphenize($receiver);
  }
  function times($receiver, n) {
    var tmp$;
    switch (n) {
      case 0:
        tmp$ = '';
        break;
      case 1:
        tmp$ = $receiver;
        break;
      default:var i = 0;
        var result = $receiver;
        while ((i = i + 1 | 0, i) < n) {
          result += $receiver;
        }

        tmp$ = result;
        break;
    }
    return tmp$;
  }
  var ZERO;
  function LinearDimension(value) {
    LinearDimension$Companion_getInstance();
    CssValue.call(this, value);
    this.value_nj4rtk$_0 = value;
  }
  Object.defineProperty(LinearDimension.prototype, 'value', {
    get: function () {
      return this.value_nj4rtk$_0;
    }
  });
  function LinearDimension$Companion() {
    LinearDimension$Companion_instance = this;
    this.none = new LinearDimension('none');
    this.auto = new LinearDimension('auto');
    this.initial = new LinearDimension('initial');
    this.inherit = new LinearDimension('inherit');
    this.available = new LinearDimension('available');
    this.fillAvailable = new LinearDimension('fill-available');
    this.borderBox = new LinearDimension('border-box');
    this.contentBox = new LinearDimension('content-box');
    this.maxContent = new LinearDimension('max-content');
    this.minContent = new LinearDimension('min-content');
    this.fitContent = new LinearDimension('fit-content');
  }
  LinearDimension$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinearDimension$Companion_instance = null;
  function LinearDimension$Companion_getInstance() {
    if (LinearDimension$Companion_instance === null) {
      new LinearDimension$Companion();
    }
    return LinearDimension$Companion_instance;
  }
  Object.defineProperty(LinearDimension.prototype, 'valueCalcSafe_0', {
    get: function () {
      return equals(this.value, ZERO) ? '0px' : this.value;
    }
  });
  LinearDimension.prototype.unaryMinus = function () {
    var tmp$;
    if (startsWith(this.value, 45)) {
      tmp$ = this.value.substring(1);
    }
     else if (startsWith_0(this.value, 'calc'))
      tmp$ = 'calc(0px - ' + this.value + ')';
    else if (equals(this.value, ZERO))
      tmp$ = this.value;
    else
      tmp$ = '-' + this.value;
    return new LinearDimension(tmp$);
  };
  LinearDimension.prototype.plus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' + ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.minus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' - ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.times_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' * ' + times.toString() + ')');
  };
  LinearDimension.prototype.div_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' / ' + times.toString() + ')');
  };
  LinearDimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearDimension',
    interfaces: [CssValue]
  };
  function value(number, unit) {
    return equals(number, 0) ? ZERO : number.toString() + unit;
  }
  function get_cm($receiver) {
    return new LinearDimension(value($receiver, 'cm'));
  }
  function get_em($receiver) {
    return new LinearDimension(value($receiver, 'em'));
  }
  function get_ex($receiver) {
    return new LinearDimension(value($receiver, 'ex'));
  }
  function get_fr($receiver) {
    return new LinearDimension(value($receiver, 'fr'));
  }
  function get_mm($receiver) {
    return new LinearDimension(value($receiver, 'mm'));
  }
  function get_pc($receiver) {
    return new LinearDimension(value($receiver, 'pc'));
  }
  function get_pct($receiver) {
    return new LinearDimension(value($receiver, '%'));
  }
  function get_pt($receiver) {
    return new LinearDimension(value($receiver, 'pt'));
  }
  function get_px($receiver) {
    return new LinearDimension(value($receiver, 'px'));
  }
  function get_rem($receiver) {
    return new LinearDimension(value($receiver, 'rem'));
  }
  function get_vmin($receiver) {
    return new LinearDimension(value($receiver, 'vmin'));
  }
  function get_vmax($receiver) {
    return new LinearDimension(value($receiver, 'vmax'));
  }
  function get_vh($receiver) {
    return new LinearDimension(value($receiver, 'vh'));
  }
  function get_vw($receiver) {
    return new LinearDimension(value($receiver, 'vw'));
  }
  function get_in($receiver) {
    return new LinearDimension(value($receiver, 'in'));
  }
  function CssValue(value) {
    this.value_tqttmh$_0 = value;
  }
  Object.defineProperty(CssValue.prototype, 'value', {
    get: function () {
      return this.value_tqttmh$_0;
    }
  });
  CssValue.prototype.toString = function () {
    return this.value;
  };
  CssValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssValue',
    interfaces: []
  };
  function Align(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Align_initFields() {
    Align_initFields = function () {
    };
    Align$initial_instance = new Align('initial', 0);
    Align$inherit_instance = new Align('inherit', 1);
    Align$unset_instance = new Align('unset', 2);
    Align$auto_instance = new Align('auto', 3);
    Align$stretch_instance = new Align('stretch', 4);
    Align$center_instance = new Align('center', 5);
    Align$flexStart_instance = new Align('flexStart', 6);
    Align$flexEnd_instance = new Align('flexEnd', 7);
    Align$baseline_instance = new Align('baseline', 8);
  }
  var Align$initial_instance;
  function Align$initial_getInstance() {
    Align_initFields();
    return Align$initial_instance;
  }
  var Align$inherit_instance;
  function Align$inherit_getInstance() {
    Align_initFields();
    return Align$inherit_instance;
  }
  var Align$unset_instance;
  function Align$unset_getInstance() {
    Align_initFields();
    return Align$unset_instance;
  }
  var Align$auto_instance;
  function Align$auto_getInstance() {
    Align_initFields();
    return Align$auto_instance;
  }
  var Align$stretch_instance;
  function Align$stretch_getInstance() {
    Align_initFields();
    return Align$stretch_instance;
  }
  var Align$center_instance;
  function Align$center_getInstance() {
    Align_initFields();
    return Align$center_instance;
  }
  var Align$flexStart_instance;
  function Align$flexStart_getInstance() {
    Align_initFields();
    return Align$flexStart_instance;
  }
  var Align$flexEnd_instance;
  function Align$flexEnd_getInstance() {
    Align_initFields();
    return Align$flexEnd_instance;
  }
  var Align$baseline_instance;
  function Align$baseline_getInstance() {
    Align_initFields();
    return Align$baseline_instance;
  }
  Align.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  Align.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Align',
    interfaces: [Enum]
  };
  function Align$values() {
    return [Align$initial_getInstance(), Align$inherit_getInstance(), Align$unset_getInstance(), Align$auto_getInstance(), Align$stretch_getInstance(), Align$center_getInstance(), Align$flexStart_getInstance(), Align$flexEnd_getInstance(), Align$baseline_getInstance()];
  }
  Align.values = Align$values;
  function Align$valueOf(name) {
    switch (name) {
      case 'initial':
        return Align$initial_getInstance();
      case 'inherit':
        return Align$inherit_getInstance();
      case 'unset':
        return Align$unset_getInstance();
      case 'auto':
        return Align$auto_getInstance();
      case 'stretch':
        return Align$stretch_getInstance();
      case 'center':
        return Align$center_getInstance();
      case 'flexStart':
        return Align$flexStart_getInstance();
      case 'flexEnd':
        return Align$flexEnd_getInstance();
      case 'baseline':
        return Align$baseline_getInstance();
      default:throwISE('No enum constant kotlinx.css.Align.' + name);
    }
  }
  Align.valueOf_61zpoe$ = Align$valueOf;
  function JustifyContent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JustifyContent_initFields() {
    JustifyContent_initFields = function () {
    };
    JustifyContent$initial_instance = new JustifyContent('initial', 0);
    JustifyContent$inherit_instance = new JustifyContent('inherit', 1);
    JustifyContent$unset_instance = new JustifyContent('unset', 2);
    JustifyContent$center_instance = new JustifyContent('center', 3);
    JustifyContent$start_instance = new JustifyContent('start', 4);
    JustifyContent$end_instance = new JustifyContent('end', 5);
    JustifyContent$flexStart_instance = new JustifyContent('flexStart', 6);
    JustifyContent$flexEnd_instance = new JustifyContent('flexEnd', 7);
    JustifyContent$left_instance = new JustifyContent('left', 8);
    JustifyContent$right_instance = new JustifyContent('right', 9);
    JustifyContent$baseline_instance = new JustifyContent('baseline', 10);
    JustifyContent$firstBaseline_instance = new JustifyContent('firstBaseline', 11);
    JustifyContent$lastBaseline_instance = new JustifyContent('lastBaseline', 12);
    JustifyContent$spaceBetween_instance = new JustifyContent('spaceBetween', 13);
    JustifyContent$spaceAround_instance = new JustifyContent('spaceAround', 14);
    JustifyContent$spaceEvenly_instance = new JustifyContent('spaceEvenly', 15);
    JustifyContent$stretch_instance = new JustifyContent('stretch', 16);
    JustifyContent$safeCenter_instance = new JustifyContent('safeCenter', 17);
    JustifyContent$unsafeCenter_instance = new JustifyContent('unsafeCenter', 18);
  }
  var JustifyContent$initial_instance;
  function JustifyContent$initial_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$initial_instance;
  }
  var JustifyContent$inherit_instance;
  function JustifyContent$inherit_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$inherit_instance;
  }
  var JustifyContent$unset_instance;
  function JustifyContent$unset_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unset_instance;
  }
  var JustifyContent$center_instance;
  function JustifyContent$center_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$center_instance;
  }
  var JustifyContent$start_instance;
  function JustifyContent$start_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$start_instance;
  }
  var JustifyContent$end_instance;
  function JustifyContent$end_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$end_instance;
  }
  var JustifyContent$flexStart_instance;
  function JustifyContent$flexStart_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexStart_instance;
  }
  var JustifyContent$flexEnd_instance;
  function JustifyContent$flexEnd_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexEnd_instance;
  }
  var JustifyContent$left_instance;
  function JustifyContent$left_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$left_instance;
  }
  var JustifyContent$right_instance;
  function JustifyContent$right_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$right_instance;
  }
  var JustifyContent$baseline_instance;
  function JustifyContent$baseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$baseline_instance;
  }
  var JustifyContent$firstBaseline_instance;
  function JustifyContent$firstBaseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$firstBaseline_instance;
  }
  var JustifyContent$lastBaseline_instance;
  function JustifyContent$lastBaseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$lastBaseline_instance;
  }
  var JustifyContent$spaceBetween_instance;
  function JustifyContent$spaceBetween_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceBetween_instance;
  }
  var JustifyContent$spaceAround_instance;
  function JustifyContent$spaceAround_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceAround_instance;
  }
  var JustifyContent$spaceEvenly_instance;
  function JustifyContent$spaceEvenly_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceEvenly_instance;
  }
  var JustifyContent$stretch_instance;
  function JustifyContent$stretch_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$stretch_instance;
  }
  var JustifyContent$safeCenter_instance;
  function JustifyContent$safeCenter_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$safeCenter_instance;
  }
  var JustifyContent$unsafeCenter_instance;
  function JustifyContent$unsafeCenter_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unsafeCenter_instance;
  }
  JustifyContent.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  JustifyContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JustifyContent',
    interfaces: [Enum]
  };
  function JustifyContent$values() {
    return [JustifyContent$initial_getInstance(), JustifyContent$inherit_getInstance(), JustifyContent$unset_getInstance(), JustifyContent$center_getInstance(), JustifyContent$start_getInstance(), JustifyContent$end_getInstance(), JustifyContent$flexStart_getInstance(), JustifyContent$flexEnd_getInstance(), JustifyContent$left_getInstance(), JustifyContent$right_getInstance(), JustifyContent$baseline_getInstance(), JustifyContent$firstBaseline_getInstance(), JustifyContent$lastBaseline_getInstance(), JustifyContent$spaceBetween_getInstance(), JustifyContent$spaceAround_getInstance(), JustifyContent$spaceEvenly_getInstance(), JustifyContent$stretch_getInstance(), JustifyContent$safeCenter_getInstance(), JustifyContent$unsafeCenter_getInstance()];
  }
  JustifyContent.values = JustifyContent$values;
  function JustifyContent$valueOf(name) {
    switch (name) {
      case 'initial':
        return JustifyContent$initial_getInstance();
      case 'inherit':
        return JustifyContent$inherit_getInstance();
      case 'unset':
        return JustifyContent$unset_getInstance();
      case 'center':
        return JustifyContent$center_getInstance();
      case 'start':
        return JustifyContent$start_getInstance();
      case 'end':
        return JustifyContent$end_getInstance();
      case 'flexStart':
        return JustifyContent$flexStart_getInstance();
      case 'flexEnd':
        return JustifyContent$flexEnd_getInstance();
      case 'left':
        return JustifyContent$left_getInstance();
      case 'right':
        return JustifyContent$right_getInstance();
      case 'baseline':
        return JustifyContent$baseline_getInstance();
      case 'firstBaseline':
        return JustifyContent$firstBaseline_getInstance();
      case 'lastBaseline':
        return JustifyContent$lastBaseline_getInstance();
      case 'spaceBetween':
        return JustifyContent$spaceBetween_getInstance();
      case 'spaceAround':
        return JustifyContent$spaceAround_getInstance();
      case 'spaceEvenly':
        return JustifyContent$spaceEvenly_getInstance();
      case 'stretch':
        return JustifyContent$stretch_getInstance();
      case 'safeCenter':
        return JustifyContent$safeCenter_getInstance();
      case 'unsafeCenter':
        return JustifyContent$unsafeCenter_getInstance();
      default:throwISE('No enum constant kotlinx.css.JustifyContent.' + name);
    }
  }
  JustifyContent.valueOf_61zpoe$ = JustifyContent$valueOf;
  function BackgroundRepeat(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundRepeat_initFields() {
    BackgroundRepeat_initFields = function () {
    };
    BackgroundRepeat$initial_instance = new BackgroundRepeat('initial', 0);
    BackgroundRepeat$inherit_instance = new BackgroundRepeat('inherit', 1);
    BackgroundRepeat$unset_instance = new BackgroundRepeat('unset', 2);
    BackgroundRepeat$repeatX_instance = new BackgroundRepeat('repeatX', 3);
    BackgroundRepeat$repeatY_instance = new BackgroundRepeat('repeatY', 4);
    BackgroundRepeat$repeat_instance = new BackgroundRepeat('repeat', 5);
    BackgroundRepeat$noRepeat_instance = new BackgroundRepeat('noRepeat', 6);
  }
  var BackgroundRepeat$initial_instance;
  function BackgroundRepeat$initial_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$initial_instance;
  }
  var BackgroundRepeat$inherit_instance;
  function BackgroundRepeat$inherit_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$inherit_instance;
  }
  var BackgroundRepeat$unset_instance;
  function BackgroundRepeat$unset_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$unset_instance;
  }
  var BackgroundRepeat$repeatX_instance;
  function BackgroundRepeat$repeatX_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeatX_instance;
  }
  var BackgroundRepeat$repeatY_instance;
  function BackgroundRepeat$repeatY_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeatY_instance;
  }
  var BackgroundRepeat$repeat_instance;
  function BackgroundRepeat$repeat_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeat_instance;
  }
  var BackgroundRepeat$noRepeat_instance;
  function BackgroundRepeat$noRepeat_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$noRepeat_instance;
  }
  BackgroundRepeat.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  BackgroundRepeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundRepeat',
    interfaces: [Enum]
  };
  function BackgroundRepeat$values() {
    return [BackgroundRepeat$initial_getInstance(), BackgroundRepeat$inherit_getInstance(), BackgroundRepeat$unset_getInstance(), BackgroundRepeat$repeatX_getInstance(), BackgroundRepeat$repeatY_getInstance(), BackgroundRepeat$repeat_getInstance(), BackgroundRepeat$noRepeat_getInstance()];
  }
  BackgroundRepeat.values = BackgroundRepeat$values;
  function BackgroundRepeat$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundRepeat$initial_getInstance();
      case 'inherit':
        return BackgroundRepeat$inherit_getInstance();
      case 'unset':
        return BackgroundRepeat$unset_getInstance();
      case 'repeatX':
        return BackgroundRepeat$repeatX_getInstance();
      case 'repeatY':
        return BackgroundRepeat$repeatY_getInstance();
      case 'repeat':
        return BackgroundRepeat$repeat_getInstance();
      case 'noRepeat':
        return BackgroundRepeat$noRepeat_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundRepeat.' + name);
    }
  }
  BackgroundRepeat.valueOf_61zpoe$ = BackgroundRepeat$valueOf;
  function BackgroundAttachment(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundAttachment_initFields() {
    BackgroundAttachment_initFields = function () {
    };
    BackgroundAttachment$initial_instance = new BackgroundAttachment('initial', 0);
    BackgroundAttachment$inherit_instance = new BackgroundAttachment('inherit', 1);
    BackgroundAttachment$unset_instance = new BackgroundAttachment('unset', 2);
    BackgroundAttachment$scroll_instance = new BackgroundAttachment('scroll', 3);
    BackgroundAttachment$fixed_instance = new BackgroundAttachment('fixed', 4);
    BackgroundAttachment$local_instance = new BackgroundAttachment('local', 5);
  }
  var BackgroundAttachment$initial_instance;
  function BackgroundAttachment$initial_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$initial_instance;
  }
  var BackgroundAttachment$inherit_instance;
  function BackgroundAttachment$inherit_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$inherit_instance;
  }
  var BackgroundAttachment$unset_instance;
  function BackgroundAttachment$unset_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$unset_instance;
  }
  var BackgroundAttachment$scroll_instance;
  function BackgroundAttachment$scroll_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$scroll_instance;
  }
  var BackgroundAttachment$fixed_instance;
  function BackgroundAttachment$fixed_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$fixed_instance;
  }
  var BackgroundAttachment$local_instance;
  function BackgroundAttachment$local_getInstance() {
    BackgroundAttachment_initFields();
    return BackgroundAttachment$local_instance;
  }
  BackgroundAttachment.prototype.toString = function () {
    return this.name;
  };
  BackgroundAttachment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundAttachment',
    interfaces: [Enum]
  };
  function BackgroundAttachment$values() {
    return [BackgroundAttachment$initial_getInstance(), BackgroundAttachment$inherit_getInstance(), BackgroundAttachment$unset_getInstance(), BackgroundAttachment$scroll_getInstance(), BackgroundAttachment$fixed_getInstance(), BackgroundAttachment$local_getInstance()];
  }
  BackgroundAttachment.values = BackgroundAttachment$values;
  function BackgroundAttachment$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundAttachment$initial_getInstance();
      case 'inherit':
        return BackgroundAttachment$inherit_getInstance();
      case 'unset':
        return BackgroundAttachment$unset_getInstance();
      case 'scroll':
        return BackgroundAttachment$scroll_getInstance();
      case 'fixed':
        return BackgroundAttachment$fixed_getInstance();
      case 'local':
        return BackgroundAttachment$local_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundAttachment.' + name);
    }
  }
  BackgroundAttachment.valueOf_61zpoe$ = BackgroundAttachment$valueOf;
  function BackgroundClip(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundClip_initFields() {
    BackgroundClip_initFields = function () {
    };
    BackgroundClip$initial_instance = new BackgroundClip('initial', 0);
    BackgroundClip$inherit_instance = new BackgroundClip('inherit', 1);
    BackgroundClip$unset_instance = new BackgroundClip('unset', 2);
    BackgroundClip$borderBox_instance = new BackgroundClip('borderBox', 3);
    BackgroundClip$paddingBox_instance = new BackgroundClip('paddingBox', 4);
    BackgroundClip$contentBox_instance = new BackgroundClip('contentBox', 5);
    BackgroundClip$text_instance = new BackgroundClip('text', 6);
  }
  var BackgroundClip$initial_instance;
  function BackgroundClip$initial_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$initial_instance;
  }
  var BackgroundClip$inherit_instance;
  function BackgroundClip$inherit_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$inherit_instance;
  }
  var BackgroundClip$unset_instance;
  function BackgroundClip$unset_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$unset_instance;
  }
  var BackgroundClip$borderBox_instance;
  function BackgroundClip$borderBox_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$borderBox_instance;
  }
  var BackgroundClip$paddingBox_instance;
  function BackgroundClip$paddingBox_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$paddingBox_instance;
  }
  var BackgroundClip$contentBox_instance;
  function BackgroundClip$contentBox_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$contentBox_instance;
  }
  var BackgroundClip$text_instance;
  function BackgroundClip$text_getInstance() {
    BackgroundClip_initFields();
    return BackgroundClip$text_instance;
  }
  BackgroundClip.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  BackgroundClip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundClip',
    interfaces: [Enum]
  };
  function BackgroundClip$values() {
    return [BackgroundClip$initial_getInstance(), BackgroundClip$inherit_getInstance(), BackgroundClip$unset_getInstance(), BackgroundClip$borderBox_getInstance(), BackgroundClip$paddingBox_getInstance(), BackgroundClip$contentBox_getInstance(), BackgroundClip$text_getInstance()];
  }
  BackgroundClip.values = BackgroundClip$values;
  function BackgroundClip$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundClip$initial_getInstance();
      case 'inherit':
        return BackgroundClip$inherit_getInstance();
      case 'unset':
        return BackgroundClip$unset_getInstance();
      case 'borderBox':
        return BackgroundClip$borderBox_getInstance();
      case 'paddingBox':
        return BackgroundClip$paddingBox_getInstance();
      case 'contentBox':
        return BackgroundClip$contentBox_getInstance();
      case 'text':
        return BackgroundClip$text_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundClip.' + name);
    }
  }
  BackgroundClip.valueOf_61zpoe$ = BackgroundClip$valueOf;
  function BackgroundOrigin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundOrigin_initFields() {
    BackgroundOrigin_initFields = function () {
    };
    BackgroundOrigin$initial_instance = new BackgroundOrigin('initial', 0);
    BackgroundOrigin$inherit_instance = new BackgroundOrigin('inherit', 1);
    BackgroundOrigin$unset_instance = new BackgroundOrigin('unset', 2);
    BackgroundOrigin$borderBox_instance = new BackgroundOrigin('borderBox', 3);
    BackgroundOrigin$paddingBox_instance = new BackgroundOrigin('paddingBox', 4);
    BackgroundOrigin$contentBox_instance = new BackgroundOrigin('contentBox', 5);
  }
  var BackgroundOrigin$initial_instance;
  function BackgroundOrigin$initial_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$initial_instance;
  }
  var BackgroundOrigin$inherit_instance;
  function BackgroundOrigin$inherit_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$inherit_instance;
  }
  var BackgroundOrigin$unset_instance;
  function BackgroundOrigin$unset_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$unset_instance;
  }
  var BackgroundOrigin$borderBox_instance;
  function BackgroundOrigin$borderBox_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$borderBox_instance;
  }
  var BackgroundOrigin$paddingBox_instance;
  function BackgroundOrigin$paddingBox_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$paddingBox_instance;
  }
  var BackgroundOrigin$contentBox_instance;
  function BackgroundOrigin$contentBox_getInstance() {
    BackgroundOrigin_initFields();
    return BackgroundOrigin$contentBox_instance;
  }
  BackgroundOrigin.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  BackgroundOrigin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackgroundOrigin',
    interfaces: [Enum]
  };
  function BackgroundOrigin$values() {
    return [BackgroundOrigin$initial_getInstance(), BackgroundOrigin$inherit_getInstance(), BackgroundOrigin$unset_getInstance(), BackgroundOrigin$borderBox_getInstance(), BackgroundOrigin$paddingBox_getInstance(), BackgroundOrigin$contentBox_getInstance()];
  }
  BackgroundOrigin.values = BackgroundOrigin$values;
  function BackgroundOrigin$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundOrigin$initial_getInstance();
      case 'inherit':
        return BackgroundOrigin$inherit_getInstance();
      case 'unset':
        return BackgroundOrigin$unset_getInstance();
      case 'borderBox':
        return BackgroundOrigin$borderBox_getInstance();
      case 'paddingBox':
        return BackgroundOrigin$paddingBox_getInstance();
      case 'contentBox':
        return BackgroundOrigin$contentBox_getInstance();
      default:throwISE('No enum constant kotlinx.css.BackgroundOrigin.' + name);
    }
  }
  BackgroundOrigin.valueOf_61zpoe$ = BackgroundOrigin$valueOf;
  function BorderCollapse(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BorderCollapse_initFields() {
    BorderCollapse_initFields = function () {
    };
    BorderCollapse$initial_instance = new BorderCollapse('initial', 0);
    BorderCollapse$inherit_instance = new BorderCollapse('inherit', 1);
    BorderCollapse$unset_instance = new BorderCollapse('unset', 2);
    BorderCollapse$separate_instance = new BorderCollapse('separate', 3);
    BorderCollapse$collapse_instance = new BorderCollapse('collapse', 4);
  }
  var BorderCollapse$initial_instance;
  function BorderCollapse$initial_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$initial_instance;
  }
  var BorderCollapse$inherit_instance;
  function BorderCollapse$inherit_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$inherit_instance;
  }
  var BorderCollapse$unset_instance;
  function BorderCollapse$unset_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$unset_instance;
  }
  var BorderCollapse$separate_instance;
  function BorderCollapse$separate_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$separate_instance;
  }
  var BorderCollapse$collapse_instance;
  function BorderCollapse$collapse_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$collapse_instance;
  }
  BorderCollapse.prototype.toString = function () {
    return this.name;
  };
  BorderCollapse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BorderCollapse',
    interfaces: [Enum]
  };
  function BorderCollapse$values() {
    return [BorderCollapse$initial_getInstance(), BorderCollapse$inherit_getInstance(), BorderCollapse$unset_getInstance(), BorderCollapse$separate_getInstance(), BorderCollapse$collapse_getInstance()];
  }
  BorderCollapse.values = BorderCollapse$values;
  function BorderCollapse$valueOf(name) {
    switch (name) {
      case 'initial':
        return BorderCollapse$initial_getInstance();
      case 'inherit':
        return BorderCollapse$inherit_getInstance();
      case 'unset':
        return BorderCollapse$unset_getInstance();
      case 'separate':
        return BorderCollapse$separate_getInstance();
      case 'collapse':
        return BorderCollapse$collapse_getInstance();
      default:throwISE('No enum constant kotlinx.css.BorderCollapse.' + name);
    }
  }
  BorderCollapse.valueOf_61zpoe$ = BorderCollapse$valueOf;
  function BorderStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BorderStyle_initFields() {
    BorderStyle_initFields = function () {
    };
    BorderStyle$initial_instance = new BorderStyle('initial', 0);
    BorderStyle$inherit_instance = new BorderStyle('inherit', 1);
    BorderStyle$unset_instance = new BorderStyle('unset', 2);
    BorderStyle$none_instance = new BorderStyle('none', 3);
    BorderStyle$dotted_instance = new BorderStyle('dotted', 4);
    BorderStyle$dashed_instance = new BorderStyle('dashed', 5);
    BorderStyle$solid_instance = new BorderStyle('solid', 6);
  }
  var BorderStyle$initial_instance;
  function BorderStyle$initial_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$initial_instance;
  }
  var BorderStyle$inherit_instance;
  function BorderStyle$inherit_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$inherit_instance;
  }
  var BorderStyle$unset_instance;
  function BorderStyle$unset_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$unset_instance;
  }
  var BorderStyle$none_instance;
  function BorderStyle$none_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$none_instance;
  }
  var BorderStyle$dotted_instance;
  function BorderStyle$dotted_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$dotted_instance;
  }
  var BorderStyle$dashed_instance;
  function BorderStyle$dashed_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$dashed_instance;
  }
  var BorderStyle$solid_instance;
  function BorderStyle$solid_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$solid_instance;
  }
  BorderStyle.prototype.toString = function () {
    return this.name;
  };
  BorderStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BorderStyle',
    interfaces: [Enum]
  };
  function BorderStyle$values() {
    return [BorderStyle$initial_getInstance(), BorderStyle$inherit_getInstance(), BorderStyle$unset_getInstance(), BorderStyle$none_getInstance(), BorderStyle$dotted_getInstance(), BorderStyle$dashed_getInstance(), BorderStyle$solid_getInstance()];
  }
  BorderStyle.values = BorderStyle$values;
  function BorderStyle$valueOf(name) {
    switch (name) {
      case 'initial':
        return BorderStyle$initial_getInstance();
      case 'inherit':
        return BorderStyle$inherit_getInstance();
      case 'unset':
        return BorderStyle$unset_getInstance();
      case 'none':
        return BorderStyle$none_getInstance();
      case 'dotted':
        return BorderStyle$dotted_getInstance();
      case 'dashed':
        return BorderStyle$dashed_getInstance();
      case 'solid':
        return BorderStyle$solid_getInstance();
      default:throwISE('No enum constant kotlinx.css.BorderStyle.' + name);
    }
  }
  BorderStyle.valueOf_61zpoe$ = BorderStyle$valueOf;
  function BoxSizing(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BoxSizing_initFields() {
    BoxSizing_initFields = function () {
    };
    BoxSizing$initial_instance = new BoxSizing('initial', 0);
    BoxSizing$inherit_instance = new BoxSizing('inherit', 1);
    BoxSizing$unset_instance = new BoxSizing('unset', 2);
    BoxSizing$contentBox_instance = new BoxSizing('contentBox', 3);
    BoxSizing$borderBox_instance = new BoxSizing('borderBox', 4);
  }
  var BoxSizing$initial_instance;
  function BoxSizing$initial_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$initial_instance;
  }
  var BoxSizing$inherit_instance;
  function BoxSizing$inherit_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$inherit_instance;
  }
  var BoxSizing$unset_instance;
  function BoxSizing$unset_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$unset_instance;
  }
  var BoxSizing$contentBox_instance;
  function BoxSizing$contentBox_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$contentBox_instance;
  }
  var BoxSizing$borderBox_instance;
  function BoxSizing$borderBox_getInstance() {
    BoxSizing_initFields();
    return BoxSizing$borderBox_instance;
  }
  BoxSizing.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  BoxSizing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxSizing',
    interfaces: [Enum]
  };
  function BoxSizing$values() {
    return [BoxSizing$initial_getInstance(), BoxSizing$inherit_getInstance(), BoxSizing$unset_getInstance(), BoxSizing$contentBox_getInstance(), BoxSizing$borderBox_getInstance()];
  }
  BoxSizing.values = BoxSizing$values;
  function BoxSizing$valueOf(name) {
    switch (name) {
      case 'initial':
        return BoxSizing$initial_getInstance();
      case 'inherit':
        return BoxSizing$inherit_getInstance();
      case 'unset':
        return BoxSizing$unset_getInstance();
      case 'contentBox':
        return BoxSizing$contentBox_getInstance();
      case 'borderBox':
        return BoxSizing$borderBox_getInstance();
      default:throwISE('No enum constant kotlinx.css.BoxSizing.' + name);
    }
  }
  BoxSizing.valueOf_61zpoe$ = BoxSizing$valueOf;
  function Clear(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clear_initFields() {
    Clear_initFields = function () {
    };
    Clear$initial_instance = new Clear('initial', 0);
    Clear$inherit_instance = new Clear('inherit', 1);
    Clear$unset_instance = new Clear('unset', 2);
    Clear$none_instance = new Clear('none', 3);
    Clear$left_instance = new Clear('left', 4);
    Clear$right_instance = new Clear('right', 5);
    Clear$both_instance = new Clear('both', 6);
  }
  var Clear$initial_instance;
  function Clear$initial_getInstance() {
    Clear_initFields();
    return Clear$initial_instance;
  }
  var Clear$inherit_instance;
  function Clear$inherit_getInstance() {
    Clear_initFields();
    return Clear$inherit_instance;
  }
  var Clear$unset_instance;
  function Clear$unset_getInstance() {
    Clear_initFields();
    return Clear$unset_instance;
  }
  var Clear$none_instance;
  function Clear$none_getInstance() {
    Clear_initFields();
    return Clear$none_instance;
  }
  var Clear$left_instance;
  function Clear$left_getInstance() {
    Clear_initFields();
    return Clear$left_instance;
  }
  var Clear$right_instance;
  function Clear$right_getInstance() {
    Clear_initFields();
    return Clear$right_instance;
  }
  var Clear$both_instance;
  function Clear$both_getInstance() {
    Clear_initFields();
    return Clear$both_instance;
  }
  Clear.prototype.toString = function () {
    return this.name;
  };
  Clear.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Clear',
    interfaces: [Enum]
  };
  function Clear$values() {
    return [Clear$initial_getInstance(), Clear$inherit_getInstance(), Clear$unset_getInstance(), Clear$none_getInstance(), Clear$left_getInstance(), Clear$right_getInstance(), Clear$both_getInstance()];
  }
  Clear.values = Clear$values;
  function Clear$valueOf(name) {
    switch (name) {
      case 'initial':
        return Clear$initial_getInstance();
      case 'inherit':
        return Clear$inherit_getInstance();
      case 'unset':
        return Clear$unset_getInstance();
      case 'none':
        return Clear$none_getInstance();
      case 'left':
        return Clear$left_getInstance();
      case 'right':
        return Clear$right_getInstance();
      case 'both':
        return Clear$both_getInstance();
      default:throwISE('No enum constant kotlinx.css.Clear.' + name);
    }
  }
  Clear.valueOf_61zpoe$ = Clear$valueOf;
  function Color(value) {
    Color$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dt80hi$_0 = value;
    this.rgb_0 = null;
  }
  Object.defineProperty(Color.prototype, 'value', {
    get: function () {
      return this.value_dt80hi$_0;
    }
  });
  function Color$Companion() {
    Color$Companion_instance = this;
    this.initial = new Color('initial');
    this.inherit = new Color('inherit');
    this.unset = new Color('unset');
    this.transparent = new Color('transparent');
    this.currentColor = new Color('currentColor');
    this.aliceBlue = Color_init('aliceblue', '#f0f8ff');
    this.antiqueWhite = Color_init('antiquewhite', '#faebd7');
    this.aqua = Color_init('aqua', '#00ffff');
    this.aquamarine = Color_init('aquamarine', '#7fffd4');
    this.azure = Color_init('azure', '#f0ffff');
    this.beige = Color_init('beige', '#f5f5dc');
    this.bisque = Color_init('bisque', '#ffe4c4');
    this.black = Color_init('black', '#000000');
    this.blanchedAlmond = Color_init('blanchedalmond', '#ffebcd');
    this.blue = Color_init('blue', '#0000ff');
    this.blueViolet = Color_init('blueviolet', '#8a2be2');
    this.brown = Color_init('brown', '#a52a2a');
    this.burlyWood = Color_init('burlywood', '#deb887');
    this.cadetBlue = Color_init('cadetblue', '#5f9ea0');
    this.chartreuse = Color_init('chartreuse', '#7fff00');
    this.chocolate = Color_init('chocolate', '#d2691e');
    this.coral = Color_init('coral', '#ff7f50');
    this.cornflowerBlue = Color_init('cornflowerblue', '#6495ed');
    this.cornsilk = Color_init('cornsilk', '#fff8dc');
    this.crimson = Color_init('crimson', '#dc143c');
    this.cyan = Color_init('cyan', '#00ffff');
    this.darkBlue = Color_init('darkblue', '#00008b');
    this.darkCyan = Color_init('darkcyan', '#008b8b');
    this.darkGoldenrod = Color_init('darkgoldenrod', '#b8860b');
    this.darkGray = Color_init('darkgray', '#a9a9a9');
    this.darkGreen = Color_init('darkgreen', '#006400');
    this.darkGrey = Color_init('darkgrey', '#a9a9a9');
    this.darkKhaki = Color_init('darkkhaki', '#bdb76b');
    this.darkMagenta = Color_init('darkmagenta', '#8b008b');
    this.darkOliveGreen = Color_init('darkolivegreen', '#556b2f');
    this.darkOrange = Color_init('darkorange', '#ff8c00');
    this.darkOrchid = Color_init('darkorchid', '#9932cc');
    this.darkRed = Color_init('darkred', '#8b0000');
    this.darkSalmon = Color_init('darksalmon', '#e9967a');
    this.darkSeaGreen = Color_init('darkseagreen', '#8fbc8f');
    this.darkSlateBlue = Color_init('darkslateblue', '#483d8b');
    this.darkSlateGray = Color_init('darkslategray', '#2f4f4f');
    this.darkSlateGrey = Color_init('darkslategrey', '#2f4f4f');
    this.darkTurquoise = Color_init('darkturquoise', '#00ced1');
    this.darkViolet = Color_init('darkviolet', '#9400d3');
    this.deepPink = Color_init('deeppink', '#ff1493');
    this.deepSkyBlue = Color_init('deepskyblue', '#00bfff');
    this.dimGray = Color_init('dimgray', '#696969');
    this.dimGrey = Color_init('dimgrey', '#696969');
    this.dodgerBlue = Color_init('dodgerblue', '#1e90ff');
    this.firebrick = Color_init('firebrick', '#b22222');
    this.floralWhite = Color_init('floralwhite', '#fffaf0');
    this.forestGreen = Color_init('forestgreen', '#228b22');
    this.fuchsia = Color_init('fuchsia', '#ff00ff');
    this.gainsboro = Color_init('gainsboro', '#dcdcdc');
    this.ghostWhite = Color_init('ghostwhite', '#f8f8ff');
    this.gold = Color_init('gold', '#ffd700');
    this.goldenrod = Color_init('goldenrod', '#daa520');
    this.gray = Color_init('gray', '#808080');
    this.green = Color_init('green', '#008000');
    this.greenYellow = Color_init('greenyellow', '#adff2f');
    this.grey = Color_init('grey', '#808080');
    this.honeydew = Color_init('honeydew', '#f0fff0');
    this.hotPink = Color_init('hotpink', '#ff69b4');
    this.indianRed = Color_init('indianred', '#cd5c5c');
    this.indigo = Color_init('indigo', '#4b0082');
    this.ivory = Color_init('ivory', '#fffff0');
    this.khaki = Color_init('khaki', '#f0e68c');
    this.lavender = Color_init('lavender', '#e6e6fa');
    this.lavenderBlush = Color_init('lavenderblush', '#fff0f5');
    this.lawnGreen = Color_init('lawngreen', '#7cfc00');
    this.lemonChiffon = Color_init('lemonchiffon', '#fffacd');
    this.lightBlue = Color_init('lightblue', '#add8e6');
    this.lightCoral = Color_init('lightcoral', '#f08080');
    this.lightCyan = Color_init('lightcyan', '#e0ffff');
    this.lightGoldenrodYellow = Color_init('lightgoldenrodyellow', '#fafad2');
    this.lightGray = Color_init('lightgray', '#d3d3d3');
    this.lightGreen = Color_init('lightgreen', '#90ee90');
    this.lightGrey = Color_init('lightgrey', '#d3d3d3');
    this.lightPink = Color_init('lightpink', '#ffb6c1');
    this.lightSalmon = Color_init('lightsalmon', '#ffa07a');
    this.lightSeaGreen = Color_init('lightseagreen', '#20b2aa');
    this.lightSkyBlue = Color_init('lightskyblue', '#87cefa');
    this.lightSlateGray = Color_init('lightslategray', '#778899');
    this.lightSlateGrey = Color_init('lightslategrey', '#778899');
    this.lightSteelBlue = Color_init('lightsteelblue', '#b0c4de');
    this.lightYellow = Color_init('lightyellow', '#ffffe0');
    this.lime = Color_init('lime', '#00ff00');
    this.limeGreen = Color_init('limegreen', '#32cd32');
    this.linen = Color_init('linen', '#faf0e6');
    this.magenta = Color_init('magenta', '#ff00ff');
    this.maroon = Color_init('maroon', '#800000');
    this.mediumAquamarine = Color_init('mediumaquamarine', '#66cdaa');
    this.mediumBlue = Color_init('mediumblue', '#0000cd');
    this.mediumOrchid = Color_init('mediumorchid', '#ba55d3');
    this.mediumPurple = Color_init('mediumpurple', '#9370d8');
    this.mediumSeaGreen = Color_init('mediumseagreen', '#3cb371');
    this.mediumSlateBlue = Color_init('mediumslateblue', '#7b68ee');
    this.mediumSpringGreen = Color_init('mediumspringgreen', '#00fa9a');
    this.mediumTurquoise = Color_init('mediumturquoise', '#48d1cc');
    this.mediumVioletRed = Color_init('mediumvioletred', '#c71585');
    this.midnightBlue = Color_init('midnightblue', '#191970');
    this.mintCream = Color_init('mintcream', '#f5fffa');
    this.mistyRose = Color_init('mistyrose', '#ffe4e1');
    this.moccasin = Color_init('moccasin', '#ffe4b5');
    this.navajoWhite = Color_init('navajowhite', '#ffdead');
    this.navy = Color_init('navy', '#000080');
    this.oldLace = Color_init('oldlace', '#fdf5e6');
    this.olive = Color_init('olive', '#808000');
    this.oliveDrab = Color_init('olivedrab', '#6b8e23');
    this.orange = Color_init('orange', '#ffa500');
    this.orangeRed = Color_init('orangered', '#ff4500');
    this.orchid = Color_init('orchid', '#da70d6');
    this.paleGoldenrod = Color_init('palegoldenrod', '#eee8aa');
    this.paleGreen = Color_init('palegreen', '#98fb98');
    this.paleTurquoise = Color_init('paleturquoise', '#afeeee');
    this.paleVioletRed = Color_init('palevioletred', '#db7093');
    this.papayaWhip = Color_init('papayawhip', '#ffefd5');
    this.peachPuff = Color_init('peachpuff', '#ffdab9');
    this.peru = Color_init('peru', '#cd853f');
    this.pink = Color_init('pink', '#ffc0cb');
    this.plum = Color_init('plum', '#dda0dd');
    this.powderBlue = Color_init('powderblue', '#b0e0e6');
    this.purple = Color_init('purple', '#800080');
    this.red = Color_init('red', '#ff0000');
    this.rosyBrown = Color_init('rosybrown', '#bc8f8f');
    this.royalBlue = Color_init('royalblue', '#4169e1');
    this.saddleBrown = Color_init('saddlebrown', '#8b4513');
    this.salmon = Color_init('salmon', '#fa8072');
    this.sandyBrown = Color_init('sandybrown', '#f4a460');
    this.seaGreen = Color_init('seagreen', '#2e8b57');
    this.seaShell = Color_init('seashell', '#fff5ee');
    this.sienna = Color_init('sienna', '#a0522d');
    this.silver = Color_init('silver', '#c0c0c0');
    this.skyBlue = Color_init('skyblue', '#87ceeb');
    this.slateBlue = Color_init('slateblue', '#6a5acd');
    this.slateGray = Color_init('slategray', '#708090');
    this.slateGrey = Color_init('slategrey', '#708090');
    this.snow = Color_init('snow', '#fffafa');
    this.springGreen = Color_init('springgreen', '#00ff7f');
    this.steelBlue = Color_init('steelblue', '#4682b4');
    this.tan = Color_init('tan', '#d2b48c');
    this.teal = Color_init('teal', '#008080');
    this.thistle = Color_init('thistle', '#d8bfd8');
    this.tomato = Color_init('tomato', '#ff6347');
    this.turquoise = Color_init('turquoise', '#40e0d0');
    this.violet = Color_init('violet', '#ee82ee');
    this.wheat = Color_init('wheat', '#f5deb3');
    this.white = Color_init('white', '#ffffff');
    this.whiteSmoke = Color_init('whitesmoke', '#f5f5f5');
    this.yellow = Color_init('yellow', '#ffff00');
    this.yellowGreen = Color_init('yellowgreen', '#9acd3');
    this.normalizeFractionalPercent = Color$Companion$normalizeFractionalPercent$lambda;
    this.normalizePercent = Color$Companion$normalizePercent$lambda;
    this.normalizeRGB = Color$Companion$normalizeRGB$lambda;
    this.normalizeHue = Color$Companion$normalizeHue$lambda;
    this.normalizeAlpha = this.normalizeFractionalPercent;
  }
  function Color$Companion$normalizeFractionalPercent$lambda(v) {
    return normalize_0(0.0, 1.0, v);
  }
  function Color$Companion$normalizePercent$lambda(v) {
    return normalize(0, 100, v);
  }
  function Color$Companion$normalizeRGB$lambda(v) {
    return normalize(0, 255, v);
  }
  function Color$Companion$normalizeHue$lambda(v) {
    return roundToInt((v % 360 + 360) % 360);
  }
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.prototype.withAlpha_14dthe$ = function (alpha) {
    if (startsWith_0(this.value, 'hsl', true)) {
      var $receiver = this.fromHSLANotation_8be2vx$();
      return hsla($receiver.hue, $receiver.saturation, $receiver.lightness, Color$Companion_getInstance().normalizeAlpha(alpha) * $receiver.alpha);
    }
     else {
      var $receiver_0 = this.toRGBA_8be2vx$();
      return rgba($receiver_0.red, $receiver_0.green, $receiver_0.blue, Color$Companion_getInstance().normalizeAlpha(alpha) * $receiver_0.alpha);
    }
  };
  Color.prototype.lighten_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var lightness = hsla_0.lightness + roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent(lightness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    }
     else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.darken_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var darkness = hsla_0.lightness - roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent(darkness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    }
     else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.saturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var saturation = hsla_0.saturation + roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent(saturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    }
     else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.desaturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var desaturation = hsla_0.saturation - roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent(desaturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    }
     else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  function Color$RGBA(red, green, blue, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  var Math_0 = Math;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Color$RGBA.prototype.asHSLA = function () {
    var tmp$;
    var r = this.red / 255.0;
    var g = this.green / 255.0;
    var b = this.blue / 255.0;
    var cMax = Math_0.max(r, g, b);
    var cMin = Math_0.min(r, g, b);
    var chroma = cMax - cMin;
    var lg = Color$Companion_getInstance().normalizeFractionalPercent((cMax + cMin) / 2);
    var tmp$_0;
    if (chroma !== 0.0) {
      var tmp$_1 = Color$Companion_getInstance();
      var tmp$_2 = tmp$_1.normalizeFractionalPercent;
      var x = 2.0 * lg - 1.0;
      tmp$_0 = tmp$_2.call(tmp$_1, chroma / (1.0 - Math_0.abs(x)));
    }
     else
      tmp$_0 = 0.0;
    var s = tmp$_0;
    if (cMax === cMin)
      tmp$ = 0.0;
    else if (cMax === r)
      tmp$ = 60 * ((g - b) / chroma % 6.0);
    else if (cMax === g)
      tmp$ = 60 * ((b - r) / chroma + 2);
    else if (cMax === b)
      tmp$ = 60 * ((r - g) / chroma + 4);
    else {
      throw IllegalStateException_init('Unexpected value for max'.toString());
    }
    var h = tmp$;
    return new Color$HSLA(Color$Companion_getInstance().normalizeHue(h), roundToInt(s * 100), roundToInt(lg * 100), this.alpha);
  };
  Color$RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: []
  };
  Color$RGBA.prototype.component1 = function () {
    return this.red;
  };
  Color$RGBA.prototype.component2 = function () {
    return this.green;
  };
  Color$RGBA.prototype.component3 = function () {
    return this.blue;
  };
  Color$RGBA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$RGBA.prototype.copy_gb4hak$ = function (red, green, blue, alpha) {
    return new Color$RGBA(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  Color$RGBA.prototype.toString = function () {
    return 'RGBA(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$HSLA(hue, saturation, lightness, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }
  function Color$HSLA$asRGBA$hueToRGB(m1, m2, h) {
    var tmp$;
    var hu = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    if (hu < 1.0 / 6)
      tmp$ = m1 + (m2 - m1) * 6 * hu;
    else if (hu < 1.0 / 2)
      tmp$ = m2;
    else if (hu < 2.0 / 3)
      tmp$ = m1 + (m2 - m1) * 6 * (2.0 / 3 - hu);
    else
      tmp$ = m1;
    return tmp$;
  }
  Color$HSLA.prototype.asRGBA = function () {
    var hueToRGB = Color$HSLA$asRGBA$hueToRGB;
    if (this.saturation === 0)
      return new Color$RGBA(this.lightness, this.lightness, this.lightness);
    var h = this.hue % 360.0 / 360.0;
    var s = this.saturation / 100.0;
    var lg = this.lightness / 100.0;
    var m2 = lg < 0.5 ? lg * (1 + s) : lg + s - lg * s;
    var m1 = 2 * lg - m2;
    var r = Color$Companion_getInstance().normalizeFractionalPercent(hueToRGB(m1, m2, h + 1.0 / 3));
    var g = Color$Companion_getInstance().normalizeFractionalPercent(hueToRGB(m1, m2, h));
    var b = Color$Companion_getInstance().normalizeFractionalPercent(hueToRGB(m1, m2, h - 1.0 / 3));
    return new Color$RGBA(roundToInt(r * 255), roundToInt(g * 255), roundToInt(b * 255), this.alpha);
  };
  Color$HSLA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HSLA',
    interfaces: []
  };
  Color$HSLA.prototype.component1 = function () {
    return this.hue;
  };
  Color$HSLA.prototype.component2 = function () {
    return this.saturation;
  };
  Color$HSLA.prototype.component3 = function () {
    return this.lightness;
  };
  Color$HSLA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$HSLA.prototype.copy_gb4hak$ = function (hue, saturation, lightness, alpha) {
    return new Color$HSLA(hue === void 0 ? this.hue : hue, saturation === void 0 ? this.saturation : saturation, lightness === void 0 ? this.lightness : lightness, alpha === void 0 ? this.alpha : alpha);
  };
  Color$HSLA.prototype.toString = function () {
    return 'HSLA(hue=' + Kotlin.toString(this.hue) + (', saturation=' + Kotlin.toString(this.saturation)) + (', lightness=' + Kotlin.toString(this.lightness)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$HSLA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hue) | 0;
    result = result * 31 + Kotlin.hashCode(this.saturation) | 0;
    result = result * 31 + Kotlin.hashCode(this.lightness) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$HSLA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hue, other.hue) && Kotlin.equals(this.saturation, other.saturation) && Kotlin.equals(this.lightness, other.lightness) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$fromHSLANotation$getHSLParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected hsl or hsla notation, got ' + this$Color.value);
      }
      return tmp$_1;
    };
  }
  Color.prototype.fromHSLANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var pattern = '^hsla?\\((-?[0-9]+\\.?[0-9]*(?:deg|grad|rad|turn)?)\\s*[, ]?\\s*(\\d{1,3})%\\s*[, ]\\s*(\\d{1,3})%\\s*[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$';
    var match = Regex_init_0(pattern, RegexOption.IGNORE_CASE).find_905azu$(this.value);
    var getHSLParameter = Color$fromHSLANotation$getHSLParameter(match, this);
    var hueShape = getHSLParameter(1);
    tmp$_0 = Color$Companion_getInstance().normalizeHue;
    if (endsWith(hueShape, 'grad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'grad')) * (9.0 / 10);
    else if (endsWith(hueShape, 'rad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'rad')) * 180 / math.PI;
    else if (endsWith(hueShape, 'turn', true))
      tmp$ = toDouble(substringBefore(hueShape, 'turn')) * 360.0;
    else if (endsWith(hueShape, 'deg', true))
      tmp$ = toDouble(substringBefore(hueShape, 'deg'));
    else
      tmp$ = toDouble(hueShape);
    var hue = tmp$_0(tmp$);
    var saturation = Color$Companion_getInstance().normalizePercent(toInt(getHSLParameter(2)));
    var lightness = Color$Companion_getInstance().normalizePercent(toInt(getHSLParameter(3)));
    var alpha = Color$Companion_getInstance().normalizeAlpha((tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = match != null ? match.groups : null) != null ? tmp$_1.get_za3lpa$(4) : null) != null ? tmp$_2.value : null) != null ? toDouble(tmp$_3) : null) != null ? tmp$_4 : 1.0);
    return new Color$HSLA(hue, saturation, lightness, alpha);
  };
  function Color$fromRGBANotation$getRGBParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected rgb or rgba notation, got ' + this$Color.value);
      }
      var group = tmp$_1;
      if (endsWith_0(group, 37))
        tmp$_2 = numberToInt(Color$Companion_getInstance().normalizeFractionalPercent(toDouble(substringBefore_0(group, 37)) / 100.0) * 255.0);
      else
        tmp$_2 = Color$Companion_getInstance().normalizeRGB(toInt(group));
      return tmp$_2;
    };
  }
  Color.prototype.fromRGBANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pattern = '^rgba?\\((\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$';
    var match = Regex_init_0(pattern, RegexOption.IGNORE_CASE).find_905azu$(this.value);
    var getRGBParameter = Color$fromRGBANotation$getRGBParameter(match, this);
    var red = getRGBParameter(1);
    var green = getRGBParameter(2);
    var blue = getRGBParameter(3);
    var alpha = Color$Companion_getInstance().normalizeAlpha((tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = match != null ? match.groups : null) != null ? tmp$.get_za3lpa$(4) : null) != null ? tmp$_0.value : null) != null ? toDouble(tmp$_1) : null) != null ? tmp$_2 : 1.0);
    return new Color$RGBA(red, green, blue, alpha);
  };
  Color.prototype.toRGBA_8be2vx$ = function () {
    var tmp$, tmp$_0;
    var v = (tmp$ = this.rgb_0) != null ? tmp$ : this.value;
    if (startsWith_0(v, 'rgb'))
      tmp$_0 = this.fromRGBANotation_8be2vx$();
    else if (startsWith_0(v, '#') && v.length === 4)
      tmp$_0 = new Color$RGBA(toInt_0(times(String.fromCharCode(v.charCodeAt(1)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(2)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(3)), 2), 16));
    else if (startsWith_0(v, '#') && (v.length === 7 || v.length === 9))
      tmp$_0 = new Color$RGBA(toInt_0(substring(v, new IntRange(1, 2)), 16), toInt_0(substring(v, new IntRange(3, 4)), 16), toInt_0(substring(v, new IntRange(5, 6)), 16));
    else
      throw IllegalArgumentException_init('Only hexadecimal, rgb, and rgba notations are accepted, got ' + v);
    return tmp$_0;
  };
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: [CssValue]
  };
  function Color_init(value, rgb, $this) {
    $this = $this || Object.create(Color.prototype);
    Color.call($this, value);
    $this.rgb_0 = rgb;
    return $this;
  }
  function rgb(red, green, blue) {
    return new Color('rgb(' + red + ', ' + green + ', ' + blue + ')');
  }
  function rgba(red, green, blue, alpha) {
    return new Color('rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')');
  }
  function hsl(hue, saturation, lightness) {
    return new Color('hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)');
  }
  function hsla(hue, saturation, lightness, alpha) {
    return new Color('hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + alpha + ')');
  }
  function blackAlpha(alpha) {
    return Color$Companion_getInstance().black.withAlpha_14dthe$(alpha);
  }
  function whiteAlpha(alpha) {
    return Color$Companion_getInstance().white.withAlpha_14dthe$(alpha);
  }
  function normalize(min, max, value) {
    var b = Math_0.min(max, value);
    return Math_0.max(min, b);
  }
  function normalize_0(min, max, value) {
    var b = Math_0.min(max, value);
    return Math_0.max(min, b);
  }
  function ColumnGap(value) {
    ColumnGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_n6uu7b$_0 = value;
  }
  Object.defineProperty(ColumnGap.prototype, 'value', {
    get: function () {
      return this.value_n6uu7b$_0;
    }
  });
  function ColumnGap$Companion() {
    ColumnGap$Companion_instance = this;
    this.initial = new ColumnGap('initial');
    this.inherit = new ColumnGap('inherit');
    this.normal = new ColumnGap('normal');
    this.unset = new ColumnGap('unset');
  }
  ColumnGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColumnGap$Companion_instance = null;
  function ColumnGap$Companion_getInstance() {
    if (ColumnGap$Companion_instance === null) {
      new ColumnGap$Companion();
    }
    return ColumnGap$Companion_instance;
  }
  ColumnGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColumnGap',
    interfaces: [CssValue]
  };
  function Contain(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Contain_initFields() {
    Contain_initFields = function () {
    };
    Contain$initial_instance = new Contain('initial', 0);
    Contain$inherit_instance = new Contain('inherit', 1);
    Contain$unset_instance = new Contain('unset', 2);
    Contain$none_instance = new Contain('none', 3);
    Contain$strict_instance = new Contain('strict', 4);
    Contain$content_instance = new Contain('content', 5);
    Contain$size_instance = new Contain('size', 6);
    Contain$layout_instance = new Contain('layout', 7);
    Contain$style_instance = new Contain('style', 8);
    Contain$paint_instance = new Contain('paint', 9);
  }
  var Contain$initial_instance;
  function Contain$initial_getInstance() {
    Contain_initFields();
    return Contain$initial_instance;
  }
  var Contain$inherit_instance;
  function Contain$inherit_getInstance() {
    Contain_initFields();
    return Contain$inherit_instance;
  }
  var Contain$unset_instance;
  function Contain$unset_getInstance() {
    Contain_initFields();
    return Contain$unset_instance;
  }
  var Contain$none_instance;
  function Contain$none_getInstance() {
    Contain_initFields();
    return Contain$none_instance;
  }
  var Contain$strict_instance;
  function Contain$strict_getInstance() {
    Contain_initFields();
    return Contain$strict_instance;
  }
  var Contain$content_instance;
  function Contain$content_getInstance() {
    Contain_initFields();
    return Contain$content_instance;
  }
  var Contain$size_instance;
  function Contain$size_getInstance() {
    Contain_initFields();
    return Contain$size_instance;
  }
  var Contain$layout_instance;
  function Contain$layout_getInstance() {
    Contain_initFields();
    return Contain$layout_instance;
  }
  var Contain$style_instance;
  function Contain$style_getInstance() {
    Contain_initFields();
    return Contain$style_instance;
  }
  var Contain$paint_instance;
  function Contain$paint_getInstance() {
    Contain_initFields();
    return Contain$paint_instance;
  }
  Contain.prototype.toString = function () {
    return this.name;
  };
  Contain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contain',
    interfaces: [Enum]
  };
  function Contain$values() {
    return [Contain$initial_getInstance(), Contain$inherit_getInstance(), Contain$unset_getInstance(), Contain$none_getInstance(), Contain$strict_getInstance(), Contain$content_getInstance(), Contain$size_getInstance(), Contain$layout_getInstance(), Contain$style_getInstance(), Contain$paint_getInstance()];
  }
  Contain.values = Contain$values;
  function Contain$valueOf(name) {
    switch (name) {
      case 'initial':
        return Contain$initial_getInstance();
      case 'inherit':
        return Contain$inherit_getInstance();
      case 'unset':
        return Contain$unset_getInstance();
      case 'none':
        return Contain$none_getInstance();
      case 'strict':
        return Contain$strict_getInstance();
      case 'content':
        return Contain$content_getInstance();
      case 'size':
        return Contain$size_getInstance();
      case 'layout':
        return Contain$layout_getInstance();
      case 'style':
        return Contain$style_getInstance();
      case 'paint':
        return Contain$paint_getInstance();
      default:throwISE('No enum constant kotlinx.css.Contain.' + name);
    }
  }
  Contain.valueOf_61zpoe$ = Contain$valueOf;
  function Cursor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Cursor_initFields() {
    Cursor_initFields = function () {
    };
    Cursor$initial_instance = new Cursor('initial', 0);
    Cursor$inherit_instance = new Cursor('inherit', 1);
    Cursor$unset_instance = new Cursor('unset', 2);
    Cursor$auto_instance = new Cursor('auto', 3);
    Cursor$default_instance = new Cursor('default', 4);
    Cursor$none_instance = new Cursor('none', 5);
    Cursor$contextMenu_instance = new Cursor('contextMenu', 6);
    Cursor$help_instance = new Cursor('help', 7);
    Cursor$pointer_instance = new Cursor('pointer', 8);
    Cursor$progress_instance = new Cursor('progress', 9);
    Cursor$wait_instance = new Cursor('wait', 10);
    Cursor$cell_instance = new Cursor('cell', 11);
    Cursor$crosshair_instance = new Cursor('crosshair', 12);
    Cursor$text_instance = new Cursor('text', 13);
    Cursor$verticalText_instance = new Cursor('verticalText', 14);
    Cursor$alias_instance = new Cursor('alias', 15);
    Cursor$copy_instance = new Cursor('copy', 16);
    Cursor$move_instance = new Cursor('move', 17);
    Cursor$noDrop_instance = new Cursor('noDrop', 18);
    Cursor$notAllowed_instance = new Cursor('notAllowed', 19);
    Cursor$grab_instance = new Cursor('grab', 20);
    Cursor$grabbing_instance = new Cursor('grabbing', 21);
    Cursor$colResize_instance = new Cursor('colResize', 22);
    Cursor$rowResize_instance = new Cursor('rowResize', 23);
    Cursor$allScroll_instance = new Cursor('allScroll', 24);
    Cursor$eResize_instance = new Cursor('eResize', 25);
    Cursor$nResize_instance = new Cursor('nResize', 26);
    Cursor$neResize_instance = new Cursor('neResize', 27);
    Cursor$nwResize_instance = new Cursor('nwResize', 28);
    Cursor$sResize_instance = new Cursor('sResize', 29);
    Cursor$seResize_instance = new Cursor('seResize', 30);
    Cursor$swResize_instance = new Cursor('swResize', 31);
    Cursor$wResize_instance = new Cursor('wResize', 32);
    Cursor$ewResize_instance = new Cursor('ewResize', 33);
    Cursor$nsResize_instance = new Cursor('nsResize', 34);
    Cursor$neswResize_instance = new Cursor('neswResize', 35);
    Cursor$nwseResize_instance = new Cursor('nwseResize', 36);
    Cursor$zoomIn_instance = new Cursor('zoomIn', 37);
    Cursor$zoomOut_instance = new Cursor('zoomOut', 38);
  }
  var Cursor$initial_instance;
  function Cursor$initial_getInstance() {
    Cursor_initFields();
    return Cursor$initial_instance;
  }
  var Cursor$inherit_instance;
  function Cursor$inherit_getInstance() {
    Cursor_initFields();
    return Cursor$inherit_instance;
  }
  var Cursor$unset_instance;
  function Cursor$unset_getInstance() {
    Cursor_initFields();
    return Cursor$unset_instance;
  }
  var Cursor$auto_instance;
  function Cursor$auto_getInstance() {
    Cursor_initFields();
    return Cursor$auto_instance;
  }
  var Cursor$default_instance;
  function Cursor$default_getInstance() {
    Cursor_initFields();
    return Cursor$default_instance;
  }
  var Cursor$none_instance;
  function Cursor$none_getInstance() {
    Cursor_initFields();
    return Cursor$none_instance;
  }
  var Cursor$contextMenu_instance;
  function Cursor$contextMenu_getInstance() {
    Cursor_initFields();
    return Cursor$contextMenu_instance;
  }
  var Cursor$help_instance;
  function Cursor$help_getInstance() {
    Cursor_initFields();
    return Cursor$help_instance;
  }
  var Cursor$pointer_instance;
  function Cursor$pointer_getInstance() {
    Cursor_initFields();
    return Cursor$pointer_instance;
  }
  var Cursor$progress_instance;
  function Cursor$progress_getInstance() {
    Cursor_initFields();
    return Cursor$progress_instance;
  }
  var Cursor$wait_instance;
  function Cursor$wait_getInstance() {
    Cursor_initFields();
    return Cursor$wait_instance;
  }
  var Cursor$cell_instance;
  function Cursor$cell_getInstance() {
    Cursor_initFields();
    return Cursor$cell_instance;
  }
  var Cursor$crosshair_instance;
  function Cursor$crosshair_getInstance() {
    Cursor_initFields();
    return Cursor$crosshair_instance;
  }
  var Cursor$text_instance;
  function Cursor$text_getInstance() {
    Cursor_initFields();
    return Cursor$text_instance;
  }
  var Cursor$verticalText_instance;
  function Cursor$verticalText_getInstance() {
    Cursor_initFields();
    return Cursor$verticalText_instance;
  }
  var Cursor$alias_instance;
  function Cursor$alias_getInstance() {
    Cursor_initFields();
    return Cursor$alias_instance;
  }
  var Cursor$copy_instance;
  function Cursor$copy_getInstance() {
    Cursor_initFields();
    return Cursor$copy_instance;
  }
  var Cursor$move_instance;
  function Cursor$move_getInstance() {
    Cursor_initFields();
    return Cursor$move_instance;
  }
  var Cursor$noDrop_instance;
  function Cursor$noDrop_getInstance() {
    Cursor_initFields();
    return Cursor$noDrop_instance;
  }
  var Cursor$notAllowed_instance;
  function Cursor$notAllowed_getInstance() {
    Cursor_initFields();
    return Cursor$notAllowed_instance;
  }
  var Cursor$grab_instance;
  function Cursor$grab_getInstance() {
    Cursor_initFields();
    return Cursor$grab_instance;
  }
  var Cursor$grabbing_instance;
  function Cursor$grabbing_getInstance() {
    Cursor_initFields();
    return Cursor$grabbing_instance;
  }
  var Cursor$colResize_instance;
  function Cursor$colResize_getInstance() {
    Cursor_initFields();
    return Cursor$colResize_instance;
  }
  var Cursor$rowResize_instance;
  function Cursor$rowResize_getInstance() {
    Cursor_initFields();
    return Cursor$rowResize_instance;
  }
  var Cursor$allScroll_instance;
  function Cursor$allScroll_getInstance() {
    Cursor_initFields();
    return Cursor$allScroll_instance;
  }
  var Cursor$eResize_instance;
  function Cursor$eResize_getInstance() {
    Cursor_initFields();
    return Cursor$eResize_instance;
  }
  var Cursor$nResize_instance;
  function Cursor$nResize_getInstance() {
    Cursor_initFields();
    return Cursor$nResize_instance;
  }
  var Cursor$neResize_instance;
  function Cursor$neResize_getInstance() {
    Cursor_initFields();
    return Cursor$neResize_instance;
  }
  var Cursor$nwResize_instance;
  function Cursor$nwResize_getInstance() {
    Cursor_initFields();
    return Cursor$nwResize_instance;
  }
  var Cursor$sResize_instance;
  function Cursor$sResize_getInstance() {
    Cursor_initFields();
    return Cursor$sResize_instance;
  }
  var Cursor$seResize_instance;
  function Cursor$seResize_getInstance() {
    Cursor_initFields();
    return Cursor$seResize_instance;
  }
  var Cursor$swResize_instance;
  function Cursor$swResize_getInstance() {
    Cursor_initFields();
    return Cursor$swResize_instance;
  }
  var Cursor$wResize_instance;
  function Cursor$wResize_getInstance() {
    Cursor_initFields();
    return Cursor$wResize_instance;
  }
  var Cursor$ewResize_instance;
  function Cursor$ewResize_getInstance() {
    Cursor_initFields();
    return Cursor$ewResize_instance;
  }
  var Cursor$nsResize_instance;
  function Cursor$nsResize_getInstance() {
    Cursor_initFields();
    return Cursor$nsResize_instance;
  }
  var Cursor$neswResize_instance;
  function Cursor$neswResize_getInstance() {
    Cursor_initFields();
    return Cursor$neswResize_instance;
  }
  var Cursor$nwseResize_instance;
  function Cursor$nwseResize_getInstance() {
    Cursor_initFields();
    return Cursor$nwseResize_instance;
  }
  var Cursor$zoomIn_instance;
  function Cursor$zoomIn_getInstance() {
    Cursor_initFields();
    return Cursor$zoomIn_instance;
  }
  var Cursor$zoomOut_instance;
  function Cursor$zoomOut_getInstance() {
    Cursor_initFields();
    return Cursor$zoomOut_instance;
  }
  Cursor.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  Cursor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cursor',
    interfaces: [Enum]
  };
  function Cursor$values() {
    return [Cursor$initial_getInstance(), Cursor$inherit_getInstance(), Cursor$unset_getInstance(), Cursor$auto_getInstance(), Cursor$default_getInstance(), Cursor$none_getInstance(), Cursor$contextMenu_getInstance(), Cursor$help_getInstance(), Cursor$pointer_getInstance(), Cursor$progress_getInstance(), Cursor$wait_getInstance(), Cursor$cell_getInstance(), Cursor$crosshair_getInstance(), Cursor$text_getInstance(), Cursor$verticalText_getInstance(), Cursor$alias_getInstance(), Cursor$copy_getInstance(), Cursor$move_getInstance(), Cursor$noDrop_getInstance(), Cursor$notAllowed_getInstance(), Cursor$grab_getInstance(), Cursor$grabbing_getInstance(), Cursor$colResize_getInstance(), Cursor$rowResize_getInstance(), Cursor$allScroll_getInstance(), Cursor$eResize_getInstance(), Cursor$nResize_getInstance(), Cursor$neResize_getInstance(), Cursor$nwResize_getInstance(), Cursor$sResize_getInstance(), Cursor$seResize_getInstance(), Cursor$swResize_getInstance(), Cursor$wResize_getInstance(), Cursor$ewResize_getInstance(), Cursor$nsResize_getInstance(), Cursor$neswResize_getInstance(), Cursor$nwseResize_getInstance(), Cursor$zoomIn_getInstance(), Cursor$zoomOut_getInstance()];
  }
  Cursor.values = Cursor$values;
  function Cursor$valueOf(name) {
    switch (name) {
      case 'initial':
        return Cursor$initial_getInstance();
      case 'inherit':
        return Cursor$inherit_getInstance();
      case 'unset':
        return Cursor$unset_getInstance();
      case 'auto':
        return Cursor$auto_getInstance();
      case 'default':
        return Cursor$default_getInstance();
      case 'none':
        return Cursor$none_getInstance();
      case 'contextMenu':
        return Cursor$contextMenu_getInstance();
      case 'help':
        return Cursor$help_getInstance();
      case 'pointer':
        return Cursor$pointer_getInstance();
      case 'progress':
        return Cursor$progress_getInstance();
      case 'wait':
        return Cursor$wait_getInstance();
      case 'cell':
        return Cursor$cell_getInstance();
      case 'crosshair':
        return Cursor$crosshair_getInstance();
      case 'text':
        return Cursor$text_getInstance();
      case 'verticalText':
        return Cursor$verticalText_getInstance();
      case 'alias':
        return Cursor$alias_getInstance();
      case 'copy':
        return Cursor$copy_getInstance();
      case 'move':
        return Cursor$move_getInstance();
      case 'noDrop':
        return Cursor$noDrop_getInstance();
      case 'notAllowed':
        return Cursor$notAllowed_getInstance();
      case 'grab':
        return Cursor$grab_getInstance();
      case 'grabbing':
        return Cursor$grabbing_getInstance();
      case 'colResize':
        return Cursor$colResize_getInstance();
      case 'rowResize':
        return Cursor$rowResize_getInstance();
      case 'allScroll':
        return Cursor$allScroll_getInstance();
      case 'eResize':
        return Cursor$eResize_getInstance();
      case 'nResize':
        return Cursor$nResize_getInstance();
      case 'neResize':
        return Cursor$neResize_getInstance();
      case 'nwResize':
        return Cursor$nwResize_getInstance();
      case 'sResize':
        return Cursor$sResize_getInstance();
      case 'seResize':
        return Cursor$seResize_getInstance();
      case 'swResize':
        return Cursor$swResize_getInstance();
      case 'wResize':
        return Cursor$wResize_getInstance();
      case 'ewResize':
        return Cursor$ewResize_getInstance();
      case 'nsResize':
        return Cursor$nsResize_getInstance();
      case 'neswResize':
        return Cursor$neswResize_getInstance();
      case 'nwseResize':
        return Cursor$nwseResize_getInstance();
      case 'zoomIn':
        return Cursor$zoomIn_getInstance();
      case 'zoomOut':
        return Cursor$zoomOut_getInstance();
      default:throwISE('No enum constant kotlinx.css.Cursor.' + name);
    }
  }
  Cursor.valueOf_61zpoe$ = Cursor$valueOf;
  function QuotedString(value) {
    CssValue.call(this, value);
    this.value_eybwfw$_0 = value;
  }
  Object.defineProperty(QuotedString.prototype, 'value', {
    get: function () {
      return this.value_eybwfw$_0;
    }
  });
  QuotedString.prototype.toString = function () {
    return "'" + this.value + "'";
  };
  QuotedString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuotedString',
    interfaces: [CssValue]
  };
  function get_quoted($receiver) {
    return new QuotedString($receiver);
  }
  function Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$initial_instance = new Direction('initial', 0);
    Direction$inherit_instance = new Direction('inherit', 1);
    Direction$unset_instance = new Direction('unset', 2);
    Direction$ltr_instance = new Direction('ltr', 3);
    Direction$rtl_instance = new Direction('rtl', 4);
  }
  var Direction$initial_instance;
  function Direction$initial_getInstance() {
    Direction_initFields();
    return Direction$initial_instance;
  }
  var Direction$inherit_instance;
  function Direction$inherit_getInstance() {
    Direction_initFields();
    return Direction$inherit_instance;
  }
  var Direction$unset_instance;
  function Direction$unset_getInstance() {
    Direction_initFields();
    return Direction$unset_instance;
  }
  var Direction$ltr_instance;
  function Direction$ltr_getInstance() {
    Direction_initFields();
    return Direction$ltr_instance;
  }
  var Direction$rtl_instance;
  function Direction$rtl_getInstance() {
    Direction_initFields();
    return Direction$rtl_instance;
  }
  Direction.prototype.toString = function () {
    return this.name;
  };
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$initial_getInstance(), Direction$inherit_getInstance(), Direction$unset_getInstance(), Direction$ltr_getInstance(), Direction$rtl_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'initial':
        return Direction$initial_getInstance();
      case 'inherit':
        return Direction$inherit_getInstance();
      case 'unset':
        return Direction$unset_getInstance();
      case 'ltr':
        return Direction$ltr_getInstance();
      case 'rtl':
        return Direction$rtl_getInstance();
      default:throwISE('No enum constant kotlinx.css.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Display(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Display_initFields() {
    Display_initFields = function () {
    };
    Display$initial_instance = new Display('initial', 0);
    Display$inherit_instance = new Display('inherit', 1);
    Display$unset_instance = new Display('unset', 2);
    Display$block_instance = new Display('block', 3);
    Display$inline_instance = new Display('inline', 4);
    Display$runIn_instance = new Display('runIn', 5);
    Display$flow_instance = new Display('flow', 6);
    Display$flowRoot_instance = new Display('flowRoot', 7);
    Display$table_instance = new Display('table', 8);
    Display$flex_instance = new Display('flex', 9);
    Display$grid_instance = new Display('grid', 10);
    Display$subgrid_instance = new Display('subgrid', 11);
    Display$listItem_instance = new Display('listItem', 12);
    Display$tableRowGroup_instance = new Display('tableRowGroup', 13);
    Display$tableHeaderGroup_instance = new Display('tableHeaderGroup', 14);
    Display$tableFooterGroup_instance = new Display('tableFooterGroup', 15);
    Display$tableRow_instance = new Display('tableRow', 16);
    Display$tableCell_instance = new Display('tableCell', 17);
    Display$tableColumnGroup_instance = new Display('tableColumnGroup', 18);
    Display$tableColumn_instance = new Display('tableColumn', 19);
    Display$tableCaption_instance = new Display('tableCaption', 20);
    Display$contents_instance = new Display('contents', 21);
    Display$none_instance = new Display('none', 22);
    Display$inlineBlock_instance = new Display('inlineBlock', 23);
    Display$inlineListItem_instance = new Display('inlineListItem', 24);
    Display$inlineTable_instance = new Display('inlineTable', 25);
    Display$inlineFlex_instance = new Display('inlineFlex', 26);
    Display$inlineGrid_instance = new Display('inlineGrid', 27);
  }
  var Display$initial_instance;
  function Display$initial_getInstance() {
    Display_initFields();
    return Display$initial_instance;
  }
  var Display$inherit_instance;
  function Display$inherit_getInstance() {
    Display_initFields();
    return Display$inherit_instance;
  }
  var Display$unset_instance;
  function Display$unset_getInstance() {
    Display_initFields();
    return Display$unset_instance;
  }
  var Display$block_instance;
  function Display$block_getInstance() {
    Display_initFields();
    return Display$block_instance;
  }
  var Display$inline_instance;
  function Display$inline_getInstance() {
    Display_initFields();
    return Display$inline_instance;
  }
  var Display$runIn_instance;
  function Display$runIn_getInstance() {
    Display_initFields();
    return Display$runIn_instance;
  }
  var Display$flow_instance;
  function Display$flow_getInstance() {
    Display_initFields();
    return Display$flow_instance;
  }
  var Display$flowRoot_instance;
  function Display$flowRoot_getInstance() {
    Display_initFields();
    return Display$flowRoot_instance;
  }
  var Display$table_instance;
  function Display$table_getInstance() {
    Display_initFields();
    return Display$table_instance;
  }
  var Display$flex_instance;
  function Display$flex_getInstance() {
    Display_initFields();
    return Display$flex_instance;
  }
  var Display$grid_instance;
  function Display$grid_getInstance() {
    Display_initFields();
    return Display$grid_instance;
  }
  var Display$subgrid_instance;
  function Display$subgrid_getInstance() {
    Display_initFields();
    return Display$subgrid_instance;
  }
  var Display$listItem_instance;
  function Display$listItem_getInstance() {
    Display_initFields();
    return Display$listItem_instance;
  }
  var Display$tableRowGroup_instance;
  function Display$tableRowGroup_getInstance() {
    Display_initFields();
    return Display$tableRowGroup_instance;
  }
  var Display$tableHeaderGroup_instance;
  function Display$tableHeaderGroup_getInstance() {
    Display_initFields();
    return Display$tableHeaderGroup_instance;
  }
  var Display$tableFooterGroup_instance;
  function Display$tableFooterGroup_getInstance() {
    Display_initFields();
    return Display$tableFooterGroup_instance;
  }
  var Display$tableRow_instance;
  function Display$tableRow_getInstance() {
    Display_initFields();
    return Display$tableRow_instance;
  }
  var Display$tableCell_instance;
  function Display$tableCell_getInstance() {
    Display_initFields();
    return Display$tableCell_instance;
  }
  var Display$tableColumnGroup_instance;
  function Display$tableColumnGroup_getInstance() {
    Display_initFields();
    return Display$tableColumnGroup_instance;
  }
  var Display$tableColumn_instance;
  function Display$tableColumn_getInstance() {
    Display_initFields();
    return Display$tableColumn_instance;
  }
  var Display$tableCaption_instance;
  function Display$tableCaption_getInstance() {
    Display_initFields();
    return Display$tableCaption_instance;
  }
  var Display$contents_instance;
  function Display$contents_getInstance() {
    Display_initFields();
    return Display$contents_instance;
  }
  var Display$none_instance;
  function Display$none_getInstance() {
    Display_initFields();
    return Display$none_instance;
  }
  var Display$inlineBlock_instance;
  function Display$inlineBlock_getInstance() {
    Display_initFields();
    return Display$inlineBlock_instance;
  }
  var Display$inlineListItem_instance;
  function Display$inlineListItem_getInstance() {
    Display_initFields();
    return Display$inlineListItem_instance;
  }
  var Display$inlineTable_instance;
  function Display$inlineTable_getInstance() {
    Display_initFields();
    return Display$inlineTable_instance;
  }
  var Display$inlineFlex_instance;
  function Display$inlineFlex_getInstance() {
    Display_initFields();
    return Display$inlineFlex_instance;
  }
  var Display$inlineGrid_instance;
  function Display$inlineGrid_getInstance() {
    Display_initFields();
    return Display$inlineGrid_instance;
  }
  Display.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  Display.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Display',
    interfaces: [Enum]
  };
  function Display$values() {
    return [Display$initial_getInstance(), Display$inherit_getInstance(), Display$unset_getInstance(), Display$block_getInstance(), Display$inline_getInstance(), Display$runIn_getInstance(), Display$flow_getInstance(), Display$flowRoot_getInstance(), Display$table_getInstance(), Display$flex_getInstance(), Display$grid_getInstance(), Display$subgrid_getInstance(), Display$listItem_getInstance(), Display$tableRowGroup_getInstance(), Display$tableHeaderGroup_getInstance(), Display$tableFooterGroup_getInstance(), Display$tableRow_getInstance(), Display$tableCell_getInstance(), Display$tableColumnGroup_getInstance(), Display$tableColumn_getInstance(), Display$tableCaption_getInstance(), Display$contents_getInstance(), Display$none_getInstance(), Display$inlineBlock_getInstance(), Display$inlineListItem_getInstance(), Display$inlineTable_getInstance(), Display$inlineFlex_getInstance(), Display$inlineGrid_getInstance()];
  }
  Display.values = Display$values;
  function Display$valueOf(name) {
    switch (name) {
      case 'initial':
        return Display$initial_getInstance();
      case 'inherit':
        return Display$inherit_getInstance();
      case 'unset':
        return Display$unset_getInstance();
      case 'block':
        return Display$block_getInstance();
      case 'inline':
        return Display$inline_getInstance();
      case 'runIn':
        return Display$runIn_getInstance();
      case 'flow':
        return Display$flow_getInstance();
      case 'flowRoot':
        return Display$flowRoot_getInstance();
      case 'table':
        return Display$table_getInstance();
      case 'flex':
        return Display$flex_getInstance();
      case 'grid':
        return Display$grid_getInstance();
      case 'subgrid':
        return Display$subgrid_getInstance();
      case 'listItem':
        return Display$listItem_getInstance();
      case 'tableRowGroup':
        return Display$tableRowGroup_getInstance();
      case 'tableHeaderGroup':
        return Display$tableHeaderGroup_getInstance();
      case 'tableFooterGroup':
        return Display$tableFooterGroup_getInstance();
      case 'tableRow':
        return Display$tableRow_getInstance();
      case 'tableCell':
        return Display$tableCell_getInstance();
      case 'tableColumnGroup':
        return Display$tableColumnGroup_getInstance();
      case 'tableColumn':
        return Display$tableColumn_getInstance();
      case 'tableCaption':
        return Display$tableCaption_getInstance();
      case 'contents':
        return Display$contents_getInstance();
      case 'none':
        return Display$none_getInstance();
      case 'inlineBlock':
        return Display$inlineBlock_getInstance();
      case 'inlineListItem':
        return Display$inlineListItem_getInstance();
      case 'inlineTable':
        return Display$inlineTable_getInstance();
      case 'inlineFlex':
        return Display$inlineFlex_getInstance();
      case 'inlineGrid':
        return Display$inlineGrid_getInstance();
      default:throwISE('No enum constant kotlinx.css.Display.' + name);
    }
  }
  Display.valueOf_61zpoe$ = Display$valueOf;
  function FlexBasis(value) {
    FlexBasis$Companion_getInstance();
    CssValue.call(this, value);
    this.value_9fukh8$_0 = value;
  }
  Object.defineProperty(FlexBasis.prototype, 'value', {
    get: function () {
      return this.value_9fukh8$_0;
    }
  });
  function FlexBasis$Companion() {
    FlexBasis$Companion_instance = this;
    this.initial = new FlexBasis('initial');
    this.inherit = new FlexBasis('inherit');
    this.unset = new FlexBasis('unset');
    this.auto = new FlexBasis('auto');
    this.content = new FlexBasis('content');
    this.minContent = new FlexBasis('min-content');
    this.maxContent = new FlexBasis('max-content');
    this.fitContent = new FlexBasis('fit-content');
    this.fill = new FlexBasis('fill');
    this.zero = new FlexBasis('0');
  }
  FlexBasis$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FlexBasis$Companion_instance = null;
  function FlexBasis$Companion_getInstance() {
    if (FlexBasis$Companion_instance === null) {
      new FlexBasis$Companion();
    }
    return FlexBasis$Companion_instance;
  }
  FlexBasis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexBasis',
    interfaces: [CssValue]
  };
  function get_basis($receiver) {
    return new FlexBasis($receiver.toString());
  }
  function FlexWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexWrap_initFields() {
    FlexWrap_initFields = function () {
    };
    FlexWrap$initial_instance = new FlexWrap('initial', 0);
    FlexWrap$inherit_instance = new FlexWrap('inherit', 1);
    FlexWrap$unset_instance = new FlexWrap('unset', 2);
    FlexWrap$nowrap_instance = new FlexWrap('nowrap', 3);
    FlexWrap$wrap_instance = new FlexWrap('wrap', 4);
    FlexWrap$wrapReverse_instance = new FlexWrap('wrapReverse', 5);
  }
  var FlexWrap$initial_instance;
  function FlexWrap$initial_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$initial_instance;
  }
  var FlexWrap$inherit_instance;
  function FlexWrap$inherit_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$inherit_instance;
  }
  var FlexWrap$unset_instance;
  function FlexWrap$unset_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$unset_instance;
  }
  var FlexWrap$nowrap_instance;
  function FlexWrap$nowrap_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$nowrap_instance;
  }
  var FlexWrap$wrap_instance;
  function FlexWrap$wrap_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$wrap_instance;
  }
  var FlexWrap$wrapReverse_instance;
  function FlexWrap$wrapReverse_getInstance() {
    FlexWrap_initFields();
    return FlexWrap$wrapReverse_instance;
  }
  FlexWrap.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  FlexWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexWrap',
    interfaces: [Enum]
  };
  function FlexWrap$values() {
    return [FlexWrap$initial_getInstance(), FlexWrap$inherit_getInstance(), FlexWrap$unset_getInstance(), FlexWrap$nowrap_getInstance(), FlexWrap$wrap_getInstance(), FlexWrap$wrapReverse_getInstance()];
  }
  FlexWrap.values = FlexWrap$values;
  function FlexWrap$valueOf(name) {
    switch (name) {
      case 'initial':
        return FlexWrap$initial_getInstance();
      case 'inherit':
        return FlexWrap$inherit_getInstance();
      case 'unset':
        return FlexWrap$unset_getInstance();
      case 'nowrap':
        return FlexWrap$nowrap_getInstance();
      case 'wrap':
        return FlexWrap$wrap_getInstance();
      case 'wrapReverse':
        return FlexWrap$wrapReverse_getInstance();
      default:throwISE('No enum constant kotlinx.css.FlexWrap.' + name);
    }
  }
  FlexWrap.valueOf_61zpoe$ = FlexWrap$valueOf;
  function Float(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Float_initFields() {
    Float_initFields = function () {
    };
    Float$initial_instance = new Float('initial', 0);
    Float$inherit_instance = new Float('inherit', 1);
    Float$unset_instance = new Float('unset', 2);
    Float$left_instance = new Float('left', 3);
    Float$right_instance = new Float('right', 4);
    Float$none_instance = new Float('none', 5);
  }
  var Float$initial_instance;
  function Float$initial_getInstance() {
    Float_initFields();
    return Float$initial_instance;
  }
  var Float$inherit_instance;
  function Float$inherit_getInstance() {
    Float_initFields();
    return Float$inherit_instance;
  }
  var Float$unset_instance;
  function Float$unset_getInstance() {
    Float_initFields();
    return Float$unset_instance;
  }
  var Float$left_instance;
  function Float$left_getInstance() {
    Float_initFields();
    return Float$left_instance;
  }
  var Float$right_instance;
  function Float$right_getInstance() {
    Float_initFields();
    return Float$right_instance;
  }
  var Float$none_instance;
  function Float$none_getInstance() {
    Float_initFields();
    return Float$none_instance;
  }
  Float.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Float',
    interfaces: [Enum]
  };
  function Float$values() {
    return [Float$initial_getInstance(), Float$inherit_getInstance(), Float$unset_getInstance(), Float$left_getInstance(), Float$right_getInstance(), Float$none_getInstance()];
  }
  Float.values = Float$values;
  function Float$valueOf(name) {
    switch (name) {
      case 'initial':
        return Float$initial_getInstance();
      case 'inherit':
        return Float$inherit_getInstance();
      case 'unset':
        return Float$unset_getInstance();
      case 'left':
        return Float$left_getInstance();
      case 'right':
        return Float$right_getInstance();
      case 'none':
        return Float$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.Float.' + name);
    }
  }
  Float.valueOf_61zpoe$ = Float$valueOf;
  function FontWeight(value) {
    FontWeight$Companion_getInstance();
    CssValue.call(this, value);
    this.value_sy9x9q$_0 = value;
  }
  Object.defineProperty(FontWeight.prototype, 'value', {
    get: function () {
      return this.value_sy9x9q$_0;
    }
  });
  function FontWeight$Companion() {
    FontWeight$Companion_instance = this;
    this.initial = new FontWeight('initial');
    this.inherit = new FontWeight('inherit');
    this.unset = new FontWeight('unset');
    this.normal = new FontWeight('normal');
    this.bold = new FontWeight('bold');
    this.bolder = new FontWeight('bolder');
    this.lighter = new FontWeight('lighter');
    this.w900 = new FontWeight('900');
    this.w800 = new FontWeight('800');
    this.w700 = new FontWeight('700');
    this.w600 = new FontWeight('600');
    this.w500 = new FontWeight('500');
    this.w400 = new FontWeight('400');
    this.w300 = new FontWeight('300');
    this.w200 = new FontWeight('200');
    this.w100 = new FontWeight('100');
  }
  FontWeight$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FontWeight$Companion_instance = null;
  function FontWeight$Companion_getInstance() {
    if (FontWeight$Companion_instance === null) {
      new FontWeight$Companion();
    }
    return FontWeight$Companion_instance;
  }
  FontWeight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontWeight',
    interfaces: [CssValue]
  };
  function FontStyle(value) {
    FontStyle$Companion_getInstance();
    CssValue.call(this, value);
    this.value_xxe7vb$_0 = value;
  }
  Object.defineProperty(FontStyle.prototype, 'value', {
    get: function () {
      return this.value_xxe7vb$_0;
    }
  });
  function FontStyle$Companion() {
    FontStyle$Companion_instance = this;
    this.initial = new FontStyle('initial');
    this.inherit = new FontStyle('inherit');
    this.unset = new FontStyle('unset');
    this.normal = new FontStyle('normal');
    this.italic = new FontStyle('italic');
  }
  FontStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FontStyle$Companion_instance = null;
  function FontStyle$Companion_getInstance() {
    if (FontStyle$Companion_instance === null) {
      new FontStyle$Companion();
    }
    return FontStyle$Companion_instance;
  }
  FontStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontStyle',
    interfaces: [CssValue]
  };
  function FlexDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexDirection_initFields() {
    FlexDirection_initFields = function () {
    };
    FlexDirection$initial_instance = new FlexDirection('initial', 0);
    FlexDirection$inherit_instance = new FlexDirection('inherit', 1);
    FlexDirection$unset_instance = new FlexDirection('unset', 2);
    FlexDirection$column_instance = new FlexDirection('column', 3);
    FlexDirection$columnReverse_instance = new FlexDirection('columnReverse', 4);
    FlexDirection$row_instance = new FlexDirection('row', 5);
    FlexDirection$rowReverse_instance = new FlexDirection('rowReverse', 6);
  }
  var FlexDirection$initial_instance;
  function FlexDirection$initial_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$initial_instance;
  }
  var FlexDirection$inherit_instance;
  function FlexDirection$inherit_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$inherit_instance;
  }
  var FlexDirection$unset_instance;
  function FlexDirection$unset_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$unset_instance;
  }
  var FlexDirection$column_instance;
  function FlexDirection$column_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$column_instance;
  }
  var FlexDirection$columnReverse_instance;
  function FlexDirection$columnReverse_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$columnReverse_instance;
  }
  var FlexDirection$row_instance;
  function FlexDirection$row_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$row_instance;
  }
  var FlexDirection$rowReverse_instance;
  function FlexDirection$rowReverse_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$rowReverse_instance;
  }
  FlexDirection.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  FlexDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexDirection',
    interfaces: [Enum]
  };
  function FlexDirection$values() {
    return [FlexDirection$initial_getInstance(), FlexDirection$inherit_getInstance(), FlexDirection$unset_getInstance(), FlexDirection$column_getInstance(), FlexDirection$columnReverse_getInstance(), FlexDirection$row_getInstance(), FlexDirection$rowReverse_getInstance()];
  }
  FlexDirection.values = FlexDirection$values;
  function FlexDirection$valueOf(name) {
    switch (name) {
      case 'initial':
        return FlexDirection$initial_getInstance();
      case 'inherit':
        return FlexDirection$inherit_getInstance();
      case 'unset':
        return FlexDirection$unset_getInstance();
      case 'column':
        return FlexDirection$column_getInstance();
      case 'columnReverse':
        return FlexDirection$columnReverse_getInstance();
      case 'row':
        return FlexDirection$row_getInstance();
      case 'rowReverse':
        return FlexDirection$rowReverse_getInstance();
      default:throwISE('No enum constant kotlinx.css.FlexDirection.' + name);
    }
  }
  FlexDirection.valueOf_61zpoe$ = FlexDirection$valueOf;
  function Gap(value) {
    Gap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_21bt25$_0 = value;
  }
  Object.defineProperty(Gap.prototype, 'value', {
    get: function () {
      return this.value_21bt25$_0;
    }
  });
  function Gap$Companion() {
    Gap$Companion_instance = this;
    this.initial = new Gap('initial');
    this.inherit = new Gap('inherit');
    this.normal = new Gap('normal');
    this.unset = new Gap('unset');
  }
  Gap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Gap$Companion_instance = null;
  function Gap$Companion_getInstance() {
    if (Gap$Companion_instance === null) {
      new Gap$Companion();
    }
    return Gap$Companion_instance;
  }
  Gap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gap',
    interfaces: [CssValue]
  };
  function GridAutoColumns(value) {
    GridAutoColumns$Companion_getInstance();
    CssValue.call(this, value);
    this.value_fxe4dt$_0 = value;
  }
  Object.defineProperty(GridAutoColumns.prototype, 'value', {
    get: function () {
      return this.value_fxe4dt$_0;
    }
  });
  function GridAutoColumns$Companion() {
    GridAutoColumns$Companion_instance = this;
    this.auto = new GridAutoColumns('auto');
    this.maxContent = new GridAutoColumns('max-content');
    this.minContent = new GridAutoColumns('min-content');
  }
  GridAutoColumns$Companion.prototype.fitContent_31gyca$ = function (argument) {
    return new GridAutoColumns('min-max(auto, max(auto, ' + argument + '))');
  };
  GridAutoColumns$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridAutoColumns('min-max(' + min + ', ' + max + ')');
  };
  GridAutoColumns$Companion.prototype.minMax_9k2y74$ = function (min, max) {
    return new GridAutoColumns('min-max(' + min + ', ' + max + ')');
  };
  GridAutoColumns$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridAutoColumns$Companion_instance = null;
  function GridAutoColumns$Companion_getInstance() {
    if (GridAutoColumns$Companion_instance === null) {
      new GridAutoColumns$Companion();
    }
    return GridAutoColumns$Companion_instance;
  }
  GridAutoColumns.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridAutoColumns',
    interfaces: [CssValue]
  };
  function GridAutoColumns_init(dims, $this) {
    $this = $this || Object.create(GridAutoColumns.prototype);
    GridAutoColumns.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridAutoColumns_init_0(values, $this) {
    $this = $this || Object.create(GridAutoColumns.prototype);
    GridAutoColumns.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridAutoFlow(value) {
    GridAutoFlow$Companion_getInstance();
    CssValue.call(this, value);
    this.value_d7n3w2$_0 = value;
  }
  Object.defineProperty(GridAutoFlow.prototype, 'value', {
    get: function () {
      return this.value_d7n3w2$_0;
    }
  });
  function GridAutoFlow$Companion() {
    GridAutoFlow$Companion_instance = this;
    this.initial = new GridAutoFlow('initial');
    this.inherit = new GridAutoFlow('inherit');
    this.unset = new GridAutoFlow('unset');
    this.column = new GridAutoFlow('column');
    this.columnDense = new GridAutoFlow('column dense');
    this.dense = new GridAutoFlow('dense');
    this.row = new GridAutoFlow('row');
    this.rowDense = new GridAutoFlow('row dense');
  }
  GridAutoFlow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridAutoFlow$Companion_instance = null;
  function GridAutoFlow$Companion_getInstance() {
    if (GridAutoFlow$Companion_instance === null) {
      new GridAutoFlow$Companion();
    }
    return GridAutoFlow$Companion_instance;
  }
  GridAutoFlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridAutoFlow',
    interfaces: [CssValue]
  };
  function GridAutoRows(value) {
    GridAutoRows$Companion_getInstance();
    CssValue.call(this, value);
    this.value_2q2u7b$_0 = value;
  }
  Object.defineProperty(GridAutoRows.prototype, 'value', {
    get: function () {
      return this.value_2q2u7b$_0;
    }
  });
  function GridAutoRows$Companion() {
    GridAutoRows$Companion_instance = this;
    this.auto = new GridAutoRows('auto');
    this.maxContent = new GridAutoRows('max-content');
    this.minContent = new GridAutoRows('min-content');
  }
  GridAutoRows$Companion.prototype.fitContent_s5vmxc$ = function (argument) {
    return new GridAutoRows('min-max(auto, max(auto, ' + argument + '))');
  };
  GridAutoRows$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridAutoRows('min-max(' + min + ', ' + max + ')');
  };
  GridAutoRows$Companion.prototype.minMax_l0cmr0$ = function (min, max) {
    return new GridAutoRows('min-max(' + min + ', ' + max + ')');
  };
  GridAutoRows$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridAutoRows$Companion_instance = null;
  function GridAutoRows$Companion_getInstance() {
    if (GridAutoRows$Companion_instance === null) {
      new GridAutoRows$Companion();
    }
    return GridAutoRows$Companion_instance;
  }
  GridAutoRows.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridAutoRows',
    interfaces: [CssValue]
  };
  function GridAutoRows_init(dims, $this) {
    $this = $this || Object.create(GridAutoRows.prototype);
    GridAutoRows.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridAutoRows_init_0(values, $this) {
    $this = $this || Object.create(GridAutoRows.prototype);
    GridAutoRows.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridColumn(value) {
    GridColumn$Companion_getInstance();
    CssValue.call(this, value);
    this.value_jex093$_0 = value;
  }
  Object.defineProperty(GridColumn.prototype, 'value', {
    get: function () {
      return this.value_jex093$_0;
    }
  });
  function GridColumn$Companion() {
    GridColumn$Companion_instance = this;
    this.auto = new GridColumn('auto');
  }
  GridColumn$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumn$Companion_instance = null;
  function GridColumn$Companion_getInstance() {
    if (GridColumn$Companion_instance === null) {
      new GridColumn$Companion();
    }
    return GridColumn$Companion_instance;
  }
  GridColumn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumn',
    interfaces: [CssValue]
  };
  function GridColumnEnd(value) {
    GridColumnEnd$Companion_getInstance();
    CssValue.call(this, value);
    this.value_c3z42i$_0 = value;
  }
  Object.defineProperty(GridColumnEnd.prototype, 'value', {
    get: function () {
      return this.value_c3z42i$_0;
    }
  });
  function GridColumnEnd$Companion() {
    GridColumnEnd$Companion_instance = this;
    this.auto = new GridColumnEnd('auto');
  }
  GridColumnEnd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumnEnd$Companion_instance = null;
  function GridColumnEnd$Companion_getInstance() {
    if (GridColumnEnd$Companion_instance === null) {
      new GridColumnEnd$Companion();
    }
    return GridColumnEnd$Companion_instance;
  }
  GridColumnEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumnEnd',
    interfaces: [CssValue]
  };
  function GridColumnGap(value) {
    GridColumnGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_trslq7$_0 = value;
  }
  Object.defineProperty(GridColumnGap.prototype, 'value', {
    get: function () {
      return this.value_trslq7$_0;
    }
  });
  function GridColumnGap$Companion() {
    GridColumnGap$Companion_instance = this;
    this.initial = new GridColumnGap('initial');
    this.inherit = new GridColumnGap('inherit');
    this.normal = new GridColumnGap('normal');
    this.unset = new GridColumnGap('unset');
  }
  GridColumnGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumnGap$Companion_instance = null;
  function GridColumnGap$Companion_getInstance() {
    if (GridColumnGap$Companion_instance === null) {
      new GridColumnGap$Companion();
    }
    return GridColumnGap$Companion_instance;
  }
  GridColumnGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumnGap',
    interfaces: [CssValue]
  };
  function GridColumnStart(value) {
    GridColumnStart$Companion_getInstance();
    CssValue.call(this, value);
    this.value_r3r0t$_0 = value;
  }
  Object.defineProperty(GridColumnStart.prototype, 'value', {
    get: function () {
      return this.value_r3r0t$_0;
    }
  });
  function GridColumnStart$Companion() {
    GridColumnStart$Companion_instance = this;
    this.auto = new GridColumnStart('auto');
  }
  GridColumnStart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridColumnStart$Companion_instance = null;
  function GridColumnStart$Companion_getInstance() {
    if (GridColumnStart$Companion_instance === null) {
      new GridColumnStart$Companion();
    }
    return GridColumnStart$Companion_instance;
  }
  GridColumnStart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridColumnStart',
    interfaces: [CssValue]
  };
  function GridGap(value) {
    GridGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_kvuxvt$_0 = value;
  }
  Object.defineProperty(GridGap.prototype, 'value', {
    get: function () {
      return this.value_kvuxvt$_0;
    }
  });
  function GridGap$Companion() {
    GridGap$Companion_instance = this;
    this.initial = new GridGap('initial');
    this.inherit = new GridGap('inherit');
    this.unset = new GridGap('unset');
  }
  GridGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridGap$Companion_instance = null;
  function GridGap$Companion_getInstance() {
    if (GridGap$Companion_instance === null) {
      new GridGap$Companion();
    }
    return GridGap$Companion_instance;
  }
  GridGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridGap',
    interfaces: [CssValue]
  };
  function GridRow(value) {
    GridRow$Companion_getInstance();
    CssValue.call(this, value);
    this.value_ihziij$_0 = value;
  }
  Object.defineProperty(GridRow.prototype, 'value', {
    get: function () {
      return this.value_ihziij$_0;
    }
  });
  function GridRow$Companion() {
    GridRow$Companion_instance = this;
    this.auto = new GridRow('auto');
  }
  GridRow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRow$Companion_instance = null;
  function GridRow$Companion_getInstance() {
    if (GridRow$Companion_instance === null) {
      new GridRow$Companion();
    }
    return GridRow$Companion_instance;
  }
  GridRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRow',
    interfaces: [CssValue]
  };
  function GridRowEnd(value) {
    GridRowEnd$Companion_getInstance();
    CssValue.call(this, value);
    this.value_cz4jzm$_0 = value;
  }
  Object.defineProperty(GridRowEnd.prototype, 'value', {
    get: function () {
      return this.value_cz4jzm$_0;
    }
  });
  function GridRowEnd$Companion() {
    GridRowEnd$Companion_instance = this;
    this.auto = new GridRowEnd('auto');
  }
  GridRowEnd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRowEnd$Companion_instance = null;
  function GridRowEnd$Companion_getInstance() {
    if (GridRowEnd$Companion_instance === null) {
      new GridRowEnd$Companion();
    }
    return GridRowEnd$Companion_instance;
  }
  GridRowEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRowEnd',
    interfaces: [CssValue]
  };
  function GridRowGap(value) {
    GridRowGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_4ooxo3$_0 = value;
  }
  Object.defineProperty(GridRowGap.prototype, 'value', {
    get: function () {
      return this.value_4ooxo3$_0;
    }
  });
  function GridRowGap$Companion() {
    GridRowGap$Companion_instance = this;
    this.initial = new GridRowGap('initial');
    this.inherit = new GridRowGap('inherit');
    this.normal = new GridRowGap('normal');
    this.unset = new GridRowGap('unset');
  }
  GridRowGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRowGap$Companion_instance = null;
  function GridRowGap$Companion_getInstance() {
    if (GridRowGap$Companion_instance === null) {
      new GridRowGap$Companion();
    }
    return GridRowGap$Companion_instance;
  }
  GridRowGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRowGap',
    interfaces: [CssValue]
  };
  function GridRowStart(value) {
    GridRowStart$Companion_getInstance();
    CssValue.call(this, value);
    this.value_t2udqx$_0 = value;
  }
  Object.defineProperty(GridRowStart.prototype, 'value', {
    get: function () {
      return this.value_t2udqx$_0;
    }
  });
  function GridRowStart$Companion() {
    GridRowStart$Companion_instance = this;
    this.auto = new GridRowStart('auto');
  }
  GridRowStart$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridRowStart$Companion_instance = null;
  function GridRowStart$Companion_getInstance() {
    if (GridRowStart$Companion_instance === null) {
      new GridRowStart$Companion();
    }
    return GridRowStart$Companion_instance;
  }
  GridRowStart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridRowStart',
    interfaces: [CssValue]
  };
  function GridTemplate(value) {
    GridTemplate$Companion_getInstance();
    CssValue.call(this, value);
    this.value_vh74d1$_0 = value;
  }
  Object.defineProperty(GridTemplate.prototype, 'value', {
    get: function () {
      return this.value_vh74d1$_0;
    }
  });
  function GridTemplate$Companion() {
    GridTemplate$Companion_instance = this;
    this.none = new GridTemplate('none');
  }
  GridTemplate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplate$Companion_instance = null;
  function GridTemplate$Companion_getInstance() {
    if (GridTemplate$Companion_instance === null) {
      new GridTemplate$Companion();
    }
    return GridTemplate$Companion_instance;
  }
  GridTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplate',
    interfaces: [CssValue]
  };
  function GridTemplateAreas(value) {
    GridTemplateAreas$Companion_getInstance();
    CssValue.call(this, value);
    this.value_r207bh$_0 = value;
  }
  Object.defineProperty(GridTemplateAreas.prototype, 'value', {
    get: function () {
      return this.value_r207bh$_0;
    }
  });
  function GridTemplateAreas$Companion() {
    GridTemplateAreas$Companion_instance = this;
    this.none = new GridTemplateAreas('none');
  }
  GridTemplateAreas$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplateAreas$Companion_instance = null;
  function GridTemplateAreas$Companion_getInstance() {
    if (GridTemplateAreas$Companion_instance === null) {
      new GridTemplateAreas$Companion();
    }
    return GridTemplateAreas$Companion_instance;
  }
  GridTemplateAreas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplateAreas',
    interfaces: [CssValue]
  };
  function GridTemplateColumns(value) {
    GridTemplateColumns$Companion_getInstance();
    CssValue.call(this, value);
    this.value_tgat6k$_0 = value;
  }
  Object.defineProperty(GridTemplateColumns.prototype, 'value', {
    get: function () {
      return this.value_tgat6k$_0;
    }
  });
  function GridTemplateColumns$Companion() {
    GridTemplateColumns$Companion_instance = this;
    this.auto = new GridTemplateColumns('auto');
    this.maxContent = new GridTemplateColumns('max-content');
    this.minContent = new GridTemplateColumns('min-content');
    this.none = new GridTemplateColumns('none');
  }
  GridTemplateColumns$Companion.prototype.fitContent_tco10h$ = function (dim) {
    return new GridTemplateColumns('min(max-content, max(auto, ' + dim + '))');
  };
  GridTemplateColumns$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridTemplateColumns('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateColumns$Companion.prototype.minMax_8wir3q$ = function (min, max) {
    return new GridTemplateColumns('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateColumns$Companion.prototype.repeat_61zpoe$ = function (argument) {
    return new GridTemplateColumns('repeat(' + argument + ')');
  };
  GridTemplateColumns$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplateColumns$Companion_instance = null;
  function GridTemplateColumns$Companion_getInstance() {
    if (GridTemplateColumns$Companion_instance === null) {
      new GridTemplateColumns$Companion();
    }
    return GridTemplateColumns$Companion_instance;
  }
  GridTemplateColumns.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplateColumns',
    interfaces: [CssValue]
  };
  function GridTemplateColumns_init(dims, $this) {
    $this = $this || Object.create(GridTemplateColumns.prototype);
    GridTemplateColumns.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridTemplateColumns_init_0(values, $this) {
    $this = $this || Object.create(GridTemplateColumns.prototype);
    GridTemplateColumns.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridTemplateRows(value) {
    GridTemplateRows$Companion_getInstance();
    CssValue.call(this, value);
    this.value_vgeojg$_0 = value;
  }
  Object.defineProperty(GridTemplateRows.prototype, 'value', {
    get: function () {
      return this.value_vgeojg$_0;
    }
  });
  function GridTemplateRows$Companion() {
    GridTemplateRows$Companion_instance = this;
    this.auto = new GridTemplateRows('auto');
    this.maxContent = new GridTemplateRows('max-content');
    this.minContent = new GridTemplateRows('min-content');
    this.none = new GridTemplateRows('none');
  }
  GridTemplateRows$Companion.prototype.fitContent_tco10h$ = function (dim) {
    return new GridTemplateRows('min(max-content, max(auto, ' + dim + '))');
  };
  GridTemplateRows$Companion.prototype.minMax_5utlym$ = function (min, max) {
    return new GridTemplateRows('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateRows$Companion.prototype.minMax_18libw$ = function (min, max) {
    return new GridTemplateRows('min-max(' + min + ', ' + max + ')');
  };
  GridTemplateRows$Companion.prototype.repeat_61zpoe$ = function (argument) {
    return new GridTemplateRows('repeat(' + argument + ')');
  };
  GridTemplateRows$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridTemplateRows$Companion_instance = null;
  function GridTemplateRows$Companion_getInstance() {
    if (GridTemplateRows$Companion_instance === null) {
      new GridTemplateRows$Companion();
    }
    return GridTemplateRows$Companion_instance;
  }
  GridTemplateRows.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridTemplateRows',
    interfaces: [CssValue]
  };
  function GridTemplateRows_init(dims, $this) {
    $this = $this || Object.create(GridTemplateRows.prototype);
    GridTemplateRows.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridTemplateRows_init_0(values, $this) {
    $this = $this || Object.create(GridTemplateRows.prototype);
    GridTemplateRows.call($this, joinToString(values, ' '));
    return $this;
  }
  function Grow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Grow_initFields() {
    Grow_initFields = function () {
    };
    Grow$NONE_instance = new Grow('NONE', 0);
    Grow$GROW_instance = new Grow('GROW', 1);
    Grow$SHRINK_instance = new Grow('SHRINK', 2);
    Grow$GROW_SHRINK_instance = new Grow('GROW_SHRINK', 3);
  }
  var Grow$NONE_instance;
  function Grow$NONE_getInstance() {
    Grow_initFields();
    return Grow$NONE_instance;
  }
  var Grow$GROW_instance;
  function Grow$GROW_getInstance() {
    Grow_initFields();
    return Grow$GROW_instance;
  }
  var Grow$SHRINK_instance;
  function Grow$SHRINK_getInstance() {
    Grow_initFields();
    return Grow$SHRINK_instance;
  }
  var Grow$GROW_SHRINK_instance;
  function Grow$GROW_SHRINK_getInstance() {
    Grow_initFields();
    return Grow$GROW_SHRINK_instance;
  }
  Grow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grow',
    interfaces: [Enum]
  };
  function Grow$values() {
    return [Grow$NONE_getInstance(), Grow$GROW_getInstance(), Grow$SHRINK_getInstance(), Grow$GROW_SHRINK_getInstance()];
  }
  Grow.values = Grow$values;
  function Grow$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Grow$NONE_getInstance();
      case 'GROW':
        return Grow$GROW_getInstance();
      case 'SHRINK':
        return Grow$SHRINK_getInstance();
      case 'GROW_SHRINK':
        return Grow$GROW_SHRINK_getInstance();
      default:throwISE('No enum constant kotlinx.css.Grow.' + name);
    }
  }
  Grow.valueOf_61zpoe$ = Grow$valueOf;
  function Hyphens(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Hyphens_initFields() {
    Hyphens_initFields = function () {
    };
    Hyphens$initial_instance = new Hyphens('initial', 0);
    Hyphens$inherit_instance = new Hyphens('inherit', 1);
    Hyphens$unset_instance = new Hyphens('unset', 2);
    Hyphens$none_instance = new Hyphens('none', 3);
    Hyphens$manual_instance = new Hyphens('manual', 4);
    Hyphens$auto_instance = new Hyphens('auto', 5);
  }
  var Hyphens$initial_instance;
  function Hyphens$initial_getInstance() {
    Hyphens_initFields();
    return Hyphens$initial_instance;
  }
  var Hyphens$inherit_instance;
  function Hyphens$inherit_getInstance() {
    Hyphens_initFields();
    return Hyphens$inherit_instance;
  }
  var Hyphens$unset_instance;
  function Hyphens$unset_getInstance() {
    Hyphens_initFields();
    return Hyphens$unset_instance;
  }
  var Hyphens$none_instance;
  function Hyphens$none_getInstance() {
    Hyphens_initFields();
    return Hyphens$none_instance;
  }
  var Hyphens$manual_instance;
  function Hyphens$manual_getInstance() {
    Hyphens_initFields();
    return Hyphens$manual_instance;
  }
  var Hyphens$auto_instance;
  function Hyphens$auto_getInstance() {
    Hyphens_initFields();
    return Hyphens$auto_instance;
  }
  Hyphens.prototype.toString = function () {
    return this.name;
  };
  Hyphens.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hyphens',
    interfaces: [Enum]
  };
  function Hyphens$values() {
    return [Hyphens$initial_getInstance(), Hyphens$inherit_getInstance(), Hyphens$unset_getInstance(), Hyphens$none_getInstance(), Hyphens$manual_getInstance(), Hyphens$auto_getInstance()];
  }
  Hyphens.values = Hyphens$values;
  function Hyphens$valueOf(name) {
    switch (name) {
      case 'initial':
        return Hyphens$initial_getInstance();
      case 'inherit':
        return Hyphens$inherit_getInstance();
      case 'unset':
        return Hyphens$unset_getInstance();
      case 'none':
        return Hyphens$none_getInstance();
      case 'manual':
        return Hyphens$manual_getInstance();
      case 'auto':
        return Hyphens$auto_getInstance();
      default:throwISE('No enum constant kotlinx.css.Hyphens.' + name);
    }
  }
  Hyphens.valueOf_61zpoe$ = Hyphens$valueOf;
  function ListStyleType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ListStyleType_initFields() {
    ListStyleType_initFields = function () {
    };
    ListStyleType$initial_instance = new ListStyleType('initial', 0);
    ListStyleType$inherit_instance = new ListStyleType('inherit', 1);
    ListStyleType$unset_instance = new ListStyleType('unset', 2);
    ListStyleType$none_instance = new ListStyleType('none', 3);
    ListStyleType$disc_instance = new ListStyleType('disc', 4);
    ListStyleType$circle_instance = new ListStyleType('circle', 5);
    ListStyleType$square_instance = new ListStyleType('square', 6);
    ListStyleType$decimal_instance = new ListStyleType('decimal', 7);
  }
  var ListStyleType$initial_instance;
  function ListStyleType$initial_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$initial_instance;
  }
  var ListStyleType$inherit_instance;
  function ListStyleType$inherit_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$inherit_instance;
  }
  var ListStyleType$unset_instance;
  function ListStyleType$unset_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$unset_instance;
  }
  var ListStyleType$none_instance;
  function ListStyleType$none_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$none_instance;
  }
  var ListStyleType$disc_instance;
  function ListStyleType$disc_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$disc_instance;
  }
  var ListStyleType$circle_instance;
  function ListStyleType$circle_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$circle_instance;
  }
  var ListStyleType$square_instance;
  function ListStyleType$square_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$square_instance;
  }
  var ListStyleType$decimal_instance;
  function ListStyleType$decimal_getInstance() {
    ListStyleType_initFields();
    return ListStyleType$decimal_instance;
  }
  ListStyleType.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  ListStyleType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListStyleType',
    interfaces: [Enum]
  };
  function ListStyleType$values() {
    return [ListStyleType$initial_getInstance(), ListStyleType$inherit_getInstance(), ListStyleType$unset_getInstance(), ListStyleType$none_getInstance(), ListStyleType$disc_getInstance(), ListStyleType$circle_getInstance(), ListStyleType$square_getInstance(), ListStyleType$decimal_getInstance()];
  }
  ListStyleType.values = ListStyleType$values;
  function ListStyleType$valueOf(name) {
    switch (name) {
      case 'initial':
        return ListStyleType$initial_getInstance();
      case 'inherit':
        return ListStyleType$inherit_getInstance();
      case 'unset':
        return ListStyleType$unset_getInstance();
      case 'none':
        return ListStyleType$none_getInstance();
      case 'disc':
        return ListStyleType$disc_getInstance();
      case 'circle':
        return ListStyleType$circle_getInstance();
      case 'square':
        return ListStyleType$square_getInstance();
      case 'decimal':
        return ListStyleType$decimal_getInstance();
      default:throwISE('No enum constant kotlinx.css.ListStyleType.' + name);
    }
  }
  ListStyleType.valueOf_61zpoe$ = ListStyleType$valueOf;
  function ObjectFit(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ObjectFit_initFields() {
    ObjectFit_initFields = function () {
    };
    ObjectFit$initial_instance = new ObjectFit('initial', 0);
    ObjectFit$inherit_instance = new ObjectFit('inherit', 1);
    ObjectFit$unset_instance = new ObjectFit('unset', 2);
    ObjectFit$contain_instance = new ObjectFit('contain', 3);
    ObjectFit$cover_instance = new ObjectFit('cover', 4);
    ObjectFit$fill_instance = new ObjectFit('fill', 5);
    ObjectFit$none_instance = new ObjectFit('none', 6);
    ObjectFit$scaleDown_instance = new ObjectFit('scaleDown', 7);
  }
  var ObjectFit$initial_instance;
  function ObjectFit$initial_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$initial_instance;
  }
  var ObjectFit$inherit_instance;
  function ObjectFit$inherit_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$inherit_instance;
  }
  var ObjectFit$unset_instance;
  function ObjectFit$unset_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$unset_instance;
  }
  var ObjectFit$contain_instance;
  function ObjectFit$contain_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$contain_instance;
  }
  var ObjectFit$cover_instance;
  function ObjectFit$cover_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$cover_instance;
  }
  var ObjectFit$fill_instance;
  function ObjectFit$fill_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$fill_instance;
  }
  var ObjectFit$none_instance;
  function ObjectFit$none_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$none_instance;
  }
  var ObjectFit$scaleDown_instance;
  function ObjectFit$scaleDown_getInstance() {
    ObjectFit_initFields();
    return ObjectFit$scaleDown_instance;
  }
  ObjectFit.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  ObjectFit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectFit',
    interfaces: [Enum]
  };
  function ObjectFit$values() {
    return [ObjectFit$initial_getInstance(), ObjectFit$inherit_getInstance(), ObjectFit$unset_getInstance(), ObjectFit$contain_getInstance(), ObjectFit$cover_getInstance(), ObjectFit$fill_getInstance(), ObjectFit$none_getInstance(), ObjectFit$scaleDown_getInstance()];
  }
  ObjectFit.values = ObjectFit$values;
  function ObjectFit$valueOf(name) {
    switch (name) {
      case 'initial':
        return ObjectFit$initial_getInstance();
      case 'inherit':
        return ObjectFit$inherit_getInstance();
      case 'unset':
        return ObjectFit$unset_getInstance();
      case 'contain':
        return ObjectFit$contain_getInstance();
      case 'cover':
        return ObjectFit$cover_getInstance();
      case 'fill':
        return ObjectFit$fill_getInstance();
      case 'none':
        return ObjectFit$none_getInstance();
      case 'scaleDown':
        return ObjectFit$scaleDown_getInstance();
      default:throwISE('No enum constant kotlinx.css.ObjectFit.' + name);
    }
  }
  ObjectFit.valueOf_61zpoe$ = ObjectFit$valueOf;
  function Outline(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Outline_initFields() {
    Outline_initFields = function () {
    };
    Outline$initial_instance = new Outline('initial', 0);
    Outline$inherit_instance = new Outline('inherit', 1);
    Outline$unset_instance = new Outline('unset', 2);
    Outline$none_instance = new Outline('none', 3);
  }
  var Outline$initial_instance;
  function Outline$initial_getInstance() {
    Outline_initFields();
    return Outline$initial_instance;
  }
  var Outline$inherit_instance;
  function Outline$inherit_getInstance() {
    Outline_initFields();
    return Outline$inherit_instance;
  }
  var Outline$unset_instance;
  function Outline$unset_getInstance() {
    Outline_initFields();
    return Outline$unset_instance;
  }
  var Outline$none_instance;
  function Outline$none_getInstance() {
    Outline_initFields();
    return Outline$none_instance;
  }
  Outline.prototype.toString = function () {
    return this.name;
  };
  Outline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Outline',
    interfaces: [Enum]
  };
  function Outline$values() {
    return [Outline$initial_getInstance(), Outline$inherit_getInstance(), Outline$unset_getInstance(), Outline$none_getInstance()];
  }
  Outline.values = Outline$values;
  function Outline$valueOf(name) {
    switch (name) {
      case 'initial':
        return Outline$initial_getInstance();
      case 'inherit':
        return Outline$inherit_getInstance();
      case 'unset':
        return Outline$unset_getInstance();
      case 'none':
        return Outline$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.Outline.' + name);
    }
  }
  Outline.valueOf_61zpoe$ = Outline$valueOf;
  function Overflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Overflow_initFields() {
    Overflow_initFields = function () {
    };
    Overflow$initial_instance = new Overflow('initial', 0);
    Overflow$inherit_instance = new Overflow('inherit', 1);
    Overflow$unset_instance = new Overflow('unset', 2);
    Overflow$visible_instance = new Overflow('visible', 3);
    Overflow$hidden_instance = new Overflow('hidden', 4);
    Overflow$scroll_instance = new Overflow('scroll', 5);
    Overflow$auto_instance = new Overflow('auto', 6);
  }
  var Overflow$initial_instance;
  function Overflow$initial_getInstance() {
    Overflow_initFields();
    return Overflow$initial_instance;
  }
  var Overflow$inherit_instance;
  function Overflow$inherit_getInstance() {
    Overflow_initFields();
    return Overflow$inherit_instance;
  }
  var Overflow$unset_instance;
  function Overflow$unset_getInstance() {
    Overflow_initFields();
    return Overflow$unset_instance;
  }
  var Overflow$visible_instance;
  function Overflow$visible_getInstance() {
    Overflow_initFields();
    return Overflow$visible_instance;
  }
  var Overflow$hidden_instance;
  function Overflow$hidden_getInstance() {
    Overflow_initFields();
    return Overflow$hidden_instance;
  }
  var Overflow$scroll_instance;
  function Overflow$scroll_getInstance() {
    Overflow_initFields();
    return Overflow$scroll_instance;
  }
  var Overflow$auto_instance;
  function Overflow$auto_getInstance() {
    Overflow_initFields();
    return Overflow$auto_instance;
  }
  Overflow.prototype.toString = function () {
    return this.name;
  };
  Overflow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Overflow',
    interfaces: [Enum]
  };
  function Overflow$values() {
    return [Overflow$initial_getInstance(), Overflow$inherit_getInstance(), Overflow$unset_getInstance(), Overflow$visible_getInstance(), Overflow$hidden_getInstance(), Overflow$scroll_getInstance(), Overflow$auto_getInstance()];
  }
  Overflow.values = Overflow$values;
  function Overflow$valueOf(name) {
    switch (name) {
      case 'initial':
        return Overflow$initial_getInstance();
      case 'inherit':
        return Overflow$inherit_getInstance();
      case 'unset':
        return Overflow$unset_getInstance();
      case 'visible':
        return Overflow$visible_getInstance();
      case 'hidden':
        return Overflow$hidden_getInstance();
      case 'scroll':
        return Overflow$scroll_getInstance();
      case 'auto':
        return Overflow$auto_getInstance();
      default:throwISE('No enum constant kotlinx.css.Overflow.' + name);
    }
  }
  Overflow.valueOf_61zpoe$ = Overflow$valueOf;
  function OverflowWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OverflowWrap_initFields() {
    OverflowWrap_initFields = function () {
    };
    OverflowWrap$initial_instance = new OverflowWrap('initial', 0);
    OverflowWrap$inherit_instance = new OverflowWrap('inherit', 1);
    OverflowWrap$unset_instance = new OverflowWrap('unset', 2);
    OverflowWrap$normal_instance = new OverflowWrap('normal', 3);
    OverflowWrap$breakWord_instance = new OverflowWrap('breakWord', 4);
  }
  var OverflowWrap$initial_instance;
  function OverflowWrap$initial_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$initial_instance;
  }
  var OverflowWrap$inherit_instance;
  function OverflowWrap$inherit_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$inherit_instance;
  }
  var OverflowWrap$unset_instance;
  function OverflowWrap$unset_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$unset_instance;
  }
  var OverflowWrap$normal_instance;
  function OverflowWrap$normal_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$normal_instance;
  }
  var OverflowWrap$breakWord_instance;
  function OverflowWrap$breakWord_getInstance() {
    OverflowWrap_initFields();
    return OverflowWrap$breakWord_instance;
  }
  OverflowWrap.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  OverflowWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverflowWrap',
    interfaces: [Enum]
  };
  function OverflowWrap$values() {
    return [OverflowWrap$initial_getInstance(), OverflowWrap$inherit_getInstance(), OverflowWrap$unset_getInstance(), OverflowWrap$normal_getInstance(), OverflowWrap$breakWord_getInstance()];
  }
  OverflowWrap.values = OverflowWrap$values;
  function OverflowWrap$valueOf(name) {
    switch (name) {
      case 'initial':
        return OverflowWrap$initial_getInstance();
      case 'inherit':
        return OverflowWrap$inherit_getInstance();
      case 'unset':
        return OverflowWrap$unset_getInstance();
      case 'normal':
        return OverflowWrap$normal_getInstance();
      case 'breakWord':
        return OverflowWrap$breakWord_getInstance();
      default:throwISE('No enum constant kotlinx.css.OverflowWrap.' + name);
    }
  }
  OverflowWrap.valueOf_61zpoe$ = OverflowWrap$valueOf;
  function OverscrollBehavior(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OverscrollBehavior_initFields() {
    OverscrollBehavior_initFields = function () {
    };
    OverscrollBehavior$initial_instance = new OverscrollBehavior('initial', 0);
    OverscrollBehavior$inherit_instance = new OverscrollBehavior('inherit', 1);
    OverscrollBehavior$unset_instance = new OverscrollBehavior('unset', 2);
    OverscrollBehavior$auto_instance = new OverscrollBehavior('auto', 3);
    OverscrollBehavior$contain_instance = new OverscrollBehavior('contain', 4);
    OverscrollBehavior$none_instance = new OverscrollBehavior('none', 5);
  }
  var OverscrollBehavior$initial_instance;
  function OverscrollBehavior$initial_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$initial_instance;
  }
  var OverscrollBehavior$inherit_instance;
  function OverscrollBehavior$inherit_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$inherit_instance;
  }
  var OverscrollBehavior$unset_instance;
  function OverscrollBehavior$unset_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$unset_instance;
  }
  var OverscrollBehavior$auto_instance;
  function OverscrollBehavior$auto_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$auto_instance;
  }
  var OverscrollBehavior$contain_instance;
  function OverscrollBehavior$contain_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$contain_instance;
  }
  var OverscrollBehavior$none_instance;
  function OverscrollBehavior$none_getInstance() {
    OverscrollBehavior_initFields();
    return OverscrollBehavior$none_instance;
  }
  OverscrollBehavior.prototype.toString = function () {
    return this.name;
  };
  OverscrollBehavior.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverscrollBehavior',
    interfaces: [Enum]
  };
  function OverscrollBehavior$values() {
    return [OverscrollBehavior$initial_getInstance(), OverscrollBehavior$inherit_getInstance(), OverscrollBehavior$unset_getInstance(), OverscrollBehavior$auto_getInstance(), OverscrollBehavior$contain_getInstance(), OverscrollBehavior$none_getInstance()];
  }
  OverscrollBehavior.values = OverscrollBehavior$values;
  function OverscrollBehavior$valueOf(name) {
    switch (name) {
      case 'initial':
        return OverscrollBehavior$initial_getInstance();
      case 'inherit':
        return OverscrollBehavior$inherit_getInstance();
      case 'unset':
        return OverscrollBehavior$unset_getInstance();
      case 'auto':
        return OverscrollBehavior$auto_getInstance();
      case 'contain':
        return OverscrollBehavior$contain_getInstance();
      case 'none':
        return OverscrollBehavior$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.OverscrollBehavior.' + name);
    }
  }
  OverscrollBehavior.valueOf_61zpoe$ = OverscrollBehavior$valueOf;
  function PointerEvents(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PointerEvents_initFields() {
    PointerEvents_initFields = function () {
    };
    PointerEvents$initial_instance = new PointerEvents('initial', 0);
    PointerEvents$inherit_instance = new PointerEvents('inherit', 1);
    PointerEvents$unset_instance = new PointerEvents('unset', 2);
    PointerEvents$auto_instance = new PointerEvents('auto', 3);
    PointerEvents$none_instance = new PointerEvents('none', 4);
  }
  var PointerEvents$initial_instance;
  function PointerEvents$initial_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$initial_instance;
  }
  var PointerEvents$inherit_instance;
  function PointerEvents$inherit_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$inherit_instance;
  }
  var PointerEvents$unset_instance;
  function PointerEvents$unset_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$unset_instance;
  }
  var PointerEvents$auto_instance;
  function PointerEvents$auto_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$auto_instance;
  }
  var PointerEvents$none_instance;
  function PointerEvents$none_getInstance() {
    PointerEvents_initFields();
    return PointerEvents$none_instance;
  }
  PointerEvents.prototype.toString = function () {
    return this.name;
  };
  PointerEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointerEvents',
    interfaces: [Enum]
  };
  function PointerEvents$values() {
    return [PointerEvents$initial_getInstance(), PointerEvents$inherit_getInstance(), PointerEvents$unset_getInstance(), PointerEvents$auto_getInstance(), PointerEvents$none_getInstance()];
  }
  PointerEvents.values = PointerEvents$values;
  function PointerEvents$valueOf(name) {
    switch (name) {
      case 'initial':
        return PointerEvents$initial_getInstance();
      case 'inherit':
        return PointerEvents$inherit_getInstance();
      case 'unset':
        return PointerEvents$unset_getInstance();
      case 'auto':
        return PointerEvents$auto_getInstance();
      case 'none':
        return PointerEvents$none_getInstance();
      default:throwISE('No enum constant kotlinx.css.PointerEvents.' + name);
    }
  }
  PointerEvents.valueOf_61zpoe$ = PointerEvents$valueOf;
  function Position(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Position_initFields() {
    Position_initFields = function () {
    };
    Position$initial_instance = new Position('initial', 0);
    Position$inherit_instance = new Position('inherit', 1);
    Position$unset_instance = new Position('unset', 2);
    Position$static_instance = new Position('static', 3);
    Position$relative_instance = new Position('relative', 4);
    Position$absolute_instance = new Position('absolute', 5);
    Position$fixed_instance = new Position('fixed', 6);
    Position$sticky_instance = new Position('sticky', 7);
  }
  var Position$initial_instance;
  function Position$initial_getInstance() {
    Position_initFields();
    return Position$initial_instance;
  }
  var Position$inherit_instance;
  function Position$inherit_getInstance() {
    Position_initFields();
    return Position$inherit_instance;
  }
  var Position$unset_instance;
  function Position$unset_getInstance() {
    Position_initFields();
    return Position$unset_instance;
  }
  var Position$static_instance;
  function Position$static_getInstance() {
    Position_initFields();
    return Position$static_instance;
  }
  var Position$relative_instance;
  function Position$relative_getInstance() {
    Position_initFields();
    return Position$relative_instance;
  }
  var Position$absolute_instance;
  function Position$absolute_getInstance() {
    Position_initFields();
    return Position$absolute_instance;
  }
  var Position$fixed_instance;
  function Position$fixed_getInstance() {
    Position_initFields();
    return Position$fixed_instance;
  }
  var Position$sticky_instance;
  function Position$sticky_getInstance() {
    Position_initFields();
    return Position$sticky_instance;
  }
  Position.prototype.toString = function () {
    return this.name;
  };
  Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: [Enum]
  };
  function Position$values() {
    return [Position$initial_getInstance(), Position$inherit_getInstance(), Position$unset_getInstance(), Position$static_getInstance(), Position$relative_getInstance(), Position$absolute_getInstance(), Position$fixed_getInstance(), Position$sticky_getInstance()];
  }
  Position.values = Position$values;
  function Position$valueOf(name) {
    switch (name) {
      case 'initial':
        return Position$initial_getInstance();
      case 'inherit':
        return Position$inherit_getInstance();
      case 'unset':
        return Position$unset_getInstance();
      case 'static':
        return Position$static_getInstance();
      case 'relative':
        return Position$relative_getInstance();
      case 'absolute':
        return Position$absolute_getInstance();
      case 'fixed':
        return Position$fixed_getInstance();
      case 'sticky':
        return Position$sticky_getInstance();
      default:throwISE('No enum constant kotlinx.css.Position.' + name);
    }
  }
  Position.valueOf_61zpoe$ = Position$valueOf;
  function RowGap(value) {
    RowGap$Companion_getInstance();
    CssValue.call(this, value);
    this.value_ua2gbd$_0 = value;
  }
  Object.defineProperty(RowGap.prototype, 'value', {
    get: function () {
      return this.value_ua2gbd$_0;
    }
  });
  function RowGap$Companion() {
    RowGap$Companion_instance = this;
    this.initial = new RowGap('initial');
    this.inherit = new RowGap('inherit');
    this.normal = new RowGap('normal');
    this.unset = new RowGap('unset');
  }
  RowGap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RowGap$Companion_instance = null;
  function RowGap$Companion_getInstance() {
    if (RowGap$Companion_instance === null) {
      new RowGap$Companion();
    }
    return RowGap$Companion_instance;
  }
  RowGap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RowGap',
    interfaces: [CssValue]
  };
  function ScrollBehavior(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScrollBehavior_initFields() {
    ScrollBehavior_initFields = function () {
    };
    ScrollBehavior$initial_instance = new ScrollBehavior('initial', 0);
    ScrollBehavior$inherit_instance = new ScrollBehavior('inherit', 1);
    ScrollBehavior$unset_instance = new ScrollBehavior('unset', 2);
    ScrollBehavior$auto_instance = new ScrollBehavior('auto', 3);
    ScrollBehavior$smooth_instance = new ScrollBehavior('smooth', 4);
  }
  var ScrollBehavior$initial_instance;
  function ScrollBehavior$initial_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$initial_instance;
  }
  var ScrollBehavior$inherit_instance;
  function ScrollBehavior$inherit_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$inherit_instance;
  }
  var ScrollBehavior$unset_instance;
  function ScrollBehavior$unset_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$unset_instance;
  }
  var ScrollBehavior$auto_instance;
  function ScrollBehavior$auto_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$auto_instance;
  }
  var ScrollBehavior$smooth_instance;
  function ScrollBehavior$smooth_getInstance() {
    ScrollBehavior_initFields();
    return ScrollBehavior$smooth_instance;
  }
  ScrollBehavior.prototype.toString = function () {
    return this.name;
  };
  ScrollBehavior.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollBehavior',
    interfaces: [Enum]
  };
  function ScrollBehavior$values() {
    return [ScrollBehavior$initial_getInstance(), ScrollBehavior$inherit_getInstance(), ScrollBehavior$unset_getInstance(), ScrollBehavior$auto_getInstance(), ScrollBehavior$smooth_getInstance()];
  }
  ScrollBehavior.values = ScrollBehavior$values;
  function ScrollBehavior$valueOf(name) {
    switch (name) {
      case 'initial':
        return ScrollBehavior$initial_getInstance();
      case 'inherit':
        return ScrollBehavior$inherit_getInstance();
      case 'unset':
        return ScrollBehavior$unset_getInstance();
      case 'auto':
        return ScrollBehavior$auto_getInstance();
      case 'smooth':
        return ScrollBehavior$smooth_getInstance();
      default:throwISE('No enum constant kotlinx.css.ScrollBehavior.' + name);
    }
  }
  ScrollBehavior.valueOf_61zpoe$ = ScrollBehavior$valueOf;
  function TextAlign(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextAlign_initFields() {
    TextAlign_initFields = function () {
    };
    TextAlign$initial_instance = new TextAlign('initial', 0);
    TextAlign$inherit_instance = new TextAlign('inherit', 1);
    TextAlign$unset_instance = new TextAlign('unset', 2);
    TextAlign$left_instance = new TextAlign('left', 3);
    TextAlign$right_instance = new TextAlign('right', 4);
    TextAlign$center_instance = new TextAlign('center', 5);
    TextAlign$justify_instance = new TextAlign('justify', 6);
    TextAlign$justifyAll_instance = new TextAlign('justifyAll', 7);
    TextAlign$start_instance = new TextAlign('start', 8);
    TextAlign$end_instance = new TextAlign('end', 9);
    TextAlign$matchParent_instance = new TextAlign('matchParent', 10);
  }
  var TextAlign$initial_instance;
  function TextAlign$initial_getInstance() {
    TextAlign_initFields();
    return TextAlign$initial_instance;
  }
  var TextAlign$inherit_instance;
  function TextAlign$inherit_getInstance() {
    TextAlign_initFields();
    return TextAlign$inherit_instance;
  }
  var TextAlign$unset_instance;
  function TextAlign$unset_getInstance() {
    TextAlign_initFields();
    return TextAlign$unset_instance;
  }
  var TextAlign$left_instance;
  function TextAlign$left_getInstance() {
    TextAlign_initFields();
    return TextAlign$left_instance;
  }
  var TextAlign$right_instance;
  function TextAlign$right_getInstance() {
    TextAlign_initFields();
    return TextAlign$right_instance;
  }
  var TextAlign$center_instance;
  function TextAlign$center_getInstance() {
    TextAlign_initFields();
    return TextAlign$center_instance;
  }
  var TextAlign$justify_instance;
  function TextAlign$justify_getInstance() {
    TextAlign_initFields();
    return TextAlign$justify_instance;
  }
  var TextAlign$justifyAll_instance;
  function TextAlign$justifyAll_getInstance() {
    TextAlign_initFields();
    return TextAlign$justifyAll_instance;
  }
  var TextAlign$start_instance;
  function TextAlign$start_getInstance() {
    TextAlign_initFields();
    return TextAlign$start_instance;
  }
  var TextAlign$end_instance;
  function TextAlign$end_getInstance() {
    TextAlign_initFields();
    return TextAlign$end_instance;
  }
  var TextAlign$matchParent_instance;
  function TextAlign$matchParent_getInstance() {
    TextAlign_initFields();
    return TextAlign$matchParent_instance;
  }
  TextAlign.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  TextAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextAlign',
    interfaces: [Enum]
  };
  function TextAlign$values() {
    return [TextAlign$initial_getInstance(), TextAlign$inherit_getInstance(), TextAlign$unset_getInstance(), TextAlign$left_getInstance(), TextAlign$right_getInstance(), TextAlign$center_getInstance(), TextAlign$justify_getInstance(), TextAlign$justifyAll_getInstance(), TextAlign$start_getInstance(), TextAlign$end_getInstance(), TextAlign$matchParent_getInstance()];
  }
  TextAlign.values = TextAlign$values;
  function TextAlign$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextAlign$initial_getInstance();
      case 'inherit':
        return TextAlign$inherit_getInstance();
      case 'unset':
        return TextAlign$unset_getInstance();
      case 'left':
        return TextAlign$left_getInstance();
      case 'right':
        return TextAlign$right_getInstance();
      case 'center':
        return TextAlign$center_getInstance();
      case 'justify':
        return TextAlign$justify_getInstance();
      case 'justifyAll':
        return TextAlign$justifyAll_getInstance();
      case 'start':
        return TextAlign$start_getInstance();
      case 'end':
        return TextAlign$end_getInstance();
      case 'matchParent':
        return TextAlign$matchParent_getInstance();
      default:throwISE('No enum constant kotlinx.css.TextAlign.' + name);
    }
  }
  TextAlign.valueOf_61zpoe$ = TextAlign$valueOf;
  function TableLayout(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TableLayout_initFields() {
    TableLayout_initFields = function () {
    };
    TableLayout$initial_instance = new TableLayout('initial', 0);
    TableLayout$inherit_instance = new TableLayout('inherit', 1);
    TableLayout$unset_instance = new TableLayout('unset', 2);
    TableLayout$auto_instance = new TableLayout('auto', 3);
    TableLayout$fixed_instance = new TableLayout('fixed', 4);
  }
  var TableLayout$initial_instance;
  function TableLayout$initial_getInstance() {
    TableLayout_initFields();
    return TableLayout$initial_instance;
  }
  var TableLayout$inherit_instance;
  function TableLayout$inherit_getInstance() {
    TableLayout_initFields();
    return TableLayout$inherit_instance;
  }
  var TableLayout$unset_instance;
  function TableLayout$unset_getInstance() {
    TableLayout_initFields();
    return TableLayout$unset_instance;
  }
  var TableLayout$auto_instance;
  function TableLayout$auto_getInstance() {
    TableLayout_initFields();
    return TableLayout$auto_instance;
  }
  var TableLayout$fixed_instance;
  function TableLayout$fixed_getInstance() {
    TableLayout_initFields();
    return TableLayout$fixed_instance;
  }
  TableLayout.prototype.toString = function () {
    return this.name;
  };
  TableLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableLayout',
    interfaces: [Enum]
  };
  function TableLayout$values() {
    return [TableLayout$initial_getInstance(), TableLayout$inherit_getInstance(), TableLayout$unset_getInstance(), TableLayout$auto_getInstance(), TableLayout$fixed_getInstance()];
  }
  TableLayout.values = TableLayout$values;
  function TableLayout$valueOf(name) {
    switch (name) {
      case 'initial':
        return TableLayout$initial_getInstance();
      case 'inherit':
        return TableLayout$inherit_getInstance();
      case 'unset':
        return TableLayout$unset_getInstance();
      case 'auto':
        return TableLayout$auto_getInstance();
      case 'fixed':
        return TableLayout$fixed_getInstance();
      default:throwISE('No enum constant kotlinx.css.TableLayout.' + name);
    }
  }
  TableLayout.valueOf_61zpoe$ = TableLayout$valueOf;
  function TextOverflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextOverflow_initFields() {
    TextOverflow_initFields = function () {
    };
    TextOverflow$initial_instance = new TextOverflow('initial', 0);
    TextOverflow$inherit_instance = new TextOverflow('inherit', 1);
    TextOverflow$unset_instance = new TextOverflow('unset', 2);
    TextOverflow$clip_instance = new TextOverflow('clip', 3);
    TextOverflow$ellipsis_instance = new TextOverflow('ellipsis', 4);
  }
  var TextOverflow$initial_instance;
  function TextOverflow$initial_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$initial_instance;
  }
  var TextOverflow$inherit_instance;
  function TextOverflow$inherit_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$inherit_instance;
  }
  var TextOverflow$unset_instance;
  function TextOverflow$unset_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$unset_instance;
  }
  var TextOverflow$clip_instance;
  function TextOverflow$clip_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$clip_instance;
  }
  var TextOverflow$ellipsis_instance;
  function TextOverflow$ellipsis_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$ellipsis_instance;
  }
  TextOverflow.prototype.toString = function () {
    return this.name;
  };
  TextOverflow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextOverflow',
    interfaces: [Enum]
  };
  function TextOverflow$values() {
    return [TextOverflow$initial_getInstance(), TextOverflow$inherit_getInstance(), TextOverflow$unset_getInstance(), TextOverflow$clip_getInstance(), TextOverflow$ellipsis_getInstance()];
  }
  TextOverflow.values = TextOverflow$values;
  function TextOverflow$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextOverflow$initial_getInstance();
      case 'inherit':
        return TextOverflow$inherit_getInstance();
      case 'unset':
        return TextOverflow$unset_getInstance();
      case 'clip':
        return TextOverflow$clip_getInstance();
      case 'ellipsis':
        return TextOverflow$ellipsis_getInstance();
      default:throwISE('No enum constant kotlinx.css.TextOverflow.' + name);
    }
  }
  TextOverflow.valueOf_61zpoe$ = TextOverflow$valueOf;
  function TextTransform(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextTransform_initFields() {
    TextTransform_initFields = function () {
    };
    TextTransform$initial_instance = new TextTransform('initial', 0);
    TextTransform$inherit_instance = new TextTransform('inherit', 1);
    TextTransform$unset_instance = new TextTransform('unset', 2);
    TextTransform$capitalize_instance = new TextTransform('capitalize', 3);
    TextTransform$uppercase_instance = new TextTransform('uppercase', 4);
    TextTransform$lowercase_instance = new TextTransform('lowercase', 5);
    TextTransform$none_instance = new TextTransform('none', 6);
    TextTransform$fullWidth_instance = new TextTransform('fullWidth', 7);
  }
  var TextTransform$initial_instance;
  function TextTransform$initial_getInstance() {
    TextTransform_initFields();
    return TextTransform$initial_instance;
  }
  var TextTransform$inherit_instance;
  function TextTransform$inherit_getInstance() {
    TextTransform_initFields();
    return TextTransform$inherit_instance;
  }
  var TextTransform$unset_instance;
  function TextTransform$unset_getInstance() {
    TextTransform_initFields();
    return TextTransform$unset_instance;
  }
  var TextTransform$capitalize_instance;
  function TextTransform$capitalize_getInstance() {
    TextTransform_initFields();
    return TextTransform$capitalize_instance;
  }
  var TextTransform$uppercase_instance;
  function TextTransform$uppercase_getInstance() {
    TextTransform_initFields();
    return TextTransform$uppercase_instance;
  }
  var TextTransform$lowercase_instance;
  function TextTransform$lowercase_getInstance() {
    TextTransform_initFields();
    return TextTransform$lowercase_instance;
  }
  var TextTransform$none_instance;
  function TextTransform$none_getInstance() {
    TextTransform_initFields();
    return TextTransform$none_instance;
  }
  var TextTransform$fullWidth_instance;
  function TextTransform$fullWidth_getInstance() {
    TextTransform_initFields();
    return TextTransform$fullWidth_instance;
  }
  TextTransform.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  TextTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextTransform',
    interfaces: [Enum]
  };
  function TextTransform$values() {
    return [TextTransform$initial_getInstance(), TextTransform$inherit_getInstance(), TextTransform$unset_getInstance(), TextTransform$capitalize_getInstance(), TextTransform$uppercase_getInstance(), TextTransform$lowercase_getInstance(), TextTransform$none_getInstance(), TextTransform$fullWidth_getInstance()];
  }
  TextTransform.values = TextTransform$values;
  function TextTransform$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextTransform$initial_getInstance();
      case 'inherit':
        return TextTransform$inherit_getInstance();
      case 'unset':
        return TextTransform$unset_getInstance();
      case 'capitalize':
        return TextTransform$capitalize_getInstance();
      case 'uppercase':
        return TextTransform$uppercase_getInstance();
      case 'lowercase':
        return TextTransform$lowercase_getInstance();
      case 'none':
        return TextTransform$none_getInstance();
      case 'fullWidth':
        return TextTransform$fullWidth_getInstance();
      default:throwISE('No enum constant kotlinx.css.TextTransform.' + name);
    }
  }
  TextTransform.valueOf_61zpoe$ = TextTransform$valueOf;
  function UserSelect(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UserSelect_initFields() {
    UserSelect_initFields = function () {
    };
    UserSelect$initial_instance = new UserSelect('initial', 0);
    UserSelect$inherit_instance = new UserSelect('inherit', 1);
    UserSelect$unset_instance = new UserSelect('unset', 2);
    UserSelect$none_instance = new UserSelect('none', 3);
    UserSelect$auto_instance = new UserSelect('auto', 4);
    UserSelect$text_instance = new UserSelect('text', 5);
    UserSelect$contain_instance = new UserSelect('contain', 6);
    UserSelect$all_instance = new UserSelect('all', 7);
  }
  var UserSelect$initial_instance;
  function UserSelect$initial_getInstance() {
    UserSelect_initFields();
    return UserSelect$initial_instance;
  }
  var UserSelect$inherit_instance;
  function UserSelect$inherit_getInstance() {
    UserSelect_initFields();
    return UserSelect$inherit_instance;
  }
  var UserSelect$unset_instance;
  function UserSelect$unset_getInstance() {
    UserSelect_initFields();
    return UserSelect$unset_instance;
  }
  var UserSelect$none_instance;
  function UserSelect$none_getInstance() {
    UserSelect_initFields();
    return UserSelect$none_instance;
  }
  var UserSelect$auto_instance;
  function UserSelect$auto_getInstance() {
    UserSelect_initFields();
    return UserSelect$auto_instance;
  }
  var UserSelect$text_instance;
  function UserSelect$text_getInstance() {
    UserSelect_initFields();
    return UserSelect$text_instance;
  }
  var UserSelect$contain_instance;
  function UserSelect$contain_getInstance() {
    UserSelect_initFields();
    return UserSelect$contain_instance;
  }
  var UserSelect$all_instance;
  function UserSelect$all_getInstance() {
    UserSelect_initFields();
    return UserSelect$all_instance;
  }
  UserSelect.prototype.toString = function () {
    return this.name;
  };
  UserSelect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSelect',
    interfaces: [Enum]
  };
  function UserSelect$values() {
    return [UserSelect$initial_getInstance(), UserSelect$inherit_getInstance(), UserSelect$unset_getInstance(), UserSelect$none_getInstance(), UserSelect$auto_getInstance(), UserSelect$text_getInstance(), UserSelect$contain_getInstance(), UserSelect$all_getInstance()];
  }
  UserSelect.values = UserSelect$values;
  function UserSelect$valueOf(name) {
    switch (name) {
      case 'initial':
        return UserSelect$initial_getInstance();
      case 'inherit':
        return UserSelect$inherit_getInstance();
      case 'unset':
        return UserSelect$unset_getInstance();
      case 'none':
        return UserSelect$none_getInstance();
      case 'auto':
        return UserSelect$auto_getInstance();
      case 'text':
        return UserSelect$text_getInstance();
      case 'contain':
        return UserSelect$contain_getInstance();
      case 'all':
        return UserSelect$all_getInstance();
      default:throwISE('No enum constant kotlinx.css.UserSelect.' + name);
    }
  }
  UserSelect.valueOf_61zpoe$ = UserSelect$valueOf;
  function VerticalAlign(value) {
    VerticalAlign$Companion_getInstance();
    CssValue.call(this, value);
    this.value_lgzlm2$_0 = value;
  }
  Object.defineProperty(VerticalAlign.prototype, 'value', {
    get: function () {
      return this.value_lgzlm2$_0;
    }
  });
  function VerticalAlign$Companion() {
    VerticalAlign$Companion_instance = this;
    this.initial = new VerticalAlign('initial');
    this.inherit = new VerticalAlign('inherit');
    this.unset = new VerticalAlign('unset');
    this.baseline = new VerticalAlign('baseline');
    this.sub = new VerticalAlign('sub');
    this.super = new VerticalAlign('super');
    this.textTop = new VerticalAlign('text-top');
    this.textBottom = new VerticalAlign('text-bottom');
    this.middle = new VerticalAlign('middle');
    this.top = new VerticalAlign('top');
    this.bottom = new VerticalAlign('bottom');
  }
  VerticalAlign$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VerticalAlign$Companion_instance = null;
  function VerticalAlign$Companion_getInstance() {
    if (VerticalAlign$Companion_instance === null) {
      new VerticalAlign$Companion();
    }
    return VerticalAlign$Companion_instance;
  }
  VerticalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalAlign',
    interfaces: [CssValue]
  };
  function get_up($receiver) {
    return new VerticalAlign($receiver.toString());
  }
  function get_down($receiver) {
    return new VerticalAlign($receiver.unaryMinus().toString());
  }
  function Visibility(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Visibility_initFields() {
    Visibility_initFields = function () {
    };
    Visibility$initial_instance = new Visibility('initial', 0);
    Visibility$inherit_instance = new Visibility('inherit', 1);
    Visibility$unset_instance = new Visibility('unset', 2);
    Visibility$visible_instance = new Visibility('visible', 3);
    Visibility$hidden_instance = new Visibility('hidden', 4);
    Visibility$collapse_instance = new Visibility('collapse', 5);
  }
  var Visibility$initial_instance;
  function Visibility$initial_getInstance() {
    Visibility_initFields();
    return Visibility$initial_instance;
  }
  var Visibility$inherit_instance;
  function Visibility$inherit_getInstance() {
    Visibility_initFields();
    return Visibility$inherit_instance;
  }
  var Visibility$unset_instance;
  function Visibility$unset_getInstance() {
    Visibility_initFields();
    return Visibility$unset_instance;
  }
  var Visibility$visible_instance;
  function Visibility$visible_getInstance() {
    Visibility_initFields();
    return Visibility$visible_instance;
  }
  var Visibility$hidden_instance;
  function Visibility$hidden_getInstance() {
    Visibility_initFields();
    return Visibility$hidden_instance;
  }
  var Visibility$collapse_instance;
  function Visibility$collapse_getInstance() {
    Visibility_initFields();
    return Visibility$collapse_instance;
  }
  Visibility.prototype.toString = function () {
    return this.name;
  };
  Visibility.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Visibility',
    interfaces: [Enum]
  };
  function Visibility$values() {
    return [Visibility$initial_getInstance(), Visibility$inherit_getInstance(), Visibility$unset_getInstance(), Visibility$visible_getInstance(), Visibility$hidden_getInstance(), Visibility$collapse_getInstance()];
  }
  Visibility.values = Visibility$values;
  function Visibility$valueOf(name) {
    switch (name) {
      case 'initial':
        return Visibility$initial_getInstance();
      case 'inherit':
        return Visibility$inherit_getInstance();
      case 'unset':
        return Visibility$unset_getInstance();
      case 'visible':
        return Visibility$visible_getInstance();
      case 'hidden':
        return Visibility$hidden_getInstance();
      case 'collapse':
        return Visibility$collapse_getInstance();
      default:throwISE('No enum constant kotlinx.css.Visibility.' + name);
    }
  }
  Visibility.valueOf_61zpoe$ = Visibility$valueOf;
  function WhiteSpace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WhiteSpace_initFields() {
    WhiteSpace_initFields = function () {
    };
    WhiteSpace$initial_instance = new WhiteSpace('initial', 0);
    WhiteSpace$inherit_instance = new WhiteSpace('inherit', 1);
    WhiteSpace$unset_instance = new WhiteSpace('unset', 2);
    WhiteSpace$normal_instance = new WhiteSpace('normal', 3);
    WhiteSpace$nowrap_instance = new WhiteSpace('nowrap', 4);
    WhiteSpace$pre_instance = new WhiteSpace('pre', 5);
    WhiteSpace$preWrap_instance = new WhiteSpace('preWrap', 6);
    WhiteSpace$preLine_instance = new WhiteSpace('preLine', 7);
  }
  var WhiteSpace$initial_instance;
  function WhiteSpace$initial_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$initial_instance;
  }
  var WhiteSpace$inherit_instance;
  function WhiteSpace$inherit_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$inherit_instance;
  }
  var WhiteSpace$unset_instance;
  function WhiteSpace$unset_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$unset_instance;
  }
  var WhiteSpace$normal_instance;
  function WhiteSpace$normal_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$normal_instance;
  }
  var WhiteSpace$nowrap_instance;
  function WhiteSpace$nowrap_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$nowrap_instance;
  }
  var WhiteSpace$pre_instance;
  function WhiteSpace$pre_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$pre_instance;
  }
  var WhiteSpace$preWrap_instance;
  function WhiteSpace$preWrap_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$preWrap_instance;
  }
  var WhiteSpace$preLine_instance;
  function WhiteSpace$preLine_getInstance() {
    WhiteSpace_initFields();
    return WhiteSpace$preLine_instance;
  }
  WhiteSpace.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  WhiteSpace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WhiteSpace',
    interfaces: [Enum]
  };
  function WhiteSpace$values() {
    return [WhiteSpace$initial_getInstance(), WhiteSpace$inherit_getInstance(), WhiteSpace$unset_getInstance(), WhiteSpace$normal_getInstance(), WhiteSpace$nowrap_getInstance(), WhiteSpace$pre_getInstance(), WhiteSpace$preWrap_getInstance(), WhiteSpace$preLine_getInstance()];
  }
  WhiteSpace.values = WhiteSpace$values;
  function WhiteSpace$valueOf(name) {
    switch (name) {
      case 'initial':
        return WhiteSpace$initial_getInstance();
      case 'inherit':
        return WhiteSpace$inherit_getInstance();
      case 'unset':
        return WhiteSpace$unset_getInstance();
      case 'normal':
        return WhiteSpace$normal_getInstance();
      case 'nowrap':
        return WhiteSpace$nowrap_getInstance();
      case 'pre':
        return WhiteSpace$pre_getInstance();
      case 'preWrap':
        return WhiteSpace$preWrap_getInstance();
      case 'preLine':
        return WhiteSpace$preLine_getInstance();
      default:throwISE('No enum constant kotlinx.css.WhiteSpace.' + name);
    }
  }
  WhiteSpace.valueOf_61zpoe$ = WhiteSpace$valueOf;
  function WordBreak(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WordBreak_initFields() {
    WordBreak_initFields = function () {
    };
    WordBreak$initial_instance = new WordBreak('initial', 0);
    WordBreak$inherit_instance = new WordBreak('inherit', 1);
    WordBreak$unset_instance = new WordBreak('unset', 2);
    WordBreak$normal_instance = new WordBreak('normal', 3);
    WordBreak$breakAll_instance = new WordBreak('breakAll', 4);
    WordBreak$breakWord_instance = new WordBreak('breakWord', 5);
    WordBreak$keepAll_instance = new WordBreak('keepAll', 6);
  }
  var WordBreak$initial_instance;
  function WordBreak$initial_getInstance() {
    WordBreak_initFields();
    return WordBreak$initial_instance;
  }
  var WordBreak$inherit_instance;
  function WordBreak$inherit_getInstance() {
    WordBreak_initFields();
    return WordBreak$inherit_instance;
  }
  var WordBreak$unset_instance;
  function WordBreak$unset_getInstance() {
    WordBreak_initFields();
    return WordBreak$unset_instance;
  }
  var WordBreak$normal_instance;
  function WordBreak$normal_getInstance() {
    WordBreak_initFields();
    return WordBreak$normal_instance;
  }
  var WordBreak$breakAll_instance;
  function WordBreak$breakAll_getInstance() {
    WordBreak_initFields();
    return WordBreak$breakAll_instance;
  }
  var WordBreak$breakWord_instance;
  function WordBreak$breakWord_getInstance() {
    WordBreak_initFields();
    return WordBreak$breakWord_instance;
  }
  var WordBreak$keepAll_instance;
  function WordBreak$keepAll_getInstance() {
    WordBreak_initFields();
    return WordBreak$keepAll_instance;
  }
  WordBreak.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  WordBreak.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordBreak',
    interfaces: [Enum]
  };
  function WordBreak$values() {
    return [WordBreak$initial_getInstance(), WordBreak$inherit_getInstance(), WordBreak$unset_getInstance(), WordBreak$normal_getInstance(), WordBreak$breakAll_getInstance(), WordBreak$breakWord_getInstance(), WordBreak$keepAll_getInstance()];
  }
  WordBreak.values = WordBreak$values;
  function WordBreak$valueOf(name) {
    switch (name) {
      case 'initial':
        return WordBreak$initial_getInstance();
      case 'inherit':
        return WordBreak$inherit_getInstance();
      case 'unset':
        return WordBreak$unset_getInstance();
      case 'normal':
        return WordBreak$normal_getInstance();
      case 'breakAll':
        return WordBreak$breakAll_getInstance();
      case 'breakWord':
        return WordBreak$breakWord_getInstance();
      case 'keepAll':
        return WordBreak$keepAll_getInstance();
      default:throwISE('No enum constant kotlinx.css.WordBreak.' + name);
    }
  }
  WordBreak.valueOf_61zpoe$ = WordBreak$valueOf;
  function WordWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WordWrap_initFields() {
    WordWrap_initFields = function () {
    };
    WordWrap$initial_instance = new WordWrap('initial', 0);
    WordWrap$inherit_instance = new WordWrap('inherit', 1);
    WordWrap$unset_instance = new WordWrap('unset', 2);
    WordWrap$normal_instance = new WordWrap('normal', 3);
    WordWrap$breakWord_instance = new WordWrap('breakWord', 4);
  }
  var WordWrap$initial_instance;
  function WordWrap$initial_getInstance() {
    WordWrap_initFields();
    return WordWrap$initial_instance;
  }
  var WordWrap$inherit_instance;
  function WordWrap$inherit_getInstance() {
    WordWrap_initFields();
    return WordWrap$inherit_instance;
  }
  var WordWrap$unset_instance;
  function WordWrap$unset_getInstance() {
    WordWrap_initFields();
    return WordWrap$unset_instance;
  }
  var WordWrap$normal_instance;
  function WordWrap$normal_getInstance() {
    WordWrap_initFields();
    return WordWrap$normal_instance;
  }
  var WordWrap$breakWord_instance;
  function WordWrap$breakWord_getInstance() {
    WordWrap_initFields();
    return WordWrap$breakWord_instance;
  }
  WordWrap.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  WordWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WordWrap',
    interfaces: [Enum]
  };
  function WordWrap$values() {
    return [WordWrap$initial_getInstance(), WordWrap$inherit_getInstance(), WordWrap$unset_getInstance(), WordWrap$normal_getInstance(), WordWrap$breakWord_getInstance()];
  }
  WordWrap.values = WordWrap$values;
  function WordWrap$valueOf(name) {
    switch (name) {
      case 'initial':
        return WordWrap$initial_getInstance();
      case 'inherit':
        return WordWrap$inherit_getInstance();
      case 'unset':
        return WordWrap$unset_getInstance();
      case 'normal':
        return WordWrap$normal_getInstance();
      case 'breakWord':
        return WordWrap$breakWord_getInstance();
      default:throwISE('No enum constant kotlinx.css.WordWrap.' + name);
    }
  }
  WordWrap.valueOf_61zpoe$ = WordWrap$valueOf;
  function Image(value) {
    Image$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dr6e0y$_0 = value;
  }
  Object.defineProperty(Image.prototype, 'value', {
    get: function () {
      return this.value_dr6e0y$_0;
    }
  });
  function Image$Companion() {
    Image$Companion_instance = this;
    this.none = new Image('none');
  }
  Image$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Image$Companion_instance = null;
  function Image$Companion_getInstance() {
    if (Image$Companion_instance === null) {
      new Image$Companion();
    }
    return Image$Companion_instance;
  }
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [CssValue]
  };
  function StyleList(delimiter) {
    this.delimiter_o62vis$_0 = delimiter;
    this.list_behuth$_0 = ArrayList_init();
  }
  StyleList.prototype.toString = function () {
    if (this.list_behuth$_0.isEmpty())
      return 'none';
    else
      return joinToString_0(this.list_behuth$_0, this.delimiter_o62vis$_0);
  };
  StyleList.prototype.clear = function () {
    this.list_behuth$_0.clear();
  };
  StyleList.prototype.plusAssign_11rb$ = function (item) {
    this.list_behuth$_0.add_11rb$(item);
  };
  StyleList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleList',
    interfaces: []
  };
  function StyledElement() {
    this.declarations = LinkedHashMap_init();
    this.alignContent_7m0jmp$_0 = this.declarations;
    this.alignItems_9mpmew$_0 = this.declarations;
    this.alignSelf_dai5xs$_0 = this.declarations;
    this.animation_9ca8n1$_0 = new StyledElement$WithDefault(this, StyledElement$animation$lambda);
    this.background_dt9zfp$_0 = this.declarations;
    this.backgroundAttachment_lerym6$_0 = this.declarations;
    this.backgroundClip_v98mrv$_0 = this.declarations;
    this.backgroundColor_piuh1o$_0 = this.declarations;
    this.backgroundImage_sbtf4k$_0 = this.declarations;
    this.backgroundOrigin_pp8gf5$_0 = this.declarations;
    this.backgroundPosition_jdky2s$_0 = this.declarations;
    this.backgroundRepeat_ca6fii$_0 = this.declarations;
    this.backgroundSize_v0hhwc$_0 = this.declarations;
    this.border_uj5qsn$_0 = this.declarations;
    this.borderTop_ybtec8$_0 = this.declarations;
    this.borderRight_u1zlf5$_0 = this.declarations;
    this.borderBottom_ae6zt0$_0 = this.declarations;
    this.borderLeft_1eydpc$_0 = this.declarations;
    this.borderSpacing_v4gap6$_0 = this.declarations;
    this.borderRadius_4h72k5$_0 = this.declarations;
    this.borderTopLeftRadius_r45t5r$_0 = this.declarations;
    this.borderTopRightRadius_1h9xwu$_0 = this.declarations;
    this.borderBottomLeftRadius_va7gar$_0 = this.declarations;
    this.borderBottomRightRadius_bdj8qe$_0 = this.declarations;
    this.borderStyle_upeipo$_0 = this.declarations;
    this.borderTopStyle_hm0yl1$_0 = this.declarations;
    this.borderRightStyle_7neimm$_0 = this.declarations;
    this.borderBottomStyle_ail53b$_0 = this.declarations;
    this.borderLeftStyle_uf8tyb$_0 = this.declarations;
    this.borderWidth_wf611j$_0 = this.declarations;
    this.borderTopWidth_fw9g96$_0 = this.declarations;
    this.borderRightWidth_5xn0ar$_0 = this.declarations;
    this.borderBottomWidth_c8cnf6$_0 = this.declarations;
    this.borderLeftWidth_w50ca6$_0 = this.declarations;
    this.borderColor_n1pd56$_0 = this.declarations;
    this.borderTopColor_p9q45j$_0 = this.declarations;
    this.borderRightColor_fb3o74$_0 = this.declarations;
    this.borderBottomColor_2uvzit$_0 = this.declarations;
    this.borderLeftColor_mrjodt$_0 = this.declarations;
    this.bottom_ukjr2g$_0 = this.declarations;
    this.boxSizing_usvozc$_0 = this.declarations;
    this.boxShadow_ty01xy$_0 = new StyledElement$WithDefault(this, StyledElement$boxShadow$lambda);
    this.clear_ccaz1o$_0 = this.declarations;
    this.color_caitz6$_0 = this.declarations;
    this.columnGap_uohhen$_0 = this.declarations;
    this.contain_krgpcj$_0 = this.declarations;
    this.content_kre1js$_0 = this.declarations;
    this.cursor_mz0idf$_0 = this.declarations;
    this.direction_7uxgv6$_0 = this.declarations;
    this.display_6nw2v5$_0 = this.declarations;
    this.filter_facjkr$_0 = this.declarations;
    this.flexDirection_2fvpq3$_0 = this.declarations;
    this.flexGrow_qznie1$_0 = this.declarations;
    this.flexShrink_hx0sfl$_0 = this.declarations;
    this.flexBasis_d1lijg$_0 = this.declarations;
    this.flexWrap_qqv3g0$_0 = this.declarations;
    this.float_awzpy3$_0 = this.declarations;
    this.fontFamily_23st9c$_0 = this.declarations;
    this.fontSize_n8a6ql$_0 = this.declarations;
    this.fontWeight_yvk984$_0 = this.declarations;
    this.fontStyle_9nlzc1$_0 = this.declarations;
    this.gap_d58nl7$_0 = this.declarations;
    this.gridAutoColumns_zd991j$_0 = this.declarations;
    this.gridAutoFlow_41l45s$_0 = this.declarations;
    this.gridAutoRows_488q2t$_0 = this.declarations;
    this.gridColumn_zhoz87$_0 = this.declarations;
    this.gridColumnEnd_w44giq$_0 = this.declarations;
    this.gridColumnGap_w45h53$_0 = this.declarations;
    this.gridColumnStart_tn230l$_0 = this.declarations;
    this.gridGap_64hne7$_0 = this.declarations;
    this.gridRow_64abzn$_0 = this.declarations;
    this.gridRowEnd_sblvo4$_0 = this.declarations;
    this.gridRowGap_sbkv1r$_0 = this.declarations;
    this.gridRowStart_6b0lmj$_0 = this.declarations;
    this.gridTemplate_9q8vlf$_0 = this.declarations;
    this.gridTemplateAreas_r67ekb$_0 = this.declarations;
    this.gridTemplateColumns_9hhrcs$_0 = this.declarations;
    this.gridTemplateRows_jgrcm2$_0 = this.declarations;
    this.height_sc11v8$_0 = this.declarations;
    this.hyphens_d89c9s$_0 = this.declarations;
    this.justifyContent_m0kemu$_0 = this.declarations;
    this.left_ileno4$_0 = this.declarations;
    this.letterSpacing_m13ack$_0 = this.declarations;
    this.lineHeight_66bepk$_0 = this.declarations;
    this.listStyleType_s12qzw$_0 = this.declarations;
    this.margin_rqe0d7$_0 = this.declarations;
    this.marginTop_ya859i$_0 = this.declarations;
    this.marginRight_aba7n7$_0 = this.declarations;
    this.marginBottom_gvymwq$_0 = this.declarations;
    this.marginLeft_2j3dum$_0 = this.declarations;
    this.minWidth_7dk9j3$_0 = this.declarations;
    this.maxWidth_5ecmr3$_0 = this.declarations;
    this.minHeight_6ou62w$_0 = this.declarations;
    this.maxHeight_y6xcsq$_0 = this.declarations;
    this.objectFit_ls7sbz$_0 = this.declarations;
    this.objectPosition_r7k1rp$_0 = this.declarations;
    this.opacity_lrx962$_0 = this.declarations;
    this.outline_aa924h$_0 = this.declarations;
    this.overflow_a5qwrz$_0 = this.declarations;
    this.overflowX_utpzf9$_0 = this.declarations;
    this.overflowY_utpzee$_0 = this.declarations;
    this.overflowWrap_x0afaf$_0 = this.declarations;
    this.overscrollBehavior_ns2vmo$_0 = this.declarations;
    this.padding_1erndc$_0 = this.declarations;
    this.paddingTop_wpf5zj$_0 = this.declarations;
    this.paddingRight_xwju08$_0 = this.declarations;
    this.paddingBottom_x4zpln$_0 = this.declarations;
    this.paddingLeft_jbwhc9$_0 = this.declarations;
    this.pointerEvents_387511$_0 = this.declarations;
    this.position_unodoq$_0 = this.declarations;
    this.right_5a8lp7$_0 = this.declarations;
    this.rowGap_iopk7d$_0 = this.declarations;
    this.scrollBehavior_gmz364$_0 = this.declarations;
    this.textAlign_q4h755$_0 = this.declarations;
    this.textDecoration_64ihsa$_0 = this.declarations;
    this.textOverflow_f1huuc$_0 = this.declarations;
    this.textTransform_oinaji$_0 = this.declarations;
    this.top_d5h8ss$_0 = this.declarations;
    this.transform_oeyh0r$_0 = new StyledElement$WithDefault(this, StyledElement$transform$lambda);
    this.transition_pya44e$_0 = new StyledElement$WithDefault(this, StyledElement$transition$lambda);
    this.verticalAlign_azdc3y$_0 = this.declarations;
    this.visibility_cn948v$_0 = this.declarations;
    this.whiteSpace_sqw8tm$_0 = this.declarations;
    this.width_2x262t$_0 = this.declarations;
    this.wordBreak_kjny6k$_0 = this.declarations;
    this.wordWrap_h0tf8f$_0 = this.declarations;
    this.userSelect_e7wpjg$_0 = this.declarations;
    this.tableLayout_v4ft9l$_0 = this.declarations;
    this.borderCollapse_h74sze$_0 = this.declarations;
    this.zIndex_9l7h23$_0 = this.declarations;
  }
  function StyledElement$WithDefault($outer, default_0) {
    this.$outer = $outer;
    this.default = default_0;
  }
  StyledElement$WithDefault.prototype.getValue_t0xcdd$ = function (thisRef, property) {
    var tmp$;
    var ex = this.$outer.declarations.containsKey_11rb$(property.callableName);
    if (!ex) {
      var $receiver = this.$outer.declarations;
      var key = property.callableName;
      var value = this.default();
      $receiver.put_xwzc9p$(key, value);
    }
    return Kotlin.isType(tmp$ = this.$outer.declarations.get_11rb$(property.callableName), Any) ? tmp$ : throwCCE();
  };
  StyledElement$WithDefault.prototype.setValue_809r6s$ = function (thisRef, property, value) {
    var $receiver = this.$outer.declarations;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StyledElement$WithDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithDefault',
    interfaces: []
  };
  var StyledElement$alignContent_metadata = new PropertyMetadata('alignContent');
  var getOrImplicitDefault = Kotlin.kotlin.collections.getOrImplicitDefault_t9ocha$;
  Object.defineProperty(StyledElement.prototype, 'alignContent', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.alignContent_7m0jmp$_0, StyledElement$alignContent_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (alignContent) {
      this.alignContent_7m0jmp$_0.put_xwzc9p$(StyledElement$alignContent_metadata.callableName, alignContent);
    }
  });
  var StyledElement$alignItems_metadata = new PropertyMetadata('alignItems');
  Object.defineProperty(StyledElement.prototype, 'alignItems', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.alignItems_9mpmew$_0, StyledElement$alignItems_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (alignItems) {
      this.alignItems_9mpmew$_0.put_xwzc9p$(StyledElement$alignItems_metadata.callableName, alignItems);
    }
  });
  var StyledElement$alignSelf_metadata = new PropertyMetadata('alignSelf');
  Object.defineProperty(StyledElement.prototype, 'alignSelf', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.alignSelf_dai5xs$_0, StyledElement$alignSelf_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (alignSelf) {
      this.alignSelf_dai5xs$_0.put_xwzc9p$(StyledElement$alignSelf_metadata.callableName, alignSelf);
    }
  });
  var StyledElement$animation_metadata = new PropertyMetadata('animation');
  Object.defineProperty(StyledElement.prototype, 'animation', {
    get: function () {
      return this.animation_9ca8n1$_0.getValue_t0xcdd$(this, StyledElement$animation_metadata);
    },
    set: function (animation) {
      this.animation_9ca8n1$_0.setValue_809r6s$(this, StyledElement$animation_metadata, animation);
    }
  });
  var StyledElement$background_metadata = new PropertyMetadata('background');
  Object.defineProperty(StyledElement.prototype, 'background', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.background_dt9zfp$_0, StyledElement$background_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (background) {
      this.background_dt9zfp$_0.put_xwzc9p$(StyledElement$background_metadata.callableName, background);
    }
  });
  var StyledElement$backgroundAttachment_metadata = new PropertyMetadata('backgroundAttachment');
  Object.defineProperty(StyledElement.prototype, 'backgroundAttachment', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundAttachment_lerym6$_0, StyledElement$backgroundAttachment_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundAttachment) {
      this.backgroundAttachment_lerym6$_0.put_xwzc9p$(StyledElement$backgroundAttachment_metadata.callableName, backgroundAttachment);
    }
  });
  var StyledElement$backgroundClip_metadata = new PropertyMetadata('backgroundClip');
  Object.defineProperty(StyledElement.prototype, 'backgroundClip', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundClip_v98mrv$_0, StyledElement$backgroundClip_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundClip) {
      this.backgroundClip_v98mrv$_0.put_xwzc9p$(StyledElement$backgroundClip_metadata.callableName, backgroundClip);
    }
  });
  var StyledElement$backgroundColor_metadata = new PropertyMetadata('backgroundColor');
  Object.defineProperty(StyledElement.prototype, 'backgroundColor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundColor_piuh1o$_0, StyledElement$backgroundColor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundColor) {
      this.backgroundColor_piuh1o$_0.put_xwzc9p$(StyledElement$backgroundColor_metadata.callableName, backgroundColor);
    }
  });
  var StyledElement$backgroundImage_metadata = new PropertyMetadata('backgroundImage');
  Object.defineProperty(StyledElement.prototype, 'backgroundImage', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundImage_sbtf4k$_0, StyledElement$backgroundImage_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundImage) {
      this.backgroundImage_sbtf4k$_0.put_xwzc9p$(StyledElement$backgroundImage_metadata.callableName, backgroundImage);
    }
  });
  var StyledElement$backgroundOrigin_metadata = new PropertyMetadata('backgroundOrigin');
  Object.defineProperty(StyledElement.prototype, 'backgroundOrigin', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundOrigin_pp8gf5$_0, StyledElement$backgroundOrigin_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundOrigin) {
      this.backgroundOrigin_pp8gf5$_0.put_xwzc9p$(StyledElement$backgroundOrigin_metadata.callableName, backgroundOrigin);
    }
  });
  var StyledElement$backgroundPosition_metadata = new PropertyMetadata('backgroundPosition');
  Object.defineProperty(StyledElement.prototype, 'backgroundPosition', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundPosition_jdky2s$_0, StyledElement$backgroundPosition_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundPosition) {
      this.backgroundPosition_jdky2s$_0.put_xwzc9p$(StyledElement$backgroundPosition_metadata.callableName, backgroundPosition);
    }
  });
  var StyledElement$backgroundRepeat_metadata = new PropertyMetadata('backgroundRepeat');
  Object.defineProperty(StyledElement.prototype, 'backgroundRepeat', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundRepeat_ca6fii$_0, StyledElement$backgroundRepeat_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundRepeat) {
      this.backgroundRepeat_ca6fii$_0.put_xwzc9p$(StyledElement$backgroundRepeat_metadata.callableName, backgroundRepeat);
    }
  });
  var StyledElement$backgroundSize_metadata = new PropertyMetadata('backgroundSize');
  Object.defineProperty(StyledElement.prototype, 'backgroundSize', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.backgroundSize_v0hhwc$_0, StyledElement$backgroundSize_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (backgroundSize) {
      this.backgroundSize_v0hhwc$_0.put_xwzc9p$(StyledElement$backgroundSize_metadata.callableName, backgroundSize);
    }
  });
  var StyledElement$border_metadata = new PropertyMetadata('border');
  Object.defineProperty(StyledElement.prototype, 'border', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.border_uj5qsn$_0, StyledElement$border_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (border) {
      this.border_uj5qsn$_0.put_xwzc9p$(StyledElement$border_metadata.callableName, border);
    }
  });
  var StyledElement$borderTop_metadata = new PropertyMetadata('borderTop');
  Object.defineProperty(StyledElement.prototype, 'borderTop', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderTop_ybtec8$_0, StyledElement$borderTop_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderTop) {
      this.borderTop_ybtec8$_0.put_xwzc9p$(StyledElement$borderTop_metadata.callableName, borderTop);
    }
  });
  var StyledElement$borderRight_metadata = new PropertyMetadata('borderRight');
  Object.defineProperty(StyledElement.prototype, 'borderRight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderRight_u1zlf5$_0, StyledElement$borderRight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderRight) {
      this.borderRight_u1zlf5$_0.put_xwzc9p$(StyledElement$borderRight_metadata.callableName, borderRight);
    }
  });
  var StyledElement$borderBottom_metadata = new PropertyMetadata('borderBottom');
  Object.defineProperty(StyledElement.prototype, 'borderBottom', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderBottom_ae6zt0$_0, StyledElement$borderBottom_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderBottom) {
      this.borderBottom_ae6zt0$_0.put_xwzc9p$(StyledElement$borderBottom_metadata.callableName, borderBottom);
    }
  });
  var StyledElement$borderLeft_metadata = new PropertyMetadata('borderLeft');
  Object.defineProperty(StyledElement.prototype, 'borderLeft', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderLeft_1eydpc$_0, StyledElement$borderLeft_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderLeft) {
      this.borderLeft_1eydpc$_0.put_xwzc9p$(StyledElement$borderLeft_metadata.callableName, borderLeft);
    }
  });
  var StyledElement$borderSpacing_metadata = new PropertyMetadata('borderSpacing');
  Object.defineProperty(StyledElement.prototype, 'borderSpacing', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderSpacing_v4gap6$_0, StyledElement$borderSpacing_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderSpacing) {
      this.borderSpacing_v4gap6$_0.put_xwzc9p$(StyledElement$borderSpacing_metadata.callableName, borderSpacing);
    }
  });
  var StyledElement$borderRadius_metadata = new PropertyMetadata('borderRadius');
  Object.defineProperty(StyledElement.prototype, 'borderRadius', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderRadius_4h72k5$_0, StyledElement$borderRadius_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderRadius) {
      this.borderRadius_4h72k5$_0.put_xwzc9p$(StyledElement$borderRadius_metadata.callableName, borderRadius);
    }
  });
  var StyledElement$borderTopLeftRadius_metadata = new PropertyMetadata('borderTopLeftRadius');
  Object.defineProperty(StyledElement.prototype, 'borderTopLeftRadius', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderTopLeftRadius_r45t5r$_0, StyledElement$borderTopLeftRadius_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderTopLeftRadius) {
      this.borderTopLeftRadius_r45t5r$_0.put_xwzc9p$(StyledElement$borderTopLeftRadius_metadata.callableName, borderTopLeftRadius);
    }
  });
  var StyledElement$borderTopRightRadius_metadata = new PropertyMetadata('borderTopRightRadius');
  Object.defineProperty(StyledElement.prototype, 'borderTopRightRadius', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderTopRightRadius_1h9xwu$_0, StyledElement$borderTopRightRadius_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderTopRightRadius) {
      this.borderTopRightRadius_1h9xwu$_0.put_xwzc9p$(StyledElement$borderTopRightRadius_metadata.callableName, borderTopRightRadius);
    }
  });
  var StyledElement$borderBottomLeftRadius_metadata = new PropertyMetadata('borderBottomLeftRadius');
  Object.defineProperty(StyledElement.prototype, 'borderBottomLeftRadius', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderBottomLeftRadius_va7gar$_0, StyledElement$borderBottomLeftRadius_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderBottomLeftRadius) {
      this.borderBottomLeftRadius_va7gar$_0.put_xwzc9p$(StyledElement$borderBottomLeftRadius_metadata.callableName, borderBottomLeftRadius);
    }
  });
  var StyledElement$borderBottomRightRadius_metadata = new PropertyMetadata('borderBottomRightRadius');
  Object.defineProperty(StyledElement.prototype, 'borderBottomRightRadius', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderBottomRightRadius_bdj8qe$_0, StyledElement$borderBottomRightRadius_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderBottomRightRadius) {
      this.borderBottomRightRadius_bdj8qe$_0.put_xwzc9p$(StyledElement$borderBottomRightRadius_metadata.callableName, borderBottomRightRadius);
    }
  });
  var StyledElement$borderStyle_metadata = new PropertyMetadata('borderStyle');
  Object.defineProperty(StyledElement.prototype, 'borderStyle', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderStyle_upeipo$_0, StyledElement$borderStyle_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderStyle) {
      this.borderStyle_upeipo$_0.put_xwzc9p$(StyledElement$borderStyle_metadata.callableName, borderStyle);
    }
  });
  var StyledElement$borderTopStyle_metadata = new PropertyMetadata('borderTopStyle');
  Object.defineProperty(StyledElement.prototype, 'borderTopStyle', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderTopStyle_hm0yl1$_0, StyledElement$borderTopStyle_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderTopStyle) {
      this.borderTopStyle_hm0yl1$_0.put_xwzc9p$(StyledElement$borderTopStyle_metadata.callableName, borderTopStyle);
    }
  });
  var StyledElement$borderRightStyle_metadata = new PropertyMetadata('borderRightStyle');
  Object.defineProperty(StyledElement.prototype, 'borderRightStyle', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderRightStyle_7neimm$_0, StyledElement$borderRightStyle_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderRightStyle) {
      this.borderRightStyle_7neimm$_0.put_xwzc9p$(StyledElement$borderRightStyle_metadata.callableName, borderRightStyle);
    }
  });
  var StyledElement$borderBottomStyle_metadata = new PropertyMetadata('borderBottomStyle');
  Object.defineProperty(StyledElement.prototype, 'borderBottomStyle', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderBottomStyle_ail53b$_0, StyledElement$borderBottomStyle_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderBottomStyle) {
      this.borderBottomStyle_ail53b$_0.put_xwzc9p$(StyledElement$borderBottomStyle_metadata.callableName, borderBottomStyle);
    }
  });
  var StyledElement$borderLeftStyle_metadata = new PropertyMetadata('borderLeftStyle');
  Object.defineProperty(StyledElement.prototype, 'borderLeftStyle', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderLeftStyle_uf8tyb$_0, StyledElement$borderLeftStyle_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderLeftStyle) {
      this.borderLeftStyle_uf8tyb$_0.put_xwzc9p$(StyledElement$borderLeftStyle_metadata.callableName, borderLeftStyle);
    }
  });
  var StyledElement$borderWidth_metadata = new PropertyMetadata('borderWidth');
  Object.defineProperty(StyledElement.prototype, 'borderWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderWidth_wf611j$_0, StyledElement$borderWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderWidth) {
      this.borderWidth_wf611j$_0.put_xwzc9p$(StyledElement$borderWidth_metadata.callableName, borderWidth);
    }
  });
  var StyledElement$borderTopWidth_metadata = new PropertyMetadata('borderTopWidth');
  Object.defineProperty(StyledElement.prototype, 'borderTopWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderTopWidth_fw9g96$_0, StyledElement$borderTopWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderTopWidth) {
      this.borderTopWidth_fw9g96$_0.put_xwzc9p$(StyledElement$borderTopWidth_metadata.callableName, borderTopWidth);
    }
  });
  var StyledElement$borderRightWidth_metadata = new PropertyMetadata('borderRightWidth');
  Object.defineProperty(StyledElement.prototype, 'borderRightWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderRightWidth_5xn0ar$_0, StyledElement$borderRightWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderRightWidth) {
      this.borderRightWidth_5xn0ar$_0.put_xwzc9p$(StyledElement$borderRightWidth_metadata.callableName, borderRightWidth);
    }
  });
  var StyledElement$borderBottomWidth_metadata = new PropertyMetadata('borderBottomWidth');
  Object.defineProperty(StyledElement.prototype, 'borderBottomWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderBottomWidth_c8cnf6$_0, StyledElement$borderBottomWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderBottomWidth) {
      this.borderBottomWidth_c8cnf6$_0.put_xwzc9p$(StyledElement$borderBottomWidth_metadata.callableName, borderBottomWidth);
    }
  });
  var StyledElement$borderLeftWidth_metadata = new PropertyMetadata('borderLeftWidth');
  Object.defineProperty(StyledElement.prototype, 'borderLeftWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderLeftWidth_w50ca6$_0, StyledElement$borderLeftWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderLeftWidth) {
      this.borderLeftWidth_w50ca6$_0.put_xwzc9p$(StyledElement$borderLeftWidth_metadata.callableName, borderLeftWidth);
    }
  });
  var StyledElement$borderColor_metadata = new PropertyMetadata('borderColor');
  Object.defineProperty(StyledElement.prototype, 'borderColor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderColor_n1pd56$_0, StyledElement$borderColor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderColor) {
      this.borderColor_n1pd56$_0.put_xwzc9p$(StyledElement$borderColor_metadata.callableName, borderColor);
    }
  });
  var StyledElement$borderTopColor_metadata = new PropertyMetadata('borderTopColor');
  Object.defineProperty(StyledElement.prototype, 'borderTopColor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderTopColor_p9q45j$_0, StyledElement$borderTopColor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderTopColor) {
      this.borderTopColor_p9q45j$_0.put_xwzc9p$(StyledElement$borderTopColor_metadata.callableName, borderTopColor);
    }
  });
  var StyledElement$borderRightColor_metadata = new PropertyMetadata('borderRightColor');
  Object.defineProperty(StyledElement.prototype, 'borderRightColor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderRightColor_fb3o74$_0, StyledElement$borderRightColor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderRightColor) {
      this.borderRightColor_fb3o74$_0.put_xwzc9p$(StyledElement$borderRightColor_metadata.callableName, borderRightColor);
    }
  });
  var StyledElement$borderBottomColor_metadata = new PropertyMetadata('borderBottomColor');
  Object.defineProperty(StyledElement.prototype, 'borderBottomColor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderBottomColor_2uvzit$_0, StyledElement$borderBottomColor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderBottomColor) {
      this.borderBottomColor_2uvzit$_0.put_xwzc9p$(StyledElement$borderBottomColor_metadata.callableName, borderBottomColor);
    }
  });
  var StyledElement$borderLeftColor_metadata = new PropertyMetadata('borderLeftColor');
  Object.defineProperty(StyledElement.prototype, 'borderLeftColor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderLeftColor_mrjodt$_0, StyledElement$borderLeftColor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderLeftColor) {
      this.borderLeftColor_mrjodt$_0.put_xwzc9p$(StyledElement$borderLeftColor_metadata.callableName, borderLeftColor);
    }
  });
  var StyledElement$bottom_metadata = new PropertyMetadata('bottom');
  Object.defineProperty(StyledElement.prototype, 'bottom', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.bottom_ukjr2g$_0, StyledElement$bottom_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (bottom) {
      this.bottom_ukjr2g$_0.put_xwzc9p$(StyledElement$bottom_metadata.callableName, bottom);
    }
  });
  var StyledElement$boxSizing_metadata = new PropertyMetadata('boxSizing');
  Object.defineProperty(StyledElement.prototype, 'boxSizing', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.boxSizing_usvozc$_0, StyledElement$boxSizing_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (boxSizing) {
      this.boxSizing_usvozc$_0.put_xwzc9p$(StyledElement$boxSizing_metadata.callableName, boxSizing);
    }
  });
  var StyledElement$boxShadow_metadata = new PropertyMetadata('boxShadow');
  Object.defineProperty(StyledElement.prototype, 'boxShadow', {
    get: function () {
      return this.boxShadow_ty01xy$_0.getValue_t0xcdd$(this, StyledElement$boxShadow_metadata);
    },
    set: function (boxShadow) {
      this.boxShadow_ty01xy$_0.setValue_809r6s$(this, StyledElement$boxShadow_metadata, boxShadow);
    }
  });
  var StyledElement$clear_metadata = new PropertyMetadata('clear');
  Object.defineProperty(StyledElement.prototype, 'clear', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.clear_ccaz1o$_0, StyledElement$clear_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (clear) {
      this.clear_ccaz1o$_0.put_xwzc9p$(StyledElement$clear_metadata.callableName, clear);
    }
  });
  var StyledElement$color_metadata = new PropertyMetadata('color');
  Object.defineProperty(StyledElement.prototype, 'color', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.color_caitz6$_0, StyledElement$color_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (color) {
      this.color_caitz6$_0.put_xwzc9p$(StyledElement$color_metadata.callableName, color);
    }
  });
  var StyledElement$columnGap_metadata = new PropertyMetadata('columnGap');
  Object.defineProperty(StyledElement.prototype, 'columnGap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.columnGap_uohhen$_0, StyledElement$columnGap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (columnGap) {
      this.columnGap_uohhen$_0.put_xwzc9p$(StyledElement$columnGap_metadata.callableName, columnGap);
    }
  });
  var StyledElement$contain_metadata = new PropertyMetadata('contain');
  Object.defineProperty(StyledElement.prototype, 'contain', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.contain_krgpcj$_0, StyledElement$contain_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (contain) {
      this.contain_krgpcj$_0.put_xwzc9p$(StyledElement$contain_metadata.callableName, contain);
    }
  });
  var StyledElement$content_metadata = new PropertyMetadata('content');
  Object.defineProperty(StyledElement.prototype, 'content', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.content_kre1js$_0, StyledElement$content_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (content) {
      this.content_kre1js$_0.put_xwzc9p$(StyledElement$content_metadata.callableName, content);
    }
  });
  var StyledElement$cursor_metadata = new PropertyMetadata('cursor');
  Object.defineProperty(StyledElement.prototype, 'cursor', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.cursor_mz0idf$_0, StyledElement$cursor_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (cursor) {
      this.cursor_mz0idf$_0.put_xwzc9p$(StyledElement$cursor_metadata.callableName, cursor);
    }
  });
  var StyledElement$direction_metadata = new PropertyMetadata('direction');
  Object.defineProperty(StyledElement.prototype, 'direction', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.direction_7uxgv6$_0, StyledElement$direction_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (direction) {
      this.direction_7uxgv6$_0.put_xwzc9p$(StyledElement$direction_metadata.callableName, direction);
    }
  });
  var StyledElement$display_metadata = new PropertyMetadata('display');
  Object.defineProperty(StyledElement.prototype, 'display', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.display_6nw2v5$_0, StyledElement$display_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (display) {
      this.display_6nw2v5$_0.put_xwzc9p$(StyledElement$display_metadata.callableName, display);
    }
  });
  var StyledElement$filter_metadata = new PropertyMetadata('filter');
  Object.defineProperty(StyledElement.prototype, 'filter', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.filter_facjkr$_0, StyledElement$filter_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (filter) {
      this.filter_facjkr$_0.put_xwzc9p$(StyledElement$filter_metadata.callableName, filter);
    }
  });
  var StyledElement$flexDirection_metadata = new PropertyMetadata('flexDirection');
  Object.defineProperty(StyledElement.prototype, 'flexDirection', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.flexDirection_2fvpq3$_0, StyledElement$flexDirection_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (flexDirection) {
      this.flexDirection_2fvpq3$_0.put_xwzc9p$(StyledElement$flexDirection_metadata.callableName, flexDirection);
    }
  });
  var StyledElement$flexGrow_metadata = new PropertyMetadata('flexGrow');
  Object.defineProperty(StyledElement.prototype, 'flexGrow', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.flexGrow_qznie1$_0, StyledElement$flexGrow_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (flexGrow) {
      this.flexGrow_qznie1$_0.put_xwzc9p$(StyledElement$flexGrow_metadata.callableName, flexGrow);
    }
  });
  var StyledElement$flexShrink_metadata = new PropertyMetadata('flexShrink');
  Object.defineProperty(StyledElement.prototype, 'flexShrink', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.flexShrink_hx0sfl$_0, StyledElement$flexShrink_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (flexShrink) {
      this.flexShrink_hx0sfl$_0.put_xwzc9p$(StyledElement$flexShrink_metadata.callableName, flexShrink);
    }
  });
  var StyledElement$flexBasis_metadata = new PropertyMetadata('flexBasis');
  Object.defineProperty(StyledElement.prototype, 'flexBasis', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.flexBasis_d1lijg$_0, StyledElement$flexBasis_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (flexBasis) {
      this.flexBasis_d1lijg$_0.put_xwzc9p$(StyledElement$flexBasis_metadata.callableName, flexBasis);
    }
  });
  var StyledElement$flexWrap_metadata = new PropertyMetadata('flexWrap');
  Object.defineProperty(StyledElement.prototype, 'flexWrap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.flexWrap_qqv3g0$_0, StyledElement$flexWrap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (flexWrap) {
      this.flexWrap_qqv3g0$_0.put_xwzc9p$(StyledElement$flexWrap_metadata.callableName, flexWrap);
    }
  });
  var StyledElement$float_metadata = new PropertyMetadata('float');
  Object.defineProperty(StyledElement.prototype, 'float', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.float_awzpy3$_0, StyledElement$float_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (float) {
      this.float_awzpy3$_0.put_xwzc9p$(StyledElement$float_metadata.callableName, float);
    }
  });
  var StyledElement$fontFamily_metadata = new PropertyMetadata('fontFamily');
  Object.defineProperty(StyledElement.prototype, 'fontFamily', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.fontFamily_23st9c$_0, StyledElement$fontFamily_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (fontFamily) {
      this.fontFamily_23st9c$_0.put_xwzc9p$(StyledElement$fontFamily_metadata.callableName, fontFamily);
    }
  });
  var StyledElement$fontSize_metadata = new PropertyMetadata('fontSize');
  Object.defineProperty(StyledElement.prototype, 'fontSize', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.fontSize_n8a6ql$_0, StyledElement$fontSize_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (fontSize) {
      this.fontSize_n8a6ql$_0.put_xwzc9p$(StyledElement$fontSize_metadata.callableName, fontSize);
    }
  });
  var StyledElement$fontWeight_metadata = new PropertyMetadata('fontWeight');
  Object.defineProperty(StyledElement.prototype, 'fontWeight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.fontWeight_yvk984$_0, StyledElement$fontWeight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (fontWeight) {
      this.fontWeight_yvk984$_0.put_xwzc9p$(StyledElement$fontWeight_metadata.callableName, fontWeight);
    }
  });
  var StyledElement$fontStyle_metadata = new PropertyMetadata('fontStyle');
  Object.defineProperty(StyledElement.prototype, 'fontStyle', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.fontStyle_9nlzc1$_0, StyledElement$fontStyle_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (fontStyle) {
      this.fontStyle_9nlzc1$_0.put_xwzc9p$(StyledElement$fontStyle_metadata.callableName, fontStyle);
    }
  });
  var StyledElement$gap_metadata = new PropertyMetadata('gap');
  Object.defineProperty(StyledElement.prototype, 'gap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gap_d58nl7$_0, StyledElement$gap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gap) {
      this.gap_d58nl7$_0.put_xwzc9p$(StyledElement$gap_metadata.callableName, gap);
    }
  });
  var StyledElement$gridAutoColumns_metadata = new PropertyMetadata('gridAutoColumns');
  Object.defineProperty(StyledElement.prototype, 'gridAutoColumns', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridAutoColumns_zd991j$_0, StyledElement$gridAutoColumns_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridAutoColumns) {
      this.gridAutoColumns_zd991j$_0.put_xwzc9p$(StyledElement$gridAutoColumns_metadata.callableName, gridAutoColumns);
    }
  });
  var StyledElement$gridAutoFlow_metadata = new PropertyMetadata('gridAutoFlow');
  Object.defineProperty(StyledElement.prototype, 'gridAutoFlow', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridAutoFlow_41l45s$_0, StyledElement$gridAutoFlow_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridAutoFlow) {
      this.gridAutoFlow_41l45s$_0.put_xwzc9p$(StyledElement$gridAutoFlow_metadata.callableName, gridAutoFlow);
    }
  });
  var StyledElement$gridAutoRows_metadata = new PropertyMetadata('gridAutoRows');
  Object.defineProperty(StyledElement.prototype, 'gridAutoRows', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridAutoRows_488q2t$_0, StyledElement$gridAutoRows_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridAutoRows) {
      this.gridAutoRows_488q2t$_0.put_xwzc9p$(StyledElement$gridAutoRows_metadata.callableName, gridAutoRows);
    }
  });
  var StyledElement$gridColumn_metadata = new PropertyMetadata('gridColumn');
  Object.defineProperty(StyledElement.prototype, 'gridColumn', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridColumn_zhoz87$_0, StyledElement$gridColumn_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridColumn) {
      this.gridColumn_zhoz87$_0.put_xwzc9p$(StyledElement$gridColumn_metadata.callableName, gridColumn);
    }
  });
  var StyledElement$gridColumnEnd_metadata = new PropertyMetadata('gridColumnEnd');
  Object.defineProperty(StyledElement.prototype, 'gridColumnEnd', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridColumnEnd_w44giq$_0, StyledElement$gridColumnEnd_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridColumnEnd) {
      this.gridColumnEnd_w44giq$_0.put_xwzc9p$(StyledElement$gridColumnEnd_metadata.callableName, gridColumnEnd);
    }
  });
  var StyledElement$gridColumnGap_metadata = new PropertyMetadata('gridColumnGap');
  Object.defineProperty(StyledElement.prototype, 'gridColumnGap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridColumnGap_w45h53$_0, StyledElement$gridColumnGap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridColumnGap) {
      this.gridColumnGap_w45h53$_0.put_xwzc9p$(StyledElement$gridColumnGap_metadata.callableName, gridColumnGap);
    }
  });
  var StyledElement$gridColumnStart_metadata = new PropertyMetadata('gridColumnStart');
  Object.defineProperty(StyledElement.prototype, 'gridColumnStart', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridColumnStart_tn230l$_0, StyledElement$gridColumnStart_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridColumnStart) {
      this.gridColumnStart_tn230l$_0.put_xwzc9p$(StyledElement$gridColumnStart_metadata.callableName, gridColumnStart);
    }
  });
  var StyledElement$gridGap_metadata = new PropertyMetadata('gridGap');
  Object.defineProperty(StyledElement.prototype, 'gridGap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridGap_64hne7$_0, StyledElement$gridGap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridGap) {
      this.gridGap_64hne7$_0.put_xwzc9p$(StyledElement$gridGap_metadata.callableName, gridGap);
    }
  });
  var StyledElement$gridRow_metadata = new PropertyMetadata('gridRow');
  Object.defineProperty(StyledElement.prototype, 'gridRow', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridRow_64abzn$_0, StyledElement$gridRow_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridRow) {
      this.gridRow_64abzn$_0.put_xwzc9p$(StyledElement$gridRow_metadata.callableName, gridRow);
    }
  });
  var StyledElement$gridRowEnd_metadata = new PropertyMetadata('gridRowEnd');
  Object.defineProperty(StyledElement.prototype, 'gridRowEnd', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridRowEnd_sblvo4$_0, StyledElement$gridRowEnd_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridRowEnd) {
      this.gridRowEnd_sblvo4$_0.put_xwzc9p$(StyledElement$gridRowEnd_metadata.callableName, gridRowEnd);
    }
  });
  var StyledElement$gridRowGap_metadata = new PropertyMetadata('gridRowGap');
  Object.defineProperty(StyledElement.prototype, 'gridRowGap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridRowGap_sbkv1r$_0, StyledElement$gridRowGap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridRowGap) {
      this.gridRowGap_sbkv1r$_0.put_xwzc9p$(StyledElement$gridRowGap_metadata.callableName, gridRowGap);
    }
  });
  var StyledElement$gridRowStart_metadata = new PropertyMetadata('gridRowStart');
  Object.defineProperty(StyledElement.prototype, 'gridRowStart', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridRowStart_6b0lmj$_0, StyledElement$gridRowStart_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridRowStart) {
      this.gridRowStart_6b0lmj$_0.put_xwzc9p$(StyledElement$gridRowStart_metadata.callableName, gridRowStart);
    }
  });
  var StyledElement$gridTemplate_metadata = new PropertyMetadata('gridTemplate');
  Object.defineProperty(StyledElement.prototype, 'gridTemplate', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridTemplate_9q8vlf$_0, StyledElement$gridTemplate_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridTemplate) {
      this.gridTemplate_9q8vlf$_0.put_xwzc9p$(StyledElement$gridTemplate_metadata.callableName, gridTemplate);
    }
  });
  var StyledElement$gridTemplateAreas_metadata = new PropertyMetadata('gridTemplateAreas');
  Object.defineProperty(StyledElement.prototype, 'gridTemplateAreas', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridTemplateAreas_r67ekb$_0, StyledElement$gridTemplateAreas_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridTemplateAreas) {
      this.gridTemplateAreas_r67ekb$_0.put_xwzc9p$(StyledElement$gridTemplateAreas_metadata.callableName, gridTemplateAreas);
    }
  });
  var StyledElement$gridTemplateColumns_metadata = new PropertyMetadata('gridTemplateColumns');
  Object.defineProperty(StyledElement.prototype, 'gridTemplateColumns', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridTemplateColumns_9hhrcs$_0, StyledElement$gridTemplateColumns_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridTemplateColumns) {
      this.gridTemplateColumns_9hhrcs$_0.put_xwzc9p$(StyledElement$gridTemplateColumns_metadata.callableName, gridTemplateColumns);
    }
  });
  var StyledElement$gridTemplateRows_metadata = new PropertyMetadata('gridTemplateRows');
  Object.defineProperty(StyledElement.prototype, 'gridTemplateRows', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.gridTemplateRows_jgrcm2$_0, StyledElement$gridTemplateRows_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (gridTemplateRows) {
      this.gridTemplateRows_jgrcm2$_0.put_xwzc9p$(StyledElement$gridTemplateRows_metadata.callableName, gridTemplateRows);
    }
  });
  var StyledElement$height_metadata = new PropertyMetadata('height');
  Object.defineProperty(StyledElement.prototype, 'height', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.height_sc11v8$_0, StyledElement$height_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (height) {
      this.height_sc11v8$_0.put_xwzc9p$(StyledElement$height_metadata.callableName, height);
    }
  });
  var StyledElement$hyphens_metadata = new PropertyMetadata('hyphens');
  Object.defineProperty(StyledElement.prototype, 'hyphens', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.hyphens_d89c9s$_0, StyledElement$hyphens_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (hyphens) {
      this.hyphens_d89c9s$_0.put_xwzc9p$(StyledElement$hyphens_metadata.callableName, hyphens);
    }
  });
  var StyledElement$justifyContent_metadata = new PropertyMetadata('justifyContent');
  Object.defineProperty(StyledElement.prototype, 'justifyContent', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.justifyContent_m0kemu$_0, StyledElement$justifyContent_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (justifyContent) {
      this.justifyContent_m0kemu$_0.put_xwzc9p$(StyledElement$justifyContent_metadata.callableName, justifyContent);
    }
  });
  var StyledElement$left_metadata = new PropertyMetadata('left');
  Object.defineProperty(StyledElement.prototype, 'left', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.left_ileno4$_0, StyledElement$left_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (left) {
      this.left_ileno4$_0.put_xwzc9p$(StyledElement$left_metadata.callableName, left);
    }
  });
  var StyledElement$letterSpacing_metadata = new PropertyMetadata('letterSpacing');
  Object.defineProperty(StyledElement.prototype, 'letterSpacing', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.letterSpacing_m13ack$_0, StyledElement$letterSpacing_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (letterSpacing) {
      this.letterSpacing_m13ack$_0.put_xwzc9p$(StyledElement$letterSpacing_metadata.callableName, letterSpacing);
    }
  });
  var StyledElement$lineHeight_metadata = new PropertyMetadata('lineHeight');
  Object.defineProperty(StyledElement.prototype, 'lineHeight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.lineHeight_66bepk$_0, StyledElement$lineHeight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (lineHeight) {
      this.lineHeight_66bepk$_0.put_xwzc9p$(StyledElement$lineHeight_metadata.callableName, lineHeight);
    }
  });
  var StyledElement$listStyleType_metadata = new PropertyMetadata('listStyleType');
  Object.defineProperty(StyledElement.prototype, 'listStyleType', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.listStyleType_s12qzw$_0, StyledElement$listStyleType_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (listStyleType) {
      this.listStyleType_s12qzw$_0.put_xwzc9p$(StyledElement$listStyleType_metadata.callableName, listStyleType);
    }
  });
  var StyledElement$margin_metadata = new PropertyMetadata('margin');
  Object.defineProperty(StyledElement.prototype, 'margin', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.margin_rqe0d7$_0, StyledElement$margin_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (margin) {
      this.margin_rqe0d7$_0.put_xwzc9p$(StyledElement$margin_metadata.callableName, margin);
    }
  });
  var StyledElement$marginTop_metadata = new PropertyMetadata('marginTop');
  Object.defineProperty(StyledElement.prototype, 'marginTop', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.marginTop_ya859i$_0, StyledElement$marginTop_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (marginTop) {
      this.marginTop_ya859i$_0.put_xwzc9p$(StyledElement$marginTop_metadata.callableName, marginTop);
    }
  });
  var StyledElement$marginRight_metadata = new PropertyMetadata('marginRight');
  Object.defineProperty(StyledElement.prototype, 'marginRight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.marginRight_aba7n7$_0, StyledElement$marginRight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (marginRight) {
      this.marginRight_aba7n7$_0.put_xwzc9p$(StyledElement$marginRight_metadata.callableName, marginRight);
    }
  });
  var StyledElement$marginBottom_metadata = new PropertyMetadata('marginBottom');
  Object.defineProperty(StyledElement.prototype, 'marginBottom', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.marginBottom_gvymwq$_0, StyledElement$marginBottom_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (marginBottom) {
      this.marginBottom_gvymwq$_0.put_xwzc9p$(StyledElement$marginBottom_metadata.callableName, marginBottom);
    }
  });
  var StyledElement$marginLeft_metadata = new PropertyMetadata('marginLeft');
  Object.defineProperty(StyledElement.prototype, 'marginLeft', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.marginLeft_2j3dum$_0, StyledElement$marginLeft_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (marginLeft) {
      this.marginLeft_2j3dum$_0.put_xwzc9p$(StyledElement$marginLeft_metadata.callableName, marginLeft);
    }
  });
  var StyledElement$minWidth_metadata = new PropertyMetadata('minWidth');
  Object.defineProperty(StyledElement.prototype, 'minWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.minWidth_7dk9j3$_0, StyledElement$minWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (minWidth) {
      this.minWidth_7dk9j3$_0.put_xwzc9p$(StyledElement$minWidth_metadata.callableName, minWidth);
    }
  });
  var StyledElement$maxWidth_metadata = new PropertyMetadata('maxWidth');
  Object.defineProperty(StyledElement.prototype, 'maxWidth', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.maxWidth_5ecmr3$_0, StyledElement$maxWidth_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (maxWidth) {
      this.maxWidth_5ecmr3$_0.put_xwzc9p$(StyledElement$maxWidth_metadata.callableName, maxWidth);
    }
  });
  var StyledElement$minHeight_metadata = new PropertyMetadata('minHeight');
  Object.defineProperty(StyledElement.prototype, 'minHeight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.minHeight_6ou62w$_0, StyledElement$minHeight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (minHeight) {
      this.minHeight_6ou62w$_0.put_xwzc9p$(StyledElement$minHeight_metadata.callableName, minHeight);
    }
  });
  var StyledElement$maxHeight_metadata = new PropertyMetadata('maxHeight');
  Object.defineProperty(StyledElement.prototype, 'maxHeight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.maxHeight_y6xcsq$_0, StyledElement$maxHeight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (maxHeight) {
      this.maxHeight_y6xcsq$_0.put_xwzc9p$(StyledElement$maxHeight_metadata.callableName, maxHeight);
    }
  });
  var StyledElement$objectFit_metadata = new PropertyMetadata('objectFit');
  Object.defineProperty(StyledElement.prototype, 'objectFit', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.objectFit_ls7sbz$_0, StyledElement$objectFit_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (objectFit) {
      this.objectFit_ls7sbz$_0.put_xwzc9p$(StyledElement$objectFit_metadata.callableName, objectFit);
    }
  });
  var StyledElement$objectPosition_metadata = new PropertyMetadata('objectPosition');
  Object.defineProperty(StyledElement.prototype, 'objectPosition', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.objectPosition_r7k1rp$_0, StyledElement$objectPosition_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (objectPosition) {
      this.objectPosition_r7k1rp$_0.put_xwzc9p$(StyledElement$objectPosition_metadata.callableName, objectPosition);
    }
  });
  var StyledElement$opacity_metadata = new PropertyMetadata('opacity');
  Object.defineProperty(StyledElement.prototype, 'opacity', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.opacity_lrx962$_0, StyledElement$opacity_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (opacity) {
      this.opacity_lrx962$_0.put_xwzc9p$(StyledElement$opacity_metadata.callableName, opacity);
    }
  });
  var StyledElement$outline_metadata = new PropertyMetadata('outline');
  Object.defineProperty(StyledElement.prototype, 'outline', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.outline_aa924h$_0, StyledElement$outline_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (outline) {
      this.outline_aa924h$_0.put_xwzc9p$(StyledElement$outline_metadata.callableName, outline);
    }
  });
  var StyledElement$overflow_metadata = new PropertyMetadata('overflow');
  Object.defineProperty(StyledElement.prototype, 'overflow', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.overflow_a5qwrz$_0, StyledElement$overflow_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (overflow) {
      this.overflow_a5qwrz$_0.put_xwzc9p$(StyledElement$overflow_metadata.callableName, overflow);
    }
  });
  var StyledElement$overflowX_metadata = new PropertyMetadata('overflowX');
  Object.defineProperty(StyledElement.prototype, 'overflowX', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.overflowX_utpzf9$_0, StyledElement$overflowX_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (overflowX) {
      this.overflowX_utpzf9$_0.put_xwzc9p$(StyledElement$overflowX_metadata.callableName, overflowX);
    }
  });
  var StyledElement$overflowY_metadata = new PropertyMetadata('overflowY');
  Object.defineProperty(StyledElement.prototype, 'overflowY', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.overflowY_utpzee$_0, StyledElement$overflowY_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (overflowY) {
      this.overflowY_utpzee$_0.put_xwzc9p$(StyledElement$overflowY_metadata.callableName, overflowY);
    }
  });
  var StyledElement$overflowWrap_metadata = new PropertyMetadata('overflowWrap');
  Object.defineProperty(StyledElement.prototype, 'overflowWrap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.overflowWrap_x0afaf$_0, StyledElement$overflowWrap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (overflowWrap) {
      this.overflowWrap_x0afaf$_0.put_xwzc9p$(StyledElement$overflowWrap_metadata.callableName, overflowWrap);
    }
  });
  var StyledElement$overscrollBehavior_metadata = new PropertyMetadata('overscrollBehavior');
  Object.defineProperty(StyledElement.prototype, 'overscrollBehavior', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.overscrollBehavior_ns2vmo$_0, StyledElement$overscrollBehavior_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (overscrollBehavior) {
      this.overscrollBehavior_ns2vmo$_0.put_xwzc9p$(StyledElement$overscrollBehavior_metadata.callableName, overscrollBehavior);
    }
  });
  var StyledElement$padding_metadata = new PropertyMetadata('padding');
  Object.defineProperty(StyledElement.prototype, 'padding', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.padding_1erndc$_0, StyledElement$padding_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (padding) {
      this.padding_1erndc$_0.put_xwzc9p$(StyledElement$padding_metadata.callableName, padding);
    }
  });
  var StyledElement$paddingTop_metadata = new PropertyMetadata('paddingTop');
  Object.defineProperty(StyledElement.prototype, 'paddingTop', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.paddingTop_wpf5zj$_0, StyledElement$paddingTop_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (paddingTop) {
      this.paddingTop_wpf5zj$_0.put_xwzc9p$(StyledElement$paddingTop_metadata.callableName, paddingTop);
    }
  });
  var StyledElement$paddingRight_metadata = new PropertyMetadata('paddingRight');
  Object.defineProperty(StyledElement.prototype, 'paddingRight', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.paddingRight_xwju08$_0, StyledElement$paddingRight_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (paddingRight) {
      this.paddingRight_xwju08$_0.put_xwzc9p$(StyledElement$paddingRight_metadata.callableName, paddingRight);
    }
  });
  var StyledElement$paddingBottom_metadata = new PropertyMetadata('paddingBottom');
  Object.defineProperty(StyledElement.prototype, 'paddingBottom', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.paddingBottom_x4zpln$_0, StyledElement$paddingBottom_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (paddingBottom) {
      this.paddingBottom_x4zpln$_0.put_xwzc9p$(StyledElement$paddingBottom_metadata.callableName, paddingBottom);
    }
  });
  var StyledElement$paddingLeft_metadata = new PropertyMetadata('paddingLeft');
  Object.defineProperty(StyledElement.prototype, 'paddingLeft', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.paddingLeft_jbwhc9$_0, StyledElement$paddingLeft_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (paddingLeft) {
      this.paddingLeft_jbwhc9$_0.put_xwzc9p$(StyledElement$paddingLeft_metadata.callableName, paddingLeft);
    }
  });
  var StyledElement$pointerEvents_metadata = new PropertyMetadata('pointerEvents');
  Object.defineProperty(StyledElement.prototype, 'pointerEvents', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.pointerEvents_387511$_0, StyledElement$pointerEvents_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (pointerEvents) {
      this.pointerEvents_387511$_0.put_xwzc9p$(StyledElement$pointerEvents_metadata.callableName, pointerEvents);
    }
  });
  var StyledElement$position_metadata = new PropertyMetadata('position');
  Object.defineProperty(StyledElement.prototype, 'position', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.position_unodoq$_0, StyledElement$position_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (position) {
      this.position_unodoq$_0.put_xwzc9p$(StyledElement$position_metadata.callableName, position);
    }
  });
  var StyledElement$right_metadata = new PropertyMetadata('right');
  Object.defineProperty(StyledElement.prototype, 'right', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.right_5a8lp7$_0, StyledElement$right_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (right) {
      this.right_5a8lp7$_0.put_xwzc9p$(StyledElement$right_metadata.callableName, right);
    }
  });
  var StyledElement$rowGap_metadata = new PropertyMetadata('rowGap');
  Object.defineProperty(StyledElement.prototype, 'rowGap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.rowGap_iopk7d$_0, StyledElement$rowGap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (rowGap) {
      this.rowGap_iopk7d$_0.put_xwzc9p$(StyledElement$rowGap_metadata.callableName, rowGap);
    }
  });
  var StyledElement$scrollBehavior_metadata = new PropertyMetadata('scrollBehavior');
  Object.defineProperty(StyledElement.prototype, 'scrollBehavior', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.scrollBehavior_gmz364$_0, StyledElement$scrollBehavior_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (scrollBehavior) {
      this.scrollBehavior_gmz364$_0.put_xwzc9p$(StyledElement$scrollBehavior_metadata.callableName, scrollBehavior);
    }
  });
  var StyledElement$textAlign_metadata = new PropertyMetadata('textAlign');
  Object.defineProperty(StyledElement.prototype, 'textAlign', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.textAlign_q4h755$_0, StyledElement$textAlign_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (textAlign) {
      this.textAlign_q4h755$_0.put_xwzc9p$(StyledElement$textAlign_metadata.callableName, textAlign);
    }
  });
  var StyledElement$textDecoration_metadata = new PropertyMetadata('textDecoration');
  Object.defineProperty(StyledElement.prototype, 'textDecoration', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.textDecoration_64ihsa$_0, StyledElement$textDecoration_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (textDecoration) {
      this.textDecoration_64ihsa$_0.put_xwzc9p$(StyledElement$textDecoration_metadata.callableName, textDecoration);
    }
  });
  var StyledElement$textOverflow_metadata = new PropertyMetadata('textOverflow');
  Object.defineProperty(StyledElement.prototype, 'textOverflow', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.textOverflow_f1huuc$_0, StyledElement$textOverflow_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (textOverflow) {
      this.textOverflow_f1huuc$_0.put_xwzc9p$(StyledElement$textOverflow_metadata.callableName, textOverflow);
    }
  });
  var StyledElement$textTransform_metadata = new PropertyMetadata('textTransform');
  Object.defineProperty(StyledElement.prototype, 'textTransform', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.textTransform_oinaji$_0, StyledElement$textTransform_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (textTransform) {
      this.textTransform_oinaji$_0.put_xwzc9p$(StyledElement$textTransform_metadata.callableName, textTransform);
    }
  });
  var StyledElement$top_metadata = new PropertyMetadata('top');
  Object.defineProperty(StyledElement.prototype, 'top', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.top_d5h8ss$_0, StyledElement$top_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (top) {
      this.top_d5h8ss$_0.put_xwzc9p$(StyledElement$top_metadata.callableName, top);
    }
  });
  var StyledElement$transform_metadata = new PropertyMetadata('transform');
  Object.defineProperty(StyledElement.prototype, 'transform', {
    get: function () {
      return this.transform_oeyh0r$_0.getValue_t0xcdd$(this, StyledElement$transform_metadata);
    },
    set: function (transform) {
      this.transform_oeyh0r$_0.setValue_809r6s$(this, StyledElement$transform_metadata, transform);
    }
  });
  var StyledElement$transition_metadata = new PropertyMetadata('transition');
  Object.defineProperty(StyledElement.prototype, 'transition', {
    get: function () {
      return this.transition_pya44e$_0.getValue_t0xcdd$(this, StyledElement$transition_metadata);
    },
    set: function (transition) {
      this.transition_pya44e$_0.setValue_809r6s$(this, StyledElement$transition_metadata, transition);
    }
  });
  var StyledElement$verticalAlign_metadata = new PropertyMetadata('verticalAlign');
  Object.defineProperty(StyledElement.prototype, 'verticalAlign', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.verticalAlign_azdc3y$_0, StyledElement$verticalAlign_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (verticalAlign) {
      this.verticalAlign_azdc3y$_0.put_xwzc9p$(StyledElement$verticalAlign_metadata.callableName, verticalAlign);
    }
  });
  var StyledElement$visibility_metadata = new PropertyMetadata('visibility');
  Object.defineProperty(StyledElement.prototype, 'visibility', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.visibility_cn948v$_0, StyledElement$visibility_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (visibility) {
      this.visibility_cn948v$_0.put_xwzc9p$(StyledElement$visibility_metadata.callableName, visibility);
    }
  });
  var StyledElement$whiteSpace_metadata = new PropertyMetadata('whiteSpace');
  Object.defineProperty(StyledElement.prototype, 'whiteSpace', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.whiteSpace_sqw8tm$_0, StyledElement$whiteSpace_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (whiteSpace) {
      this.whiteSpace_sqw8tm$_0.put_xwzc9p$(StyledElement$whiteSpace_metadata.callableName, whiteSpace);
    }
  });
  var StyledElement$width_metadata = new PropertyMetadata('width');
  Object.defineProperty(StyledElement.prototype, 'width', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.width_2x262t$_0, StyledElement$width_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (width) {
      this.width_2x262t$_0.put_xwzc9p$(StyledElement$width_metadata.callableName, width);
    }
  });
  var StyledElement$wordBreak_metadata = new PropertyMetadata('wordBreak');
  Object.defineProperty(StyledElement.prototype, 'wordBreak', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.wordBreak_kjny6k$_0, StyledElement$wordBreak_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (wordBreak) {
      this.wordBreak_kjny6k$_0.put_xwzc9p$(StyledElement$wordBreak_metadata.callableName, wordBreak);
    }
  });
  var StyledElement$wordWrap_metadata = new PropertyMetadata('wordWrap');
  Object.defineProperty(StyledElement.prototype, 'wordWrap', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.wordWrap_h0tf8f$_0, StyledElement$wordWrap_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (wordWrap) {
      this.wordWrap_h0tf8f$_0.put_xwzc9p$(StyledElement$wordWrap_metadata.callableName, wordWrap);
    }
  });
  var StyledElement$userSelect_metadata = new PropertyMetadata('userSelect');
  Object.defineProperty(StyledElement.prototype, 'userSelect', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.userSelect_e7wpjg$_0, StyledElement$userSelect_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (userSelect) {
      this.userSelect_e7wpjg$_0.put_xwzc9p$(StyledElement$userSelect_metadata.callableName, userSelect);
    }
  });
  var StyledElement$tableLayout_metadata = new PropertyMetadata('tableLayout');
  Object.defineProperty(StyledElement.prototype, 'tableLayout', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.tableLayout_v4ft9l$_0, StyledElement$tableLayout_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (tableLayout) {
      this.tableLayout_v4ft9l$_0.put_xwzc9p$(StyledElement$tableLayout_metadata.callableName, tableLayout);
    }
  });
  var StyledElement$borderCollapse_metadata = new PropertyMetadata('borderCollapse');
  Object.defineProperty(StyledElement.prototype, 'borderCollapse', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.borderCollapse_h74sze$_0, StyledElement$borderCollapse_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (borderCollapse) {
      this.borderCollapse_h74sze$_0.put_xwzc9p$(StyledElement$borderCollapse_metadata.callableName, borderCollapse);
    }
  });
  var StyledElement$zIndex_metadata = new PropertyMetadata('zIndex');
  Object.defineProperty(StyledElement.prototype, 'zIndex', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.zIndex_9l7h23$_0, StyledElement$zIndex_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (zIndex) {
      this.zIndex_9l7h23$_0.put_xwzc9p$(StyledElement$zIndex_metadata.callableName, zIndex);
    }
  });
  StyledElement.prototype.put_puj7f4$ = function (key, value) {
    this.declarations.put_xwzc9p$(key, value);
  };
  function StyledElement$animation$lambda() {
    return new Animations();
  }
  function StyledElement$boxShadow$lambda() {
    return new BoxShadows();
  }
  function StyledElement$transform$lambda() {
    return new Transforms();
  }
  function StyledElement$transition$lambda() {
    return new Transitions();
  }
  StyledElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledElement',
    interfaces: []
  };
  function flex($receiver, flexGrow, flexShrink, flexBasis) {
    if (flexGrow === void 0)
      flexGrow = 0.0;
    if (flexShrink === void 0)
      flexShrink = 0.0;
    if (flexBasis === void 0)
      flexBasis = null;
    $receiver.flexGrow = flexGrow;
    $receiver.flexShrink = flexShrink;
    if (flexBasis != null) {
      $receiver.flexBasis = flexBasis;
    }
  }
  function flex_0($receiver, flexGrow, flexShrink, flexBasis) {
    if (flexGrow === void 0)
      flexGrow = 0.0;
    if (flexShrink === void 0)
      flexShrink = 0.0;
    flex($receiver, flexGrow, flexShrink, get_basis(flexBasis));
  }
  function grow$put(this$grow) {
    return function (key, value) {
      this$grow.declarations.put_xwzc9p$(key, value);
    };
  }
  function grow($receiver, grow) {
    switch (grow.name) {
      case 'GROW':
        flex($receiver, 1.0, 0.0);
        break;
      case 'SHRINK':
        flex($receiver, 0.0, 1.0);
        break;
      case 'NONE':
        flex($receiver, 0.0, 0.0);
        break;
      case 'GROW_SHRINK':
        flex($receiver, 1.0, 1.0);
        break;
    }
    var put = grow$put($receiver);
  }
  function getShorthandValue(top, right, bottom, left) {
    var tmp$;
    if (equals(top, bottom) && equals(right, left)) {
      if (equals(top, right)) {
        tmp$ = toString(top);
      }
       else {
        tmp$ = toString(top) + ' ' + toString(right);
      }
    }
     else {
      if (equals(right, left)) {
        tmp$ = toString(top) + ' ' + toString(right) + ' ' + toString(bottom);
      }
       else {
        tmp$ = toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left);
      }
    }
    return tmp$;
  }
  function margin($receiver, top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    if (top != null && right != null && bottom != null && left != null) {
      $receiver.margin = getShorthandValue(top, right, bottom, left);
    }
     else {
      if (top != null) {
        $receiver.marginTop = top;
      }
      if (right != null) {
        $receiver.marginRight = right;
      }
      if (bottom != null) {
        $receiver.marginBottom = bottom;
      }
      if (left != null) {
        $receiver.marginLeft = left;
      }
    }
  }
  function margin_0($receiver, all) {
    margin($receiver, all, all, all, all);
  }
  function margin_1($receiver, vertical, horizontal) {
    if (vertical === void 0)
      vertical = null;
    if (horizontal === void 0)
      horizontal = null;
    margin($receiver, vertical, horizontal, vertical, horizontal);
  }
  function margin_2($receiver, top, right, bottom) {
    margin($receiver, top, right, bottom, right);
  }
  function padding($receiver, top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    if (top != null && right != null && bottom != null && left != null) {
      $receiver.padding = getShorthandValue(top, right, bottom, left);
    }
     else {
      if (top != null) {
        $receiver.paddingTop = top;
      }
      if (right != null) {
        $receiver.paddingRight = right;
      }
      if (bottom != null) {
        $receiver.paddingBottom = bottom;
      }
      if (left != null) {
        $receiver.paddingLeft = left;
      }
    }
  }
  function padding_0($receiver, all) {
    padding($receiver, all, all, all, all);
  }
  function padding_1($receiver, vertical, horizontal) {
    if (vertical === void 0)
      vertical = null;
    if (horizontal === void 0)
      horizontal = null;
    padding($receiver, vertical, horizontal, vertical, horizontal);
  }
  function padding_2($receiver, top, right, bottom) {
    padding($receiver, top, right, bottom, right);
  }
  function TagSelector(tagName) {
    this.tagName = tagName;
  }
  TagSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSelector',
    interfaces: []
  };
  function get_a() {
    return new TagSelector('a');
  }
  function get_abbr() {
    return new TagSelector('abbr');
  }
  function get_area() {
    return new TagSelector('area');
  }
  function get_address() {
    return new TagSelector('address');
  }
  function get_article() {
    return new TagSelector('article');
  }
  function get_aside() {
    return new TagSelector('aside');
  }
  function get_audio() {
    return new TagSelector('audio');
  }
  function get_b() {
    return new TagSelector('b');
  }
  function get_bdi() {
    return new TagSelector('bdi');
  }
  function get_blockquote() {
    return new TagSelector('blockquote');
  }
  function get_bdo() {
    return new TagSelector('bdo');
  }
  function get_body() {
    return new TagSelector('body');
  }
  function get_br() {
    return new TagSelector('br');
  }
  function get_button() {
    return new TagSelector('button');
  }
  function get_canvas() {
    return new TagSelector('canvas');
  }
  function get_cite() {
    return new TagSelector('cite');
  }
  function get_code() {
    return new TagSelector('code');
  }
  function get_command() {
    return new TagSelector('command');
  }
  function get_datalist() {
    return new TagSelector('datalist');
  }
  function get_del() {
    return new TagSelector('del');
  }
  function get_details() {
    return new TagSelector('details');
  }
  function get_dfn() {
    return new TagSelector('dfn');
  }
  function get_dialog() {
    return new TagSelector('dialog');
  }
  function get_div() {
    return new TagSelector('div');
  }
  function get_dl() {
    return new TagSelector('dl');
  }
  function get_em_0() {
    return new TagSelector('em');
  }
  function get_embed() {
    return new TagSelector('embed');
  }
  function get_fieldset() {
    return new TagSelector('fieldset');
  }
  function get_figure() {
    return new TagSelector('figure');
  }
  function get_figcaption() {
    return new TagSelector('figcaption');
  }
  function get_footer() {
    return new TagSelector('footer');
  }
  function get_form() {
    return new TagSelector('form');
  }
  function get_h1() {
    return new TagSelector('h1');
  }
  function get_h2() {
    return new TagSelector('h2');
  }
  function get_h3() {
    return new TagSelector('h3');
  }
  function get_h4() {
    return new TagSelector('h4');
  }
  function get_h5() {
    return new TagSelector('h5');
  }
  function get_h6() {
    return new TagSelector('h6');
  }
  function get_header() {
    return new TagSelector('header');
  }
  function get_hgroup() {
    return new TagSelector('hgroup');
  }
  function get_hr() {
    return new TagSelector('hr');
  }
  function get_html() {
    return new TagSelector('html');
  }
  function get_i() {
    return new TagSelector('i');
  }
  function get_iframe() {
    return new TagSelector('iframe');
  }
  function get_img() {
    return new TagSelector('img');
  }
  function get_input() {
    return new TagSelector('input');
  }
  function get_ins() {
    return new TagSelector('ins');
  }
  function get_kbd() {
    return new TagSelector('kbd');
  }
  function get_keygen() {
    return new TagSelector('keygen');
  }
  function get_label() {
    return new TagSelector('label');
  }
  function get_link() {
    return new TagSelector('link');
  }
  function get_map() {
    return new TagSelector('map');
  }
  function get_mark() {
    return new TagSelector('mark');
  }
  function get_math() {
    return new TagSelector('math');
  }
  function get_menu() {
    return new TagSelector('menu');
  }
  function get_meta() {
    return new TagSelector('meta');
  }
  function get_meter() {
    return new TagSelector('meter');
  }
  function get_nav() {
    return new TagSelector('nav');
  }
  function get_noscript() {
    return new TagSelector('noscript');
  }
  function get_ol() {
    return new TagSelector('ol');
  }
  function get_objectTag() {
    return new TagSelector('object');
  }
  function get_output() {
    return new TagSelector('output');
  }
  function get_p() {
    return new TagSelector('p');
  }
  function get_pre() {
    return new TagSelector('pre');
  }
  function get_progress() {
    return new TagSelector('progress');
  }
  function get_q() {
    return new TagSelector('q');
  }
  function get_ruby() {
    return new TagSelector('ruby');
  }
  function get_samp() {
    return new TagSelector('samp');
  }
  function get_script() {
    return new TagSelector('script');
  }
  function get_section() {
    return new TagSelector('section');
  }
  function get_select() {
    return new TagSelector('select');
  }
  function get_small() {
    return new TagSelector('small');
  }
  function get_span() {
    return new TagSelector('span');
  }
  function get_strong() {
    return new TagSelector('strong');
  }
  function get_style() {
    return new TagSelector('style');
  }
  function get_sub() {
    return new TagSelector('sub');
  }
  function get_sup() {
    return new TagSelector('sup');
  }
  function get_svg() {
    return new TagSelector('svg');
  }
  function get_table() {
    return new TagSelector('table');
  }
  function get_textarea() {
    return new TagSelector('textarea');
  }
  function get_time() {
    return new TagSelector('time');
  }
  function get_ul() {
    return new TagSelector('ul');
  }
  function get_varTag() {
    return new TagSelector('var');
  }
  function get_video() {
    return new TagSelector('video');
  }
  function IterationCount(value) {
    IterationCount$Companion_getInstance();
    CssValue.call(this, value);
    this.value_s4rj7w$_0 = value;
  }
  Object.defineProperty(IterationCount.prototype, 'value', {
    get: function () {
      return this.value_s4rj7w$_0;
    }
  });
  function IterationCount$Companion() {
    IterationCount$Companion_instance = this;
    this.infinite = new IterationCount('infinite');
  }
  IterationCount$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IterationCount$Companion_instance = null;
  function IterationCount$Companion_getInstance() {
    if (IterationCount$Companion_instance === null) {
      new IterationCount$Companion();
    }
    return IterationCount$Companion_instance;
  }
  IterationCount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterationCount',
    interfaces: [CssValue]
  };
  function get_times($receiver) {
    return new IterationCount($receiver.toString());
  }
  function AnimationDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationDirection_initFields() {
    AnimationDirection_initFields = function () {
    };
    AnimationDirection$initial_instance = new AnimationDirection('initial', 0);
    AnimationDirection$inherit_instance = new AnimationDirection('inherit', 1);
    AnimationDirection$unset_instance = new AnimationDirection('unset', 2);
    AnimationDirection$normal_instance = new AnimationDirection('normal', 3);
    AnimationDirection$reverse_instance = new AnimationDirection('reverse', 4);
    AnimationDirection$alternate_instance = new AnimationDirection('alternate', 5);
    AnimationDirection$alternateReverse_instance = new AnimationDirection('alternateReverse', 6);
  }
  var AnimationDirection$initial_instance;
  function AnimationDirection$initial_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$initial_instance;
  }
  var AnimationDirection$inherit_instance;
  function AnimationDirection$inherit_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$inherit_instance;
  }
  var AnimationDirection$unset_instance;
  function AnimationDirection$unset_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$unset_instance;
  }
  var AnimationDirection$normal_instance;
  function AnimationDirection$normal_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$normal_instance;
  }
  var AnimationDirection$reverse_instance;
  function AnimationDirection$reverse_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$reverse_instance;
  }
  var AnimationDirection$alternate_instance;
  function AnimationDirection$alternate_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$alternate_instance;
  }
  var AnimationDirection$alternateReverse_instance;
  function AnimationDirection$alternateReverse_getInstance() {
    AnimationDirection_initFields();
    return AnimationDirection$alternateReverse_instance;
  }
  AnimationDirection.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  AnimationDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationDirection',
    interfaces: [Enum]
  };
  function AnimationDirection$values() {
    return [AnimationDirection$initial_getInstance(), AnimationDirection$inherit_getInstance(), AnimationDirection$unset_getInstance(), AnimationDirection$normal_getInstance(), AnimationDirection$reverse_getInstance(), AnimationDirection$alternate_getInstance(), AnimationDirection$alternateReverse_getInstance()];
  }
  AnimationDirection.values = AnimationDirection$values;
  function AnimationDirection$valueOf(name) {
    switch (name) {
      case 'initial':
        return AnimationDirection$initial_getInstance();
      case 'inherit':
        return AnimationDirection$inherit_getInstance();
      case 'unset':
        return AnimationDirection$unset_getInstance();
      case 'normal':
        return AnimationDirection$normal_getInstance();
      case 'reverse':
        return AnimationDirection$reverse_getInstance();
      case 'alternate':
        return AnimationDirection$alternate_getInstance();
      case 'alternateReverse':
        return AnimationDirection$alternateReverse_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.AnimationDirection.' + name);
    }
  }
  AnimationDirection.valueOf_61zpoe$ = AnimationDirection$valueOf;
  function FillMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FillMode_initFields() {
    FillMode_initFields = function () {
    };
    FillMode$initial_instance = new FillMode('initial', 0);
    FillMode$inherit_instance = new FillMode('inherit', 1);
    FillMode$unset_instance = new FillMode('unset', 2);
    FillMode$none_instance = new FillMode('none', 3);
    FillMode$forwards_instance = new FillMode('forwards', 4);
    FillMode$backwards_instance = new FillMode('backwards', 5);
    FillMode$both_instance = new FillMode('both', 6);
  }
  var FillMode$initial_instance;
  function FillMode$initial_getInstance() {
    FillMode_initFields();
    return FillMode$initial_instance;
  }
  var FillMode$inherit_instance;
  function FillMode$inherit_getInstance() {
    FillMode_initFields();
    return FillMode$inherit_instance;
  }
  var FillMode$unset_instance;
  function FillMode$unset_getInstance() {
    FillMode_initFields();
    return FillMode$unset_instance;
  }
  var FillMode$none_instance;
  function FillMode$none_getInstance() {
    FillMode_initFields();
    return FillMode$none_instance;
  }
  var FillMode$forwards_instance;
  function FillMode$forwards_getInstance() {
    FillMode_initFields();
    return FillMode$forwards_instance;
  }
  var FillMode$backwards_instance;
  function FillMode$backwards_getInstance() {
    FillMode_initFields();
    return FillMode$backwards_instance;
  }
  var FillMode$both_instance;
  function FillMode$both_getInstance() {
    FillMode_initFields();
    return FillMode$both_instance;
  }
  FillMode.prototype.toString = function () {
    return this.name;
  };
  FillMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillMode',
    interfaces: [Enum]
  };
  function FillMode$values() {
    return [FillMode$initial_getInstance(), FillMode$inherit_getInstance(), FillMode$unset_getInstance(), FillMode$none_getInstance(), FillMode$forwards_getInstance(), FillMode$backwards_getInstance(), FillMode$both_getInstance()];
  }
  FillMode.values = FillMode$values;
  function FillMode$valueOf(name) {
    switch (name) {
      case 'initial':
        return FillMode$initial_getInstance();
      case 'inherit':
        return FillMode$inherit_getInstance();
      case 'unset':
        return FillMode$unset_getInstance();
      case 'none':
        return FillMode$none_getInstance();
      case 'forwards':
        return FillMode$forwards_getInstance();
      case 'backwards':
        return FillMode$backwards_getInstance();
      case 'both':
        return FillMode$both_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.FillMode.' + name);
    }
  }
  FillMode.valueOf_61zpoe$ = FillMode$valueOf;
  function PlayState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PlayState_initFields() {
    PlayState_initFields = function () {
    };
    PlayState$initial_instance = new PlayState('initial', 0);
    PlayState$inherit_instance = new PlayState('inherit', 1);
    PlayState$unset_instance = new PlayState('unset', 2);
    PlayState$running_instance = new PlayState('running', 3);
    PlayState$paused_instance = new PlayState('paused', 4);
  }
  var PlayState$initial_instance;
  function PlayState$initial_getInstance() {
    PlayState_initFields();
    return PlayState$initial_instance;
  }
  var PlayState$inherit_instance;
  function PlayState$inherit_getInstance() {
    PlayState_initFields();
    return PlayState$inherit_instance;
  }
  var PlayState$unset_instance;
  function PlayState$unset_getInstance() {
    PlayState_initFields();
    return PlayState$unset_instance;
  }
  var PlayState$running_instance;
  function PlayState$running_getInstance() {
    PlayState_initFields();
    return PlayState$running_instance;
  }
  var PlayState$paused_instance;
  function PlayState$paused_getInstance() {
    PlayState_initFields();
    return PlayState$paused_instance;
  }
  PlayState.prototype.toString = function () {
    return this.name;
  };
  PlayState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayState',
    interfaces: [Enum]
  };
  function PlayState$values() {
    return [PlayState$initial_getInstance(), PlayState$inherit_getInstance(), PlayState$unset_getInstance(), PlayState$running_getInstance(), PlayState$paused_getInstance()];
  }
  PlayState.values = PlayState$values;
  function PlayState$valueOf(name) {
    switch (name) {
      case 'initial':
        return PlayState$initial_getInstance();
      case 'inherit':
        return PlayState$inherit_getInstance();
      case 'unset':
        return PlayState$unset_getInstance();
      case 'running':
        return PlayState$running_getInstance();
      case 'paused':
        return PlayState$paused_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.PlayState.' + name);
    }
  }
  PlayState.valueOf_61zpoe$ = PlayState$valueOf;
  function Animation(duration, timing, delay, iterationCount, direction, fillMode, playState, name) {
    this.duration = duration;
    this.timing_0 = timing;
    this.delay_0 = delay;
    this.iterationCount_0 = iterationCount;
    this.direction_0 = direction;
    this.fillMode_0 = fillMode;
    this.playState_0 = playState;
    this.name = name;
  }
  Animation.prototype.toString = function () {
    return this.duration.toString() + ' ' + this.timing_0 + ' ' + this.delay_0 + ' ' + this.iterationCount_0 + ' ' + this.direction_0 + ' ' + this.fillMode_0 + ' ' + this.playState_0 + ' ' + this.name;
  };
  Animation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animation',
    interfaces: []
  };
  function Animations() {
    Animations$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Animations$Companion() {
    Animations$Companion_instance = this;
    this.none = new Animations();
  }
  Animations$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Animations$Companion_instance = null;
  function Animations$Companion_getInstance() {
    if (Animations$Companion_instance === null) {
      new Animations$Companion();
    }
    return Animations$Companion_instance;
  }
  Animations.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animations',
    interfaces: [StyleList]
  };
  function animation($receiver, name, duration, timing, delay, iterationCount, direction, fillMode, playState) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().ease;
    if (delay === void 0)
      delay = get_s(0);
    if (iterationCount === void 0)
      iterationCount = get_times(1);
    if (direction === void 0)
      direction = AnimationDirection$normal_getInstance();
    if (fillMode === void 0)
      fillMode = FillMode$none_getInstance();
    if (playState === void 0)
      playState = PlayState$running_getInstance();
    $receiver.animation.plusAssign_11rb$(new Animation(duration, timing, delay, iterationCount, direction, fillMode, playState, name));
  }
  function border($receiver, width, style, color) {
    $receiver.border = width.toString() + ' ' + style + ' ' + color;
  }
  function borderTop($receiver, width, style, color) {
    $receiver.borderTop = width.toString() + ' ' + style + ' ' + color;
  }
  function borderRight($receiver, width, style, color) {
    $receiver.borderRight = width.toString() + ' ' + style + ' ' + color;
  }
  function borderBottom($receiver, width, style, color) {
    $receiver.borderBottom = width.toString() + ' ' + style + ' ' + color;
  }
  function borderLeft($receiver, width, style, color) {
    $receiver.borderLeft = width.toString() + ' ' + style + ' ' + color;
  }
  function BoxShadow(inset, offsetX, offsetY, blurRadius, spreadRadius, color) {
    this.inset_0 = inset;
    this.offsetX_0 = offsetX;
    this.offsetY_0 = offsetY;
    this.blurRadius_0 = blurRadius;
    this.spreadRadius_0 = spreadRadius;
    this.color = color;
  }
  BoxShadow.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    if (this.inset_0)
      $receiver.append_gw00v9$('inset ');
    $receiver.append_gw00v9$(this.offsetX_0.toString() + ' ' + this.offsetY_0 + ' ' + this.blurRadius_0 + ' ' + this.spreadRadius_0 + ' ' + this.color);
    return $receiver.toString();
  };
  BoxShadow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxShadow',
    interfaces: []
  };
  function BoxShadows() {
    BoxShadows$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function BoxShadows$Companion() {
    BoxShadows$Companion_instance = this;
    this.none = new BoxShadows();
  }
  BoxShadows$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BoxShadows$Companion_instance = null;
  function BoxShadows$Companion_getInstance() {
    if (BoxShadows$Companion_instance === null) {
      new BoxShadows$Companion();
    }
    return BoxShadows$Companion_instance;
  }
  BoxShadows.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxShadows',
    interfaces: [StyleList]
  };
  function boxShadow($receiver, color, offsetX, offsetY, blurRadius, spreadRadius) {
    if (offsetX === void 0)
      offsetX = get_px(0);
    if (offsetY === void 0)
      offsetY = get_px(0);
    if (blurRadius === void 0)
      blurRadius = get_px(0);
    if (spreadRadius === void 0)
      spreadRadius = get_px(0);
    $receiver.boxShadow.plusAssign_11rb$(new BoxShadow(false, offsetX, offsetY, blurRadius, spreadRadius, color));
  }
  function boxShadowInset($receiver, color, offsetX, offsetY, blurRadius, spreadRadius) {
    if (offsetX === void 0)
      offsetX = get_px(0);
    if (offsetY === void 0)
      offsetY = get_px(0);
    if (blurRadius === void 0)
      blurRadius = get_px(0);
    if (spreadRadius === void 0)
      spreadRadius = get_px(0);
    $receiver.boxShadow.plusAssign_11rb$(new BoxShadow(true, offsetX, offsetY, blurRadius, spreadRadius, color));
  }
  function KeyframesBuilder(indent) {
    if (indent === void 0)
      indent = '';
    this.indent_0 = indent;
    this.rules_pc3mle$_0 = ArrayList_init();
  }
  KeyframesBuilder.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    this.buildRules_s47sd7$($receiver, this.indent_0);
    return $receiver.toString();
  };
  Object.defineProperty(KeyframesBuilder.prototype, 'rules', {
    get: function () {
      return this.rules_pc3mle$_0;
    }
  });
  KeyframesBuilder.prototype.from_sa4rfh$ = function (block) {
    return this.rule_xk38i9$('from', block);
  };
  KeyframesBuilder.prototype.to_sa4rfh$ = function (block) {
    return this.rule_xk38i9$('to', block);
  };
  KeyframesBuilder.prototype.invoke_noz8fk$ = function ($receiver, block) {
    return this.rule_xk38i9$($receiver.toString() + '%', block);
  };
  KeyframesBuilder.prototype.invoke_3biwx8$ = function ($receiver, block) {
    return this.rule_xk38i9$($receiver.toString() + '%', block);
  };
  KeyframesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyframesBuilder',
    interfaces: [RuleContainer]
  };
  function LineHeight(value) {
    LineHeight$Companion_getInstance();
    CssValue.call(this, value);
    this.value_p94ztv$_0 = value;
  }
  Object.defineProperty(LineHeight.prototype, 'value', {
    get: function () {
      return this.value_p94ztv$_0;
    }
  });
  function LineHeight$Companion() {
    LineHeight$Companion_instance = this;
    this.normal = new LineHeight('normal');
    this.initial = new LineHeight('initial');
    this.inherit = new LineHeight('inherit');
  }
  LineHeight$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LineHeight$Companion_instance = null;
  function LineHeight$Companion_getInstance() {
    if (LineHeight$Companion_instance === null) {
      new LineHeight$Companion();
    }
    return LineHeight$Companion_instance;
  }
  LineHeight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineHeight',
    interfaces: [CssValue]
  };
  function get_lh($receiver) {
    return new LineHeight($receiver.value);
  }
  function TextDecorationLine(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextDecorationLine_initFields() {
    TextDecorationLine_initFields = function () {
    };
    TextDecorationLine$initial_instance = new TextDecorationLine('initial', 0);
    TextDecorationLine$inherit_instance = new TextDecorationLine('inherit', 1);
    TextDecorationLine$unset_instance = new TextDecorationLine('unset', 2);
    TextDecorationLine$underline_instance = new TextDecorationLine('underline', 3);
    TextDecorationLine$overline_instance = new TextDecorationLine('overline', 4);
    TextDecorationLine$lineThrough_instance = new TextDecorationLine('lineThrough', 5);
  }
  var TextDecorationLine$initial_instance;
  function TextDecorationLine$initial_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$initial_instance;
  }
  var TextDecorationLine$inherit_instance;
  function TextDecorationLine$inherit_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$inherit_instance;
  }
  var TextDecorationLine$unset_instance;
  function TextDecorationLine$unset_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$unset_instance;
  }
  var TextDecorationLine$underline_instance;
  function TextDecorationLine$underline_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$underline_instance;
  }
  var TextDecorationLine$overline_instance;
  function TextDecorationLine$overline_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$overline_instance;
  }
  var TextDecorationLine$lineThrough_instance;
  function TextDecorationLine$lineThrough_getInstance() {
    TextDecorationLine_initFields();
    return TextDecorationLine$lineThrough_instance;
  }
  TextDecorationLine.prototype.toString = function () {
    return hyphenize_0(this.name);
  };
  TextDecorationLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDecorationLine',
    interfaces: [Enum]
  };
  function TextDecorationLine$values() {
    return [TextDecorationLine$initial_getInstance(), TextDecorationLine$inherit_getInstance(), TextDecorationLine$unset_getInstance(), TextDecorationLine$underline_getInstance(), TextDecorationLine$overline_getInstance(), TextDecorationLine$lineThrough_getInstance()];
  }
  TextDecorationLine.values = TextDecorationLine$values;
  function TextDecorationLine$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextDecorationLine$initial_getInstance();
      case 'inherit':
        return TextDecorationLine$inherit_getInstance();
      case 'unset':
        return TextDecorationLine$unset_getInstance();
      case 'underline':
        return TextDecorationLine$underline_getInstance();
      case 'overline':
        return TextDecorationLine$overline_getInstance();
      case 'lineThrough':
        return TextDecorationLine$lineThrough_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.TextDecorationLine.' + name);
    }
  }
  TextDecorationLine.valueOf_61zpoe$ = TextDecorationLine$valueOf;
  function TextDecoration(lines, style, color) {
    TextDecoration$Companion_getInstance();
    if (style === void 0)
      style = null;
    if (color === void 0)
      color = null;
    this.lines_0 = lines;
    this.style = style;
    this.color = color;
  }
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function TextDecoration$Companion() {
    TextDecoration$Companion_instance = this;
    this.none = new TextDecoration(emptySet());
  }
  TextDecoration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextDecoration$Companion_instance = null;
  function TextDecoration$Companion_getInstance() {
    if (TextDecoration$Companion_instance === null) {
      new TextDecoration$Companion();
    }
    return TextDecoration$Companion_instance;
  }
  TextDecoration.prototype.toString = function () {
    if (this.lines_0.isEmpty())
      return 'none';
    else {
      var $receiver = StringBuilder_init();
      var tmp$, tmp$_0;
      $receiver.append_gw00v9$(joinToString_0(this.lines_0, ' '));
      if ((tmp$ = this.style) != null) {
        $receiver.append_gw00v9$(' ' + tmp$);
      }
      if ((tmp$_0 = this.color) != null) {
        $receiver.append_gw00v9$(' ' + tmp$_0);
      }
      return $receiver.toString();
    }
  };
  TextDecoration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDecoration',
    interfaces: []
  };
  function TextDecorationStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextDecorationStyle_initFields() {
    TextDecorationStyle_initFields = function () {
    };
    TextDecorationStyle$initial_instance = new TextDecorationStyle('initial', 0);
    TextDecorationStyle$inherit_instance = new TextDecorationStyle('inherit', 1);
    TextDecorationStyle$unset_instance = new TextDecorationStyle('unset', 2);
    TextDecorationStyle$solid_instance = new TextDecorationStyle('solid', 3);
    TextDecorationStyle$double_instance = new TextDecorationStyle('double', 4);
    TextDecorationStyle$dotted_instance = new TextDecorationStyle('dotted', 5);
    TextDecorationStyle$dashed_instance = new TextDecorationStyle('dashed', 6);
    TextDecorationStyle$wavy_instance = new TextDecorationStyle('wavy', 7);
  }
  var TextDecorationStyle$initial_instance;
  function TextDecorationStyle$initial_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$initial_instance;
  }
  var TextDecorationStyle$inherit_instance;
  function TextDecorationStyle$inherit_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$inherit_instance;
  }
  var TextDecorationStyle$unset_instance;
  function TextDecorationStyle$unset_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$unset_instance;
  }
  var TextDecorationStyle$solid_instance;
  function TextDecorationStyle$solid_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$solid_instance;
  }
  var TextDecorationStyle$double_instance;
  function TextDecorationStyle$double_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$double_instance;
  }
  var TextDecorationStyle$dotted_instance;
  function TextDecorationStyle$dotted_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$dotted_instance;
  }
  var TextDecorationStyle$dashed_instance;
  function TextDecorationStyle$dashed_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$dashed_instance;
  }
  var TextDecorationStyle$wavy_instance;
  function TextDecorationStyle$wavy_getInstance() {
    TextDecorationStyle_initFields();
    return TextDecorationStyle$wavy_instance;
  }
  TextDecorationStyle.prototype.toString = function () {
    return this.name;
  };
  TextDecorationStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDecorationStyle',
    interfaces: [Enum]
  };
  function TextDecorationStyle$values() {
    return [TextDecorationStyle$initial_getInstance(), TextDecorationStyle$inherit_getInstance(), TextDecorationStyle$unset_getInstance(), TextDecorationStyle$solid_getInstance(), TextDecorationStyle$double_getInstance(), TextDecorationStyle$dotted_getInstance(), TextDecorationStyle$dashed_getInstance(), TextDecorationStyle$wavy_getInstance()];
  }
  TextDecorationStyle.values = TextDecorationStyle$values;
  function TextDecorationStyle$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextDecorationStyle$initial_getInstance();
      case 'inherit':
        return TextDecorationStyle$inherit_getInstance();
      case 'unset':
        return TextDecorationStyle$unset_getInstance();
      case 'solid':
        return TextDecorationStyle$solid_getInstance();
      case 'double':
        return TextDecorationStyle$double_getInstance();
      case 'dotted':
        return TextDecorationStyle$dotted_getInstance();
      case 'dashed':
        return TextDecorationStyle$dashed_getInstance();
      case 'wavy':
        return TextDecorationStyle$wavy_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.TextDecorationStyle.' + name);
    }
  }
  TextDecorationStyle.valueOf_61zpoe$ = TextDecorationStyle$valueOf;
  function textDecoration($receiver, lines, style, color) {
    if (style === void 0)
      style = null;
    if (color === void 0)
      color = null;
    $receiver.textDecoration = new TextDecoration(toSet(lines), style, color);
  }
  function Time(value) {
    CssValue.call(this, value);
    this.value_1ggx5d$_0 = value;
  }
  Object.defineProperty(Time.prototype, 'value', {
    get: function () {
      return this.value_1ggx5d$_0;
    }
  });
  Time.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Time',
    interfaces: [CssValue]
  };
  function get_s($receiver) {
    return new Time($receiver.toString() + 's');
  }
  function get_ms($receiver) {
    return new Time($receiver.toString() + 'ms');
  }
  function Timing(value) {
    Timing$Companion_getInstance();
    CssValue.call(this, value);
    this.value_2u9fqs$_0 = value;
  }
  Object.defineProperty(Timing.prototype, 'value', {
    get: function () {
      return this.value_2u9fqs$_0;
    }
  });
  function Timing$Companion() {
    Timing$Companion_instance = this;
    this.ease = new Timing('ease');
    this.linear = new Timing('linear');
    this.easeIn = new Timing('ease-in');
    this.easeOut = new Timing('ease-out');
    this.easeInOut = new Timing('ease-in-out');
    this.stepStart = new Timing('step-start');
    this.stepEnd = new Timing('step-end');
    this.materialStandard = cubicBezier(0.4, 0.0, 0.2, 1.0);
    this.materialDeceleration = cubicBezier(0.0, 0.0, 0.2, 1.0);
    this.materialAcceleration = cubicBezier(0.4, 0.0, 1.0, 1.0);
    this.materialSharp = cubicBezier(0.4, 0.0, 0.6, 1.0);
  }
  Timing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Timing$Companion_instance = null;
  function Timing$Companion_getInstance() {
    if (Timing$Companion_instance === null) {
      new Timing$Companion();
    }
    return Timing$Companion_instance;
  }
  Timing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timing',
    interfaces: [CssValue]
  };
  function cubicBezier(x1, y1, x2, y2) {
    return new Timing('cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')');
  }
  function TransitionDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TransitionDirection_initFields() {
    TransitionDirection_initFields = function () {
    };
    TransitionDirection$initial_instance = new TransitionDirection('initial', 0);
    TransitionDirection$inherit_instance = new TransitionDirection('inherit', 1);
    TransitionDirection$unset_instance = new TransitionDirection('unset', 2);
    TransitionDirection$start_instance = new TransitionDirection('start', 3);
    TransitionDirection$end_instance = new TransitionDirection('end', 4);
  }
  var TransitionDirection$initial_instance;
  function TransitionDirection$initial_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$initial_instance;
  }
  var TransitionDirection$inherit_instance;
  function TransitionDirection$inherit_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$inherit_instance;
  }
  var TransitionDirection$unset_instance;
  function TransitionDirection$unset_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$unset_instance;
  }
  var TransitionDirection$start_instance;
  function TransitionDirection$start_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$start_instance;
  }
  var TransitionDirection$end_instance;
  function TransitionDirection$end_getInstance() {
    TransitionDirection_initFields();
    return TransitionDirection$end_instance;
  }
  TransitionDirection.prototype.toString = function () {
    return this.name;
  };
  TransitionDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionDirection',
    interfaces: [Enum]
  };
  function TransitionDirection$values() {
    return [TransitionDirection$initial_getInstance(), TransitionDirection$inherit_getInstance(), TransitionDirection$unset_getInstance(), TransitionDirection$start_getInstance(), TransitionDirection$end_getInstance()];
  }
  TransitionDirection.values = TransitionDirection$values;
  function TransitionDirection$valueOf(name) {
    switch (name) {
      case 'initial':
        return TransitionDirection$initial_getInstance();
      case 'inherit':
        return TransitionDirection$inherit_getInstance();
      case 'unset':
        return TransitionDirection$unset_getInstance();
      case 'start':
        return TransitionDirection$start_getInstance();
      case 'end':
        return TransitionDirection$end_getInstance();
      default:throwISE('No enum constant kotlinx.css.properties.TransitionDirection.' + name);
    }
  }
  TransitionDirection.valueOf_61zpoe$ = TransitionDirection$valueOf;
  function steps($receiver, number, direction) {
    if (direction === void 0)
      direction = TransitionDirection$end_getInstance();
    return new Timing('steps(' + number + ', ' + direction + ')');
  }
  function cubicBezier_0($receiver, x1, y1, x2, y2) {
    return new Timing('cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')');
  }
  function Angle(value) {
    CssValue.call(this, value);
    this.value_8kj23n$_0 = value;
  }
  Object.defineProperty(Angle.prototype, 'value', {
    get: function () {
      return this.value_8kj23n$_0;
    }
  });
  Angle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Angle',
    interfaces: [CssValue]
  };
  function get_deg($receiver) {
    return new Angle($receiver.toString() + 'deg');
  }
  function get_grad($receiver) {
    return new Angle($receiver.toString() + 'grad');
  }
  function get_rad($receiver) {
    return new Angle($receiver.toString() + 'rad');
  }
  function get_turn($receiver) {
    return new Angle($receiver.toString() + 'turn');
  }
  function Transform(name, args) {
    this.name = name;
    this.args_0 = args;
  }
  Transform.prototype.toString = function () {
    return this.name + '(' + joinToString(this.args_0, ', ') + ')';
  };
  Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: []
  };
  function Transforms() {
    Transforms$Companion_getInstance();
    StyleList.call(this, ' ');
  }
  function Transforms$Companion() {
    Transforms$Companion_instance = this;
    this.none = new Transforms();
  }
  Transforms$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transforms$Companion_instance = null;
  function Transforms$Companion_getInstance() {
    if (Transforms$Companion_instance === null) {
      new Transforms$Companion();
    }
    return Transforms$Companion_instance;
  }
  Transforms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transforms',
    interfaces: [StyleList]
  };
  function transform($receiver, builder) {
    builder($receiver.transform);
  }
  function add($receiver, name, args) {
    $receiver.plusAssign_11rb$(new Transform(name, args));
  }
  function matrix($receiver, a, b, c, d, tx, ty) {
    add($receiver, 'matrix', [a, b, c, d, tx, ty]);
  }
  function matrix3d($receiver, a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    add($receiver, 'matrix3d', [a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4]);
  }
  function translate($receiver, tx, ty) {
    if (ty === void 0)
      ty = get_px(0);
    add($receiver, 'translate', [tx, ty]);
  }
  function translateX($receiver, t) {
    add($receiver, 'translateX', [t]);
  }
  function translateY($receiver, t) {
    add($receiver, 'translateY', [t]);
  }
  function translate3d($receiver, tx, ty, tz) {
    add($receiver, 'translate3d', [tx, ty, tz]);
  }
  function translateZ($receiver, t) {
    add($receiver, 'translateZ', [t]);
  }
  function scale($receiver, sx, sy) {
    add($receiver, 'scale', [sx, sy]);
  }
  function scale_0($receiver, s) {
    add($receiver, 'scale', [s]);
  }
  function scaleX($receiver, s) {
    add($receiver, 'scaleX', [s]);
  }
  function scaleY($receiver, s) {
    add($receiver, 'scaleY', [s]);
  }
  function scale3d($receiver, sx, sy, sz) {
    add($receiver, 'scale3d', [sx, sy, sz]);
  }
  function scaleZ($receiver, s) {
    add($receiver, 'scaleZ', [s]);
  }
  function rotate($receiver, a) {
    add($receiver, 'rotate', [a]);
  }
  function rotate3d($receiver, x, y, z, a) {
    add($receiver, 'rotate3d', [x, y, z, a]);
  }
  function rotateX($receiver, a) {
    add($receiver, 'rotateX', [a]);
  }
  function rotateY($receiver, a) {
    add($receiver, 'rotateY', [a]);
  }
  function rotateZ($receiver, a) {
    add($receiver, 'rotateZ', [a]);
  }
  function skew($receiver, ax, ay) {
    if (ay === void 0)
      ay = get_deg(0);
    add($receiver, 'skew', [ax, ay]);
  }
  function skewX($receiver, a) {
    add($receiver, 'skewX', [a]);
  }
  function skewY($receiver, a) {
    add($receiver, 'skewY', [a]);
  }
  function perspective($receiver, l) {
    add($receiver, 'perspective', [l]);
  }
  function Transition(property, duration, timing, delay) {
    this.property = property;
    this.duration = duration;
    this.timing_0 = timing;
    this.delay_0 = delay;
  }
  Transition.prototype.toString = function () {
    return this.property + ' ' + this.duration + ' ' + this.timing_0 + ' ' + this.delay_0;
  };
  Transition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transition',
    interfaces: []
  };
  function Transitions() {
    Transitions$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Transitions$Companion() {
    Transitions$Companion_instance = this;
    this.none = new Transitions();
  }
  Transitions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transitions$Companion_instance = null;
  function Transitions$Companion_getInstance() {
    if (Transitions$Companion_instance === null) {
      new Transitions$Companion();
    }
    return Transitions$Companion_instance;
  }
  Transitions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transitions',
    interfaces: [StyleList]
  };
  function transition($receiver, property, duration, timing, delay) {
    if (property === void 0)
      property = 'all';
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().ease;
    if (delay === void 0)
      delay = get_s(0);
    $receiver.transition.plusAssign_11rb$(new Transition(property, duration, timing, delay));
  }
  function transition_0($receiver, property, duration, timing, delay) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().ease;
    if (delay === void 0)
      delay = get_s(0);
    transition($receiver, hyphenize_0(property.callableName), duration, timing, delay);
  }
  function delayUnhover$lambda(closure$properties, closure$duration, closure$timing, closure$delay) {
    return function ($receiver) {
      if (!(closure$properties.length === 0)) {
        var $receiver_0 = closure$properties;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          transition_0($receiver, element, closure$duration, closure$timing, closure$delay);
        }
      }
       else
        transition($receiver, 'all', closure$duration, closure$timing, closure$delay);
      return Unit;
    };
  }
  function delayUnhover($receiver, properties, duration, timing, delay) {
    if (duration === void 0)
      duration = get_ms(300);
    if (timing === void 0)
      timing = Timing$Companion_getInstance().materialDeceleration;
    if (delay === void 0)
      delay = get_s(0);
    $receiver.not_v2gpjl$($receiver.hover_sa4rfh$(delayUnhover$lambda(properties, duration, timing, delay)));
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$css = package$kotlinx.css || (package$kotlinx.css = {});
  package$css.ruleSet_sa4rfh$ = ruleSet;
  package$css.Rule = Rule;
  package$css.RuleContainer = RuleContainer;
  package$css.CSSBuilder = CSSBuilder;
  package$css.toCustomProperty_pdl1vz$ = toCustomProperty;
  package$css.hyphenize_pdl1vz$ = hyphenize_0;
  package$css.times_6ic1pp$ = times;
  Object.defineProperty(LinearDimension, 'Companion', {
    get: LinearDimension$Companion_getInstance
  });
  package$css.LinearDimension = LinearDimension;
  package$css.get_cm_rcaex3$ = get_cm;
  package$css.get_em_rcaex3$ = get_em;
  package$css.get_ex_rcaex3$ = get_ex;
  package$css.get_fr_rcaex3$ = get_fr;
  package$css.get_mm_rcaex3$ = get_mm;
  package$css.get_pc_rcaex3$ = get_pc;
  package$css.get_pct_rcaex3$ = get_pct;
  package$css.get_pt_rcaex3$ = get_pt;
  package$css.get_px_rcaex3$ = get_px;
  package$css.get_rem_rcaex3$ = get_rem;
  package$css.get_vmin_rcaex3$ = get_vmin;
  package$css.get_vmax_rcaex3$ = get_vmax;
  package$css.get_vh_rcaex3$ = get_vh;
  package$css.get_vw_rcaex3$ = get_vw;
  package$css.get_in_rcaex3$ = get_in;
  package$css.CssValue = CssValue;
  Object.defineProperty(Align, 'initial', {
    get: Align$initial_getInstance
  });
  Object.defineProperty(Align, 'inherit', {
    get: Align$inherit_getInstance
  });
  Object.defineProperty(Align, 'unset', {
    get: Align$unset_getInstance
  });
  Object.defineProperty(Align, 'auto', {
    get: Align$auto_getInstance
  });
  Object.defineProperty(Align, 'stretch', {
    get: Align$stretch_getInstance
  });
  Object.defineProperty(Align, 'center', {
    get: Align$center_getInstance
  });
  Object.defineProperty(Align, 'flexStart', {
    get: Align$flexStart_getInstance
  });
  Object.defineProperty(Align, 'flexEnd', {
    get: Align$flexEnd_getInstance
  });
  Object.defineProperty(Align, 'baseline', {
    get: Align$baseline_getInstance
  });
  package$css.Align = Align;
  Object.defineProperty(JustifyContent, 'initial', {
    get: JustifyContent$initial_getInstance
  });
  Object.defineProperty(JustifyContent, 'inherit', {
    get: JustifyContent$inherit_getInstance
  });
  Object.defineProperty(JustifyContent, 'unset', {
    get: JustifyContent$unset_getInstance
  });
  Object.defineProperty(JustifyContent, 'center', {
    get: JustifyContent$center_getInstance
  });
  Object.defineProperty(JustifyContent, 'start', {
    get: JustifyContent$start_getInstance
  });
  Object.defineProperty(JustifyContent, 'end', {
    get: JustifyContent$end_getInstance
  });
  Object.defineProperty(JustifyContent, 'flexStart', {
    get: JustifyContent$flexStart_getInstance
  });
  Object.defineProperty(JustifyContent, 'flexEnd', {
    get: JustifyContent$flexEnd_getInstance
  });
  Object.defineProperty(JustifyContent, 'left', {
    get: JustifyContent$left_getInstance
  });
  Object.defineProperty(JustifyContent, 'right', {
    get: JustifyContent$right_getInstance
  });
  Object.defineProperty(JustifyContent, 'baseline', {
    get: JustifyContent$baseline_getInstance
  });
  Object.defineProperty(JustifyContent, 'firstBaseline', {
    get: JustifyContent$firstBaseline_getInstance
  });
  Object.defineProperty(JustifyContent, 'lastBaseline', {
    get: JustifyContent$lastBaseline_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceBetween', {
    get: JustifyContent$spaceBetween_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceAround', {
    get: JustifyContent$spaceAround_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceEvenly', {
    get: JustifyContent$spaceEvenly_getInstance
  });
  Object.defineProperty(JustifyContent, 'stretch', {
    get: JustifyContent$stretch_getInstance
  });
  Object.defineProperty(JustifyContent, 'safeCenter', {
    get: JustifyContent$safeCenter_getInstance
  });
  Object.defineProperty(JustifyContent, 'unsafeCenter', {
    get: JustifyContent$unsafeCenter_getInstance
  });
  package$css.JustifyContent = JustifyContent;
  Object.defineProperty(BackgroundRepeat, 'initial', {
    get: BackgroundRepeat$initial_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'inherit', {
    get: BackgroundRepeat$inherit_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'unset', {
    get: BackgroundRepeat$unset_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'repeatX', {
    get: BackgroundRepeat$repeatX_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'repeatY', {
    get: BackgroundRepeat$repeatY_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'repeat', {
    get: BackgroundRepeat$repeat_getInstance
  });
  Object.defineProperty(BackgroundRepeat, 'noRepeat', {
    get: BackgroundRepeat$noRepeat_getInstance
  });
  package$css.BackgroundRepeat = BackgroundRepeat;
  Object.defineProperty(BackgroundAttachment, 'initial', {
    get: BackgroundAttachment$initial_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'inherit', {
    get: BackgroundAttachment$inherit_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'unset', {
    get: BackgroundAttachment$unset_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'scroll', {
    get: BackgroundAttachment$scroll_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'fixed', {
    get: BackgroundAttachment$fixed_getInstance
  });
  Object.defineProperty(BackgroundAttachment, 'local', {
    get: BackgroundAttachment$local_getInstance
  });
  package$css.BackgroundAttachment = BackgroundAttachment;
  Object.defineProperty(BackgroundClip, 'initial', {
    get: BackgroundClip$initial_getInstance
  });
  Object.defineProperty(BackgroundClip, 'inherit', {
    get: BackgroundClip$inherit_getInstance
  });
  Object.defineProperty(BackgroundClip, 'unset', {
    get: BackgroundClip$unset_getInstance
  });
  Object.defineProperty(BackgroundClip, 'borderBox', {
    get: BackgroundClip$borderBox_getInstance
  });
  Object.defineProperty(BackgroundClip, 'paddingBox', {
    get: BackgroundClip$paddingBox_getInstance
  });
  Object.defineProperty(BackgroundClip, 'contentBox', {
    get: BackgroundClip$contentBox_getInstance
  });
  Object.defineProperty(BackgroundClip, 'text', {
    get: BackgroundClip$text_getInstance
  });
  package$css.BackgroundClip = BackgroundClip;
  Object.defineProperty(BackgroundOrigin, 'initial', {
    get: BackgroundOrigin$initial_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'inherit', {
    get: BackgroundOrigin$inherit_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'unset', {
    get: BackgroundOrigin$unset_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'borderBox', {
    get: BackgroundOrigin$borderBox_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'paddingBox', {
    get: BackgroundOrigin$paddingBox_getInstance
  });
  Object.defineProperty(BackgroundOrigin, 'contentBox', {
    get: BackgroundOrigin$contentBox_getInstance
  });
  package$css.BackgroundOrigin = BackgroundOrigin;
  Object.defineProperty(BorderCollapse, 'initial', {
    get: BorderCollapse$initial_getInstance
  });
  Object.defineProperty(BorderCollapse, 'inherit', {
    get: BorderCollapse$inherit_getInstance
  });
  Object.defineProperty(BorderCollapse, 'unset', {
    get: BorderCollapse$unset_getInstance
  });
  Object.defineProperty(BorderCollapse, 'separate', {
    get: BorderCollapse$separate_getInstance
  });
  Object.defineProperty(BorderCollapse, 'collapse', {
    get: BorderCollapse$collapse_getInstance
  });
  package$css.BorderCollapse = BorderCollapse;
  Object.defineProperty(BorderStyle, 'initial', {
    get: BorderStyle$initial_getInstance
  });
  Object.defineProperty(BorderStyle, 'inherit', {
    get: BorderStyle$inherit_getInstance
  });
  Object.defineProperty(BorderStyle, 'unset', {
    get: BorderStyle$unset_getInstance
  });
  Object.defineProperty(BorderStyle, 'none', {
    get: BorderStyle$none_getInstance
  });
  Object.defineProperty(BorderStyle, 'dotted', {
    get: BorderStyle$dotted_getInstance
  });
  Object.defineProperty(BorderStyle, 'dashed', {
    get: BorderStyle$dashed_getInstance
  });
  Object.defineProperty(BorderStyle, 'solid', {
    get: BorderStyle$solid_getInstance
  });
  package$css.BorderStyle = BorderStyle;
  Object.defineProperty(BoxSizing, 'initial', {
    get: BoxSizing$initial_getInstance
  });
  Object.defineProperty(BoxSizing, 'inherit', {
    get: BoxSizing$inherit_getInstance
  });
  Object.defineProperty(BoxSizing, 'unset', {
    get: BoxSizing$unset_getInstance
  });
  Object.defineProperty(BoxSizing, 'contentBox', {
    get: BoxSizing$contentBox_getInstance
  });
  Object.defineProperty(BoxSizing, 'borderBox', {
    get: BoxSizing$borderBox_getInstance
  });
  package$css.BoxSizing = BoxSizing;
  Object.defineProperty(Clear, 'initial', {
    get: Clear$initial_getInstance
  });
  Object.defineProperty(Clear, 'inherit', {
    get: Clear$inherit_getInstance
  });
  Object.defineProperty(Clear, 'unset', {
    get: Clear$unset_getInstance
  });
  Object.defineProperty(Clear, 'none', {
    get: Clear$none_getInstance
  });
  Object.defineProperty(Clear, 'left', {
    get: Clear$left_getInstance
  });
  Object.defineProperty(Clear, 'right', {
    get: Clear$right_getInstance
  });
  Object.defineProperty(Clear, 'both', {
    get: Clear$both_getInstance
  });
  package$css.Clear = Clear;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  Color.RGBA = Color$RGBA;
  Color.HSLA = Color$HSLA;
  package$css.Color = Color;
  package$css.rgb_qt1dr2$ = rgb;
  package$css.rgba_gb4hak$ = rgba;
  package$css.hsl_qt1dr2$ = hsl;
  package$css.hsla_gb4hak$ = hsla;
  package$css.blackAlpha_14dthe$ = blackAlpha;
  package$css.whiteAlpha_14dthe$ = whiteAlpha;
  Object.defineProperty(ColumnGap, 'Companion', {
    get: ColumnGap$Companion_getInstance
  });
  package$css.ColumnGap = ColumnGap;
  Object.defineProperty(Contain, 'initial', {
    get: Contain$initial_getInstance
  });
  Object.defineProperty(Contain, 'inherit', {
    get: Contain$inherit_getInstance
  });
  Object.defineProperty(Contain, 'unset', {
    get: Contain$unset_getInstance
  });
  Object.defineProperty(Contain, 'none', {
    get: Contain$none_getInstance
  });
  Object.defineProperty(Contain, 'strict', {
    get: Contain$strict_getInstance
  });
  Object.defineProperty(Contain, 'content', {
    get: Contain$content_getInstance
  });
  Object.defineProperty(Contain, 'size', {
    get: Contain$size_getInstance
  });
  Object.defineProperty(Contain, 'layout', {
    get: Contain$layout_getInstance
  });
  Object.defineProperty(Contain, 'style', {
    get: Contain$style_getInstance
  });
  Object.defineProperty(Contain, 'paint', {
    get: Contain$paint_getInstance
  });
  package$css.Contain = Contain;
  Object.defineProperty(Cursor, 'initial', {
    get: Cursor$initial_getInstance
  });
  Object.defineProperty(Cursor, 'inherit', {
    get: Cursor$inherit_getInstance
  });
  Object.defineProperty(Cursor, 'unset', {
    get: Cursor$unset_getInstance
  });
  Object.defineProperty(Cursor, 'auto', {
    get: Cursor$auto_getInstance
  });
  Object.defineProperty(Cursor, 'default', {
    get: Cursor$default_getInstance
  });
  Object.defineProperty(Cursor, 'none', {
    get: Cursor$none_getInstance
  });
  Object.defineProperty(Cursor, 'contextMenu', {
    get: Cursor$contextMenu_getInstance
  });
  Object.defineProperty(Cursor, 'help', {
    get: Cursor$help_getInstance
  });
  Object.defineProperty(Cursor, 'pointer', {
    get: Cursor$pointer_getInstance
  });
  Object.defineProperty(Cursor, 'progress', {
    get: Cursor$progress_getInstance
  });
  Object.defineProperty(Cursor, 'wait', {
    get: Cursor$wait_getInstance
  });
  Object.defineProperty(Cursor, 'cell', {
    get: Cursor$cell_getInstance
  });
  Object.defineProperty(Cursor, 'crosshair', {
    get: Cursor$crosshair_getInstance
  });
  Object.defineProperty(Cursor, 'text', {
    get: Cursor$text_getInstance
  });
  Object.defineProperty(Cursor, 'verticalText', {
    get: Cursor$verticalText_getInstance
  });
  Object.defineProperty(Cursor, 'alias', {
    get: Cursor$alias_getInstance
  });
  Object.defineProperty(Cursor, 'copy', {
    get: Cursor$copy_getInstance
  });
  Object.defineProperty(Cursor, 'move', {
    get: Cursor$move_getInstance
  });
  Object.defineProperty(Cursor, 'noDrop', {
    get: Cursor$noDrop_getInstance
  });
  Object.defineProperty(Cursor, 'notAllowed', {
    get: Cursor$notAllowed_getInstance
  });
  Object.defineProperty(Cursor, 'grab', {
    get: Cursor$grab_getInstance
  });
  Object.defineProperty(Cursor, 'grabbing', {
    get: Cursor$grabbing_getInstance
  });
  Object.defineProperty(Cursor, 'colResize', {
    get: Cursor$colResize_getInstance
  });
  Object.defineProperty(Cursor, 'rowResize', {
    get: Cursor$rowResize_getInstance
  });
  Object.defineProperty(Cursor, 'allScroll', {
    get: Cursor$allScroll_getInstance
  });
  Object.defineProperty(Cursor, 'eResize', {
    get: Cursor$eResize_getInstance
  });
  Object.defineProperty(Cursor, 'nResize', {
    get: Cursor$nResize_getInstance
  });
  Object.defineProperty(Cursor, 'neResize', {
    get: Cursor$neResize_getInstance
  });
  Object.defineProperty(Cursor, 'nwResize', {
    get: Cursor$nwResize_getInstance
  });
  Object.defineProperty(Cursor, 'sResize', {
    get: Cursor$sResize_getInstance
  });
  Object.defineProperty(Cursor, 'seResize', {
    get: Cursor$seResize_getInstance
  });
  Object.defineProperty(Cursor, 'swResize', {
    get: Cursor$swResize_getInstance
  });
  Object.defineProperty(Cursor, 'wResize', {
    get: Cursor$wResize_getInstance
  });
  Object.defineProperty(Cursor, 'ewResize', {
    get: Cursor$ewResize_getInstance
  });
  Object.defineProperty(Cursor, 'nsResize', {
    get: Cursor$nsResize_getInstance
  });
  Object.defineProperty(Cursor, 'neswResize', {
    get: Cursor$neswResize_getInstance
  });
  Object.defineProperty(Cursor, 'nwseResize', {
    get: Cursor$nwseResize_getInstance
  });
  Object.defineProperty(Cursor, 'zoomIn', {
    get: Cursor$zoomIn_getInstance
  });
  Object.defineProperty(Cursor, 'zoomOut', {
    get: Cursor$zoomOut_getInstance
  });
  package$css.Cursor = Cursor;
  package$css.QuotedString = QuotedString;
  package$css.get_quoted_pdl1vz$ = get_quoted;
  Object.defineProperty(Direction, 'initial', {
    get: Direction$initial_getInstance
  });
  Object.defineProperty(Direction, 'inherit', {
    get: Direction$inherit_getInstance
  });
  Object.defineProperty(Direction, 'unset', {
    get: Direction$unset_getInstance
  });
  Object.defineProperty(Direction, 'ltr', {
    get: Direction$ltr_getInstance
  });
  Object.defineProperty(Direction, 'rtl', {
    get: Direction$rtl_getInstance
  });
  package$css.Direction = Direction;
  Object.defineProperty(Display, 'initial', {
    get: Display$initial_getInstance
  });
  Object.defineProperty(Display, 'inherit', {
    get: Display$inherit_getInstance
  });
  Object.defineProperty(Display, 'unset', {
    get: Display$unset_getInstance
  });
  Object.defineProperty(Display, 'block', {
    get: Display$block_getInstance
  });
  Object.defineProperty(Display, 'inline', {
    get: Display$inline_getInstance
  });
  Object.defineProperty(Display, 'runIn', {
    get: Display$runIn_getInstance
  });
  Object.defineProperty(Display, 'flow', {
    get: Display$flow_getInstance
  });
  Object.defineProperty(Display, 'flowRoot', {
    get: Display$flowRoot_getInstance
  });
  Object.defineProperty(Display, 'table', {
    get: Display$table_getInstance
  });
  Object.defineProperty(Display, 'flex', {
    get: Display$flex_getInstance
  });
  Object.defineProperty(Display, 'grid', {
    get: Display$grid_getInstance
  });
  Object.defineProperty(Display, 'subgrid', {
    get: Display$subgrid_getInstance
  });
  Object.defineProperty(Display, 'listItem', {
    get: Display$listItem_getInstance
  });
  Object.defineProperty(Display, 'tableRowGroup', {
    get: Display$tableRowGroup_getInstance
  });
  Object.defineProperty(Display, 'tableHeaderGroup', {
    get: Display$tableHeaderGroup_getInstance
  });
  Object.defineProperty(Display, 'tableFooterGroup', {
    get: Display$tableFooterGroup_getInstance
  });
  Object.defineProperty(Display, 'tableRow', {
    get: Display$tableRow_getInstance
  });
  Object.defineProperty(Display, 'tableCell', {
    get: Display$tableCell_getInstance
  });
  Object.defineProperty(Display, 'tableColumnGroup', {
    get: Display$tableColumnGroup_getInstance
  });
  Object.defineProperty(Display, 'tableColumn', {
    get: Display$tableColumn_getInstance
  });
  Object.defineProperty(Display, 'tableCaption', {
    get: Display$tableCaption_getInstance
  });
  Object.defineProperty(Display, 'contents', {
    get: Display$contents_getInstance
  });
  Object.defineProperty(Display, 'none', {
    get: Display$none_getInstance
  });
  Object.defineProperty(Display, 'inlineBlock', {
    get: Display$inlineBlock_getInstance
  });
  Object.defineProperty(Display, 'inlineListItem', {
    get: Display$inlineListItem_getInstance
  });
  Object.defineProperty(Display, 'inlineTable', {
    get: Display$inlineTable_getInstance
  });
  Object.defineProperty(Display, 'inlineFlex', {
    get: Display$inlineFlex_getInstance
  });
  Object.defineProperty(Display, 'inlineGrid', {
    get: Display$inlineGrid_getInstance
  });
  package$css.Display = Display;
  Object.defineProperty(FlexBasis, 'Companion', {
    get: FlexBasis$Companion_getInstance
  });
  package$css.FlexBasis = FlexBasis;
  package$css.get_basis_dhrub4$ = get_basis;
  Object.defineProperty(FlexWrap, 'initial', {
    get: FlexWrap$initial_getInstance
  });
  Object.defineProperty(FlexWrap, 'inherit', {
    get: FlexWrap$inherit_getInstance
  });
  Object.defineProperty(FlexWrap, 'unset', {
    get: FlexWrap$unset_getInstance
  });
  Object.defineProperty(FlexWrap, 'nowrap', {
    get: FlexWrap$nowrap_getInstance
  });
  Object.defineProperty(FlexWrap, 'wrap', {
    get: FlexWrap$wrap_getInstance
  });
  Object.defineProperty(FlexWrap, 'wrapReverse', {
    get: FlexWrap$wrapReverse_getInstance
  });
  package$css.FlexWrap = FlexWrap;
  Object.defineProperty(Float, 'initial', {
    get: Float$initial_getInstance
  });
  Object.defineProperty(Float, 'inherit', {
    get: Float$inherit_getInstance
  });
  Object.defineProperty(Float, 'unset', {
    get: Float$unset_getInstance
  });
  Object.defineProperty(Float, 'left', {
    get: Float$left_getInstance
  });
  Object.defineProperty(Float, 'right', {
    get: Float$right_getInstance
  });
  Object.defineProperty(Float, 'none', {
    get: Float$none_getInstance
  });
  package$css.Float = Float;
  Object.defineProperty(FontWeight, 'Companion', {
    get: FontWeight$Companion_getInstance
  });
  package$css.FontWeight = FontWeight;
  Object.defineProperty(FontStyle, 'Companion', {
    get: FontStyle$Companion_getInstance
  });
  package$css.FontStyle = FontStyle;
  Object.defineProperty(FlexDirection, 'initial', {
    get: FlexDirection$initial_getInstance
  });
  Object.defineProperty(FlexDirection, 'inherit', {
    get: FlexDirection$inherit_getInstance
  });
  Object.defineProperty(FlexDirection, 'unset', {
    get: FlexDirection$unset_getInstance
  });
  Object.defineProperty(FlexDirection, 'column', {
    get: FlexDirection$column_getInstance
  });
  Object.defineProperty(FlexDirection, 'columnReverse', {
    get: FlexDirection$columnReverse_getInstance
  });
  Object.defineProperty(FlexDirection, 'row', {
    get: FlexDirection$row_getInstance
  });
  Object.defineProperty(FlexDirection, 'rowReverse', {
    get: FlexDirection$rowReverse_getInstance
  });
  package$css.FlexDirection = FlexDirection;
  Object.defineProperty(Gap, 'Companion', {
    get: Gap$Companion_getInstance
  });
  package$css.Gap = Gap;
  Object.defineProperty(GridAutoColumns, 'Companion', {
    get: GridAutoColumns$Companion_getInstance
  });
  package$css.GridAutoColumns_init_onxlus$ = GridAutoColumns_init;
  package$css.GridAutoColumns_init_c2br0j$ = GridAutoColumns_init_0;
  package$css.GridAutoColumns = GridAutoColumns;
  Object.defineProperty(GridAutoFlow, 'Companion', {
    get: GridAutoFlow$Companion_getInstance
  });
  package$css.GridAutoFlow = GridAutoFlow;
  Object.defineProperty(GridAutoRows, 'Companion', {
    get: GridAutoRows$Companion_getInstance
  });
  package$css.GridAutoRows_init_onxlus$ = GridAutoRows_init;
  package$css.GridAutoRows_init_q37hx3$ = GridAutoRows_init_0;
  package$css.GridAutoRows = GridAutoRows;
  Object.defineProperty(GridColumn, 'Companion', {
    get: GridColumn$Companion_getInstance
  });
  package$css.GridColumn = GridColumn;
  Object.defineProperty(GridColumnEnd, 'Companion', {
    get: GridColumnEnd$Companion_getInstance
  });
  package$css.GridColumnEnd = GridColumnEnd;
  Object.defineProperty(GridColumnGap, 'Companion', {
    get: GridColumnGap$Companion_getInstance
  });
  package$css.GridColumnGap = GridColumnGap;
  Object.defineProperty(GridColumnStart, 'Companion', {
    get: GridColumnStart$Companion_getInstance
  });
  package$css.GridColumnStart = GridColumnStart;
  Object.defineProperty(GridGap, 'Companion', {
    get: GridGap$Companion_getInstance
  });
  package$css.GridGap = GridGap;
  Object.defineProperty(GridRow, 'Companion', {
    get: GridRow$Companion_getInstance
  });
  package$css.GridRow = GridRow;
  Object.defineProperty(GridRowEnd, 'Companion', {
    get: GridRowEnd$Companion_getInstance
  });
  package$css.GridRowEnd = GridRowEnd;
  Object.defineProperty(GridRowGap, 'Companion', {
    get: GridRowGap$Companion_getInstance
  });
  package$css.GridRowGap = GridRowGap;
  Object.defineProperty(GridRowStart, 'Companion', {
    get: GridRowStart$Companion_getInstance
  });
  package$css.GridRowStart = GridRowStart;
  Object.defineProperty(GridTemplate, 'Companion', {
    get: GridTemplate$Companion_getInstance
  });
  package$css.GridTemplate = GridTemplate;
  Object.defineProperty(GridTemplateAreas, 'Companion', {
    get: GridTemplateAreas$Companion_getInstance
  });
  package$css.GridTemplateAreas = GridTemplateAreas;
  Object.defineProperty(GridTemplateColumns, 'Companion', {
    get: GridTemplateColumns$Companion_getInstance
  });
  package$css.GridTemplateColumns_init_onxlus$ = GridTemplateColumns_init;
  package$css.GridTemplateColumns_init_q37hx3$ = GridTemplateColumns_init_0;
  package$css.GridTemplateColumns = GridTemplateColumns;
  Object.defineProperty(GridTemplateRows, 'Companion', {
    get: GridTemplateRows$Companion_getInstance
  });
  package$css.GridTemplateRows_init_onxlus$ = GridTemplateRows_init;
  package$css.GridTemplateRows_init_q37hx3$ = GridTemplateRows_init_0;
  package$css.GridTemplateRows = GridTemplateRows;
  Object.defineProperty(Grow, 'NONE', {
    get: Grow$NONE_getInstance
  });
  Object.defineProperty(Grow, 'GROW', {
    get: Grow$GROW_getInstance
  });
  Object.defineProperty(Grow, 'SHRINK', {
    get: Grow$SHRINK_getInstance
  });
  Object.defineProperty(Grow, 'GROW_SHRINK', {
    get: Grow$GROW_SHRINK_getInstance
  });
  package$css.Grow = Grow;
  Object.defineProperty(Hyphens, 'initial', {
    get: Hyphens$initial_getInstance
  });
  Object.defineProperty(Hyphens, 'inherit', {
    get: Hyphens$inherit_getInstance
  });
  Object.defineProperty(Hyphens, 'unset', {
    get: Hyphens$unset_getInstance
  });
  Object.defineProperty(Hyphens, 'none', {
    get: Hyphens$none_getInstance
  });
  Object.defineProperty(Hyphens, 'manual', {
    get: Hyphens$manual_getInstance
  });
  Object.defineProperty(Hyphens, 'auto', {
    get: Hyphens$auto_getInstance
  });
  package$css.Hyphens = Hyphens;
  Object.defineProperty(ListStyleType, 'initial', {
    get: ListStyleType$initial_getInstance
  });
  Object.defineProperty(ListStyleType, 'inherit', {
    get: ListStyleType$inherit_getInstance
  });
  Object.defineProperty(ListStyleType, 'unset', {
    get: ListStyleType$unset_getInstance
  });
  Object.defineProperty(ListStyleType, 'none', {
    get: ListStyleType$none_getInstance
  });
  Object.defineProperty(ListStyleType, 'disc', {
    get: ListStyleType$disc_getInstance
  });
  Object.defineProperty(ListStyleType, 'circle', {
    get: ListStyleType$circle_getInstance
  });
  Object.defineProperty(ListStyleType, 'square', {
    get: ListStyleType$square_getInstance
  });
  Object.defineProperty(ListStyleType, 'decimal', {
    get: ListStyleType$decimal_getInstance
  });
  package$css.ListStyleType = ListStyleType;
  Object.defineProperty(ObjectFit, 'initial', {
    get: ObjectFit$initial_getInstance
  });
  Object.defineProperty(ObjectFit, 'inherit', {
    get: ObjectFit$inherit_getInstance
  });
  Object.defineProperty(ObjectFit, 'unset', {
    get: ObjectFit$unset_getInstance
  });
  Object.defineProperty(ObjectFit, 'contain', {
    get: ObjectFit$contain_getInstance
  });
  Object.defineProperty(ObjectFit, 'cover', {
    get: ObjectFit$cover_getInstance
  });
  Object.defineProperty(ObjectFit, 'fill', {
    get: ObjectFit$fill_getInstance
  });
  Object.defineProperty(ObjectFit, 'none', {
    get: ObjectFit$none_getInstance
  });
  Object.defineProperty(ObjectFit, 'scaleDown', {
    get: ObjectFit$scaleDown_getInstance
  });
  package$css.ObjectFit = ObjectFit;
  Object.defineProperty(Outline, 'initial', {
    get: Outline$initial_getInstance
  });
  Object.defineProperty(Outline, 'inherit', {
    get: Outline$inherit_getInstance
  });
  Object.defineProperty(Outline, 'unset', {
    get: Outline$unset_getInstance
  });
  Object.defineProperty(Outline, 'none', {
    get: Outline$none_getInstance
  });
  package$css.Outline = Outline;
  Object.defineProperty(Overflow, 'initial', {
    get: Overflow$initial_getInstance
  });
  Object.defineProperty(Overflow, 'inherit', {
    get: Overflow$inherit_getInstance
  });
  Object.defineProperty(Overflow, 'unset', {
    get: Overflow$unset_getInstance
  });
  Object.defineProperty(Overflow, 'visible', {
    get: Overflow$visible_getInstance
  });
  Object.defineProperty(Overflow, 'hidden', {
    get: Overflow$hidden_getInstance
  });
  Object.defineProperty(Overflow, 'scroll', {
    get: Overflow$scroll_getInstance
  });
  Object.defineProperty(Overflow, 'auto', {
    get: Overflow$auto_getInstance
  });
  package$css.Overflow = Overflow;
  Object.defineProperty(OverflowWrap, 'initial', {
    get: OverflowWrap$initial_getInstance
  });
  Object.defineProperty(OverflowWrap, 'inherit', {
    get: OverflowWrap$inherit_getInstance
  });
  Object.defineProperty(OverflowWrap, 'unset', {
    get: OverflowWrap$unset_getInstance
  });
  Object.defineProperty(OverflowWrap, 'normal', {
    get: OverflowWrap$normal_getInstance
  });
  Object.defineProperty(OverflowWrap, 'breakWord', {
    get: OverflowWrap$breakWord_getInstance
  });
  package$css.OverflowWrap = OverflowWrap;
  Object.defineProperty(OverscrollBehavior, 'initial', {
    get: OverscrollBehavior$initial_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'inherit', {
    get: OverscrollBehavior$inherit_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'unset', {
    get: OverscrollBehavior$unset_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'auto', {
    get: OverscrollBehavior$auto_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'contain', {
    get: OverscrollBehavior$contain_getInstance
  });
  Object.defineProperty(OverscrollBehavior, 'none', {
    get: OverscrollBehavior$none_getInstance
  });
  package$css.OverscrollBehavior = OverscrollBehavior;
  Object.defineProperty(PointerEvents, 'initial', {
    get: PointerEvents$initial_getInstance
  });
  Object.defineProperty(PointerEvents, 'inherit', {
    get: PointerEvents$inherit_getInstance
  });
  Object.defineProperty(PointerEvents, 'unset', {
    get: PointerEvents$unset_getInstance
  });
  Object.defineProperty(PointerEvents, 'auto', {
    get: PointerEvents$auto_getInstance
  });
  Object.defineProperty(PointerEvents, 'none', {
    get: PointerEvents$none_getInstance
  });
  package$css.PointerEvents = PointerEvents;
  Object.defineProperty(Position, 'initial', {
    get: Position$initial_getInstance
  });
  Object.defineProperty(Position, 'inherit', {
    get: Position$inherit_getInstance
  });
  Object.defineProperty(Position, 'unset', {
    get: Position$unset_getInstance
  });
  Object.defineProperty(Position, 'static', {
    get: Position$static_getInstance
  });
  Object.defineProperty(Position, 'relative', {
    get: Position$relative_getInstance
  });
  Object.defineProperty(Position, 'absolute', {
    get: Position$absolute_getInstance
  });
  Object.defineProperty(Position, 'fixed', {
    get: Position$fixed_getInstance
  });
  Object.defineProperty(Position, 'sticky', {
    get: Position$sticky_getInstance
  });
  package$css.Position = Position;
  Object.defineProperty(RowGap, 'Companion', {
    get: RowGap$Companion_getInstance
  });
  package$css.RowGap = RowGap;
  Object.defineProperty(ScrollBehavior, 'initial', {
    get: ScrollBehavior$initial_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'inherit', {
    get: ScrollBehavior$inherit_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'unset', {
    get: ScrollBehavior$unset_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'auto', {
    get: ScrollBehavior$auto_getInstance
  });
  Object.defineProperty(ScrollBehavior, 'smooth', {
    get: ScrollBehavior$smooth_getInstance
  });
  package$css.ScrollBehavior = ScrollBehavior;
  Object.defineProperty(TextAlign, 'initial', {
    get: TextAlign$initial_getInstance
  });
  Object.defineProperty(TextAlign, 'inherit', {
    get: TextAlign$inherit_getInstance
  });
  Object.defineProperty(TextAlign, 'unset', {
    get: TextAlign$unset_getInstance
  });
  Object.defineProperty(TextAlign, 'left', {
    get: TextAlign$left_getInstance
  });
  Object.defineProperty(TextAlign, 'right', {
    get: TextAlign$right_getInstance
  });
  Object.defineProperty(TextAlign, 'center', {
    get: TextAlign$center_getInstance
  });
  Object.defineProperty(TextAlign, 'justify', {
    get: TextAlign$justify_getInstance
  });
  Object.defineProperty(TextAlign, 'justifyAll', {
    get: TextAlign$justifyAll_getInstance
  });
  Object.defineProperty(TextAlign, 'start', {
    get: TextAlign$start_getInstance
  });
  Object.defineProperty(TextAlign, 'end', {
    get: TextAlign$end_getInstance
  });
  Object.defineProperty(TextAlign, 'matchParent', {
    get: TextAlign$matchParent_getInstance
  });
  package$css.TextAlign = TextAlign;
  Object.defineProperty(TableLayout, 'initial', {
    get: TableLayout$initial_getInstance
  });
  Object.defineProperty(TableLayout, 'inherit', {
    get: TableLayout$inherit_getInstance
  });
  Object.defineProperty(TableLayout, 'unset', {
    get: TableLayout$unset_getInstance
  });
  Object.defineProperty(TableLayout, 'auto', {
    get: TableLayout$auto_getInstance
  });
  Object.defineProperty(TableLayout, 'fixed', {
    get: TableLayout$fixed_getInstance
  });
  package$css.TableLayout = TableLayout;
  Object.defineProperty(TextOverflow, 'initial', {
    get: TextOverflow$initial_getInstance
  });
  Object.defineProperty(TextOverflow, 'inherit', {
    get: TextOverflow$inherit_getInstance
  });
  Object.defineProperty(TextOverflow, 'unset', {
    get: TextOverflow$unset_getInstance
  });
  Object.defineProperty(TextOverflow, 'clip', {
    get: TextOverflow$clip_getInstance
  });
  Object.defineProperty(TextOverflow, 'ellipsis', {
    get: TextOverflow$ellipsis_getInstance
  });
  package$css.TextOverflow = TextOverflow;
  Object.defineProperty(TextTransform, 'initial', {
    get: TextTransform$initial_getInstance
  });
  Object.defineProperty(TextTransform, 'inherit', {
    get: TextTransform$inherit_getInstance
  });
  Object.defineProperty(TextTransform, 'unset', {
    get: TextTransform$unset_getInstance
  });
  Object.defineProperty(TextTransform, 'capitalize', {
    get: TextTransform$capitalize_getInstance
  });
  Object.defineProperty(TextTransform, 'uppercase', {
    get: TextTransform$uppercase_getInstance
  });
  Object.defineProperty(TextTransform, 'lowercase', {
    get: TextTransform$lowercase_getInstance
  });
  Object.defineProperty(TextTransform, 'none', {
    get: TextTransform$none_getInstance
  });
  Object.defineProperty(TextTransform, 'fullWidth', {
    get: TextTransform$fullWidth_getInstance
  });
  package$css.TextTransform = TextTransform;
  Object.defineProperty(UserSelect, 'initial', {
    get: UserSelect$initial_getInstance
  });
  Object.defineProperty(UserSelect, 'inherit', {
    get: UserSelect$inherit_getInstance
  });
  Object.defineProperty(UserSelect, 'unset', {
    get: UserSelect$unset_getInstance
  });
  Object.defineProperty(UserSelect, 'none', {
    get: UserSelect$none_getInstance
  });
  Object.defineProperty(UserSelect, 'auto', {
    get: UserSelect$auto_getInstance
  });
  Object.defineProperty(UserSelect, 'text', {
    get: UserSelect$text_getInstance
  });
  Object.defineProperty(UserSelect, 'contain', {
    get: UserSelect$contain_getInstance
  });
  Object.defineProperty(UserSelect, 'all', {
    get: UserSelect$all_getInstance
  });
  package$css.UserSelect = UserSelect;
  Object.defineProperty(VerticalAlign, 'Companion', {
    get: VerticalAlign$Companion_getInstance
  });
  package$css.VerticalAlign = VerticalAlign;
  package$css.get_up_dhrub4$ = get_up;
  package$css.get_down_dhrub4$ = get_down;
  Object.defineProperty(Visibility, 'initial', {
    get: Visibility$initial_getInstance
  });
  Object.defineProperty(Visibility, 'inherit', {
    get: Visibility$inherit_getInstance
  });
  Object.defineProperty(Visibility, 'unset', {
    get: Visibility$unset_getInstance
  });
  Object.defineProperty(Visibility, 'visible', {
    get: Visibility$visible_getInstance
  });
  Object.defineProperty(Visibility, 'hidden', {
    get: Visibility$hidden_getInstance
  });
  Object.defineProperty(Visibility, 'collapse', {
    get: Visibility$collapse_getInstance
  });
  package$css.Visibility = Visibility;
  Object.defineProperty(WhiteSpace, 'initial', {
    get: WhiteSpace$initial_getInstance
  });
  Object.defineProperty(WhiteSpace, 'inherit', {
    get: WhiteSpace$inherit_getInstance
  });
  Object.defineProperty(WhiteSpace, 'unset', {
    get: WhiteSpace$unset_getInstance
  });
  Object.defineProperty(WhiteSpace, 'normal', {
    get: WhiteSpace$normal_getInstance
  });
  Object.defineProperty(WhiteSpace, 'nowrap', {
    get: WhiteSpace$nowrap_getInstance
  });
  Object.defineProperty(WhiteSpace, 'pre', {
    get: WhiteSpace$pre_getInstance
  });
  Object.defineProperty(WhiteSpace, 'preWrap', {
    get: WhiteSpace$preWrap_getInstance
  });
  Object.defineProperty(WhiteSpace, 'preLine', {
    get: WhiteSpace$preLine_getInstance
  });
  package$css.WhiteSpace = WhiteSpace;
  Object.defineProperty(WordBreak, 'initial', {
    get: WordBreak$initial_getInstance
  });
  Object.defineProperty(WordBreak, 'inherit', {
    get: WordBreak$inherit_getInstance
  });
  Object.defineProperty(WordBreak, 'unset', {
    get: WordBreak$unset_getInstance
  });
  Object.defineProperty(WordBreak, 'normal', {
    get: WordBreak$normal_getInstance
  });
  Object.defineProperty(WordBreak, 'breakAll', {
    get: WordBreak$breakAll_getInstance
  });
  Object.defineProperty(WordBreak, 'breakWord', {
    get: WordBreak$breakWord_getInstance
  });
  Object.defineProperty(WordBreak, 'keepAll', {
    get: WordBreak$keepAll_getInstance
  });
  package$css.WordBreak = WordBreak;
  Object.defineProperty(WordWrap, 'initial', {
    get: WordWrap$initial_getInstance
  });
  Object.defineProperty(WordWrap, 'inherit', {
    get: WordWrap$inherit_getInstance
  });
  Object.defineProperty(WordWrap, 'unset', {
    get: WordWrap$unset_getInstance
  });
  Object.defineProperty(WordWrap, 'normal', {
    get: WordWrap$normal_getInstance
  });
  Object.defineProperty(WordWrap, 'breakWord', {
    get: WordWrap$breakWord_getInstance
  });
  package$css.WordWrap = WordWrap;
  Object.defineProperty(Image, 'Companion', {
    get: Image$Companion_getInstance
  });
  package$css.Image = Image;
  package$css.StyleList = StyleList;
  StyledElement.WithDefault = StyledElement$WithDefault;
  package$css.StyledElement = StyledElement;
  package$css.flex_t9l9i8$ = flex;
  package$css.flex_hmdnwb$ = flex_0;
  package$css.grow_sznwqr$ = grow;
  package$css.margin_fjjo64$ = margin;
  package$css.margin_9vmwvs$ = margin_0;
  package$css.margin_cx3uck$ = margin_1;
  package$css.margin_njam0t$ = margin_2;
  package$css.padding_fjjo64$ = padding;
  package$css.padding_9vmwvs$ = padding_0;
  package$css.padding_cx3uck$ = padding_1;
  package$css.padding_njam0t$ = padding_2;
  package$css.TagSelector = TagSelector;
  Object.defineProperty(package$css, 'a', {
    get: get_a
  });
  Object.defineProperty(package$css, 'abbr', {
    get: get_abbr
  });
  Object.defineProperty(package$css, 'area', {
    get: get_area
  });
  Object.defineProperty(package$css, 'address', {
    get: get_address
  });
  Object.defineProperty(package$css, 'article', {
    get: get_article
  });
  Object.defineProperty(package$css, 'aside', {
    get: get_aside
  });
  Object.defineProperty(package$css, 'audio', {
    get: get_audio
  });
  Object.defineProperty(package$css, 'b', {
    get: get_b
  });
  Object.defineProperty(package$css, 'bdi', {
    get: get_bdi
  });
  Object.defineProperty(package$css, 'blockquote', {
    get: get_blockquote
  });
  Object.defineProperty(package$css, 'bdo', {
    get: get_bdo
  });
  Object.defineProperty(package$css, 'body', {
    get: get_body
  });
  Object.defineProperty(package$css, 'br', {
    get: get_br
  });
  Object.defineProperty(package$css, 'button', {
    get: get_button
  });
  Object.defineProperty(package$css, 'canvas', {
    get: get_canvas
  });
  Object.defineProperty(package$css, 'cite', {
    get: get_cite
  });
  Object.defineProperty(package$css, 'code', {
    get: get_code
  });
  Object.defineProperty(package$css, 'command', {
    get: get_command
  });
  Object.defineProperty(package$css, 'datalist', {
    get: get_datalist
  });
  Object.defineProperty(package$css, 'del', {
    get: get_del
  });
  Object.defineProperty(package$css, 'details', {
    get: get_details
  });
  Object.defineProperty(package$css, 'dfn', {
    get: get_dfn
  });
  Object.defineProperty(package$css, 'dialog', {
    get: get_dialog
  });
  Object.defineProperty(package$css, 'div', {
    get: get_div
  });
  Object.defineProperty(package$css, 'dl', {
    get: get_dl
  });
  Object.defineProperty(package$css, 'em', {
    get: get_em_0
  });
  Object.defineProperty(package$css, 'embed', {
    get: get_embed
  });
  Object.defineProperty(package$css, 'fieldset', {
    get: get_fieldset
  });
  Object.defineProperty(package$css, 'figure', {
    get: get_figure
  });
  Object.defineProperty(package$css, 'figcaption', {
    get: get_figcaption
  });
  Object.defineProperty(package$css, 'footer', {
    get: get_footer
  });
  Object.defineProperty(package$css, 'form', {
    get: get_form
  });
  Object.defineProperty(package$css, 'h1', {
    get: get_h1
  });
  Object.defineProperty(package$css, 'h2', {
    get: get_h2
  });
  Object.defineProperty(package$css, 'h3', {
    get: get_h3
  });
  Object.defineProperty(package$css, 'h4', {
    get: get_h4
  });
  Object.defineProperty(package$css, 'h5', {
    get: get_h5
  });
  Object.defineProperty(package$css, 'h6', {
    get: get_h6
  });
  Object.defineProperty(package$css, 'header', {
    get: get_header
  });
  Object.defineProperty(package$css, 'hgroup', {
    get: get_hgroup
  });
  Object.defineProperty(package$css, 'hr', {
    get: get_hr
  });
  Object.defineProperty(package$css, 'html', {
    get: get_html
  });
  Object.defineProperty(package$css, 'i', {
    get: get_i
  });
  Object.defineProperty(package$css, 'iframe', {
    get: get_iframe
  });
  Object.defineProperty(package$css, 'img', {
    get: get_img
  });
  Object.defineProperty(package$css, 'input', {
    get: get_input
  });
  Object.defineProperty(package$css, 'ins', {
    get: get_ins
  });
  Object.defineProperty(package$css, 'kbd', {
    get: get_kbd
  });
  Object.defineProperty(package$css, 'keygen', {
    get: get_keygen
  });
  Object.defineProperty(package$css, 'label', {
    get: get_label
  });
  Object.defineProperty(package$css, 'link', {
    get: get_link
  });
  Object.defineProperty(package$css, 'map', {
    get: get_map
  });
  Object.defineProperty(package$css, 'mark', {
    get: get_mark
  });
  Object.defineProperty(package$css, 'math', {
    get: get_math
  });
  Object.defineProperty(package$css, 'menu', {
    get: get_menu
  });
  Object.defineProperty(package$css, 'meta', {
    get: get_meta
  });
  Object.defineProperty(package$css, 'meter', {
    get: get_meter
  });
  Object.defineProperty(package$css, 'nav', {
    get: get_nav
  });
  Object.defineProperty(package$css, 'noscript', {
    get: get_noscript
  });
  Object.defineProperty(package$css, 'ol', {
    get: get_ol
  });
  Object.defineProperty(package$css, 'objectTag', {
    get: get_objectTag
  });
  Object.defineProperty(package$css, 'output', {
    get: get_output
  });
  Object.defineProperty(package$css, 'p', {
    get: get_p
  });
  Object.defineProperty(package$css, 'pre', {
    get: get_pre
  });
  Object.defineProperty(package$css, 'progress', {
    get: get_progress
  });
  Object.defineProperty(package$css, 'q', {
    get: get_q
  });
  Object.defineProperty(package$css, 'ruby', {
    get: get_ruby
  });
  Object.defineProperty(package$css, 'samp', {
    get: get_samp
  });
  Object.defineProperty(package$css, 'script', {
    get: get_script
  });
  Object.defineProperty(package$css, 'section', {
    get: get_section
  });
  Object.defineProperty(package$css, 'select', {
    get: get_select
  });
  Object.defineProperty(package$css, 'small', {
    get: get_small
  });
  Object.defineProperty(package$css, 'span', {
    get: get_span
  });
  Object.defineProperty(package$css, 'strong', {
    get: get_strong
  });
  Object.defineProperty(package$css, 'style', {
    get: get_style
  });
  Object.defineProperty(package$css, 'sub', {
    get: get_sub
  });
  Object.defineProperty(package$css, 'sup', {
    get: get_sup
  });
  Object.defineProperty(package$css, 'svg', {
    get: get_svg
  });
  Object.defineProperty(package$css, 'table', {
    get: get_table
  });
  Object.defineProperty(package$css, 'textarea', {
    get: get_textarea
  });
  Object.defineProperty(package$css, 'time', {
    get: get_time
  });
  Object.defineProperty(package$css, 'ul', {
    get: get_ul
  });
  Object.defineProperty(package$css, 'varTag', {
    get: get_varTag
  });
  Object.defineProperty(package$css, 'video', {
    get: get_video
  });
  Object.defineProperty(IterationCount, 'Companion', {
    get: IterationCount$Companion_getInstance
  });
  var package$properties = package$css.properties || (package$css.properties = {});
  package$properties.IterationCount = IterationCount;
  package$properties.get_times_s8ev3n$ = get_times;
  Object.defineProperty(AnimationDirection, 'initial', {
    get: AnimationDirection$initial_getInstance
  });
  Object.defineProperty(AnimationDirection, 'inherit', {
    get: AnimationDirection$inherit_getInstance
  });
  Object.defineProperty(AnimationDirection, 'unset', {
    get: AnimationDirection$unset_getInstance
  });
  Object.defineProperty(AnimationDirection, 'normal', {
    get: AnimationDirection$normal_getInstance
  });
  Object.defineProperty(AnimationDirection, 'reverse', {
    get: AnimationDirection$reverse_getInstance
  });
  Object.defineProperty(AnimationDirection, 'alternate', {
    get: AnimationDirection$alternate_getInstance
  });
  Object.defineProperty(AnimationDirection, 'alternateReverse', {
    get: AnimationDirection$alternateReverse_getInstance
  });
  package$properties.AnimationDirection = AnimationDirection;
  Object.defineProperty(FillMode, 'initial', {
    get: FillMode$initial_getInstance
  });
  Object.defineProperty(FillMode, 'inherit', {
    get: FillMode$inherit_getInstance
  });
  Object.defineProperty(FillMode, 'unset', {
    get: FillMode$unset_getInstance
  });
  Object.defineProperty(FillMode, 'none', {
    get: FillMode$none_getInstance
  });
  Object.defineProperty(FillMode, 'forwards', {
    get: FillMode$forwards_getInstance
  });
  Object.defineProperty(FillMode, 'backwards', {
    get: FillMode$backwards_getInstance
  });
  Object.defineProperty(FillMode, 'both', {
    get: FillMode$both_getInstance
  });
  package$properties.FillMode = FillMode;
  Object.defineProperty(PlayState, 'initial', {
    get: PlayState$initial_getInstance
  });
  Object.defineProperty(PlayState, 'inherit', {
    get: PlayState$inherit_getInstance
  });
  Object.defineProperty(PlayState, 'unset', {
    get: PlayState$unset_getInstance
  });
  Object.defineProperty(PlayState, 'running', {
    get: PlayState$running_getInstance
  });
  Object.defineProperty(PlayState, 'paused', {
    get: PlayState$paused_getInstance
  });
  package$properties.PlayState = PlayState;
  package$properties.Animation = Animation;
  Object.defineProperty(Animations, 'Companion', {
    get: Animations$Companion_getInstance
  });
  package$properties.Animations = Animations;
  package$properties.animation_hb31zf$ = animation;
  package$properties.border_pcr32b$ = border;
  package$properties.borderTop_pcr32b$ = borderTop;
  package$properties.borderRight_pcr32b$ = borderRight;
  package$properties.borderBottom_pcr32b$ = borderBottom;
  package$properties.borderLeft_pcr32b$ = borderLeft;
  package$properties.BoxShadow = BoxShadow;
  Object.defineProperty(BoxShadows, 'Companion', {
    get: BoxShadows$Companion_getInstance
  });
  package$properties.BoxShadows = BoxShadows;
  package$properties.boxShadow_x2br9$ = boxShadow;
  package$properties.boxShadowInset_x2br9$ = boxShadowInset;
  package$properties.KeyframesBuilder = KeyframesBuilder;
  Object.defineProperty(LineHeight, 'Companion', {
    get: LineHeight$Companion_getInstance
  });
  package$properties.LineHeight = LineHeight;
  package$properties.get_lh_dhrub4$ = get_lh;
  Object.defineProperty(TextDecorationLine, 'initial', {
    get: TextDecorationLine$initial_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'inherit', {
    get: TextDecorationLine$inherit_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'unset', {
    get: TextDecorationLine$unset_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'underline', {
    get: TextDecorationLine$underline_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'overline', {
    get: TextDecorationLine$overline_getInstance
  });
  Object.defineProperty(TextDecorationLine, 'lineThrough', {
    get: TextDecorationLine$lineThrough_getInstance
  });
  package$properties.TextDecorationLine = TextDecorationLine;
  Object.defineProperty(TextDecoration, 'Companion', {
    get: TextDecoration$Companion_getInstance
  });
  package$properties.TextDecoration = TextDecoration;
  Object.defineProperty(TextDecorationStyle, 'initial', {
    get: TextDecorationStyle$initial_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'inherit', {
    get: TextDecorationStyle$inherit_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'unset', {
    get: TextDecorationStyle$unset_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'solid', {
    get: TextDecorationStyle$solid_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'double', {
    get: TextDecorationStyle$double_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'dotted', {
    get: TextDecorationStyle$dotted_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'dashed', {
    get: TextDecorationStyle$dashed_getInstance
  });
  Object.defineProperty(TextDecorationStyle, 'wavy', {
    get: TextDecorationStyle$wavy_getInstance
  });
  package$properties.TextDecorationStyle = TextDecorationStyle;
  package$properties.textDecoration_1afs1r$ = textDecoration;
  package$properties.Time = Time;
  package$properties.get_s_rcaex3$ = get_s;
  package$properties.get_ms_rcaex3$ = get_ms;
  Object.defineProperty(Timing, 'Companion', {
    get: Timing$Companion_getInstance
  });
  package$properties.Timing = Timing;
  package$properties.cubicBezier_6y0v78$ = cubicBezier;
  Object.defineProperty(TransitionDirection, 'initial', {
    get: TransitionDirection$initial_getInstance
  });
  Object.defineProperty(TransitionDirection, 'inherit', {
    get: TransitionDirection$inherit_getInstance
  });
  Object.defineProperty(TransitionDirection, 'unset', {
    get: TransitionDirection$unset_getInstance
  });
  Object.defineProperty(TransitionDirection, 'start', {
    get: TransitionDirection$start_getInstance
  });
  Object.defineProperty(TransitionDirection, 'end', {
    get: TransitionDirection$end_getInstance
  });
  package$properties.TransitionDirection = TransitionDirection;
  package$properties.steps_jiw9ar$ = steps;
  package$properties.cubicBezier_28142c$ = cubicBezier_0;
  package$properties.Angle = Angle;
  package$properties.get_deg_rcaex3$ = get_deg;
  package$properties.get_grad_rcaex3$ = get_grad;
  package$properties.get_rad_rcaex3$ = get_rad;
  package$properties.get_turn_rcaex3$ = get_turn;
  package$properties.Transform = Transform;
  Object.defineProperty(Transforms, 'Companion', {
    get: Transforms$Companion_getInstance
  });
  package$properties.Transforms = Transforms;
  package$properties.transform_nr0xo9$ = transform;
  package$properties.add_3pxtuf$ = add;
  package$properties.matrix_26r1yf$ = matrix;
  package$properties.matrix3d_r2sber$ = matrix3d;
  package$properties.translate_z52cu5$ = translate;
  package$properties.translateX_9xytsg$ = translateX;
  package$properties.translateY_9xytsg$ = translateY;
  package$properties.translate3d_enzlqi$ = translate3d;
  package$properties.translateZ_9xytsg$ = translateZ;
  package$properties.scale_3hwxf5$ = scale;
  package$properties.scale_v9xwwp$ = scale_0;
  package$properties.scaleX_v9xwwp$ = scaleX;
  package$properties.scaleY_v9xwwp$ = scaleY;
  package$properties.scale3d_w2wji3$ = scale3d;
  package$properties.scaleZ_v9xwwp$ = scaleZ;
  package$properties.rotate_ycsprd$ = rotate;
  package$properties.rotate3d_wdrabv$ = rotate3d;
  package$properties.rotateX_ycsprd$ = rotateX;
  package$properties.rotateY_ycsprd$ = rotateY;
  package$properties.rotateZ_ycsprd$ = rotateZ;
  package$properties.skew_6n0u8t$ = skew;
  package$properties.skewX_ycsprd$ = skewX;
  package$properties.skewY_ycsprd$ = skewY;
  package$properties.perspective_9xytsg$ = perspective;
  package$properties.Transition = Transition;
  Object.defineProperty(Transitions, 'Companion', {
    get: Transitions$Companion_getInstance
  });
  package$properties.Transitions = Transitions;
  package$properties.transition_nv0p8h$ = transition;
  package$properties.transition_7aapbl$ = transition_0;
  package$properties.delayUnhover_f0wpgr$ = delayUnhover;
  CSSBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  CSSBuilder.prototype.rule_xk38i9$ = RuleContainer.prototype.rule_xk38i9$;
  KeyframesBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  KeyframesBuilder.prototype.rule_xk38i9$ = RuleContainer.prototype.rule_xk38i9$;
  hyphenize = memoizeString(hyphenize$lambda);
  ZERO = '0';
  Kotlin.defineModule('kotlin-css-js', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=kotlin-css-js.js.map
