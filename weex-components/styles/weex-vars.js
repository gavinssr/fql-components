/**
 * Weex样式变量配置文件
 * 此文件是 CSS/vars.css 的完整映射，保持相同的结构和顺序
 * 由于Weex不支持CSS变量，使用JS对象导出供组件使用
 */

// ============================================
// Figma Styles - 基础样式变量
// ============================================

// Radius - 圆角
export const radius = {
  xlarge: 12,
  large: 8,
  default: 4,
  small: 2
};

// Fonts - 字体排版
export const typography = {
  // Head 18 - 标题
  head18Head: {
    fontFamily: 'PingFangSc-Medium',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Head 16 - 副标题
  head16Sub: {
    fontFamily: 'PingFangSc-Medium',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Body 10 - 最小正文
  body10Min: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 10,
    lineHeight: 11,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Body 10 - 加粗正文
  body10Strong: {
    fontFamily: 'PingFangSc-Medium',
    fontSize: 10,
    lineHeight: 11,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Body 12 - 基础正文
  body12Base: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Body 12 - 加粗正文
  body12Strong: {
    fontFamily: 'PingFangSc-Medium',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Body 14 - 进阶正文
  body14Further: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Body 16 - 增强正文
  body16Increase: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Link 12 - 基础链接
  link12Base: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Link 14 - 进阶链接
  link14Further: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Link 16 - 增强链接
  link16Increase: {
    fontFamily: 'PingFangSc-Regular',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    fontStyle: 'normal'
  },
  // Display Number 44 - 超大数字
  displayNumber44Xxlarge: {
    fontFamily: 'Roboto-Medium',
    fontSize: 44,
    lineHeight: 46,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Display Number 36 - 特大数字
  displayNumber36Xlarge: {
    fontFamily: 'Roboto-Medium',
    fontSize: 36,
    lineHeight: 38,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Display Number 26 - 大数字
  displayNumber26Large: {
    fontFamily: 'Roboto-Medium',
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Display Number 22 - 普通数字
  displayNumber22Normal: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  // Display Chinese 26 - 大中文
  displayChinese26Large: {
    fontFamily: 'PingFangSc-Medium',
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '500',
    fontStyle: 'normal'
  }
};

// Effects - 阴影效果
// 注意：Weex对box-shadow支持有限，这里保留定义供Web端使用
export const shadow = {
  downHigh: '0px 4px 10px -2px rgba(0, 0, 0, 0.04), 0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 14px 24px 2px rgba(0, 0, 0, 0.1)',
  downNormal: '0px 2px 24px -4px rgba(0, 0, 0, 0.02), 0px 4px 26px 0px rgba(0, 0, 0, 0.04), 0px 8px 30px 2px rgba(0, 0, 0, 0.08)',
  downLow: '0px 1px 26px 0px rgba(0, 0, 0, 0.01), 0px 2px 30px 2px rgba(0, 0, 0, 0.02), 0px 4px 34px 2px rgba(0, 0, 0, 0.04)',
  upHigh: '0px -4px 10px -2px rgba(0, 0, 0, 0.04), 0px -8px 16px 0px rgba(0, 0, 0, 0.08), 0px -14px 24px 2px rgba(0, 0, 0, 0.1)',
  upNormal: '0px -2px 24px -4px rgba(0, 0, 0, 0.02), 0px -4px 26px 0px rgba(0, 0, 0, 0.04), 0px -8px 30px 2px rgba(0, 0, 0, 0.08)',
  upLow: '0px -1px 26px 0px rgba(0, 0, 0, 0.01), 0px -2px 30px 2px rgba(0, 0, 0, 0.02), 0px -4px 34px 2px rgba(0, 0, 0, 0.04)',
  leftHigh: '-4px 0px 10px -2px rgba(0, 0, 0, 0.04), -8px 0px 16px 0px rgba(0, 0, 0, 0.08), -14px 0px 24px 2px rgba(0, 0, 0, 0.1)',
  leftNormal: '-2px 0px 24px -4px rgba(0, 0, 0, 0.02), -4px 0px 26px 0px rgba(0, 0, 0, 0.04), -8px 0px 30px 2px rgba(0, 0, 0, 0.08)',
  leftLow: '-1px 0px 26px 0px rgba(0, 0, 0, 0.01), -2px 0px 30px 2px rgba(0, 0, 0, 0.02), -4px 0px 34px 2px rgba(0, 0, 0, 0.04)',
  rightHigh: '4px 0px 10px -2px rgba(0, 0, 0, 0.04), 8px 0px 16px 0px rgba(0, 0, 0, 0.08), 14px 0px 24px 2px rgba(0, 0, 0, 0.1)',
  rightNormal: '2px 0px 24px -4px rgba(0, 0, 0, 0.02), 4px 0px 26px 0px rgba(0, 0, 0, 0.04), 8px 0px 30px 2px rgba(0, 0, 0, 0.08)',
  rightLow: '1px 0px 26px 0px rgba(0, 0, 0, 0.01), 2px 0px 30px 2px rgba(0, 0, 0, 0.02), 4px 0px 34px 2px rgba(0, 0, 0, 0.04)',
  divider: 'inset 0px -0.5px 0px 0px rgba(237, 237, 238, 1)'
};

// ============================================
// 系统级颜色变量（System Level Colors）
// 用于组件和界面的语义化颜色
// ============================================

// 参考级颜色（Reference Level Colors）- 基础色板
// 必须先定义，因为系统级颜色会引用这些值
export const refColor = {
  // 品牌蓝色 Brand Blue
  brandBlue1: '#f2f6ff',
  brandBlue2: '#e5edff',
  brandBlue3: '#ccdbff',
  brandBlue4: '#b2caff',
  brandBlue5: '#99b8ff',
  brandBlue6: '#80a6ff',
  brandBlue7: '#6694ff',
  brandBlue8Base: '#4d83ff',
  brandBlue9: '#3371ff',
  // 品牌蓝色透明度变体
  brandBlue1A10: '#fefeff',
  brandBlue1A30: '#fbfcff',
  brandBlue1A50: '#f8faff',
  brandBlue1A70: '#f5f8ff',

  // 品牌粉色 Brand Pink
  brandPink1: '#fff2f6',
  brandPink2: '#ffe5ed',
  brandPink3: '#ffccdb',
  brandPink4: '#ffb2c9',
  brandPink5: '#ff99b7',
  brandPink6: '#ff80a6',
  brandPink7: '#ff6694',
  brandPink8Base: '#ff4d82',
  brandPink9: '#ff3371',
  // 品牌粉色透明度变体
  brandPink1A10: '#fffefe',
  brandPink1A30: '#fffbfc',
  brandPink1A50: '#fff8fa',
  brandPink1A70: '#fff6f9',

  // 功能红色 Functional Red
  functionalRed1: '#ffd9dc',
  functionalRed2: '#ffccd0',
  functionalRed3: '#ffb2b9',
  functionalRed4: '#ffa6ad',
  functionalRed5: '#ff99a2',
  functionalRed6: '#f27984',
  functionalRed7: '#e55c68',
  functionalRed8Base: '#e53948',
  functionalRed9: '#d92c3a',
  // 功能红色透明度变体
  functionalRed1A10: '#fffbfb',
  functionalRed1A30: '#fff4f5',
  functionalRed1A50: '#ffeced',
  functionalRed1A70: '#fee4e6',

  // 功能橙色 Functional Orange
  functionalOrange1: '#ffecd9',
  functionalOrange2: '#ffe1bf',
  functionalOrange3: '#fed4a5',
  functionalOrange4: '#ffc78c',
  functionalOrange5: '#ffc180',
  functionalOrange6: '#ffb566',
  functionalOrange7: '#ffa94d',
  functionalOrange8Base: '#ff9d33',
  functionalOrange9: '#ff8a0e',
  // 功能橙色透明度变体
  functionalOrange1A10: '#fffdfb',
  functionalOrange1A30: '#fff9f4',
  functionalOrange1A50: '#fff5ec',
  functionalOrange1A70: '#fff1e3',

  // 功能绿色 Functional Green
  functionalGreen1: '#cef2e0',
  functionalGreen2: '#c2f2d9',
  functionalGreen3: '#ace5c8',
  functionalGreen4: '#8dd9b2',
  functionalGreen5: '#82d9ac',
  functionalGreen6: '#52cc8d',
  functionalGreen7: '#3fc27f',
  functionalGreen8Base: '#26bf71',
  functionalGreen9: '#0cba60',
  // 功能绿色透明度变体
  functionalGreen1A10: '#fafefc',
  functionalGreen1A30: '#f0fbf6',
  functionalGreen1A50: '#e6f8ee',
  functionalGreen1A70: '#ddf6e9',

  // 中性灰色 Neutral Gray
  neutralGray1: '#050c1c',
  neutralGray2: '#1e2533',
  neutralGray3: '#81858d',
  neutralGray4: '#9c9ea4',
  neutralGray5: '#b4b6bc',
  neutralGray6: '#f3f4f5',
  // 中性灰色透明度变体
  neutralGray2A60: '#787c85',
  neutralGray2A40: '#a4a8ac',
  neutralGray2A20: '#d2d3d6',

  // 中性白色 Neutral White
  neutralWhite1: '#ffffff',
  neutralWhite2: 'rgba(255, 255, 255, 0.8)',
  neutralWhite3: 'rgba(255, 255, 255, 0.6)',
  neutralWhite4: 'rgba(255, 255, 255, 0.4)',
  neutralWhite5: 'rgba(255, 255, 255, 0.3)',
  neutralWhite6: 'rgba(255, 255, 255, 0.2)'
};

// 系统级颜色 - 语义化颜色
export const sysColor = {
  // 主色系 Primary
  primaryDefault: refColor.brandBlue8Base,
  primaryHover: refColor.brandBlue7,
  primaryActive: refColor.brandBlue9,
  primaryInactive: refColor.brandBlue4,
  primaryDisable: refColor.neutralGray6,

  // 营销色系 Marketing
  marketingDefault: refColor.brandPink8Base,
  marketingHover: refColor.brandPink7,
  marketingActive: refColor.brandPink9,
  marketingInactive: refColor.brandPink4,
  marketingDisable: refColor.neutralGray6,

  // 错误色系 Error
  errorDefault: refColor.functionalRed8Base,
  errorHover: refColor.functionalRed7,
  errorActive: refColor.functionalRed9,
  errorInactive: refColor.functionalRed4,
  errorDisable: refColor.neutralGray6,

  // 警告色系 Caution
  cautionDefault: refColor.functionalOrange8Base,
  cautionHover: refColor.functionalOrange7,
  cautionActive: refColor.functionalOrange9,
  cautionInactive: refColor.functionalOrange4,
  cautionDisable: refColor.neutralGray6,

  // 成功色系 Success
  successDefault: refColor.functionalGreen8Base,
  successHover: refColor.functionalGreen7,
  successActive: refColor.functionalGreen9,
  successInactive: refColor.functionalGreen4,
  successDisable: refColor.neutralGray6,

  // 危险色系 Dangerous
  dangerousDefault: refColor.functionalRed8Base,
  dangerousHover: refColor.functionalRed7,
  dangerousActive: refColor.functionalRed9,
  dangerousInactive: refColor.functionalRed4,
  dangerousDisable: refColor.neutralGray6,

  // 文本颜色 Text Colors
  // 黑色文字
  textBlackH1: refColor.neutralGray2,
  textBlackH2: refColor.neutralGray2A60,
  textBlackH3: refColor.neutralGray2A40,
  textBlackH4: refColor.neutralGray2A20,
  // 白色文字
  textWhiteH1: refColor.neutralWhite1,
  textWhiteH2: refColor.neutralWhite3,
  textWhiteH3: refColor.neutralWhite4,

  // 页面背景 Page Background
  pageBackgroundFill: '#f5f7fa',
  pageBackgroundMask: 'rgba(0, 0, 0, 0.7)',

  // 分割线 Divider
  wireDividerDark: '#ededee',
  wireDividerLight: refColor.neutralWhite1,

  // 图标颜色 Icon Colors
  iconfontWhite: refColor.neutralWhite1,
  iconfontBlack: refColor.neutralGray2,

  // 第三方颜色 External Colors
  externalAlipay: '#049fff',
  externalWechat: '#51d768',

  // 数据可视化 Data Visualization
  dataUp: refColor.functionalRed8Base,
  dataDown: refColor.functionalGreen8Base,

  // 基础色 Base Colors
  black: refColor.neutralGray1,
  white: refColor.neutralWhite1
};

// 导出默认配置对象
export default {
  radius,
  typography,
  shadow,
  sysColor,
  refColor
};
