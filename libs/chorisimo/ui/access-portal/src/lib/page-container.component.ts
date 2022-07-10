import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, from, map, Observable, startWith, switchMap } from 'rxjs';
import { ACCESS_PORTAL_SEGMENTS, AccessPortalSegment } from './access-portal-routing.module';
import { ChorisimoAccessPortalConfig } from './access-portal.config';

@Component({
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChorisimoPageContainerComponent implements OnInit {

  public readonly activatedSegment$: Observable<AccessPortalSegment>;

  constructor(public readonly config: ChorisimoAccessPortalConfig,
              private readonly router: Router,
  ) {
    this.activatedSegment$ = router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(event => event.urlAfterRedirects),
        startWith(router.url),
        switchMap(url => from(url.split('/'))),
        filter((segment): segment is AccessPortalSegment => ACCESS_PORTAL_SEGMENTS.includes(segment as AccessPortalSegment)),
      );
  }

  ngOnInit(): void {
  }
}
