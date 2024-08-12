import { Controller, Post, Get, Param, Body, Res, Req, Redirect } from '@nestjs/common';
import { URLService } from './urls.service';
import { CreateURLDto } from './dto/create-url.dto';
import { Request, Response } from 'express';

@Controller('urls')
export class URLController {
  constructor(private readonly urlService: URLService) {}

  @Post('shorten')
  async shorten(@Body() createURLDto: CreateURLDto, @Req() req: Request) {
    // @ts-ignore
    const userId = req.user?.id;
    return this.urlService.shortenURL(createURLDto, userId);
  }

  @Get(':short')
  @Redirect()
  async redirect(@Param('short') short: string, @Res() res: Response) {
    const url = await this.urlService.getUrl(short);
    this.urlService.trackClick(short);
    return { url: url.original };
  }
}
