import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PricePipe } from '../../pipes/price.pipe';
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        RatingModule,
        FormsModule,
        ButtonModule,
        ConfirmPopupModule,
        PricePipe,
        TruncateNamePipe,
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    providers: [ConfirmationService],
})
export class ProductComponent {
    constructor(private confirmationService: ConfirmationService) {}

    @ViewChild('deleteButton') deleteButton: any;

    /* The ! means that this component will always assume that on initialization the data item (product) will be provided */
    @Input() product!: Product;

    @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

    editProduct() {
        this.edit.emit(this.product);
    }

    confirmDelete() {
        this.confirmationService.confirm({
            target: this.deleteButton.nativeElement,
            message: 'Are you sure you want to delete this product?',
            accept: () => {
                this.deleteProduct();
            },
        });
    }

    deleteProduct() {
        this.delete.emit(this.product);
    }

    ngOnInit() {}
}

/*
    *@Input()
    It allows a component to receive data via its selector attribute closed with []
*/
/*
    *@Output()
    This decorator works similarly to @Input(), but it allows to output (emit) values outside a component
    It implements an EventEmmiter<Event> which emits events (data) of a specific type which is necessary to instantiate first to be manipulated
    At the selector attribute, the output is necessary to be closed with ()
*/

/*
    *pipes
    Pipes in Angular allow to declare a "pipe" to pass value through of it.

    `ng generate pipe folder-name/file-name`

    A pipe is a Handler function that receives data to manipulate it within the HTML file itself, it can manipulate dates, symbols

    | -> Pipe operator

*/
