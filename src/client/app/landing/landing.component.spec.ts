import { Component } from '@angular/core';
import {
    async,
    TestBed
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { LandingModule } from './landing.module';

export function main() {
    describe('Landing component', () => {
        // Setting module for testing
        // Disable old forms

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent],
                imports: [LandingModule, RouterTestingModule]
            });
        });

        it('should work',
            async(() => {
                TestBed
                    .compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        let landingDOMEl = fixture.debugElement.children[0].nativeElement;

                        expect(landingDOMEl
                            .querySelectorAll('.navbar-collapse')[0]
                            .querySelectorAll('a')[0].textContent
                        ).toEqual('Pricing');
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<sd-landing></sd-landing>'
})
class TestComponent { }
