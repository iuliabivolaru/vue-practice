import { Controller } from 'tsoa';


export class SuperController extends Controller {

    setCreatedHTTPStatus(): void {
        this.setStatus(201);
    }

    setNoContentHTTPStatus(): void {
        this.setStatus(204);
    }

}
export default new SuperController();