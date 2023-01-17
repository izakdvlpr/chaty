/* eslint-disable no-console */

import { Console } from 'console';

import {
  grey,
  white,
  magenta,
  cyan,
  red,
  yellow,
  blueBright,
  green,
} from 'chalk';

const makeString = (...strings: string[]): string =>
  strings.filter(Boolean).join(' ');

const figures: Record<string, string> = {
  pointerSmall: '›',
  info: 'ℹ',
  tick: '✔',
  cross: '✖',
  warning: '⚠',
  circle: '◯',
};

export interface ILoggerOptions {
  scope: string;
  language?: string;
}

export class Logger extends Console {
  public scope: string;

  public language?: string;

  private production: boolean = process.env.NODE_ENV === 'production';

  constructor(options: ILoggerOptions) {
    super({
      stdout: process.stdout,
      stderr: process.stderr,
    });

    this.scope = options.scope;
    this.language = options.language || 'en-US';
  }

  get timestamp(): string {
    const date = new Date();

    return `${date.toLocaleDateString(this.language)} ${date.toLocaleTimeString(
      this.language,
      {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      },
    )}`;
  }

  get logBase(): string[] {
    return [
      grey(`[${this.timestamp}]`),
      grey(`[${process.pid}]`),
      magenta(`[${this.scope}]`),
      white(figures.pointerSmall),
    ];
  }

  info(message: string): void {
    if (this.production) return console.log(message);

    return this.log(
      makeString(...this.logBase, cyan(`${figures.info} info`), white(message)),
    );
  }

  error(message: string, error?: any | null): void {
    if (this.production) return console.log(message, error);

    return this.log(
      makeString(
        ...this.logBase,
        red(`${figures.cross} error`),
        white(message),
        error && `=> ${error}`,
      ),
    );
  }

  warn(message: string): void {
    if (this.production) return console.log(message);

    return this.log(
      makeString(
        ...this.logBase,
        yellow(`${figures.warning} warn`),
        white(message),
      ),
    );
  }

  debug(message: string): void {
    if (this.production) return console.log(message);

    return this.log(
      makeString(
        ...this.logBase,
        blueBright(`${figures.circle} debug`),
        white(message),
      ),
    );
  }

  success(message: string): void {
    if (this.production) return console.log(message);

    return this.log(
      makeString(
        ...this.logBase,
        green(`${figures.tick} success`),
        white(message),
      ),
    );
  }
}
