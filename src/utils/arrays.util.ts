export default class Arrays {
  public static range = (n: number) => [...Array(n).keys()];
  public static random = (max: number): number =>
    Math.floor(Math.random() * max);

  public static chunks<T>(rows: T[], size: number): T[][] {
    const holder = [];
    while (rows.length) {
      holder.push(rows.splice(0, size));
    }
    return holder;
  }
}
