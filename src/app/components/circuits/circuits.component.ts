import { Component, OnInit } from '@angular/core';
import { CircuitServiceService } from '../../services/circuit-service/circuit-service.service';

export interface ICircuit {
  Location: {
    country: string;
    lat: string;
    locality: string;
    long: string;
  };
  circuitId: number | string;
  circuitName: string;
  url: string;
}
@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {
  circuitData: ICircuit[] = [];
  constructor(private circuitService: CircuitServiceService) {}

  ngOnInit(): void {
    this.circuitService.getCircuits().subscribe((data: any) => {
      this.circuitData = data.MRData.CircuitTable.Circuits;
      console.log({ data: this.circuitData });
    });
  }
}
