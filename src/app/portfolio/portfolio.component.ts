import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {

  portfolio: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  	this.getPortfolio();
  }

  getPortfolio(): void {
    this.projectService.getPortfolio()
    .subscribe(portfolio => this.portfolio = portfolio);
  }

}
