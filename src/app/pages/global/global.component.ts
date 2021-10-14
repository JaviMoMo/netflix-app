import { NetflixModel } from './models/netflix-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public netflixmodel: NetflixModel;

  constructor() {
    this.netflixmodel = {
      nav: {
        logo: {
          src: '../../../../assets/logo.png',
          alt: 'logo Warner',
        },
        title: 'Warner Live',
        home: 'Inicio',
        search: 'buscar',
      },
      hero: {
        title: 'Los 5 más populares hoy',
        imgGallery: [
          {
            src: '../../../../assets/1.png',
            alt: '1',
          },
          {
            src: '../../../../assets/2.png',
            alt: '2',
          },
          {
            src: '../../../../assets/3.png',
            alt: '3',
          },
          {
            src: '../../../../assets/4.png',
            alt: '4',
          },
          {
            src: '../../../../assets/5.png',
            alt: '5',
          },
        ],
      },
      films: {
        title: 'Comedias',
        imgGallery: [
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABarCjADPjqhXPM6O8lSRydNt_5u5MJpzs7HhqTNCl2Sz93xhJ35PUuaGqyjHfCaSYrJrecvoQ-gJzTfsyboW3gdN_6k.webp?r=d87',
            alt: '1',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHq7eKsEPGtZKmobH5e_sbtvbiv9y0RvANAm12skeGdvIEcUQlTQWE5gX5pOOhkk1D6TvA7eyrqNyzRokaWGHuXFKA.webp?r=199',
            alt: '2',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXiMmlQybw8_HUqZGSlqvnWNOgeYWtKmvdhctTAn7eFElHSIi7wPqJ1z4xzuW4jpHYf5WyS3Mw0kdXF0AaRMHnj2uIg.webp?r=003',
            alt: '3',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4TCDN-Pa90juAi48dqj4-1DccR7JzwE8CjDdzbqLcbq44AlBJsF1WCM8If39XTXCWRfqI8JMx7CTIguzP64qBbzW8.webp?r=043',
            alt: '4',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUuMNLYtXwuwR0CRU6mIgjaCcD_rh3qL8XWCp0Q-EFfTctwsXLzOMYPjha_qUWqaC0mk-SaNEaPa9fjwEh3Urm5UOJA.webp?r=f0d',
            alt: '5',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVdWAdeiVvkGFqCkxEe1lCSUtgFkSvUKtc4oKmJ24aezB0sUE2m2qd8WUY_3QyPS2xKKTpnjpj8CiW4TJe-IYtH9k0c.webp?r=da9',
            alt: '6',
          },
        ],
      },
      series: {
        title: 'las series más vistas',
        imgGallery: [
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXb7_20hb5W5K8O_jQFk5BRkv4lsHzAxia2_YDfVburTu_c-gXLpNQUEe5gYrSYSs3MHfAHUhMkNzG3CJYtlSO9HgmpYrITsKfXFT9P8zTc7llHA7kwy497yZsTMi8LfzEsj2_VPbEiGk7RF9LNg-SDcmTIoW3usHQJr8_-ccILzMHF-igAySz4.jpg?r=443',
            alt: '1',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSmUkMyx4Ol-NM1n_no0USonP6FhvPhUMFvzNULmARzjA3utL1Dg9MaLHdeIVJqadsJNM8MCPa6bEhMxmebkJylFl9KljkjkoI1LJVHxrkEFn918TCti_myaKMYMzTzS3ndDx8PfAq-PgOqmZKb1yV_r2XntiCT10p7BEZ3AeQBFceyunOnOwOk.jpg?r=09e',
            alt: '2',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeXP919Y5d3ou8mYMIZmpz8vOIUZ6WiogI7_EQzE_CzuAXyHQoDx5G0P5lHePL1iicmUY5kDLJtWkomfZuB8-XT7OOo.webp?r=a5b',
            alt: '3',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa75SWJRCJgCE1WA8KcCFfKEO9IfTZhQ4c3PT1IPVrtbfCFDH7Sy7XdBOU8Y4w_YoDxFiFkZTrlz06Rid3wOUDJy49NtocDBMjD4KOBriozCrJTfNV-5_6LO204U.jpg?r=c7c',
            alt: '4',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSxRamhoTbIiLWc7dPXCyfa6cX935pXq6BH8OEShkFyo8LLcOnX7NXbZCI2_iZiBn-Kf1cpYGD5YTnbGWBhMRdR9vm2f_l5RHVQcEa_2miY6Jm3cfUOL-M95HXYqRfT6zPmElGNRgaVxo14xB3pU0cI9JzCt0w.jpg?r=1eb',
            alt: '5',
          },
          {
            src: 'https://occ-0-3281-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d',
            alt: '6',
          },
        ],
      },
    };
  }

  ngOnInit(): void {}
}
