import {AfterViewInit, Component, ViewChild, Input, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from "../data.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";


export interface Media {
  show_id: string;
  type: string;
  title: string;
  director: string;
  cast: string;
  country: string;
  date_added: string;
  release_year: string;
  rating: string;
  duration: string;
  listed_in: string;
  description: string;
}



@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['show_id','type','title','director','cast','country','date_added',
    'release_year','rating','duration','listed_in','description'];

  ngOnInit() {

  }
  constructor(private dataService: DataService, private _liveAnnouncer: LiveAnnouncer) {}



  clickedRows = new Set<any>();

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit():  void {
    this.fetchData()


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  dataSource: any;
  fetchData(){
    this.dataService.getAllData().subscribe(data =>{
      this.NETFLIX_DATA = data
      console.log(this.NETFLIX_DATA)
      this.dataSource = new MatTableDataSource<any>(this.NETFLIX_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  NETFLIX_DATA: Media[] = [];


 announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

