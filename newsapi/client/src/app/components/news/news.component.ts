import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES, Country, NEWS_CATEGORIES } from 'src/app/models';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  constructor(private fb: FormBuilder, private newsSvc: NewsService) {}

  form!: FormGroup;
  countries: Country[] = COUNTRIES;
	categories = NEWS_CATEGORIES;
  comment: string | undefined = "";

  //Initialize a FormGroup with validation
  ngOnInit(): void {
    this.form = this.fb.group({
      code: this.fb.control("sg", [ Validators.required ]),
      category: this.fb.control("general", [ Validators.required ]),
      pageSize: this.fb.control("10", [ Validators.required ])
    })
  }

  //Triggered by onChange in selected code
  //Find the first country whose code matched the selected code
  onCountryChange(selected: any) {
		const changedCode = selected.target.value;
		const country = this.countries.find(c => c.code == changedCode);
		this.comment = `${country?.code} news`;
	}

  //Retrieve form value and pass as param into getNews
  showSearch(): void {
    const code = this.form.value.code;
    const category = this.form.value.category;
    const pageSize = this.form.value.pageSize;
    console.info(">>>User Input: ", code, category, pageSize);
    this.newsSvc.getNews(code, category, pageSize);
  }

}
