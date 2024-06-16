import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-home' /* Component name (for tagging at html files) */,
    standalone: true,
    imports: [
        CommonModule,
        PaginatorModule,
        ProductComponent,
        ButtonModule,
        EditPopupComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    constructor(private productsService: ProductsService) {}

    @ViewChild('paginator') paginator: Paginator | undefined

    products: Product[] = [];

    totalRecords: number = 0;
    rows: number = 5;

    displayEditPopUp: boolean = false;
    displayAddPopUp: boolean = false;

    toggleEditPopUp(product: Product) {
        this.selectedProduct = product;
        this.displayEditPopUp = true;
    }

    toggleDeletePopUp(product: Product) {
        if(!product.id){
            return;
        }
        this.deleteProduct(product.id);
    }

    toggleAddPopUp() {
        this.displayAddPopUp = true;
    }

    selectedProduct: Product = {
        id: 0,
        name: '',
        image: '',
        price: '',
        rating: 0,
    };

    onConfirmEdit(product: Product) {
        if (!this.selectedProduct.id) {
            return;
        }
        this.editProduct(product, this.selectedProduct.id);
        this.displayEditPopUp = false;
    }

    onConfirmAdd(product: Product) {
        this.addProduct(product);
        this.displayAddPopUp = true;
    }

    // With @Output
    onProductOutput(product: Product) {
        console.log(product, 'Output with @Output decorator');
    }

    onPageChange(event: any) {
        this.fetchProducts(event.page, event.rows);
    }

    resetPaginator(){
        this.paginator?.changePage(0);
    }

    // Get/Read
    fetchProducts(page: number, perPage: number) {
        this.productsService
            .getProducts('http://localhost:3000/clothes', {
                page,
                perPage,
            })
            .subscribe({
                next: (data: Products) => {
                    this.products = data.items;
                    this.totalRecords = data.total;
                    console.log(this.products)
                },
                error: (error) => {
                    console.log(error);
                },
            });
    }

    // Update
    editProduct(product: Product, id: number) {
        this.productsService
            .editProduct(`http://localhost:3000/clothes/${id}`, product)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.fetchProducts(0, this.rows);
                    this.resetPaginator();
                },
                error: (error) => {
                    console.log(error); /* 400-500 codes are considered errors */
                },
            });
    }

    // Create
    addProduct(product: Product) {
        this.productsService
            //HandlerProductID
            .addProduct(`http://localhost:3000/clothes/`, product)
            .subscribe({
                next: (data) => {
                    //Handler
                    console.log(data);
                    this.fetchProducts(0, this.rows);
                    this.resetPaginator();
                },
                error: (error) => {
                    console.log(error);
                },
            });
    }

    // Delete
    deleteProduct(id: number) {
        this.productsService
            .deleteProduct(`http://localhost:3000/clothes/${id}`)
            .subscribe(
                {
                    next: (data) => {
                        console.log(data);
                        this.fetchProducts(0, this.rows);
                        this.resetPaginator();
                    },
                    error: (error) => {
                        console.log(error);
                    },
                }
        );
    }

    ngOnInit() {
        this.fetchProducts(0, this.rows);
        setTimeout(() => {
            console.log(this.products)
        }, 5000)
    }
}

/*
    *constructor
    It's used to inject dependencias, such as services, before the component is initialized. Moreover, it can be used for initialization logic (like initializing properties), but it's generally recommended to move all initialization logic to lifecycle hooks like ngOnInit
    In this case, it allows to declare the services that will be injected before the component is initialized as well as anything that takes place before the initialization of the component and during the construction step
*/

/*
  *ngOnInit()
  This function is called when a component is initialized
*/

/*
    *CommonModule
    It contains all the common functionality which is used by angular by default
*/
