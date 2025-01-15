export {}

/**
 * @description Allow the use of `*.scss` files as modules
 */
declare module '*module.scss' {
  const styles: Record<string, string>
  export default styles
}
