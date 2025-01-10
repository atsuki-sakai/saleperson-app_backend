
export class DifyDrror extends Error {
    public code?: string;
    public status?: number;
  
    constructor(message: string, code?: string, status?: number) {
      super(message);
      this.name = 'DifyDrror';
      this.code = code;
      this.status = status;
      Object.setPrototypeOf(this, DifyDrror.prototype);
    }
  }
  