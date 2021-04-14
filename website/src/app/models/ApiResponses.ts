export class ApiListingResponse
{
  items: Array<any>;
  page: number;
  size: number;
  total: number;

  constructor(items, page, size, total)
  {
    this.items = items;
    this.page = page;
    this.size = size;
    this.total = total;
  }
}
