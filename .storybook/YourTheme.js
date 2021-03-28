//Storybook Themingのインポート
import { create } from "@storybook/theming";

//ロゴ用の画像をインポート
import brandLogo from "../src/stories/assets/img/brandLogo.svg";

export default create({
  //ベースにするデフォルトテーマ["light","dark"]
  base: "light",

  //不明
  colorPrimary: "black",
  //左カラムメニューの選択色
  colorSecondary: "#ff7675",

  // UI
  //背景色
  appBg: "#efefef",
  //コンテンツ部分の背景色
  appContentBg: "white",
  //ボーダー色
  appBorderColor: "white",
  //角丸(ツールバーのメニュー選択時の小さいウィンドウ)
  appBorderRadius: 4,

  // Typography
  //フォント
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  //文字色
  textColor: "black",
  //不明
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  //ツールバーの文字色
  barTextColor: "#636e72",
  //ツールバーの選択されたメニューの文字色
  barSelectedColor: "#ff7675",
  //ツールバーの背景色
  barBg: "#dfe6e9",

  // Form colors
  //inputの背景色
  inputBg: "white",
  //inputのボーダー色
  inputBorder: "#dfe6e9",
  //input内の文字色
  inputTextColor: "#636e72",
  //inputの角丸
  inputBorderRadius: 8,

  //ロゴのalt
  brandTitle: "Spooky",
  //ロゴのリンクURL
  brandUrl: "/",
  //ロゴ画像
  brandImage: brandLogo,
});
